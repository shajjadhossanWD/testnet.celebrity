import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "./EditNft.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import { ContentState, convertToRaw, EditorState } from "draft-js";
import htmlToDraft from 'html-to-draftjs';
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";

const EditDraftNft = () => {
    const [Nfts, setNfts] = React.useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const [firstValue, setFirstValue] = useState(() => EditorState.createEmpty());
    const stepOne = draftToHtml(convertToRaw(firstValue.getCurrentContent()));

    const [secondValue, setSecondValue] = useState(() => EditorState.createEmpty());
    const stepTwo = draftToHtml(convertToRaw(secondValue.getCurrentContent()));

    const [perkNfts, setPerkNfts] = useState(() => EditorState.createEmpty());
    const stepPerkNft = draftToHtml(convertToRaw(perkNfts.getCurrentContent()));

    var newDate = new Date();
    let dd = String(newDate.getDate()).padStart(2, '0');
    let mm = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = newDate.getFullYear();
    let hh = newDate.getHours();
    let min = newDate.getMinutes();
    let ss = newDate.getSeconds();

    if (min < 10) {
        newDate = dd + '/' + mm + '/' + yyyy + '  ' + hh + ':' + 0 + min + ':' + ss;

    } else {
        newDate = dd + '/' + mm + '/' + yyyy + '  ' + hh + ':' + min + ':' + ss;
    }

    useEffect(() => {
        axios.get(`https://backend.celebrity.sg/api/nft/${id}`)
            .then(res => {
                setNfts(res.data.nft);
                const description = res.data.nft.description;
                const briefDetails = res.data.nft.briefDetails;
                const perkNft = res.data.nft.perkNft;
                const blocksFromHtmlPerk = htmlToDraft(perkNft);
                const blocksFromHtml = htmlToDraft(description);
                const blocksFromHtmlTwo = htmlToDraft(briefDetails);
                const { contentBlocks, entityMap } = blocksFromHtml;
                const content = blocksFromHtmlTwo.contentBlocks;
                const entri = blocksFromHtmlTwo.entityMap;
                const content2 = blocksFromHtmlPerk.contentBlocks;
                const entri2 = blocksFromHtmlPerk.entityMap;
                const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
                const contentStateTwo = ContentState.createFromBlockArray(content, entri);
                const contentStatePerk = ContentState.createFromBlockArray(content2, entri2);
                setFirstValue(EditorState.createWithContent(contentState));
                setSecondValue(EditorState.createWithContent(contentStateTwo));
                setPerkNfts(EditorState.createWithContent(contentStatePerk));

                console.log(res.data);
            })
    }, [id])

    // form submit funtion
    const onSubForm = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const price = e.target.price.value;
        const availableNfts = parseInt(e.target.availableNfts.value) + parseInt(Nfts.availableNfts);
        const perkNft = stepPerkNft;
        const description = stepOne;
        const startDate = e.target.startDate.value;
        const startTime = e.target.startTime.value;
        const endTime = e.target.endTime.value;
        const venue = e.target.venue.value;
        const purchaseDate = e.target.purchaseDate.value;
        const briefDetails = stepTwo;
        const type = e.target.type.value;
        const avatar = e.target.avatar.files[0];


        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('availableNfts', availableNfts);
        formData.append('perkNft', perkNft);
        formData.append('description', description);
        formData.append('startDate', startDate)
        formData.append('startTime', startTime)
        formData.append('endTime', endTime)
        formData.append('venue', venue)
        formData.append('purchaseDate', purchaseDate)
        formData.append('briefDetails', briefDetails)
        formData.append('type', type);
        formData.append('date', newDate);
        formData.append('image', avatar);

        axios.put(`https://backend.celebrity.sg/api/nft/update-nft/${Nfts._id}`, formData)
            .then(res => {
                if (res.status === 200) {
                    // alert(res.data.message);
                    swal({
                        title: "Success",
                        text: `${res.data.message}`,
                        icon: "success",
                        button: "OK!",
                        className: "modal_class_success",
                    });
                    setNfts(res.data.nft);
                    navigate("/dashboard/nfts")
                }
            })
            .catch(err => {
                swal({
                    title: "Attention",
                    text: `${err.response.data.message}`,
                    icon: "warning",
                    button: "OK!",
                    className: "modal_class_success",
                });
            })


    };

    const redirectToNftPage = () => {
        navigate("/dashboard/nfts");
    }

    return (
        <div style={{ width: "100%", marginLeft: "0" }}>
            <h4
                style={{
                    fontSize: "1.125rem",
                    marginLeft: "16px",
                    fontWeight: "600",
                    color: "#ecf0f1",
                }}
            >
                Edit Draft
            </h4>
            <div className="edit-nft-card">
                <div className="edit-nft-card-contents">
                    <div className="edit-nft-card-content-one">
                        <img
                            src={Nfts.avatar}
                            style={{ width: "100%", height: "100%" }}
                            alt=""
                        />
                    </div>
                    <div className="edit-nft-card-content-two">
                        <div style={{ backgroundColor: "#272d47", color: "white" }}>
                            <form onSubmit={onSubForm}>
                                <InputGroup
                                    className="mb-3"
                                    style={{ backgroundColor: "#272d47", color: "white" }}
                                >
                                    <Form.Select
                                        aria-label="Default select example"
                                        style={{ backgroundColor: "#272d47", color: "white" }}
                                        name="type"
                                    >
                                        <option>{Nfts.type}</option>
                                        <option value="Celebrity Souvenir NFTs">Celebrity Souvenir NFTs</option>
                                        <option value="Celebrity Meal NFTs">Celebrity Meal NFTs</option>
                                    </Form.Select>
                                </InputGroup>
                                <label className="mb-1">Image of NFT</label>
                                <input
                                    type="file"
                                    className="border w-100 rounded mb-3"
                                    name="avatar"
                                    style={{ backgroundColor: "#272d47", color: "white" }}
                                />
                                <label className="mb-1">Name of NFT</label>
                                <input
                                    type="text"
                                    className="border w-100 rounded mb-3"
                                    name="name"
                                    defaultValue={Nfts.name}
                                    style={{ backgroundColor: "#272d47", color: "white" }}

                                />

                                <label className="mb-1">Price of NFT(SGD)</label>
                                <input
                                    type="text"
                                    className="border w-100 rounded mb-3"
                                    name="price"
                                    defaultValue={Nfts.price}
                                    style={{ backgroundColor: "#272d47", color: "white" }}

                                />

                                <label className="mb-1">Available NFTs</label>
                                <input
                                    type="number"
                                    className="border w-100 rounded mb-3"
                                    name="availableNfts"
                                    defaultValue={Nfts.availableNfts}
                                    style={{ backgroundColor: "#272d47", color: "white" }}

                                />

                                <label className="mb-1">Perks of NFT</label>
                                <Editor
                                editorState={perkNfts}
                                onEditorStateChange={setPerkNfts}
                                wrapperClassName="wrapper-class"
                                editorClassName="editor-class border mt-2 p-2 bg-white text-black"
                                toolbarClassName="toolbar-class text-black"
                                toolbar={{
                                    image: {
                                    urlEnabled: true,
                                    uploadEnabled: true,
                                    alignmentEnabled: true,
                                    uploadCallback: undefined,
                                    previewImage: true,
                                    inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                    alt: { present: false, mandatory: false },
                                    defaultSize: {
                                        height: 'auto',
                                        width: 'auto',
                                    },
                                    fontFamily: {
                                        options: ['sans-serif', 'Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
                                        className: undefined,
                                        component: undefined,
                                        dropdownClassName: undefined,
                                    },
                                    },
                                }}
                                />

                                <label className="mb-2">NFT Details</label>
                    
                                <Editor
                                    editorState={firstValue}
                                    onEditorStateChange={setFirstValue}
                                    wrapperClassName="wrapper-class"
                                    editorClassName="editor-class border mt-2 p-2 bg-white text-black"
                                    toolbarClassName="toolbar-class text-black"
                                    toolbar={{
                                        image: {
                                            urlEnabled: true,
                                            uploadEnabled: true,
                                            alignmentEnabled: true,
                                            uploadCallback: undefined,
                                            previewImage: true,
                                            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                            alt: { present: false, mandatory: false },
                                            defaultSize: {
                                                height: 'auto',
                                                width: 'auto',
                                            },
                                            fontFamily: {
                                                options: ['sans-serif', 'Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
                                                className: undefined,
                                                component: undefined,
                                                dropdownClassName: undefined,
                                            },
                                        },
                                    }}
                                />

                                <label className='mb-1'>Date</label>
                                <InputGroup className="mb-3">

                                    <Form.Control
                                        style={{ backgroundColor: "#272d47", color: 'white' }}
                                        type='date'
                                        name="startDate"
                                        aria-label="Amount (to the nearest dollar)" />

                                </InputGroup>

                                <label className='mb-1'>Start Time</label>
                                <InputGroup className="mb-3">

                                    <Form.Control
                                        style={{ backgroundColor: "#272d47", color: 'white' }}
                                        type='time'
                                        name="startTime"
                                        aria-label="Amount (to the nearest dollar)" />

                                </InputGroup>
                                <label className='mb-1'>End Time</label>
                                <InputGroup className="mb-3">

                                    <Form.Control
                                        style={{ backgroundColor: "#272d47", color: 'white' }}
                                        type='time'
                                        name="endTime"
                                        aria-label="Amount (to the nearest dollar)" />

                                </InputGroup>

                                <label className='mb-1'>Venue</label>
                                <input
                                    type="text"
                                    name="venue"
                                    defaultValue={Nfts.venue}
                                    className="border w-100 rounded mb-3"
                                    style={{ backgroundColor: "#272d47", color: 'white' }}
                                    required
                                />

                                <label className='mb-1'>Purchase Till</label>
                                {/* <input
                                    type="date"
                                    name="purchaseDate"
                                    defaultValue={Nfts.purchaseDate}
                                    className="border w-100 rounded mb-3"
                                    style={{ backgroundColor: "#272d47", color: 'white' }}
                                    required
                                /> */}

                                <InputGroup className="mb-3" style={{textAlign: 'left'}}>

                                    <Form.Control
                                        style={{ backgroundColor: "#272d47", color: 'white' }}
                                        type='date'
                                        name="purchaseDate"
                                        defaultValue={Nfts.purchaseDate}
                                        // onChange={e => setEvent(e.target.value)}
                                        aria-label="Amount (to the nearest dollar)" />

                                </InputGroup>
                                <label className='mb-2 mt-3'>Brief Details of Celebrity</label>
                                <Editor
                                    editorState={secondValue}
                                    onEditorStateChange={setSecondValue}
                                    wrapperClassName="wrapper-class"
                                    editorClassName="editor-class border mt-2 p-2 bg-white text-black"
                                    toolbarClassName="toolbar-class text-black"
                                    toolbar={{
                                        image: {
                                            urlEnabled: true,
                                            uploadEnabled: true,
                                            alignmentEnabled: true,
                                            uploadCallback: undefined,
                                            previewImage: true,
                                            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                            alt: { present: false, mandatory: false },
                                            defaultSize: {
                                                height: 'auto',
                                                width: 'auto',
                                            },
                                            fontFamily: {
                                                options: ['sans-serif', 'Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
                                                className: undefined,
                                                component: undefined,
                                                dropdownClassName: undefined,
                                            },
                                        },
                                    }}
                                />


                                {/* <InputGroup
                  className="mb-3"
                  style={{ backgroundColor: "#272d47", color: "white" }}
                >
                  <InputGroup.Text
                    style={{ backgroundColor: "#272d47", color: "white" }}
                  >
                    Timestamp
                  </InputGroup.Text>
                  <Form.Control
                    aria-describedby="basic-addon1"
                    type="text"
                    value={newDate}
                    style={{ backgroundColor: "#272d47", color: "white" }}
                  />
                </InputGroup> */}
                                <hr />
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        marginTop: "1rem",
                                    }}
                                >
                                    <Button type="button" onClick={redirectToNftPage} className="btn btn-danger me-2 text-uppercase" style={{ backgroundColor: '#dc3545' }}>
                                        CANCEL
                                    </Button>
                                    {/* <Button
                                        style={{ backgroundColor: 'blueviolet' }}
                                        type="submit" className="edit-nft-update-button me-2 text-uppercase">
                                        Draft
                                    </Button> */}
                                    <Button type="submit" className="edit-nft-update-button me-2 text-uppercase bg-primary">
                                        Publish
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditDraftNft;

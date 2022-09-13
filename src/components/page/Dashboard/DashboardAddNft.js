import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import { Link, Typography } from "@mui/material";
import axios from 'axios';
import htmlToDraft from 'html-to-draftjs';
import swal from 'sweetalert';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { TimePicker } from 'antd';
import { Leaderboard } from '@mui/icons-material';

const DashboardAddNft = () => {
    const [saveAsDraft, setSaveAsDraft] = useState(false);
    const [img, setImg] = useState(null);
    const [event, setEvent] = useState();
    const [startTimeInput, setStartTimeInput] = useState('');
    const [endTimeInput, setEndTimeInput] = useState('');
    const [oneDayBefore, setOneDayBefore] = useState();
    const [firstValue, setfirstValue] = useState(() => EditorState.createEmpty());
    const stepOne = draftToHtml(convertToRaw(firstValue.getCurrentContent()));

    const [secondValue, setSecondValue] = useState(() => EditorState.createEmpty());
    const stepTwo = draftToHtml(convertToRaw(secondValue.getCurrentContent()));

    const [perkNfts, setPerkNfts] = useState(() => EditorState.createEmpty());
    const stepPerkNft = draftToHtml(convertToRaw(perkNfts.getCurrentContent()));

    // console.log(saveAsDraft);
    const navigate = useNavigate();
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

    // useEffect(() => {
    //     console.log(event);
    //     let dateu = parseInt(event);
    //     setOneDayBefore(dateu - 1);
    // }, [event])
    // console.log(oneDayBefore);
    const handleTimeChange = (e) => {
        const startTimeChange = parseInt(e.target.value);
        const endTimeChange = startTimeChange + 3;
        setEndTimeInput(endTimeChange);
    }


    const onSubForm = async (e) => {
        e.preventDefault();
        // SetIsloading(true);

        const name = e.target.name.value;
        const price = e.target.price.value;
        const availableNfts = e.target.availableNfts.value;
        const perkNft = stepPerkNft;
        const description = stepOne;
        const startDate = e.target.startDate.value;
        const startTime = e.target.startTime.value;
        const endTime = e.target.endTime.value;
        const venue = e.target.venue.value;
        const purchaseDate = e.target.purchaseDate.value;
        const briefDetails = stepTwo;
        const type = e.target.type.value;
        const isDraft = saveAsDraft;
        const image = e.target.image.files[0];

        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        formData.append('availableNfts', availableNfts)
        formData.append('perkNft', perkNft)
        formData.append('date', newDate)
        formData.append('description', description)
        formData.append('startDate', startDate)
        formData.append('startTime', startTime)
        formData.append('endTime', endTime)
        formData.append('venue', venue)
        formData.append('purchaseDate', purchaseDate)
        formData.append('briefDetails', briefDetails)
        formData.append('type', type)
        formData.append('isDraft', isDraft)
        formData.append('image', image)


        await axios.post('https://backend.celebrity.sg/api/nft/add', formData, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    // alert(res.data.message);
                    if (saveAsDraft) {
                        swal({
                            title: "Success",
                            text: `NFT successfully saved in draft.`,
                            icon: "success",
                            button: "OK!",
                            className: "modal_class_success",
                        });

                    } else {
                        swal({
                            title: "Success",
                            text: `${res.data.message}`,
                            icon: "success",
                            button: "OK!",
                            className: "modal_class_success",
                        });
                    }
                }
                navigate(-1);
            })
            .catch(error => {
                // alert(error.response.data.message);
                swal({
                    title: "Attention",
                    text: `${error.response.data.message}`,
                    icon: "warning",
                    button: "OK!",
                    className: "modal_class_success",
                });
            });

    };

    const imageChange = (e) => {
        const selected = e.target.files[0];

        if (selected) {
            let reader = new FileReader();
            reader.onload = () => {

                setImg(reader?.result)

            }
            reader.readAsDataURL(selected);
        }
    }


    const loadFile = (event) => {
        setImg(event.target.files[0]);
        let output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function () {
            URL.revokeObjectURL(output.src) // free memory
        }
    };

    const redirectToNftPage = () => {
        navigate("/dashboard/nfts");
    }

    // console.log(event);

    return (
        <div>
            <div style={{ backgroundColor: "#272d47", color: 'white' }} className='mx-auto forRespoMarginReduce'>
                <h4 className='py-3 ps-3 container'>Add NFT</h4>
                <div className='container pb-5 pt-0'>
                    <form onSubmit={onSubForm}>

                        <InputGroup className="mb-3" style={{ backgroundColor: "#272d47", color: 'white' }}>

                            <Form.Select aria-label="Default select example"
                                required
                                name="type"
                                className='' style={{ backgroundColor: "#272d47", color: 'white' }}>
                                {/* <option>Type Of NFT</option> */}
                                <option value="Celebrity Meal NFTs">Celebrity Meal NFTs</option>
                                <option value="Celebrity Souvenir NFTs">Celebrity Souvenir NFTs</option>
                            </Form.Select>
                        </InputGroup>
                        {!img &&
                            <div className="imageDivNft">

                                <img src='https://i.ibb.co/Pwt1fRw/9ee03415-e591-4320-bf25-af881b8c27a6.jpg' width={200} height={200} className='d-flex justify-content-center' alt="" />
                            </div>}
                        {
                            img &&
                            <div className="imageDivNft">
                                <img id="output" width={200} height={200} className='d-flex justify-content-center' alt="" />
                            </div>
                        }
                        <label className='mb-1'>Image of NFT</label>
                        <input
                            onChange={loadFile}
                            type="file"
                            accept='image/*'
                            name="image"
                            className='border w-100 rounded mb-3'
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
                        />
                        <label className='mb-1'>Name of NFT</label>
                        <input
                            type="text"
                            name="name"
                            className='border w-100 rounded mb-3 p-2'
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
                        />

                        <label className='mb-1'>Price of NFT(SGD)</label>
                        <input
                            type="number"
                            min="0"
                            inputmode="numeric"
                            pattern="[0-9]*"

                            name="price"
                            className='border w-100 rounded mb-3 p-2'
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
                        />

                        <label className='mb-1'>Available NFTs</label>
                        <input
                            type="number"
                            min="0"
                            inputmode="numeric"
                            pattern="[0-9]*"

                            name="availableNfts"
                            className='border w-100 rounded mb-3 p-2'
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
                        />

                        <label className='mb-1'>Perks of NFT</label>
                        <Editor
                            editorState={perkNfts}
                            required={true}
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
                                    fontSize: {
                                        options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
                                        className: undefined,
                                        component: undefined,
                                        dropdownClassName: undefined,
                                    },
                                    fontFamily: {
                                        options: ['Arial', 'sans-serif', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
                                        className: undefined,
                                        component: undefined,
                                        dropdownClassName: undefined,
                                    },
                                },
                            }}
                        />



                        <label className='mb-2'>NFT Details</label>
                        {/* <textarea
                            type="text"
                            name="description"
                            className='border w-100 rounded mb-3 px-2 pt-2 pb-5 '
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
                        /> */}
                        <Editor
                            editorState={firstValue}
                            onEditorStateChange={setfirstValue}
                            required={true}
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
                                    fontSize: {
                                        options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
                                        className: undefined,
                                        component: undefined,
                                        dropdownClassName: undefined,
                                    },
                                    fontFamily: {
                                        options: ['Arial', 'sans-serif', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
                                        className: undefined,
                                        component: undefined,
                                        dropdownClassName: undefined,
                                    },
                                },
                            }}
                        />

                        <label className='mb-2 mt-3'>Date</label>
                       
                        <InputGroup className="mb-3">

                            <Form.Control
                                style={{ backgroundColor: "#272d47", color: 'white' }}
                                type='date'
                                name="startDate"
                                required
                                aria-label="Amount (to the nearest dollar)" />

                        </InputGroup>

                        <label className='mb-1'>Start Time</label>
                      
                        <InputGroup className="mb-3">

                            <Form.Control
                                style={{ backgroundColor: "#272d47", color: 'white' }}
                                type='time'
                                name="startTime"
                                required
                                aria-label="Amount (to the nearest dollar)" />

                        </InputGroup>


                        <label className='mb-1'>End Time</label>
                      
                        <InputGroup className="mb-3">

                            <Form.Control
                                style={{ backgroundColor: "#272d47", color: 'white' }}
                                type='time'
                                name="endTime"
                                required
                                aria-label="Amount (to the nearest dollar)" />

                        </InputGroup>

                        <label className='mb-1'>Venue</label>
                        <input
                            type="text"
                            name="venue"
                            className='border w-100 rounded mb-3 p-2'
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
                        />

                        <label className='mb-1'>Purchase Till</label>                  
                        <InputGroup className="mb-3" style={{textAlign: 'left'}}>

                            <Form.Control
                                style={{ backgroundColor: "#272d47", color: 'white' }}
                                type='date'
                                name="purchaseDate"
                                required
                                value={event}
                                onChange={e => setEvent(e.target.value)}
                                aria-label="Amount (to the nearest dollar)" />

                        </InputGroup>

                        <label className='mb-2'>Brief Details of Celebrity</label>
                        {/* <textarea
                            type="text"
                            name="briefDetails"
                            className='border w-100 rounded mb-3 px-2 pt-2 pb-5 '
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
                        /> */}
                        <Editor
                            editorState={secondValue}
                            required={true}
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
                        <div className='mx-auto text-center mt-3'>
                            <Button onClick={redirectToNftPage} type='button' style={{ backgroundColor: '#dc3545', width: '120px', fontSize: "13px" }} className='border-0 text-uppercase modal-btn ms-3 me-3 extraCare'>CANCEL</Button>
                            <Button
                                onClick={() => setSaveAsDraft(true)}
                                type='submit' style={{ backgroundColor: 'blueviolet', width: '120px', fontSize: "13px" }} className='bg-primary border-0 text-uppercase modal-btn ms-3 me-3 extraCare'>Draft</Button>
                            <Button
                                onClick={() => setSaveAsDraft(false)}
                                type='submit' style={{ backgroundColor: 'blueviolet', width: '120px', fontSize: "13px" }} className='border-0 text-uppercase modal-btn ms-3 me-3 extraCare'>Save</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DashboardAddNft;
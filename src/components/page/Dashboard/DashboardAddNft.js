import React, { useState } from 'react';
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

const DashboardAddNft = () => {
    const [saveAsDraft, setSaveAsDraft] = useState();
    const [firstValue, setfirstValue] = useState(() => EditorState.createEmpty());
    const stepOne = draftToHtml(convertToRaw(firstValue.getCurrentContent()));

    const [secondValue, setSecondValue] = useState(() => EditorState.createEmpty());
    const stepTwo = draftToHtml(convertToRaw(secondValue.getCurrentContent()));
    console.log(saveAsDraft);
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

    const onSubForm = async (e) => {
        e.preventDefault();
        // SetIsloading(true);

        const name = e.target.name.value;
        const price = e.target.price.value;
        const availableNfts = e.target.availableNfts.value;
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
                    swal({
                        title: "Success",
                        text: `${res.data.message}`,
                        icon: "success",
                        button: "OK!",
                        className: "modal_class_success",
                    });
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

    return (
        <div>
            <div style={{ backgroundColor: "#272d47", color: 'white' }} className='mx-auto forRespoMarginReduce'>
                <h4 className='py-3 ps-3 container'>Add NFT</h4>
                <div className='container pb-5 pt-0'>
                    <form onSubmit={onSubForm}>

                        <InputGroup className="mb-3" style={{ backgroundColor: "#272d47", color: 'white' }}>

                            <Form.Select aria-label="Default select example"
                                name="type"
                                className='' style={{ backgroundColor: "#272d47", color: 'white' }}>
                                {/* <option>Type Of NFT</option> */}
                                <option value="Celebrity Meal NFTs">Celebrity Meal NFTs</option>
                                <option value="Celebrity Souvenir NFTs">Celebrity Souvenir NFTs</option>
                            </Form.Select>
                        </InputGroup>
                        <label className='mb-1'>Image of NFT</label>
                        <input
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
                            name="price"
                            className='border w-100 rounded mb-3 p-2'
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
                        />

                        <label className='mb-1'>Available NFTs</label>
                        <input
                            type="text"
                            name="availableNfts"
                            className='border w-100 rounded mb-3 p-2'
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
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

                        <label className='mb-2 mt-3'>Date</label>
                        <input
                            type="date"
                            name="startDate"
                            className='border w-100 rounded mb-3 p-2'
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
                        />

                        <label className='mb-1'>Start Time</label>
                        <input
                            type="time"
                            name="startTime"
                            className='border w-100 rounded mb-3 p-2'
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
                        />

                        <label className='mb-1'>End Time</label>
                        <input
                            type="time"
                            name="endTime"
                            className='border w-100 rounded mb-3 p-2'
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
                        />

                        <label className='mb-1'>Venue</label>
                        <input
                            type="text"
                            name="venue"
                            className='border w-100 rounded mb-3 p-2'
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
                        />

                        <label className='mb-1'>Purchase Till</label>
                        <input
                            type="date"
                            name="purchaseDate"
                            className='border w-100 rounded mb-3 p-2'
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
                        />

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
                            <Button type='button' style={{ backgroundColor: '#dc3545', width: '120px', fontSize: "13px" }} className='border-0 text-uppercase modal-btn ms-3 me-3 extraCare'>CANCEL</Button>
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
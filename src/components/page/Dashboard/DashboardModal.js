import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import Loading from '../../Loading/Loading';
import swal from 'sweetalert';
import { MdClose } from 'react-icons/md';

const DashboardModal = (props) => {
    const { setRefetch, refetch, setModalShow, SetIsloading } = props;
    const [saveAsDraft, setSaveAsDraft] = useState('');

    console.log(saveAsDraft)

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
        SetIsloading(true);

        const name = e.target.name.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const startDate = e.target.startDate.value;
        const startTime = e.target.startTime.value;
        const endTime = e.target.endTime.value;
        const venue = e.target.venue.value;
        const purchaseDate = e.target.purchaseDate.value;
        const briefDetails = e.target.briefDetails.value;
        const type = e.target.type.value;
        const image = e.target.image.files[0];

        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        formData.append('date', newDate)
        formData.append('description', description)
        formData.append('startDate', startDate)
        formData.append('startTime', startTime)
        formData.append('endTime', endTime)
        formData.append('venue', venue)
        formData.append('purchaseDate', purchaseDate)
        formData.append('briefDetails', briefDetails)
        formData.append('type', type)
        formData.append('image', image)


        if (saveAsDraft === "save") {
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
                        setRefetch(!refetch);
                        SetIsloading(false);
                        setModalShow(false);

                    }
                })
                .catch(error => {
                    swal({
                        title: "Attention",
                        text: `${error.response.data.message}`,
                        icon: "warning",
                        button: "OK!",
                        className: "modal_class_success",
                    });
                    SetIsloading(false);
                    setModalShow(false);
                });

        }
        else {
            await axios.post('https://backend.celebrity.sg/api/nft/saveAsDraft', formData, {
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
                        setRefetch(!refetch);
                        SetIsloading(false);
                        setModalShow(false);

                    }
                })
                .catch(error => {
                    swal({
                        title: "Attention",
                        text: `${error.response.data.message}`,
                        icon: "warning",
                        button: "OK!",
                        className: "modal_class_success",
                    });
                    SetIsloading(false);
                    setModalShow(false);
                });

        }
    };


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header style={{ backgroundColor: "#272d47", color: 'white' }}>
                <Modal.Title id="contained-modal-title-vcenter" style={{ color: 'white' }}>
                    New NFT
                </Modal.Title>
                <MdClose onClick={() => setModalShow(false)} color='#fff' size={30} style={{ cursor: 'pointer' }} />
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#272d47", color: 'white' }}>
                <div style={{ backgroundColor: "#272d47", color: 'white' }}>
                    <form onSubmit={onSubForm}>

                        <InputGroup className="mb-3" style={{ backgroundColor: "#272d47", color: 'white' }}>
                            {/* <InputGroup.Text style={{ backgroundColor: "#272d47", color: 'white' }}>Timestamp</InputGroup.Text>
                            <Form.Control
                                aria-describedby="basic-addon1"
                                name="date"
                                type='text'
                                value={newDate}
                                className='me-3'
                                style={{ backgroundColor: "#272d47", color: 'white' }}
                            /> */}
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

                        <label className='mb-1'>NFT Details</label>
                        <textarea
                            type="text"
                            name="description"
                            className='border w-100 rounded mb-3 px-2 pt-2 pb-5 '
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
                        />

                        <label className='mb-1'>Date</label>
                        <input
                            type="date"
                            name="startDate"
                            className='border w-100 rounded mb-3 p-2'
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
                        />

                        <label className='mb-1'>Start Time</label>
                        <input
                            type="text"
                            name="startTime"
                            className='border w-100 rounded mb-3 p-2'
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
                        />

                        <label className='mb-1'>End Time</label>
                        <input
                            type="text"
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

                        <label className='mb-1'>Brief Details of Celebrity</label>
                        <textarea
                            type="text"
                            name="briefDetails"
                            className='border w-100 rounded mb-3 px-2 pt-2 pb-5 '
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
                        />


                        <Modal.Footer className='justify-content-center'>
                            <Button type='button' onClick={() => setModalShow(false)} style={{ backgroundColor: '#dc3545', width: '120px', fontSize: "13px" }} className='border-0 text-uppercase modal-btn'>CANCEL</Button>
                            <Button
                                onClick={() => setSaveAsDraft("draft")}
                                type='submit' style={{ backgroundColor: 'blueviolet', width: '120px', fontSize: "13px" }} className='bg-primary border-0 text-uppercase modal-btn'>Save as Draft</Button>
                            <Button
                                onClick={() => setSaveAsDraft("save")}
                                type='submit' style={{ backgroundColor: 'blueviolet', width: '120px', fontSize: "13px" }} className='border-0 text-uppercase modal-btn'>Save</Button>
                        </Modal.Footer>
                    </form>
                </div>
            </Modal.Body>

        </Modal>
    );
};

export default DashboardModal;
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import Loading from '../../Loading/Loading';

const DashboardModal = (props) => {
    const { setRefetch, refetch, setModalShow, SetIsloading } = props;

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
        const type = e.target.type.value;
        const image = e.target.image.files[0];

        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', price)
        formData.append('date', newDate)
        formData.append('description', description)
        formData.append('type', type)
        formData.append('image', image)
        // console.log(fromData)
        await axios.post('https://backend.celebrity.sg/api/nft/add', formData, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    alert(res.data.message);
                    setRefetch(!refetch);
                    SetIsloading(false);
                    setModalShow(false);

                }
            })
            .catch(error => {
                alert(error.response.data.message);
                SetIsloading(false);
                setModalShow(false);
            });
    };


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header closeButton style={{ backgroundColor: "#272d47", color: 'white' }}>
                <Modal.Title id="contained-modal-title-vcenter" style={{ color: 'white' }}>
                    New NFT
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#272d47", color: 'white' }}>
                <div style={{ backgroundColor: "#272d47", color: 'white' }}>
                    <form onSubmit={onSubForm}>
                        <label className='mb-1'>NFT</label>
                        <input
                            type="file"
                            accept='image/*'
                            name="image"
                            className='border w-100 rounded mb-3'
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
                        />

                        <label className='mb-1'>Name Of NFT</label>
                        <input
                            type="text"
                            name="name"
                            className='border w-100 rounded mb-3 p-2'
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
                        />

                        <label className='mb-1'>Price Of NFT</label>
                        <input
                            type="number"
                            name="price"
                            className='border w-100 rounded mb-3 p-2'
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
                        />

                        <label className='mb-1'>NFT Description</label>
                        <textarea
                            type="text"
                            name="description"
                            className='border w-100 rounded mb-3 p-2'
                            style={{ backgroundColor: "#272d47", color: 'white' }}
                            required
                        />

                        <InputGroup className="mb-3" style={{ backgroundColor: "#272d47", color: 'white' }}>
                            <InputGroup.Text style={{ backgroundColor: "#272d47", color: 'white' }}>Timestamp</InputGroup.Text>
                            <Form.Control
                                aria-describedby="basic-addon1"
                                name="date"
                                type='text'
                                value={newDate}
                                className='me-3'
                                style={{ backgroundColor: "#272d47", color: 'white' }}
                            />
                            <Form.Select aria-label="Default select example"
                                name="type"
                                className='ms-3' style={{ backgroundColor: "#272d47", color: 'white' }}>
                                <option>Type Of NFT</option>
                                <option value="Celebrity Meal NFTs">Celebrity Souvenir NFTs</option>
                                <option value="Celebrity Meal NFTs">Celebrity Meal NFTs</option>
                            </Form.Select>
                        </InputGroup>
                        <Modal.Footer className='justify-content-center'>
                            <Button type='submit' style={{ backgroundColor: 'blueviolet' }} className='border-0'>Save</Button>
                        </Modal.Footer>
                    </form>
                </div>
            </Modal.Body>

        </Modal>
    );
};

export default DashboardModal;
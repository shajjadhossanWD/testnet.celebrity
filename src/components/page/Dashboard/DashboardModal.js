import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const DashboardModal = (props) => {

    // form submit funtion
    const onSubForm = (e) => {
        e.preventDefault();
    }

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
                            className='border w-100 rounded mb-3' 
                            name='fileTake' 
                            style={{ backgroundColor: "#272d47", color: 'white' }} 
                            required 
                        />

                        <label className='mb-1'>Name Of NFT</label>
                        <input 
                            type="text" 
                            className='border w-100 rounded mb-3' 
                            style={{ backgroundColor: "#272d47", color: 'white' }} 
                            required 
                        />

                        <label className='mb-1'>Price Of NFT</label>
                        <input 
                            type="number" 
                            className='border w-100 rounded mb-3' 
                            style={{ backgroundColor: "#272d47", color: 'white' }} 
                            required 
                        />

                        <label className='mb-1'>NFT Description</label>
                        <textarea 
                            type="text" 
                            className='border w-100 rounded mb-3' 
                            style={{ backgroundColor: "#272d47", color: 'white' }} 
                            required 
                        />
                        
                         <InputGroup className="mb-3" style={{ backgroundColor: "#272d47", color: 'white' }}>
                            <InputGroup.Text style={{ backgroundColor: "#272d47", color: 'white' }}>Countdown</InputGroup.Text>
                            <Form.Control
                                placeholder="7/26/2022"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                type='date'
                                className='me-3'
                                style={{ backgroundColor: "#272d47", color: 'white' }}
                            />
                            <Form.Select aria-label="Default select example" className='ms-3' style={{ backgroundColor: "#272d47", color: 'white' }}>
                                <option>Type Of NFT</option>
                                <option value="Celebrity Meal NFTs">Celebrity Souvenir NFTs</option>
                                <option value="Celebrity Meal NFTs">Celebrity Meal NFTs</option>
                            </Form.Select>
                        </InputGroup>
                        <Modal.Footer className='justify-content-center'>
                            <Button type='submit' style={{ backgroundColor: 'blueviolet' }} className='border-0' onClick={props.onHide}>Save</Button>
                        </Modal.Footer>
                    </form>
                </div>
            </Modal.Body>

        </Modal>
    );
};

export default DashboardModal;
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
                        <input type="file" className='border w-100 rounded mb-3' name='fileTake' style={{ backgroundColor: "#272d47", color: 'white' }} required />
                        <label className='mb-1'>NFT Title</label>
                        <input type="text" className='border w-100 rounded mb-3' style={{ backgroundColor: "#272d47", color: 'white' }} required />
                        <label className='mb-1'>NFT Description</label>
                        <textarea type="text" className='border w-100 rounded mb-3' style={{ backgroundColor: "#272d47", color: 'white' }} required />
                        <InputGroup className="mb-3" style={{ backgroundColor: "#272d47", color: 'white' }}>
                            <InputGroup.Text style={{ backgroundColor: "#272d47", color: 'white' }}>Token</InputGroup.Text>
                            <Form.Select aria-label="Default select example" className='me-3' style={{ backgroundColor: "#272d47", color: 'white' }}>
                                <option>Select token</option>
                                <option value="1">BTC BITCOIN</option>
                                <option value="2">LTC LITECOIN</option>
                                <option value="3">EOS-EOS</option>
                            </Form.Select>
                            <InputGroup.Text className='ms-3' style={{ backgroundColor: "#272d47", color: 'white' }}>$</InputGroup.Text>
                            <Form.Control aria-label="Amount (to the nearest dollar)" style={{ backgroundColor: "#272d47", color: 'white' }} />
                        </InputGroup>
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
                                <option>Select category</option>
                                <option value="1">Art</option>
                                <option value="2">Music</option>
                                <option value="3">Video</option>
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
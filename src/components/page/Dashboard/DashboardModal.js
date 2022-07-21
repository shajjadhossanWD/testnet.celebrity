import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

const DashboardModal = (props) => {

    const [data, setData] = useState({
        name: '',
        price: '',
        date: '',
        description: '',
        type: '',
        image: '',
      });
      const handleChange = (e, name) => {
        let value = name === "image" ? e.target.files[0] : e.target?.value;
        if (name === 'phone') {
          setData({ ...data, [name]: e });
        } else {
          setData({ ...data, [name]: value });
        }
    
      };
      const onSubForm = async (e) => {
        e.preventDefault();
    
        
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('username', data.price)
        formData.append('email', data.date)
        formData.append('phone', data.description)
        formData.append('password', data.type)
        formData.append('image', data.image)
    
        await axios.post('https://backend.celebrity.sg/api/nft/add', formData, {
          headers: {
            'authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
          .then(res => {
            if (res.status === 200) {
              alert(res.data.message);
              setData({ name: '', price: '', date: '', description: '', type: '', image: '' });
            }
          })
          .catch(error => {
            alert(error.response.data.message);
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
                            onChange={(e) => handleChange(e, 'image')}
                            className='border w-100 rounded mb-3' 
                            style={{ backgroundColor: "#272d47", color: 'white' }} 
                            required 
                        />

                        <label className='mb-1'>Name Of NFT</label>
                        <input 
                            type="text" 
                            name="name"
                            value={data.name}
                            onChange={(e) => handleChange(e, "name")}
                            className='border w-100 rounded mb-3' 
                            style={{ backgroundColor: "#272d47", color: 'white' }} 
                            required 
                        />

                        <label className='mb-1'>Price Of NFT</label>
                        <input 
                            type="number"
                            name="price"
                            value={data.price}
                            onChange={(e) => handleChange(e, "price")}
                            className='border w-100 rounded mb-3' 
                            style={{ backgroundColor: "#272d47", color: 'white' }} 
                            required 
                        />

                        <label className='mb-1'>NFT Description</label>
                        <textarea 
                            type="text" 
                            name="description"
                            value={data.description}
                            onChange={(e) => handleChange(e, "description")}
                            className='border w-100 rounded mb-3' 
                            style={{ backgroundColor: "#272d47", color: 'white' }} 
                            required 
                        />
                        
                         <InputGroup className="mb-3" style={{ backgroundColor: "#272d47", color: 'white' }}>
                            <InputGroup.Text style={{ backgroundColor: "#272d47", color: 'white' }}>Countdown</InputGroup.Text>
                            <Form.Control
                                placeholder="7/26/2022"
                                aria-describedby="basic-addon1"
                                name="date"
                                value={data.date}
                                onChange={(e) => handleChange(e, "date")}
                                type='date'
                                className='me-3'
                                style={{ backgroundColor: "#272d47", color: 'white' }}
                            />
                            <select name="" id=""></select>
                            <Form.Select aria-label="Default select example" 
                              value={data.type} 
                              name="type"
                              onChange={(e) => handleChange(e, "type")} className='ms-3' style={{ backgroundColor: "#272d47", color: 'white' }}>
                                <option>Type Of NFT</option>
                                <option value="Celebrity Meal NFTs">Celebrity Souvenir NFTs</option>
                                <option value="Celebrity Meal NFTs">Celebrity Meal NFTs</option>
                            </Form.Select>
                        </InputGroup>
                        <Modal.Footer className='justify-content-center'>
                            <Button type='submit' style={{ backgroundColor: 'blueviolet' }} className='border-0' >Save</Button>
                        </Modal.Footer>
                    </form>
                </div>
            </Modal.Body>

        </Modal>
    );
};

export default DashboardModal;
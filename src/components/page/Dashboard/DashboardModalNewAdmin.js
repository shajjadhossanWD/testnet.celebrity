import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { RiAdminFill } from 'react-icons/ri';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import './DashboardModalNewAdmin.css';
import 'react-phone-number-input/style.css'

const DashboardModalNewAdmin = (props) => {
    const [value, setValue] = useState();

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton style={{ backgroundColor: "#272d47", color: 'white' }}>
                <Modal.Title id="contained-modal-title-vcenter" className='fs-5 text-light'>
                    <RiAdminFill className='fs-4'></RiAdminFill>  Add Admin
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: "#272d47", color: 'white' }}>
                <div>
                    <div>
                        <form >
                            <div className="row addAdminDiv">
                                <div className="col-lg-12">
                                    <p className='mb-1'>Image</p>
                                    <input
                                        className='form-control'
                                        type="file"
                                        accept='image/*'
                                        name="image"

                                    />
                                    <p className='mb-1'>Full Name</p>
                                    <input
                                        className='form-control'
                                        placeholder='Enter name'
                                        type="text"
                                        name="name"
                                        required
                                    />

                                    <p className='mb-1'>User Name</p>
                                    <input
                                        className='form-control'
                                        placeholder='Enter username'
                                        type="text"
                                        name="username"
                                        style={{ textTransform: 'lowercase' }}
                                        required
                                    />
                                    <p className='mb-1'>Email</p>
                                    <input
                                        className='form-control'
                                        placeholder='Enter email'
                                        type="email"
                                        name="email"
                                        required
                                    />
                                    <p className='mb-1'>Phone</p>
                                    <PhoneInput
                                        international
                                        defaultCountry="SG"
                                        countryCallingCodeEditable={true}
                                        className='form-control'
                                        type="text"
                                        value={value}
                                        onChange={setValue}
                                        required
                                        inputProps={{
                                            name: 'phone',
                                            required: true,
                                            autoFocus: true
                                        }}
                                        style={{ backgroundColor: "#272d47", color: 'white' }}
                                    />
                                    <p className='mb-1'>Password</p>
                                    <input
                                        className='form-control'
                                        placeholder='Enter Password'
                                        type="password"
                                        name="password"
                                        required
                                    />
                                    <p className='mb-1'>Re Enter Password</p>
                                    <input
                                        className='form-control'
                                        placeholder='Confirm password'
                                        type="password"
                                        name="confirmPassword"
                                        required
                                    />
                                </div>
                                <Modal.Footer className='mt-5'>
                                    <button type="button" className='adminBtnAdd11' onClick={props.onHide}>Cancel</button>
                                    <button type="submit" className='adminBtnAdd'>Add</button>
                                </Modal.Footer>

                            </div>
                        </form>
                    </div>
                    <div>

                    </div>
                </div>
            </Modal.Body>

        </Modal>
    );
};

export default DashboardModalNewAdmin;
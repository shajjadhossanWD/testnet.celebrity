import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { RiAdminFill } from 'react-icons/ri';
import PhoneInput from 'react-phone-number-input';
import './DashboardModalNewAdmin.css';
import 'react-phone-number-input/style.css';
import axios from 'axios';

const DashboardModalNewAdmin = (props) => {
    const { setIsLoadingAdmin, setModalShowNewAdmin } = props;
    const [value, setValue] = useState();

    const subNewAdmin = async event => {
        event.preventDefault();
        setIsLoadingAdmin(true);

        const avatar = event.target.image.files[0];
        const name = event.target.name.value;
        const username = event.target.username.value;
        const phone = value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        // const newAdminData = { image, name, username, phone, email, password, confirmPassword };
        // console.log(newAdminData);

        const formDataAddAdmin = new FormData()
        formDataAddAdmin.append('name', name)
        formDataAddAdmin.append('username', username)
        formDataAddAdmin.append('email', email)
        formDataAddAdmin.append('phone', phone)
        formDataAddAdmin.append('avatar', avatar)
        formDataAddAdmin.append('password', password)
        formDataAddAdmin.append('confirmPassword', confirmPassword)

        await axios.post("https://backend.celebrity.sg/api/admin/add", formDataAddAdmin, {
            headers: {
                // 'authorization': `Bearer ${localStorage.getItem('token')}`
                "content-type": "application/json"
            }
        })
            .then(res => {
                if (res.status === 200) {
                    alert(res.data.message);
                    setIsLoadingAdmin(false);
                    setModalShowNewAdmin(false);
                    event.target.reset();
                }
            })
            .catch(error => {
                alert(error.response.data.message);
                setIsLoadingAdmin(false);
            })
    }

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
                        <form onSubmit={subNewAdmin}>
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
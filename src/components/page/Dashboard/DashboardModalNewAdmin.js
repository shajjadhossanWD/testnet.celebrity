import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { RiAdminFill } from 'react-icons/ri';
import PhoneInput from 'react-phone-number-input';
import './DashboardModalNewAdmin.css';
import 'react-phone-number-input/style.css';
import axios from 'axios';
import swal from 'sweetalert';
import { MdClose } from 'react-icons/md';
import { BiLockOpen } from 'react-icons/bi';

const DashboardModalNewAdmin = (props) => {
    const { setIsLoadingAdmin, setModalShowNewAdmin, refetch, setRefetch } = props;
    const [visibleEnPassword, setVisibleEnPassword] = useState(false);
    const [visibleCnPassword, setVisibleCnPassword] = useState(false);
    const [value, setValue] = useState();
    // if (isLoadingAdmin) {
    //     return <Loader></Loader>
    // }
    const subNewAdmin = async event => {
        event.preventDefault();

        setIsLoadingAdmin(true);
        const image = event.target.image.files[0];
        const name = event.target.name.value;
        const username = event.target.username.value;
        const phone = value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password !== confirmPassword) {
            setIsLoadingAdmin(false);
            // return alert("Confirm Password not match!");
            return swal({
                title: "Attention",
                text: "Confirm Password not match!",
                icon: "warning",
                button: "OK!",
                className: "modal_class_success",
            });
        }

        const formDataAddAdmin = new FormData()
        formDataAddAdmin.append('name', name)
        formDataAddAdmin.append('username', username)
        formDataAddAdmin.append('email', email)
        formDataAddAdmin.append('phone', phone)
        formDataAddAdmin.append('image', image)
        formDataAddAdmin.append('password', password)

        await axios.post("https://backend.celebrity.sg/api/v1/admin/", formDataAddAdmin, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('adminCelebrity')}`
            }
        })
            .then(res => {
                if (res.status === 201) {
                    // setAllAdmin(res.data.newAdmin);
                    setIsLoadingAdmin(false);
                    setModalShowNewAdmin(false);
                    setRefetch(!refetch);
                    event.target.reset();
                    swal({
                        title: "Success",
                        text: `${res.data.message}`,
                        icon: "success",
                        button: "OK!",
                        className: "modal_class_success",
                    });
                    // alert(res.data.message);
                }
            })
            .catch(error => {
                // alert(error.response.data.message);
                // console.log(error);
                setIsLoadingAdmin(false);
                swal({
                    title: "Attention",
                    text: `${error.response.data.message}`,
                    icon: "warning",
                    button: "OK!",
                    className: "modal_class_success",
                });
            })
        // setIsLoadingAdmin(false);
    }

    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header style={{ backgroundColor: "#272d47", color: 'white' }}>
                <Modal.Title id="contained-modal-title-vcenter" className='fs-5 text-light'>
                    <RiAdminFill className='fs-4'></RiAdminFill>  Add Admin
                </Modal.Title>
                <MdClose onClick={props.onHide} color='#fff' size={30} style={{ cursor: 'pointer' }} />
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
                                        style={{ textTransform: "lowercase" }}
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
                                    <div className="d-flex inputProfile">
                                        <input
                                            className='form-control'
                                            placeholder='Enter Password'
                                            type={visibleEnPassword ? "text" : "password"}
                                            name="password"
                                            required
                                        />
                                        <button style={{ borderTop: '2px solid #767676', borderLeft: '2px solid #767676' }} type='button' onClick={() => setVisibleEnPassword(!visibleEnPassword)} className='iconBoxBtn text-white'><i className="fas fa-eye"></i></button>
                                    </div>
                                    <p className='mb-1'>Re Enter Password</p>
                                    <div className="d-flex inputProfile">
                                        <input
                                            className='form-control'
                                            placeholder='Confirm password'
                                            type={visibleCnPassword ? "text" : "password"}
                                            name="confirmPassword"
                                            required
                                        />
                                        <button style={{ borderTop: '2px solid #767676', borderLeft: '2px solid #767676' }} type='button' onClick={() => setVisibleCnPassword(!visibleCnPassword)} className='iconBoxBtn text-white'><i className="fas fa-eye"></i></button>
                                    </div>
                                </div>
                                <Modal.Footer className='mt-5'>
                                    <button type="button" className='adminBtnAdd11 text-uppercase' onClick={props.onHide}>Cancel</button>
                                    <button type="submit" className='adminBtnAdd text-uppercase'>Add</button>
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
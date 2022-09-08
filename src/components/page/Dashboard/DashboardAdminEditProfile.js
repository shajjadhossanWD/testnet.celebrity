import React, { useEffect, useState } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';
import { BiLockOpen } from 'react-icons/bi';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './DashboardAdminEditProfile.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../Loading/Loading';
import swal from 'sweetalert';


const DashboardAdminEditProfile = () => {
    const id = useParams();
    const idOrigin = id.id;
    const [onLoading, setonLoading] = useState(false);
    // console.log(id.id);
    const navigate = useNavigate();

    const [valueProfilePhn, setValueProfilePhn] = useState();
    const [visibleCPassword, setVisibleCPassword] = useState(false);
    const [visibleEnPassword, setVisibleEnPassword] = useState(false);
    const [visibleCnPassword, setVisibleCnPassword] = useState(false);
    const [singleAdmin, setSingleAdmin] = useState([]);

    useEffect(() => {
        fetch(`https://backend.celebrity.sg/api/v1/admin/${idOrigin}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                setSingleAdmin(data.admin)
                setValueProfilePhn(data.admin.phone)
            })
    }, [idOrigin])

    // console.log(singleAdmin);
    if (onLoading) {
        return <Loading></Loading>
    }

    const subProfile = async event => {
        event.preventDefault();
        const name = event.target.name?.value;
        const username = event.target.username?.value;
        const email = event.target.email?.value;
        const phone = valueProfilePhn;
        const password = event.target.password?.value;
        const avatar = event.target.avatar?.files[0];
        const currentPassword = event.target.currentPassword?.value;
        const cPassword = event.target.cPassword?.value;

        const formDataSingleAdmin = new FormData()
        formDataSingleAdmin.append('name', name)
        formDataSingleAdmin.append('username', username)
        formDataSingleAdmin.append('email', email)
        formDataSingleAdmin.append('phone', phone)
        formDataSingleAdmin.append('password', password)
        formDataSingleAdmin.append('image', avatar)
        console.log(...formDataSingleAdmin)
        setonLoading(true);

        if (password === cPassword) {
            await axios.put(`https://backend.celebrity.sg/api/v1/admin/update/${idOrigin}`, formDataSingleAdmin, {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('adminCelebrity')}`
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        // alert(res.data.message);
                        swal({
                            title: "Success",
                            text: res.data.message,
                            icon: "success",
                            button: "OK!",
                            className: "modal_class_success",
                        });
                        setonLoading(false);
                        setSingleAdmin(res.data.admin);
                        navigate("/dashboard/admin");
                    }
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
                    setonLoading(false);
                })
        }
        else {
            swal({
                title: "Attention",
                text: "Password does not matched",
                icon: "warning",
                button: "OK!",
                className: "modal_class_success",
            });
        }

    }

    const handleRedirectAdmin = () => {
        navigate("/dashboard/admin");
    }

    return (
        <div className='handleEditAdminHeight'>
            <h5 className='text-start text-white'>Profile</h5>
            <form onSubmit={subProfile}>
                <div className="profileDiv ">
                    <div className="row mx-auto g-5">
                        <div className="col-lg-7">
                            <p className="d-flex inputProfile">
                                <span className='iconCreator'><MdAccountCircle /></span>
                                <input
                                    className="creatorsInput form-control"
                                    type="text" name="name"
                                    placeholder='Admin Name'
                                    defaultValue={singleAdmin?.name}
                                />
                            </p>
                            <p className="d-flex inputProfile">
                                <span className='iconCreator text-white'><MdOutlineAlternateEmail /></span>
                                <input
                                    className="creatorsInput form-control"
                                    style={{ textTransform: 'lowercase' }}
                                    type="text" name="username"
                                    placeholder='Username' defaultValue={singleAdmin?.username} />

                            </p>
                            <p className="d-flex inputProfile">
                                <span className='iconCreator'><GrMail /></span>
                                <input
                                    style={{ textTransform: "lowercase" }}
                                    className="creatorsInput form-control"
                                    type="email" name="email" placeholder='email' defaultValue={singleAdmin?.email} />
                            </p>
                            <p className="d-flex inputProfile">
                                <PhoneInput
                                    international
                                    countryCallingCodeEditable={false}
                                    defaultCountry="SG"
                                    value={valueProfilePhn}
                                    onChange={setValueProfilePhn}
                                    className="countryInput form-control"
                                />
                            </p>
                            {/* <p className="d-flex inputProfile">
                                <span className='iconCreator'><BiLockOpen /></span>
                                <input
                                    className="creatorsInput1 form-control"
                                    type={visibleCPassword ? "text" : "password"}
                                    name="currentPassword"
                                    placeholder='Current Password'
                                />
                                <button style={{borderTop: '2px solid #767676', borderLeft: '2px solid #767676'}} type='button' onClick={() => setVisibleCPassword(!visibleCPassword)} className='iconBoxBtn text-white'><i className="fas fa-eye"></i></button>

                            </p> */}
                            <p className="d-flex inputProfile">
                                <span className='iconCreator'><BiLockOpen /></span>
                                <input
                                    className="creatorsInput1 form-control w-75 pass-input"
                                    type={visibleEnPassword ? "text" : "password"}
                                    name="password"
                                    placeholder='Enter New Password' />
                                <button style={{ borderTop: '2px solid #767676', borderLeft: '2px solid #767676' }} type='button' onClick={() => setVisibleEnPassword(!visibleEnPassword)} className='iconBoxBtn text-white'><i className="fas fa-eye"></i></button>

                            </p>
                            <p className="d-flex inputProfile">
                                <span className='iconCreator'><BiLockOpen /></span>
                                <input
                                    className="creatorsInput1 form-control w-75 pass-input"
                                    type={visibleCnPassword ? "text" : "password"}
                                    name="cPassword"
                                    placeholder='Confirm New Password' />
                                <button style={{ borderTop: '2px solid #767676', borderLeft: '2px solid #767676' }} type='button' onClick={() => setVisibleCnPassword(!visibleCnPassword)} className='iconBoxBtn text-white'><i className="fas fa-eye"></i></button>

                            </p>
                        </div>
                        <div className="col-lg-5 text-center">
                            <img className='ProfileImg' src={`https://backend.celebrity.sg/${singleAdmin?.avatar}`} alt="avatar" /> <br />
                            <input
                                type="file"
                                className='ImageInput text-white form-control text-light'
                                name="avatar" />
                        </div>
                    </div>

                    <div className='mx-auto text-center'>
                        <button onClick={handleRedirectAdmin} className="profileBtnChange bg-danger w-25 me-3 text-white text-uppercase" type='button'>Cancel</button>
                        <button className="profileBtnChange text-white w-25 text-uppercase" type='submit'>Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default DashboardAdminEditProfile;
import React, { useEffect, useState } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';
import { BiLockOpen } from 'react-icons/bi';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './DashboardAdminEditProfile.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const DashboardAdminEditProfile = () => {
    const id = useParams();
    const idOrigin = id.id;
    // console.log(id.id);
    const [valueProfilePhn, setValueProfilePhn] = useState();
    const [visibleCPassword, setVisibleCPassword] = useState(false);
    const [visibleEnPassword, setVisibleEnPassword] = useState(false);
    const [visibleCnPassword, setVisibleCnPassword] = useState(false);
    const [singleAdmin, setSingleAdmin] = useState([]);

    useEffect(() => {
        fetch(`https://backend.celebrity.sg/api/admin/${idOrigin}`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => setSingleAdmin(data.admin))
    }, [idOrigin])
    console.log(singleAdmin);
    const subProfile = async event => {
        event.preventDefault();

        const name = event.target.name.value;
        const username = event.target.username.value;
        const email = event.target.email.value;
        const phone = valueProfilePhn;
        const currentPassword = event.target.currentPassword.value;
        const newPassword = event.target.newPassword.value;
        const cPassword = event.target.cPassword.value;
        const avatar = event.target.avatar.files[0];

        const formDataSingleAdmin = new FormData()
        formDataSingleAdmin.append('name', name)
        formDataSingleAdmin.append('username', username)
        formDataSingleAdmin.append('email', email)
        formDataSingleAdmin.append('phone', phone)
        formDataSingleAdmin.append('currentPassword', currentPassword)
        formDataSingleAdmin.append('newPassword', newPassword)
        formDataSingleAdmin.append('cPassword', cPassword)
        formDataSingleAdmin.append('avatar', avatar)

        await axios.post(`https://backend.celebrity.sg/api/admin/update-all-profile/${idOrigin}`, formDataSingleAdmin, {
            headers: {
                // 'authorization': `Bearer ${localStorage.getItem('token')}`
                "content-type": "application/json"
            }
        })
            .then(res => {
                if (res.status === 200) {
                    alert(res.data.message);
                }
            })
            .catch(error => {
                alert(error.response.data.message);
            })
    }

    return (
        <div className='handleEditAdminHeight'>
            <h5 className='text-start text-white'>Profile</h5>
            <form onSubmit={subProfile}>
                <div className="profileDiv ">
                    <div className="row container mx-auto g-5">
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
                            <p className="d-flex inputProfile">
                                <span className='iconCreator'><BiLockOpen /></span>
                                <input
                                    className="creatorsInput1 form-control"
                                    type={visibleCPassword ? "text" : "password"}
                                    name="currentPassword"
                                    placeholder='Current Password'
                                />
                                <button type='button' onClick={() => setVisibleCPassword(!visibleCPassword)} className='iconBoxBtn text-white'><i className="fas fa-eye"></i></button>

                            </p>
                            <p className="d-flex inputProfile">
                                <span className='iconCreator'><BiLockOpen /></span>
                                <input
                                    className="creatorsInput1 form-control"
                                    type={visibleEnPassword ? "text" : "password"}
                                    name="newPassword"
                                    placeholder='Enter New Password' />
                                <button type='button' onClick={() => setVisibleEnPassword(!visibleEnPassword)} className='iconBoxBtn text-white'><i className="fas fa-eye"></i></button>

                            </p>
                            <p className="d-flex inputProfile">
                                <span className='iconCreator'><BiLockOpen /></span>
                                <input
                                    className="creatorsInput1 form-control"
                                    type={visibleCnPassword ? "text" : "password"}
                                    name="cPassword"
                                    placeholder='Confirm New Password' />
                                <button type='button' onClick={() => setVisibleCnPassword(!visibleCnPassword)} className='iconBoxBtn text-white'><i className="fas fa-eye"></i></button>

                            </p>
                        </div>
                        <div className="col-lg-5 text-center">
                            <img className='ProfileImg' src={singleAdmin?.avatar} alt="avatar" /> <br />
                            <input
                                type="file"
                                className='ImageInput text-white form-control'
                                name="avatar" />
                        </div>
                    </div>

                    <div className='mx-auto text-center'>
                        <button className="profileBtnChange bg-danger w-25 me-3 text-white" type='click'>Cancel</button>
                        <button className="profileBtnChange text-white w-25" type='submit'>Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default DashboardAdminEditProfile;
import React, { useState } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';
import { BiLockOpen } from 'react-icons/bi';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './DashboardAdminEditProfile.css';


const DashboardAdminEditProfile = () => {
    const [valueProfilePhn, setValueProfilePhn] = useState();
    const [visibleCPassword, setVisibleCPassword] = useState(false);
    const [visibleEnPassword, setVisibleEnPassword] = useState(false);
    const [visibleCnPassword, setVisibleCnPassword] = useState(false);

    const subProfile = event => {
        event.preventDefault();
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
                                />
                            </p>
                            <p className="d-flex inputProfile">
                                <span className='iconCreator text-white'><MdOutlineAlternateEmail /></span>
                                <input
                                    className="creatorsInput form-control"
                                    style={{ textTransform: 'lowercase' }}
                                    type="text" name="username"
                                    placeholder='Username' />
                            </p>
                            <p className="d-flex inputProfile">
                                <span className='iconCreator'><GrMail /></span>
                                <input
                                    className="creatorsInput form-control"
                                    type="email" name="email" placeholder='email' />
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
                            <img className='ProfileImg' src="https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png" alt="avatar" /> <br />
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
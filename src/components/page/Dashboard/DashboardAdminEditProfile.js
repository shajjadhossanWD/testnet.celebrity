import React, { useState } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { BiLockOpen } from 'react-icons/bi';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'


const DashboardAdminEditProfile = () => {
    const [valueProfilePhn, setValueProfilePhn] = useState();
    return (
        <div>
            <h5 className='text-start text-white'>Profile</h5>
            <form >
                <div className="profileDiv ">
                    <div className="row container mx-auto">
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
                                <span className='iconCreator text-white p-2'>@</span>
                                <input
                                    className="creatorsInput form-control"
                                    style={{ textTransform: 'lowercase' }}
                                    type="text" name="username"
                                    placeholder='Username' />
                            </p>
                            <p className="d-flex inputProfile">
                                <span className='iconCreator'><MdOutlineAlternateEmail /></span>
                                <input
                                    className="creatorsInput form-control"
                                    type="email" name="email" />
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
                                    type="password"
                                    name="currentPassword"
                                    placeholder='Current Password'
                                />
                                <button type='button' className='iconBoxBtn text-white'><i className="fas fa-eye"></i></button>

                            </p>
                            <p className="d-flex inputProfile">
                                <span className='iconCreator'><BiLockOpen /></span>
                                <input
                                    className="creatorsInput1 form-control"
                                    type="password"
                                    name="newPassword"
                                    placeholder='Enter New Password' />
                                <button type='button' className='iconBoxBtn text-white'><i className="fas fa-eye"></i></button>

                            </p>
                            <p className="d-flex inputProfile">
                                <span className='iconCreator'><BiLockOpen /></span>
                                <input
                                    className="creatorsInput1 form-control"
                                    type="password"
                                    name="cPassword"
                                    placeholder='Confirm New Password' />
                                <button type='button' className='iconBoxBtn text-white'><i className="fas fa-eye"></i></button>

                            </p>
                        </div>
                        <div className="col-lg-5 imageProfileDiv">
                            <img className='ProfileImg' src="" alt="" /> <br />
                            <input
                                type="file"
                                className='ImageInput text-white form-control'
                                name="avatar" />
                        </div>
                    </div>

                    <button className="profileBtnChange bg-danger me-3 text-white" type='click'>Cancel</button>
                    <button className="profileBtnChange text-white" type='submit'></button>
                </div>
            </form>
        </div>
    );
};

export default DashboardAdminEditProfile;
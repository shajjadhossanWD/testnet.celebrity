import React from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import { AiFillLock } from 'react-icons/ai';

const Otp = () => {

    return (
        <div>
            <div className='handleTheLoginBody'>
                <div className='container mx-auto'>
                    <div className=' forCard  w-50 p-5 rounded mx-auto'>
                        <div className='mx-auto text-center'>
                            <img src="https://testnet.grighund.net/static/media/logo192.ea779dfe5e580c22a76f.png" className='handleLogoLogin rounded-pill' alt="logo" />
                            <p className='text-light mt-3 pb-3'>Please check your email for OTP</p>
                        </div>
                        <hr />
                        <div className='mt-4 pt-2'>
                            <form>

                                <InputGroup className="mb-3 mt-3">
                                    <InputGroup.Text className='bg-dark border-0'><AiFillLock></AiFillLock></InputGroup.Text>
                                    <Form.Control aria-label="Amount (to the nearest dollar)" className='inputBackground' placeholder='Enter OTP' type="number" required />
                                </InputGroup>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Link className='text-decoration-none text-light' to='/forgetpassword'><p>Forgot password?</p></Link>
                                </Form.Group>
                                <div className='mx-auto text-center'>
                                    <Button className='handleLogInButton text-center ps-5 pe-5 pt-2 pb-2' type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </form>
                            <div className='mx-auto text-center mt-3'>
                                <Button className='bg-danger border-0 text-center ps-4 pe-4 pt-2 pb-2' type="submit">
                                    Re-Send OTP
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Otp;
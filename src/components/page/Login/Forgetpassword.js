import React from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import { MdAlternateEmail } from 'react-icons/md';
import { FiSend } from 'react-icons/fi';

const Forgetpassword = () => {
    return (
        <div>
            <div className='handleTheLoginBody'>
                <div className='forFalseHeader'></div>
                <div className='container mx-auto pt-5'>
                    <div className='pt-5 forCard  w-50 p-5 rounded mx-auto'>
                        <div className='mx-auto text-center'>
                            <img src="https://testnet.grighund.net/static/media/logo192.ea779dfe5e580c22a76f.png" className='handleLogoLogin rounded-pill' alt="logo" />
                            <p className='fs-1 text-light'>Forgot Password</p>
                            <p className='pb-2'>Please enter your email address and we will send you a password reset link.</p>
                        </div>
                        <hr />
                        <div className='mt-4 pt-2'>
                            <form>

                                <InputGroup className="mb-3 mt-3">
                                    <InputGroup.Text className='bg-dark border-0'><MdAlternateEmail></MdAlternateEmail></InputGroup.Text>
                                    <Form.Control aria-label="Amount (to the nearest dollar)" className='inputBackground' placeholder='Enter email' type="number" required />
                                </InputGroup>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Link className='text-decoration-none text-light' to='/forgetpassword'><p>Forgot password?</p></Link>
                                </Form.Group>
                                <div className='mx-auto text-center'>
                                    <Button className='handleSendBtn border-0 text-center ps-5 pe-5 pt-2 pb-2' type="submit">
                                        <FiSend></FiSend> Send
                                    </Button>
                                </div>
                            </form>
                            {/* <div className='mx-auto text-center mt-3'>
                                <Button className='bg-danger border-0 text-center ps-5 pe-5 pt-2 pb-2' type="submit">
                                    Login
                                </Button>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forgetpassword;
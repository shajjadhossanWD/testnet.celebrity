import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, useNavigate } from 'react-router-dom';
import { MdAlternateEmail } from 'react-icons/md';
import { AiFillEye, AiFillEyeInvisible, AiFillLock } from 'react-icons/ai';
import { AdminContext } from '../../../context/AdminContext';
import axios from 'axios';

const Login = () => {
    const [visiblePassword, setVisiblePassword] = useState(false);
    const { admin} = useContext(AdminContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (admin?._id) {
            navigate("/dashboard");
        }
    }, [admin]);

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        axios.post("https://backend.celebrity.sg/api/v1/admin/login", {
            email, password
        })
            .then(res => {
                if (res.status === 200) {
                    navigate(`/otp/${res.data.token}`)
                }
            })
            .catch(err => {
                alert(err.response.data.message);
            })
    }

    return (
        <div className='handleTheLoginBody'>
            <div className='container mx-auto'>
                <div className='pt-5 forCard  w-50 p-5 rounded mx-auto'>
                    <div className='mx-auto text-center'>
                        <img src="https://testnet.grighund.net/static/media/logo192.ea779dfe5e580c22a76f.png" className='handleLogoLogin rounded-pill' alt="logo" />
                    </div>
                    <hr />
                    <div className='mt-4 pt-2'>
                        <form onSubmit={handleLogin}>
                            <Form.Label className='text-light'>Email address</Form.Label>
                            <InputGroup>
                                <InputGroup.Text id="basic-addon1" className='bg-dark border-0'><MdAlternateEmail></MdAlternateEmail></InputGroup.Text>
                                <Form.Control
                                    className='inputBackground'
                                    placeholder="email"
                                    aria-label="Username"
                                    type='email'
                                    name="email"
                                    required
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                            <InputGroup className="mb-3 mt-3">
                                <InputGroup.Text className='bg-dark border-0'><AiFillLock></AiFillLock></InputGroup.Text>
                                <Form.Control aria-label="Amount (to the nearest dollar)" name='password' className='inputBackground' placeholder='password' type={visiblePassword ? "text" : "password"} required />
                                <InputGroup.Text className='bg-dark border-0 cursor-pointer' role="button" onClick={() => setVisiblePassword(!visiblePassword)}>{
                                    visiblePassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>
                                }</InputGroup.Text>
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
                </div>
            </div>
            </div>
        </div >
    );
};

export default Login;
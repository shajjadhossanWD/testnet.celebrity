import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';
import CloseIcon from '@mui/icons-material/Close';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: '#1a1a25',
    // border: '2px solid white',
    boxShadow: 24,
    color: "white",
    borderRadius: '5px',
    p: 4
};

export default function EmailVerifyModal({ open, setOpenEmail, otpVerify, setError, handleVerifyEmail, minutes, seconds }) {

    const [otpCode, setOtpCode] = useState()
    const [isOtpError, setOtpError] = useState(false)

    const handleClose = () => setOpenEmail(false);

    // Re-send OTP states
    const [forEnable, setForEnable] = useState(false);
    const [againEnable, setAgainEnable] = useState(true);


    const hendelSubmit = (e) => {

        if (otpVerify == otpCode) {
            swal({
                text: "Email Verified.",
                icon: "success",
                button: "OK!",
                className: "modal_class_success",
            });
            setOtpError(false)
            setError(false)
            handleClose(false)
            return;
        }
        setError('Email OTP Code not matched')
        setOtpError(true)

    }

    return (
        <div>
            <Modal
                open={open} P
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} id="">
                    <div className='closeD'>
                        <Button className='iconClose' onClick={handleClose}><CloseIcon className='iconClose' style={{ color: "red" }} /></Button>
                    </div>
                    <Typography id="modal-modal-title text-light" className='text-light' variant="h6" component="h2">
                        Verify Email
                    </Typography>
                    <Typography id="modal-modal-description text-light" sx={{ mt: 2 }}>
                        Check your email for OTP
                    </Typography>
                    <form className="d-flex input-group mt-2 mb-2" >
                        <input type="number" className="form-control" placeholder="OTP code" aria-label="OTP code !!" aria-describedby="button-addon2" onChange={e => setOtpCode(e.target.value)} />
                        <button className="btn btn-outline-secondary bg-danger text-light" onClick={hendelSubmit} type="submit" id="button-addon2">Verify</button>
                    </form>

                    {isOtpError ? <p style={{ color: 'red' }}>You have entered wrong OTP</p> : ''}
                    <div className='d-flex' style={{ justifyContent: 'center' }}>
                        <button disabled={minutes == 0 && seconds == 0 ? false : true} type='submit' onClick={handleVerifyEmail} className='submit banner-button2 font14 text-decoration-none pb-2' style={minutes == 0 && seconds == 0 ? { backgroundColor: '#007bff' } : { backgroundColor: '#7b7b94' }} id="font14">Resend OTP</button>
                    </div>
                    <div className='text-center text-white mt-3'>
                        <span>{minutes}</span>:<span>{seconds < 10 ? `0${seconds}` : seconds}</span>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

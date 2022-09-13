import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const PayNowPayment = () => {
  const { email, price } = useParams();
  const navigate = useNavigate()

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied!")
  }

  // let celebrityText = `<span>`
  const celebrityText = "celebrity.sg";
  const emailText = "support@celebrity.sg";

  let content = document.createElement("p");
  content.innerHTML = '<span style="color: #0d6efd;">' + celebrityText + '</span> Team will contact you.If you do not receive an email within 24 hours please email to <span style="color: #0d6efd;">' + emailText + '</span>'

 

  const handlePaymentDone = (e) => {
    e.preventDefault();
    return swal({
      // text: `Celebrity.sg Team will contact you.If you do not receive an email within 24 hours please email to support@celebrity.sg`,
      content: content,
      icon: "warning",
      button: "OK",
      dangerMode: true,
      className: "modal_class_success",
    });
  }

  const handleHome = (e) => {
    e.preventDefault();
    navigate("/");
  }


  let content2 = document.createElement("p");
  content2.innerHTML = 'Please send the payment printscreen to <span style="color: #0d6efd;">' + emailText + '</span> once payment is made.'

  const handlePaymentLater = (e) => {
    e.preventDefault();
    return swal({
      content: content2,
      icon: "warning",
      button: "OK",
      dangerMode: true,
      className: "modal_class_success",
    });
  }

  return (
    <div className=' ' style={{ backgroundColor: '#1A1A25' }}>
      <div>
        <h3 className="text-gradient text-center pt-5 text-uppercase" style={{ marginTop: '80px' }}>Pay by PAYNOW</h3>
        <div className="small-border bg-color-2"></div>
      </div>

      <div className="img_div mb-2">

        <img style={{ width: "30%" }} src="https://i.ibb.co/BrwYNqt/qrPaynow.png" alt="" />
      </div>
      <h6 className='text-center mb-0 payTexts text-white pb-5'>Scan the PayNow QR code and pay SGD {price}</h6>
      <div className="companyDetails">
        <p><span className='text-primary'>Company Name:</span> DS Legends Pte Ltd</p>
        <div className="d-flex">
        <p><span className='text-primary'>UEN No:</span> 202133450W</p>
        <button type="button" onClick={() => copyToClipboard("202133450W")} className="paynowBTNC">
        <FontAwesomeIcon icon={faCopy} />
        </button>
        </div>
        <div className="d-flex">
        <p className='text-center'><span className='text-primary'>Bill Reference No:</span> {email.toLocaleLowerCase()}</p>
        <button type="button" onClick={() => copyToClipboard(email.toLocaleLowerCase())} className="paynowBTNC">
        <FontAwesomeIcon icon={faCopy} />
        </button>
        </div>
      </div>

      <div className="buttonDiv">
        <p className='mb-3'><button className='paynowPaidButton' onClick={handlePaymentDone}>I have already paid</button></p>
        <p className='mb-3'><button className='paynowLaterPaidButton' onClick={handlePaymentLater}>I will pay later</button></p>
        <p className='mb-3'><button className='paynowPaidButton bg-danger' onClick={handleHome}>Home</button></p>

      </div>

    </div>
  );
};

export default PayNowPayment;
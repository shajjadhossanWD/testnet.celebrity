import React, { useContext } from 'react';
import './Profile.css';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { Link, useNavigate } from 'react-router-dom';
import { CelebrityContext } from '../../../context/CelebrityContext';
import swal from 'sweetalert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const { user, logOut, metamaskBalance } = useContext(CelebrityContext);
  const navigate = useNavigate();

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied!")
  }

  console.log(metamaskBalance)

  const LogOut = () => {
    logOut();
    navigate("/")
    swal({
      title: "Success",
      text: "You have successfully logged out",
      icon: "success",
      button: "OK",
      className: "modal_class_success",
    });
  }

  return (
    <div className='handleTheProfileBody'>
      <div className="container pt-3 text-white">
        <h3 className='mb-4 ms-2 ms-md-0'>Profile</h3>
        <form className='shadow-lg rounded-lg py-5 px-4 p-md-5 align-items-center' >
          <div className='row' style={{ rowGap: "10px" }}>
            <div className='col-md-6 px-4'>
              <div className="mb-2">
                <label htmlFor='walletAddress'>Wallet Address</label>
                <input type="text" id='walletAddress' name="walletAddress" value={user?.walletAddress} className='form-control bg-transparent text-white' disabled />
              </div>
              <div className="mb-2">
                <label htmlFor='usdsc'>USDSC in wallet</label>
                <input type="text" id='usdsc' name="usdsc" value={metamaskBalance?.usdsc && parseFloat(metamaskBalance?.usdsc).toFixed(4)} className='form-control bg-transparent text-white' disabled />
              </div>
              <div className="mb-2">
                <label htmlFor='bnb'>BNB in wallet</label>
                <input type="text" id='bnb' name="bnb" value={metamaskBalance?.bnb && parseFloat(metamaskBalance?.bnb).toFixed(4)} className='form-control bg-transparent text-white' disabled />
              </div>
              <div className="mb-2">
                <label htmlFor='bnb'>DSL in wallet</label>
                <input type="text" id='bnb' name="bnb" value={metamaskBalance?.dsl && parseFloat(metamaskBalance?.dsl).toFixed(4)} className='form-control bg-transparent text-white' disabled />
              </div>
              <div className="mb-2">
                <label htmlFor='bnb'>S39 in wallet</label>
                <input type="text" id='bnb' name="bnb" value={metamaskBalance?.s39 && parseFloat(metamaskBalance?.s39).toFixed(4)} className='form-control bg-transparent text-white' disabled />
              </div>

            </div>
            <div className='col-md-6 px-4'>
              <div className="mb-2">
                <label htmlFor='referralID'>Referral ID</label>
                <div className='d-flex'>
                  <input type="text" id='referralID' name="referralID" value={user?.myReferralCode} className='form-control bg-transparent text-white' disabled />
                  <button type="button" onClick={() => copyToClipboard(user?.myReferralCode)} className="border bg-success">
                    <FontAwesomeIcon icon={faCopy} />
                  </button>
                </div>
              </div>

              <div className="mb-2">
                <label htmlFor='referralID'>Affiliate Link</label>
                <div className="d-flex">
                  <input type="text" id='referralID' name="referralID" value={window.location.origin + "/" + user?.myReferralCode} className='form-control bg-transparent text-white' disabled />
                  <button type="button" onClick={() => copyToClipboard(window.location.origin + "/" + user?.myReferralCode)} className="border bg-success">
                    <FontAwesomeIcon icon={faCopy} className='' />
                  </button>

                </div>
              </div>
              <div className="mb-2 social-div">
                <div>
                  <label className=''>Share Affiliate Link</label>
                  <div className='d-flex gap-2 mt-1'>
                    {/* <FacebookShareButton url={window.location.origin + "/dapps/" + user?.myReferralCode} quote={`Get USDSC now! You can swap to BUSD anytime. When the stability increases, you can get 1.05 times in terms of BUSD. Use my referral code to get 50% discount in service charges. My Referral Code is ${user?.myReferralCode}`}>
                                        <FacebookIcon size={40} round={true} />
                                    </FacebookShareButton> */}
                    <TwitterShareButton url={window.location.origin + "/" + user?.myReferralCode} title={``}>
                      <TwitterIcon size={40} round={true} />
                    </TwitterShareButton>
                    <LinkedinShareButton url={window.location.origin + "/" + user?.myReferralCode} summary={``}>
                      <LinkedinIcon size={40} round={true} />
                    </LinkedinShareButton>
                    <WhatsappShareButton url={window.location.origin + "/" + user?.myReferralCode} title={``}>
                      <WhatsappIcon size={40} round={true} />
                    </WhatsappShareButton>

                  </div>
                </div>
              </div>

            </div>
            <div className='col-6 text-center'>
              <Link to="/" className='btn btn-danger'>Cancel</Link>
            </div>
            <div className='col-6 text-center'>
              <button className='btn btn-danger' type='button' onClick={LogOut}>Logout</button>
            </div>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Profile;
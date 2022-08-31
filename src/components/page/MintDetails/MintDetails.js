import React from 'react';
import { useParams } from 'react-router-dom';
import "./MintDetails.css";

const MintDetails = () => {
  const { id, address } = useParams();
  console.log(id, address);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied!")
  }

  var newDate = new Date();
  let dd = String(newDate.getDate()).padStart(2, '0');
  let mm = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = newDate.getFullYear();
  let hh = newDate.getHours();
  let min = newDate.getMinutes();
  let ss = newDate.getSeconds();
  newDate = dd + '/' + mm + '/' + yyyy + '  ' + hh + ':' + min + ':' + ss;

  const copyAllToClipboard = (id, address, time) => {
    // console.log(id + address + time)
    navigator.clipboard.writeText(id + address + time);
    alert("Copied!")
  }




  return (
    <div className='mintDetails'>
      <div className="container pb-3 pt-2 text-white">
        <h3 className='mb-3 ms-2 ms-md-0'>Information of Minted NFT</h3>
        <div className=' px-4'>
          <div className="mb-2">
            <label htmlFor='referralID'>Contract Address</label>
            <div className='d-flex'>
              <input type="text" id='referralID' value={address} name="referralID" className='form-control bg-transparent text-white' disabled />
              <button type="button" onClick={() => copyToClipboard("Contract Address:"+ " " + address)} className="border"><i className="fa-regular fa-copy"></i></button>
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor='referralID'>Token ID</label>
            <div className="d-flex">
              <input type="text" id='referralID' name="referralID" defaultValue={id} className='form-control bg-transparent text-white' disabled />
              <button type="button" onClick={() => copyToClipboard("Token ID:"+ " " + id)} className="border"><i className="fa-regular fa-copy"></i></button>
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor='referralID'>Timestamp</label>
            <div className="d-flex">
              <input type="text" id='referralID' name="referralID" value={newDate} className='form-control bg-transparent text-white' disabled />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3 mb-3">
            {/* <button type="button" onClick={() => copyToClipboard(id)} className="border">Copy All</button> */}
            <button type="button" onClick={() => copyToClipboard("Contract Address:"+ " " + address + " " + " " + " Token ID:"+ " " + id )}  className="border button-18">COPY ALL<i className="fa-regular fa-copy text-light ps-1"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintDetails;
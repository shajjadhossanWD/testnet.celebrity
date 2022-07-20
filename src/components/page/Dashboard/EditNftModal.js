import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsExclamationOctagon } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./EditNftModal.css";

const EditNftModal = (props) => {
  const navigate = useNavigate();
  const handleGoToEditNft = () => {
    navigate("/dashboard/dnfts/editNft");
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modal-wrap">
        <div className="mb-4">
          <BsExclamationOctagon size={64} color={"#c0392b"} />
        </div>
        <p>Are you sure? You are going to change this NFT.</p>
        <div className="mt-5 edit-nft-modal-buttons">
          <Button className="modal-cancel-button me-2" onClick={props.onHide}>Cancel</Button>
          <Button onClick={handleGoToEditNft} className="modal-ok-button ms-2">
            OK
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default EditNftModal;

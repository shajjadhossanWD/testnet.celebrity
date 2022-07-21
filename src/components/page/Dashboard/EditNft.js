import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "./EditNft.css";

const EditNft = () => {
  // form submit funtion
  const onSubForm = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ width: "100%", marginLeft: "0" }}>
      <h4
        style={{
          fontSize: "1.125rem",
          marginLeft: "16px",
          fontWeight: "600",
          color: "#ecf0f1",
        }}
      >
        Update NFT
      </h4>
      <div className="edit-nft-card">
        <div className="edit-nft-card-contents">
          <div className="edit-nft-card-content-one">
            <img
              src="https://i.ibb.co/DL1Ynmh/Whats-App-Image-2022-07-20-at-2-53-47-PM.jpg"
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          </div>
          <div className="edit-nft-card-content-two">
            <div style={{ backgroundColor: "#272d47", color: "white" }}>
              <form onSubmit={onSubForm}>
                <label className="mb-1">NFT</label>
                <input
                  type="file"
                  className="border w-100 rounded mb-3"
                  name="fileTake"
                  style={{ backgroundColor: "#272d47", color: "white" }}
                  required
                />
                <label className="mb-1">NFT Title</label>
                <input
                  type="text"
                  className="border w-100 rounded mb-3"
                  style={{ backgroundColor: "#272d47", color: "white" }}
                  required
                />
                <label className="mb-1">NFT Description</label>
                <textarea
                  type="text"
                  className="border w-100 rounded mb-3"
                  style={{ backgroundColor: "#272d47", color: "white" }}
                  required
                />
                <InputGroup
                  className="mb-3"
                  style={{ backgroundColor: "#272d47", color: "white" }}
                >
                  <InputGroup.Text
                    style={{ backgroundColor: "#272d47", color: "white" }}
                  >
                    Token
                  </InputGroup.Text>
                  <Form.Select
                    aria-label="Default select example"
                    // className="me-3"
                    style={{ backgroundColor: "#272d47", color: "white" }}
                  >
                    <option>Select token</option>
                    <option value="1">BTC BITCOIN</option>
                    <option value="2">LTC LITECOIN</option>
                    <option value="3">EOS-EOS</option>
                  </Form.Select>
                </InputGroup>
                <InputGroup
                  className="mb-3"
                  style={{ backgroundColor: "#272d47", color: "white" }}
                >
                  <InputGroup.Text
                    // className="ms-3"
                    style={{ backgroundColor: "#272d47", color: "white" }}
                  >
                    $
                  </InputGroup.Text>
                  <Form.Control
                    aria-label="Amount (to the nearest dollar)"
                    style={{ backgroundColor: "#272d47", color: "white" }}
                  />
                </InputGroup>
                <InputGroup
                  className="mb-3"
                  style={{ backgroundColor: "#272d47", color: "white" }}
                >
                  <InputGroup.Text
                    style={{ backgroundColor: "#272d47", color: "white" }}
                  >
                    Countdown
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="7/26/2022"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="date"
                    // className="me-3"
                    style={{ backgroundColor: "#272d47", color: "white" }}
                  />
                </InputGroup>
                <InputGroup
                  className="mb-3"
                  style={{ backgroundColor: "#272d47", color: "white" }}
                >
                  <Form.Select
                    aria-label="Default select example"
                    // className="ms-3"
                    style={{ backgroundColor: "#272d47", color: "white" }}
                  >
                    <option>Select category</option>
                    <option value="1">Art</option>
                    <option value="2">Music</option>
                    <option value="3">Video</option>
                  </Form.Select>
                </InputGroup>
                <hr />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                >
                  <Button type="submit" className="edit-nft-update-button">
                    Update
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditNft;

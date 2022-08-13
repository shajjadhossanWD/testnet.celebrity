import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import "./EditNft.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

const EditNft = () => {
  const [Nfts, setNfts] = React.useState([]);
  const { id } = useParams();
  const navigate = useNavigate();


  var newDate = new Date();
  let dd = String(newDate.getDate()).padStart(2, '0');
  let mm = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = newDate.getFullYear();
  let hh = newDate.getHours();
  let min = newDate.getMinutes();
  let ss = newDate.getSeconds();

  if (min < 10) {
    newDate = dd + '/' + mm + '/' + yyyy + '  ' + hh + ':' + 0 + min + ':' + ss;

  } else {
    newDate = dd + '/' + mm + '/' + yyyy + '  ' + hh + ':' + min + ':' + ss;
  }

  useEffect(() => {
    axios.get(`https://backend.celebrity.sg/api/nft/${id}`)
      .then(res => {
        setNfts(res.data.nft);
        console.log(res.data.nft)
      })
  }, [id])

  // form submit funtion
  const onSubForm = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const price = e.target.price.value;
    const description = e.target.description.value;
    const type = e.target.type.value;
    const avatar = e.target.avatar.files[0];


    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('type', type);
    formData.append('date', newDate);
    formData.append('image', avatar);

    axios.put(`https://backend.celebrity.sg/api/nft/update-nft/${Nfts._id}`, formData)
      .then(res => {
        if (res.status === 200) {
          // alert(res.data.message);
          swal({
            title: "Success",
            text: `${res.data.message}`,
            icon: "success",
            button: "OK!",
            className: "modal_class_success",
          });
          setNfts(res.data.nft);
          navigate("/dashboard/nfts")
        }
      })
      .catch(err => {
        alert(err.response.data.message);
      })


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
              src={Nfts.avatar}
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
                  name="avatar"
                  style={{ backgroundColor: "#272d47", color: "white" }}
                />
                <label className="mb-1">NFT Name</label>
                <input
                  type="text"
                  className="border w-100 rounded mb-3"
                  name="name"
                  defaultValue={Nfts.name}
                  style={{ backgroundColor: "#272d47", color: "white" }}

                />

                <label className="mb-1">NFT Price</label>
                <input
                  type="text"
                  className="border w-100 rounded mb-3"
                  name="price"
                  defaultValue={Nfts.price}
                  style={{ backgroundColor: "#272d47", color: "white" }}

                />
                <label className="mb-1">NFT Description</label>
                <textarea
                  type="text"
                  name="description"
                  defaultValue={Nfts.description}
                  className="border w-100 rounded mb-3"
                  style={{ backgroundColor: "#272d47", color: "white" }}
                />
                <InputGroup
                  className="mb-3"
                  style={{ backgroundColor: "#272d47", color: "white" }}
                >
                  <InputGroup.Text
                    style={{ backgroundColor: "#272d47", color: "white" }}
                  >
                    Timestamp
                  </InputGroup.Text>
                  <Form.Control
                    aria-describedby="basic-addon1"
                    type="text"
                    value={newDate}
                    style={{ backgroundColor: "#272d47", color: "white" }}
                  />
                </InputGroup>
                <InputGroup
                  className="mb-3"
                  style={{ backgroundColor: "#272d47", color: "white" }}
                >
                  <Form.Select
                    aria-label="Default select example"
                    style={{ backgroundColor: "#272d47", color: "white" }}
                    name="type"
                  >
                    <option>{Nfts.type}</option>
                    <option value="Celebrity Souvenir NFTs">Celebrity Souvenir NFTs</option>
                    <option value="Celebrity Meal NFTs">Celebrity Meal NFTs</option>
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
                  <Button type="submit" className="edit-nft-update-button text-uppercase">
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

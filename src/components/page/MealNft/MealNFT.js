import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { Fragment, useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CelebrityContext } from "../../../context/CelebrityContext";

const MealNFT = () => {
  const [isMeal, setIsMeal] = useState([]);
  const [allAvailable, setAllAvailable] = useState([]);
  const { openWalletModal, user } = useContext(CelebrityContext);

  const allNft = isMeal;
  const todayDate = new Date();

  useEffect(() => {
    axios.get("https://backend.celebrity.sg/api/v1/mint/mint-nft")
      .then(res => {
        setAllAvailable(res.data);
      });
  }, [])

  useEffect(() => {
    axios.get("https://backend.celebrity.sg/api/nft/allmeal")
      .then(res => {
        const filtering = res.data.nft.filter(items => items.isDraft === false && new Date(`${items?.purchaseDate.slice(5, 7)}/${items?.purchaseDate.slice(8, 10)}/${items?.purchaseDate.slice(0, 4)}`) > todayDate);
        setIsMeal(filtering);
        // setFilterData(res.data.slice(0, 5))
      });
  }, [isMeal])

  const likess = localStorage.getItem("like");







  // like functionality
  const likeNft = (id) => {
    console.log("inside like");
    if (!user.walletAddress || user.walletAddress === "undefined") {
      openWalletModal();
    } else {
      console.log(id)
      fetch('https://backend.celebrity.sg/api/nft/like', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          nftId: id,
          walletAddress: user?.walletAddress
        })
      }).then(res => res.json())
        .then(result => {
          console.log(result)
          const newNft = isMeal?.map(data => {
            if (data._id == result._id) {
              return result
            } else {
              return data
            }
          })
          setIsMeal(newNft)

        }).catch(err => {
          console.log(err)
        })
    }
  }
  const unlikeNft = (id) => {
    console.log("inside unlike");
    if (!user.walletAddress || user.walletAddress === "undefined") {
      openWalletModal();
    } else {
      console.log(id)
      fetch('https://backend.celebrity.sg/api/nft/unlike', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          nftId: id,
          walletAddress: user?.walletAddress
        })
      }).then(res => res.json())
        .then(result => {
          // console.log(result)
          const newNft = isMeal?.map(data => {
            if (data._id == result._id) {
              return result
            } else {
              return data
            }
          })
          setIsMeal(newNft)

        }).catch(err => {
          console.log(err)
        })
    }
  }


  return (
    <Fragment>
      <Box className="souvenirNFT_Box" id="Meal">
        <div style={{ backgroundColor: '#1A1A25' }}>
          <h1 style={{ marginTop: '80px' }} className='text-gradient text-center pt-5'>Celebrity Meal NFTs</h1>
        </div>
        <Container className="SouvenirNFT_card row pt-2 ">
          {
            allNft?.map((data, idx) => (
              <div key={{ idx }} className="col-sm-12 col-md-4 col-lg-3 d-flex" style={{ justifyContent: 'center' }}>
                <div class="card">
                  <div
                    onClick={() => data.likes?.includes(user?.walletAddress) ? unlikeNft(data?._id) : likeNft(data?._id)}

                    className="nft_item_like like_card">
                    <i className={`fa fa-heart ${data?.likes?.includes(user?.walletAddress) && "heart-icon"}`}></i>
                    <span style={{ marginBottom: '2.2px' }}>

                      {data?.likes?.length}
                    </span>
                  </div>
                  <div class="card-img" style={{ backgroundImage: `url(${data.avatar})` }}>
                    <div class="overlay d-grid " style={{ alignContent: 'center', justifyItems: 'center' }}>
                      <div className="d-flex card_hover_icon">
                        <Link to={`/mealnft/${data?._id}/${data?.imageName}`}><button className="card_hover_button mt-5" href="#!">BUY NOW</button></Link>
                      </div>
                    </div>
                  </div>
                  <div class="card-content">
                    <div className="row" style={{ minHeight: '250px' }}>
                      {/* <Typography className="mt-2" variant="body2">
                        <span className="text-primary">Type of NFT :</span> {data?.type}
                      </Typography> */}

                      <Typography className="mt-2 slider_nft_text" variant="div">
                        <span className="text-primary">Name of NFT :</span> {data?.name}
                      </Typography>

                      <Typography className="mt-2" variant="body2">
                        <span className="text-primary">Price of NFT(SGD):</span> {data.price}
                      </Typography>

                      {/* <Typography className="mt-2" variant="body2">
                        <span className="text-primary">Available NFTs: <span className="text-light">{data?.availableNfts - allAvailable.length}</span></span>
                      </Typography> */}
                      <Typography className="mt-2" variant="body2">
                        <span className="text-primary">Date:</span> {`${data?.startDate.slice(8, 10)}/${data?.startDate.slice(5, 7)}/${data?.startDate.slice(0, 4)}`}
                      </Typography>
                      <Typography className="mt-2" variant="body2">
                        <span className="text-primary">Start Time:</span> {data?.startTime} SGT
                      </Typography>

                      <Typography className="mt-2" variant="body2">
                        <span className="text-primary">End Time:</span> {data?.endTime} SGT
                      </Typography>

                      <Typography className="mt-2 mb-1 slider_nft_text" variant="div">
                        <span className="text-primary">Venue:</span> {data?.venue}
                      </Typography>
                    </div>
                    <hr style={{ margin: "10px 0px 10px 0px" }} />
                    <div className="d-flex card_bottom_btn_main" style={{ margin: '15px 0 8px 0' }}>
                      <div className="col-6 d-grid me-2">
                        <Link to={`/mealnft/${data?._id}/${data?.imageName}`} className="d-grid"> <button className="card_button2 bg-success" href="#!">PAY BY CRYPTO</button> </Link>
                      </div>
                      <div className="col-6 d-grid">
                        <Link to={`/paynow/${data?._id}/${data?.imageName}`} className="d-grid"> <button className="card_button2 bg-primary" href="#!">PAY BY PAYNOW </button> </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }

        </Container>
        <div className='d-flex' style={{ justifyContent: 'center' }}>
          {isMeal?.length > 0 ?
            <Typography variant="h6" style={{ color: '#d0d7c2', fontSize: "16px", marginTop: "1rem" }}>
              Pay by DSL and get 30% discount.
            </Typography>
            :
            <Typography variant="h6" style={{ color: '#d0d7c2', fontSize: "16px", marginTop: "1rem" }}>
              Stay Tuned!
            </Typography>}
        </div>
      </Box>
    </Fragment>
  );
};

export default MealNFT;
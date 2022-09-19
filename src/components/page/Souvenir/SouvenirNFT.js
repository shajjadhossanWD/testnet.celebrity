import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";


const SouvenirNFT = () => {
  const [isSouvenir, setSouvenir] = useState([])
  useEffect(() => {
    axios.get("https://backend.celebrity.sg/api/nft/allsouvenir")
      .then(res => {
        setSouvenir(res.data.nft.slice(0, 4))
      });
  }, [])

  return (
    <Fragment>
      <Box className="souvenirNFT_Box" id="Souvenir">
        <div style={{ backgroundColor: '#1A1A25' }}>
          <h1 style={{ marginTop: '80px' }} className='text-gradient text-center pt-5 text-uppercase'>Souvenir NFT</h1>
        </div>
        <Container className="SouvenirNFT_card row pt-2">
          {
            isSouvenir?.map((data, idx) => (
              <div key={{ idx }} className="col-sm-12 col-md-4 col-lg-3 p-2 d-flex" style={{ justifyContent: 'center' }}>
                <div class="card">
                  <div className="nft__item_like like_card">
                    <i className="fa fa-heart"></i>
                    <span>{data?.__v}</span>
                  </div>
                  <div class="card-img" style={{ backgroundImage: `url(${data?.avatar})` }}>
                    <div class="overlay d-grid " style={{ alignContent: 'center', justifyItems: 'center' }}>
                      {/* <div className="d-flex card_hover_icon">
                        <a className="card_icon_bg" target="_blank" rel="noopener noreferrer ">
                          <i className="fa-brands fa-linkedin-in icons" ></i>
                        </a>
                        <a className="card_icon_bg" target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-twitter icons"></i>
                        </a>
                      </div>
                      <div className="d-flex card_hover_icon">
                        <a className="card_icon_bg" target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-facebook-f icons"></i>
                        </a>
                        <a className="card_icon_bg" target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-instagram icons"></i>
                        </a>
                        <a className="card_icon_bg" href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io">
                          <i className="fa fa-envelope fa-lg"  ></i>
                        </a>
                      </div> */}
                      <Link to={`/souvenirnft/${data?._id}`}><button className="card_hover_button mt-5" href="#!">BUY NOW</button></Link>
                    </div>
                  </div>
                  <div class="card-content">
                    <div className="row">
                      <a href="#!">
                        <Typography variant="body2">
                          Name Of NFT : {data?.name} <span></span>
                        </Typography>
                      </a>
                      <Typography variant="body2">
                        Type Of NFT : {data?.type} <span></span>
                      </Typography>
                      <Typography variant="body2">
                        Price Of NFT(SGD): {data?.price}<span> </span>
                      </Typography>
                      <Typography variant="body2">
                        Details: <Link to={`/souvenirnft/${data?._id}`} classsName="clickHere"> For more details click here </Link>
                      </Typography>
                    </div>
                    <hr style={{ margin: "10px 0px 10px 0px" }} />
                    <div className="d-flex card_bottom_btn_main">
                      <div className="col-10 d-grid">
                        <Link to={`/souvenirnft/${data?._id}`} className="d-grid"> <button className="card_button" href="#!">BUY THIS NFT</button> </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </Container>
        <div className='d-flex' style={{ justifyContent: 'center' }}>
          {isSouvenir?.length > 0 ?
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

export default SouvenirNFT;

{/* <Box className="d-item1 ">
<div className="nft__item style-2"> 
  <div className="nft__item_wrap">
    <div className="nft__item_extra">
      <div className="nft__item_buttons">
        <button>Buy Now</button>
        <Typography variant="subtitle2" gutterBottom >
                             Share
                           </Typography> 
        <div className="nft__item_share">
          <Typography variant="subtitle2" gutterBottom >
            Share
          </Typography> 
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io"
            target="_blank"
          >
            <i className="fa fa-facebook fa-lg"></i>
          </a>
          <a
            href="https://twitter.com/intent/tweet?url=https://gigaland.io"
            target="_blank"
          >
            <i className="fa fa-twitter fa-lg"></i>
          </a>
          <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io">
            <i className="fa fa-envelope fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
    <a href="03_grey-item-details.html">
      <div className="d-placeholder"></div>
      <img
        src="https://i.ibb.co/HdR7nSP/logo-6.jpgs"
        className="lazy nft__item_preview"
        alt=""
      />
    </a>
  </div>
  <div className="nft__item_info">
    <a className="textDect" href="03_grey-item-details.html">
     <Typography variant="subtitle1">
        Name of <span>NFT</span>
     </Typography> 
    </a>
    <div className="nft__item_click">
      <span></span>
    </div>
    <div className="nft__item_price">
       <Typography variant="body2">
         Type of <span>NFT</span>
       </Typography> 
    </div>  
    <div className="nft__item_price">
       <Typography variant="body2">
       Price:<span>SGD 1000</span>
       </Typography> 
    </div>
    <div className="nft__item_price">
      Details:<span></span>
    </div> 
    <div className="nft__item_action textDect">
      <a className="textDect" href="#">Place a bid</a>
    </div>
    <div className="nft__item_like">
      <i className="fa fa-heart"></i>
      <span>80</span>
    </div>
  </div>
</div>
</Box>  */}
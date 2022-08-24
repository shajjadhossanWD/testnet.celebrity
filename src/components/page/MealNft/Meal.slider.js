import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const MealSlider = ({ pull_meal }) => {
  const [isMeal, setIsMeal] = useState([])

  const allNft = isMeal.nft;

  useEffect(() => {
    axios.get("https://backend.celebrity.sg/api/nft/allmeal")
      .then(res => {
        setIsMeal(res.data);
        // setFilterData(res.data.slice(0, 5))
      });
  }, [isMeal])

  

  // props.func(allNft);





  let settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings} className="gap-2">
        {allNft?.map((aNft) => (<div key={aNft?._id} className="d-item1">
          <div class="card">
            <div className="nft__item_like like_card">
              <i className="fa fa-heart"></i>
              <span>{aNft?.__v}</span>
            </div>
            <div class="card-img" style={{ backgroundImage: `url(${aNft?.avatar})` }}>
              <div class="overlay d-grid " style={{ alignContent: 'center', justifyItems: 'center' }}>
                {/* <div className="d-flex card_hover_icon">
                       <a className="card_icon_bg" target="_blank"  rel="noopener noreferrer "> 
                           <i className="fa-brands fa-linkedin-in icons" ></i> 
                       </a>    
                       <a className="card_icon_bg" target="_blank"  rel="noopener noreferrer"> 
                           <i className="fa-brands fa-twitter icons"></i> 
                      </a>    
                      </div>
                      <div  className="d-flex card_hover_icon">
                        <a className="card_icon_bg" target="_blank"   rel="noopener noreferrer"> 
                           <i className="fa-brands fa-facebook-f icons"></i> 
                       </a>  
                       <a className="card_icon_bg" target="_blank"   rel="noopener noreferrer"> 
                           <i className="fa-brands fa-instagram icons"></i>  
                       </a>   
                       <a className="card_icon_bg" href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io">
                         <i className="fa fa-envelope fa-lg"  ></i>
                        </a>
                       </div> */}
                <Link to={`/mealnft/${aNft?._id}`}><button className="card_hover_button mt-5" href="#!">BUY THIS NFT FOR SGD {aNft?.price}</button></Link>
              </div>
            </div>
            <div class="card-content">
              <div className="row">
                <Typography className="mt-2" variant="body2">
                  <span className="text-primary">Type of NFT :</span> {aNft?.type}
                </Typography>
                <a href="#!">
                  <Typography className="mt-1" variant="body2">
                    <span className="text-primary">Name of NFT :</span> {aNft?.name}
                  </Typography>
                </a>
                <Typography className="mt-2" variant="body2">
                  <span className="text-primary">Price of NFT(SGD):</span> {aNft?.price}
                </Typography>
                <Typography className="mt-2" variant="body2">
                  <span className="text-primary">Available NFTs: <span className="text-light">{aNft?.availableNfts}</span></span>
                </Typography>
                {/* <Typography className="mt-2" variant="body2">
                  Details: <Link to={`/mealnft/${aNft?._id}`} classsName="clickHere"> For more details click here </Link>
                </Typography> */}
                <Typography className="mt-2" variant="body2">
                  <span className="text-primary">Date:</span> {`${aNft?.startDate.slice(8, 10)}/${aNft?.startDate.slice(5, 7)}/${aNft?.startDate.slice(0, 4)}`}
                </Typography>
                <Typography className="mt-2" variant="body2">
                  <span className="text-primary">Start Time:</span> {aNft?.startTime}
                </Typography>
                <Typography className="mt-2" variant="body2">
                  <span className="text-primary">End Time:</span> {aNft?.endTime}
                </Typography>
                <Typography className="mt-2 mb-1" variant="body2">
                  <span className="text-primary">Venue:</span> {aNft?.venue}
                </Typography>
              </div>
              <hr style={{ margin: "10px 0px 10px 0px" }} />
              <div className="d-flex card_bottom_btn_main">
                <div className="col-10 d-grid">
                  <Link to={`/mealnft/${aNft?._id}`} className="d-grid"> <button className="card_button" href="#!">BUY THIS NFT at SGD {aNft?.price}</button> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>))}
      </Slider>

      <div className='d-flex' style={{ justifyContent: 'center' }}>

        {allNft?.length > 0 ?
          <Typography variant="h6" style={{ color: '#d0d7c2', fontSize: "16px", marginTop: "1rem" }}>
            Pay by DSL and get 30% discount.
          </Typography>
          :
          <Typography variant="h6" style={{ color: '#d0d7c2', fontSize: "16px", marginTop: "1rem" }}>
            Stay Tuned!
          </Typography>}
      </div>
      <p className="text-gradient text-center fs-4 pt-4">No of NFTs available: 50</p>
    </div>
  );
};

export default MealSlider;
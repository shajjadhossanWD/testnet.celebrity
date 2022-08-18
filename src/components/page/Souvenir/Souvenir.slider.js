import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";


function SouvenirSlider({ pull_souvenir }) {
  const [isSouvenir, setSouvenir] = useState([])
  console.log(pull_souvenir);

  const allNft = isSouvenir.nft;

  useEffect(() => {
    axios.get("https://backend.celebrity.sg/api/nft/allsouvenir")
      .then(res => {
        setSouvenir(res.data);
        // setFilterData(res.data.slice(0, 5))
      });
  }, [isSouvenir])

  // props.func(allNft);


  var settings = {
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
          dots: false
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
                <Link to={`/souvenirnft/${aNft?._id}`}><button className="card_hover_button mt-5" href="#!">BUY NOW</button></Link>
              </div>
            </div>
            <div class="card-content">
              <div className="row">
                <a href="#!">
                  <Typography variant="body2">
                    Name Of NFT : {aNft?.name} <span></span>
                  </Typography>
                </a>
                <Typography variant="body2">
                  Type Of NFT : {aNft?.type} <span></span>
                </Typography>
                <Typography variant="body2">
                  Price Of NFT(SGD): {aNft?.price}<span> </span>
                </Typography>
                <Typography variant="body2">
                  Details: <Link to={`/souvenirnft/${aNft?._id}`} classsName="clickHere"> For more details click here </Link>
                </Typography>
              </div>
              <hr style={{ margin: "10px 0px 10px 0px" }} />
              <div className="d-flex card_bottom_btn_main">
                <div className="col-10 d-grid">
                  <Link to={`/souvenirnft/${aNft?._id}`} className="d-grid"> <button className="card_button" href="#!">BUY THIS NFT</button> </Link>
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
    </div>

  )
}

export default SouvenirSlider

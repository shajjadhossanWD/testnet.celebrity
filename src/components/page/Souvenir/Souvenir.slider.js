import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";


function SouvenirSlider() {
  const [isSouvenir, setSouvenir] = useState([])

  useEffect(() => {
    axios.get("/souvenir.json")
      .then(res => {
        setSouvenir(res.data);
        // setFilterData(res.data.slice(0, 5))
      });
  }, [isSouvenir])

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
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <Slider {...settings} className="gap-2">
        <div className="d-item1">
          <div class="card">
            <div className="nft__item_like like_card">
              <i className="fa fa-heart"></i>
              <span>50</span>
            </div>
            <div class="card-img" style={{ backgroundImage: `url(https://i.ibb.co/HdR7nSP/logo-6.jpg)` }}>
              <div class="overlay d-grid " style={{ alignContent: 'center', justifyItems: 'center' }}>
                <div className="d-flex card_hover_icon">
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
                </div>
              </div>
            </div>
            <div class="card-content">
              <div className="row">
                <a href="#!">
                  <Typography variant="body2">
                    Name Of NFT : Celebrity Souvenir NFT <span></span>
                  </Typography>
                </a>
                <Typography variant="body2">
                  Type Of NFT : Celebrity Souvenir NFT <span></span>
                </Typography>
                <Typography variant="body2">
                  Price Of NFT(SGD): 3000<span> </span>
                </Typography>
                <Typography variant="body2">
                  Details: <Link to={`/souvenirnft/souvenir_01`} classsName="clickHere"> For more details click here </Link>
                </Typography>
              </div>
              <hr style={{ margin: "10px 0px 10px 0px" }} />
              <div className="d-flex card_bottom_btn_main">
                <div className="col-10 d-grid">
                  <Link to={`/souvenirnft/souvenir_01`} className="d-grid"> <button className="card_button" href="#!">BUY THIS NFT</button> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-item1">
          <div class="card">
            <div className="nft__item_like like_card">
              <i className="fa fa-heart"></i>
              <span>60</span>
            </div>
            <div class="card-img" style={{ backgroundImage: `url(https://i.ibb.co/HdR7nSP/logo-6.jpg)` }}>
              <div class="overlay d-grid " style={{ alignContent: 'center', justifyItems: 'center' }}>
                <div className="d-flex card_hover_icon">
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
                </div>
              </div>
            </div>
            <div class="card-content">
              <div className="row">
                <a href="#!">
                  <Typography variant="body2">
                    Name Of NFT : Celebrity Souvenir NFT <span></span>
                  </Typography>
                </a>
                <Typography variant="body2">
                  Type Of NFT : Celebrity Souvenir NFT <span></span>
                </Typography>
                <Typography variant="body2">
                  Price Of NFT(SGD): 3000<span> </span>
                </Typography>

                <Typography variant="body2">
                  Details: <Link to={`/souvenirnft/souvenir_02`} classsName="clickHere"> For more details click here </Link>
                </Typography>
              </div>
              <hr style={{ margin: "10px 0px 10px 0px" }} />
              <div className="d-flex card_bottom_btn_main">
                <div className="col-10 d-grid">
                  <Link to={`/souvenirnft/souvenir_02`} className="d-grid"> <button className="card_button" href="#!">BUY THIS NFT</button> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-item1">
          <div class="card">
            <div className="nft__item_like like_card">
              <i className="fa fa-heart"></i>
              <span>80</span>
            </div>
            <div class="card-img" style={{ backgroundImage: `url(https://i.ibb.co/HdR7nSP/logo-6.jpg)` }}>
              <div class="overlay d-grid " style={{ alignContent: 'center', justifyItems: 'center' }}>
                <div className="d-flex card_hover_icon">
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
                </div>
              </div>
            </div>
            <div class="card-content">
              <div className="row">
                <a href="#!">
                  <Typography variant="body2">
                    Name Of NFT : Celebrity Souvenir NFT <span></span>
                  </Typography>
                </a>
                <Typography variant="body2">
                  Type Of NFT : Celebrity Souvenir NFT <span></span>
                </Typography>
                <Typography variant="body2">
                  Price Of NFT(SGD): 3000<span> </span>
                </Typography>
                <Typography variant="body2">
                  Details: <Link to={`/souvenirnft/souvenir_03`} classsName="clickHere"> For more details click here </Link>
                </Typography>
              </div>
              <hr style={{ margin: "10px 0px 10px 0px" }} />
              <div className="d-flex card_bottom_btn_main">
                <div className="col-10 d-grid">
                  <Link to={`/souvenirnft/souvenir_03`} className="d-grid"> <button className="card_button" href="#!">BUY THIS NFT</button> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-item1">
          <div class="card">
            <div className="nft__item_like like_card">
              <i className="fa fa-heart"></i>
              <span>90</span>
            </div>
            <div class="card-img" style={{ backgroundImage: `url(https://i.ibb.co/HdR7nSP/logo-6.jpg)` }}>
              <div class="overlay d-grid " style={{ alignContent: 'center', justifyItems: 'center' }}>
                <div className="d-flex card_hover_icon">
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
                </div>
              </div>
            </div>
            <div class="card-content">
              <div className="row">
                <a href="#!">
                  <Typography variant="body2">
                    Name Of NFT : Celebrity Souvenir NFT <span></span>
                  </Typography>
                </a>
                <Typography variant="body2">
                  Type Of NFT : Celebrity Souvenir NFT <span></span>
                </Typography>
                <Typography variant="body2">
                  Price Of NFT(SGD): 3000<span> </span>
                </Typography>
                <Typography variant="body2">
                  Details: <Link to={`/souvenirnft/souvenir_04`} classsName="clickHere"> For more details click here </Link>
                </Typography>
              </div>
              <hr style={{ margin: "10px 0px 10px 0px" }} />
              <div className="d-flex card_bottom_btn_main">
                <div className="col-10 d-grid">
                  <Link to={`/souvenirnft/souvenir_04`} className="d-grid"> <button className="card_button" href="#!">BUY THIS NFT</button> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-item1">
          <div class="card">
            <div className="nft__item_like like_card">
              <i className="fa fa-heart"></i>
              <span>90</span>
            </div>
            <div class="card-img" style={{ backgroundImage: `url(https://i.ibb.co/HdR7nSP/logo-6.jpg)` }}>
              <div class="overlay d-grid " style={{ alignContent: 'center', justifyItems: 'center' }}>
                <div className="d-flex card_hover_icon">
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
                </div>
              </div>
            </div>
            <div class="card-content">
              <div className="row">
                <a href="#!">
                  <Typography variant="body2">
                    Name Of NFT : Celebrity Souvenir NFT <span></span>
                  </Typography>
                </a>
                <Typography variant="body2">
                  Type Of NFT : Celebrity Souvenir NFT <span></span>
                </Typography>
                <Typography variant="body2">
                  Price Of NFT(SGD): 3000<span> </span>
                </Typography>
                <Typography variant="body2">
                  Details: <Link to={`/souvenirnft/souvenir_05`} classsName="clickHere"> For more details click here </Link>
                </Typography>
              </div>
              <hr style={{ margin: "10px 0px 10px 0px" }} />
              <div className="d-flex card_bottom_btn_main">
                <div className="col-10 d-grid">
                  <Link to={`/souvenirnft/souvenir_05`} className="d-grid"> <button className="card_button" href="#!">BUY THIS NFT</button> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-item1">
          <div class="card">
            <div className="nft__item_like like_card">
              <i className="fa fa-heart"></i>
              <span>70</span>
            </div>
            <div class="card-img" style={{ backgroundImage: `url(https://i.ibb.co/HdR7nSP/logo-6.jpg)` }}>
              <div class="overlay d-grid " style={{ alignContent: 'center', justifyItems: 'center' }}>
                <div className="d-flex card_hover_icon">
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
                </div>
              </div>
            </div>
            <div class="card-content">
              <div className="row">
                <a href="#!">
                  <Typography variant="body2">
                    Name Of NFT : Celebrity Souvenir NFT <span></span>
                  </Typography>
                </a>
                <Typography variant="body2">
                  Type Of NFT : Celebrity Souvenir NFT <span></span>
                </Typography>
                <Typography variant="body2">
                  Price Of NFT(SGD): 3000<span> </span>
                </Typography>
                <Typography variant="body2">
                  Details: <Link to={`/souvenirnft/souvenir_06`} classsName="clickHere"> For more details click here </Link>
                </Typography>
              </div>
              <hr style={{ margin: "10px 0px 10px 0px" }} />
              <div className="d-flex card_bottom_btn_main">
                <div className="col-10 d-grid">
                  <Link to={`/souvenirnft/souvenir_06`} className="d-grid"> <button className="card_button" href="#!">BUY THIS NFT</button> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-item1">
          <div class="card">
            <div className="nft__item_like like_card">
              <i className="fa fa-heart"></i>
              <span>56</span>
            </div>
            <div class="card-img" style={{ backgroundImage: `url(https://i.ibb.co/HdR7nSP/logo-6.jpg)` }}>
              <div class="overlay d-grid " style={{ alignContent: 'center', justifyItems: 'center' }}>
                <div className="d-flex card_hover_icon">
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
                </div>
              </div>
            </div>
            <div class="card-content">
              <div className="row">
                <a href="#!">
                  <Typography variant="body2">
                    Name Of NFT : Celebrity Souvenir NFT <span></span>
                  </Typography>
                </a>
                <Typography variant="body2">
                  Type Of NFT : Celebrity Souvenir NFT <span></span>
                </Typography>
                <Typography variant="body2">
                  Price Of NFT(SGD): 3000<span> </span>
                </Typography>
                <Typography variant="body2">
                  Details: <Link to={`/souvenirnft/souvenir_07`} classsName="clickHere"> For more details click here </Link>
                </Typography>
              </div>
              <hr style={{ margin: "10px 0px 10px 0px" }} />
              <div className="d-flex card_bottom_btn_main">
                <div className="col-10 d-grid">
                  <Link to={`/souvenirnft/souvenir_07`} className="d-grid"> <button className="card_button" href="#!">BUY THIS NFT</button> </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Slider>
    </div>

  )
}

export default SouvenirSlider

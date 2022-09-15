import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import MealSlider from "../page/MealNft/Meal.slider";
import SouvenirSlider from "../page/Souvenir/Souvenir.slider";


const dataSlider = [
  {
    id: 1,
    image: "https://i.ibb.co/y5Nz87S/Photo-14-9-22-7-07-56-AM.png",
  },
  {
    id: 2,
    image: "https://i.ibb.co/qNm7bvX/Photo-14-9-22-7-10-15-AM.png",
  },
  {
    id: 3,
    image: "https://i.ibb.co/0DbbpxF/Photo-14-9-22-7-12-10-AM.png",
  },
  {
    id: 4,
    image: "https://i.ibb.co/qNDtnB1/Photo-14-9-22-7-13-44-AM.png",
  },
  {
    id: 5,
    image: "https://i.ibb.co/JrsyMqv/Photo-14-9-22-7-15-27-AM.png",
  },
  {
    id: 6,
    image: "https://i.ibb.co/ctLN97r/Photo-14-9-22-7-16-35-AM.png",
  },
  {
    id: 7,
    image: "https://i.ibb.co/HXfmHK9/Photo-14-9-22-7-19-37-AM.png",
  },
];


export default function () {
  useEffect(() => { }, []);
  const [datas, setandelAutoCall] = useState('')

  // Carousel functionality
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideIndex !== dataSlider.length) {
        setSlideIndex(slideIndex + 1);
      } else if (slideIndex === dataSlider.length) {
        setSlideIndex(1);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [slideIndex]);



  return (
    <div className="no-bottom no-top home-parent" id="content" style={{ marginTop: '80px' }}>
      <div id="top"></div>
      <div className="bannerBg">
        <div
          className="text-white no-top no-bottom home-padding"
        >
          <div className="v-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-5">
                  <h5 className="text-warning mb-0">First In The World</h5>
                  <div className="spacer-single"></div>
                  <h6 className="s1 wow fadeInUp line-one text-uppercase line-one" data-wow-delay=".5s" style={{ lineHeight: '30px' }}>
                    DS Legends Pte Ltd
                  </h6>
                  <h6 className="s1 wow fadeInUp line-one text-uppercase line-one" data-wow-delay=".5s" style={{ lineHeight: '30px' }}>
                    Presents
                  </h6>
                  <div className="spacer-10"></div>
                  <div className="banner-text d-grid">
                    <div
                      className="s1 text-uppercase wow fadeInUp font-resize me-3"
                      data-wow-delay=".75s"
                    >
                      CELEBRITY
                    </div>
                    <div
                      className="s1 text-uppercase wow fadeInUp font-resize"
                      data-wow-delay=".75s"
                      style={{ lineHeight: '76px' }}
                    >
                      NFTs
                    </div>
                  </div>
                  <p className="wow fadeInUp lead" data-wow-delay="2s">
                    <h4 style={{ fontSize: '1rem', marginTop: '1.2rem' }}>The largest collection of NFTs with perks</h4>
                  </p>
                  <div className="mb-sm-30"></div>
                  <p className="buttonHomeExplore">
                    <Link
                      to="/mealnft"
                      className="btn-main wow fadeInUp lead mt-3"
                      data-wow-delay="1.25s"
                    >
                      Explore
                    </Link>
                  </p>
                </div>
                <div className="col-md-6 offset-md-1 home-image" style={{ justifyContent: 'center' }} >
                  
                  {/* <img
                    // src="/assets/images/misc/celebrity-banner.jpeg"
                    src="https://i.ibb.co/KNHV8bt/celebrity-banner2.jpg"
                    className="lazy wow fadeIn handleImgforRespons"
                    style={{ borderRadius: '1px', width: '90%', }}
                    data-wow-delay="1.25s"
                    alt=""
                  /> */}

                  {/* <div
                    id="carouselExampleSlidesOnly"
                    className="carousel slide lazy wow fadeIn handleImgforRespons carousel-slider"
                    data-bs-ride="carousel"
                    data-bs-interval="2000"
                    data-bs-pause="false"
                    >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="https://i.ibb.co/y5Nz87S/Photo-14-9-22-7-07-56-AM.png" className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="https://i.ibb.co/qNm7bvX/Photo-14-9-22-7-10-15-AM.png" className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="https://i.ibb.co/0DbbpxF/Photo-14-9-22-7-12-10-AM.png" className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="https://i.ibb.co/qNDtnB1/Photo-14-9-22-7-13-44-AM.png" className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="https://i.ibb.co/JrsyMqv/Photo-14-9-22-7-15-27-AM.png" className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="https://i.ibb.co/ctLN97r/Photo-14-9-22-7-16-35-AM.png" className="d-block w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="https://i.ibb.co/HXfmHK9/Photo-14-9-22-7-19-37-AM.png" className="d-block w-100" alt="..." />
                      </div>
                    </div>
                  </div> */}

                  {/* Custom carosule */}
                  <div className="carousel-slider lazy wow fadeIn">
                  <div className="container-slider">
                    {dataSlider.map((obj, index) => {
                      return (
                        <div
                          key={obj.id}
                          className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                        >
                          <img src={obj.image} alt="carousel-images" />
                        </div>
                      );
                    })}
                  </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
          <a
            href="#section-intro"
            className="mouse-icon-click scroll-to wow fadeInUp"
            data-wow-delay="2s"
          >
            <span className="mouse fadeScroll relative" data-scroll-speed="2">
              <span className="scroll"></span>
            </span>
          </a>
        </div>
      </div>
      <section id="section-intro" className="no-bottom howItWorks_section-p">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>
                  How It Works
                </h2>
                <div className="small-border bg-color-2"></div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="de-card has-border text-center boxesNft home-txt-pd">
                <i className="wow fadeInUp bg-color-2 i-boxed icon_wallet"></i>
                <div className="text">
                  <h6 className="wow fadeInUp home-txt ">Login with your wallet</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="de-card has-border text-center boxesNft home-txt-pd">
                <i className="wow fadeInUp bg-color-2 i-boxed icon_cart_alt"></i>
                <div className="text">
                  <h6 className="wow fadeInUp home-txt">Buy our NFTs and utilize the perks</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="de-card has-border text-center boxesNft">
                <div className="NftDetailsDiv">

                  <i className="wow fadeInUp bg-color-2 i-boxed icon_menu-square_alt2"></i>
                  <div className="text">
                    <h6 className="wow fadeInUp home-txt">Sell the NFTs with digital art of the celebrity in BSC Marketplaces and Play to Earn at our Metaverse Projects</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section" className="NFtsection">
        <div className="container">
          <div className="spacer-double"></div>
          <div className="row wow fadeIn">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>
                  Celebrity Meal NFTs
                </h2>
                <div className="small-border bg-color-2"></div>
              </div>
            </div>
            <MealSlider />

          </div>
        </div>
      </section>
    </div>
  );
}

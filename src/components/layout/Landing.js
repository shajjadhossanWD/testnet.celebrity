import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import MealSlider from "../page/MealNft/Meal.slider";
import SouvenirSlider from "../page/Souvenir/Souvenir.slider";




export default function () {
  useEffect(() => { }, []);
  const [datas, setandelAutoCall] = useState('')




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
                <div className="col-md-6 offset-md-1 d-flex home-image" style={{ justifyContent: 'center' }} >
                  {/* <img
                    src="/assets/images/misc/women-statue.png"
                    className="lazy img-fluid wow fadeIn handleImgforRespons"
                    data-wow-delay="1.25s"
                    alt=""
                  /> */}
                  <img
                    // src="/assets/images/misc/celebrity-banner.jpeg"
                    src="https://i.ibb.co/KNHV8bt/celebrity-banner2.jpg"
                    className="lazy wow fadeIn handleImgforRespons"
                    style={{ borderRadius: '1px', width: '90%', }}
                    data-wow-delay="1.25s"
                    alt=""
                  />
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
      <section id="section-intro" className="no-bottom">
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
                    <h6 className="wow fadeInUp home-txt">Sell the NFTs with digital art and memorabilia of the celebrity in BSC Marketplaces.</h6>
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

import { Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MealSlider from '../MealNft/Meal.slider';
import SouvenirSlider from '../Souvenir/Souvenir.slider';
import './home.css';


function Home() {
  const [meals, setMeals] = useState([]);
  const [souvenirs, setSouvenirs] = useState([]);
  console.log(meals, souvenirs)

  const pull_meal = (meal) => {
    setMeals(meal)
  }
  const pull_souvenir = (souvenir) => {
    setSouvenirs(souvenir)
  }



  return (
    <div className='home-parent'>
      <div className="bannerBg mt-5 pt-4">
        <div
          className="text-white no-top no-bottom home-padding"
        >
          <div className="v-center">
            <div className="container">
              <div className="row align-items-center">

                <div className="col-md-5">

                  <div className="spacer-single"></div>
                  <h6 className="s1  line-one text-uppercase line-one" style={{ lineHeight: '30px' }}>
                    DS Legends Pte Ltd
                  </h6>
                  <h6 className="s1 line-one text-uppercase line-one" style={{ lineHeight: '30px' }}>
                    Presents
                  </h6>

                  <div className="spacer-10"></div>
                  <div className="banner-text d-grid">
                    <div
                      className="s1 text-uppercase font-resize me-3"

                    >
                      CELEBRITY
                    </div>
                    <div
                      className="s1 text-uppercase font-resize"

                      style={{ lineHeight: '76px' }}
                    >
                      NFTs
                    </div>
                  </div>
                  <p className=" lead" data-wow-delay="2s">
                    <h4 style={{ fontSize: '1rem', marginTop: '1.2rem' }}>The largest collection of NFTs with purpose</h4>
                  </p>
                  <div className="mb-sm-30"></div>

                  <Link
                    to="/mealnft"
                    className="btn-main wow fadeInUp lead mt-3"
                    data-wow-delay="1.25s"
                  >
                    Explore
                  </Link>
                </div>
                <div className="col-md-6 offset-md-1 d-flex home-image" style={{ justifyContent: 'center' }}>
                  <img
                    // src="/assets/images/misc/celebrity-banner.jpeg"
                    src="https://i.ibb.co/KNHV8bt/celebrity-banner2.jpg"
                    className="lazy fadeIn handleImgforRespons"
                    style={{ borderRadius: '1px', width: '90%', }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <a
            href="#section-intro"
            className="mouse-icon-click scroll-to wow "
            data-wow-delay="2s"
          >
            <span className="mouse fadeScroll relative" data-scroll-speed="2">
              <span className="scroll"></span>
            </span>
          </a>
        </div>
      </div>
      <div className="no-bottom backgroundSection">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>
                  How It <span className="text-gradient">Works</span>
                </h2>
                <div className="small-border bg-color-2"></div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="de-card has-border text-center boxesNft">
                <i className=" bg-color-2 i-boxed icon_wallet"></i>
                <div className="text">
                  <h6 className="home-txt">Login with your wallet</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="de-card has-border text-center boxesNft">
                <i className=" bg-color-2 i-boxed icon_cart_alt"></i>
                <div className="text">
                  <h6 className="home-txt">Buy our NFTs and utilize the perks</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="de-card has-border text-center boxesNft">
                <div className="NftDetailsDiv">
                  <i className=" bg-color-2 i-boxed icon_menu-square_alt2"></i>
                  <div className="text">
                    <h6 className="home-txt">Sell the NFTs with digital art and memorabilia of the celebrity in BSC Marketplaces.</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='backgroundSection'>
        <div className="container">


          <div className="spacer-double"></div>
          <div className="row fadeIn">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>
                  Celebrity Meal NFTs
                </h2>
                <div className="small-border bg-color-2"></div>
              </div>
              <MealSlider />
              {/* <div className='d-flex' style={{ justifyContent: 'center' }}>
                {meals ?
                  <Typography variant="h6" style={{ color: '#d0d7c2', fontSize: "16px", marginTop: "1rem" }}>
                    Pay by DSL and get 30% discount.
                  </Typography>
                  :
                  <Typography variant="h6" style={{ color: '#d0d7c2', fontSize: "16px", marginTop: "1rem" }}>
                    Stay Tuned!
                  </Typography>}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

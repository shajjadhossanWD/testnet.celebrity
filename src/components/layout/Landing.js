import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "../../App.css";
import MealSlider from "../page/MealNft/Meal.slider";
import SouvenirSlider from "../page/Souvenir/Souvenir.slider";




export default function () {
  useEffect(() => { }, []);
  const [datas , setandelAutoCall] = useState('')
 

 

  return (
    <div className="no-bottom no-top" id="content" style={{ marginTop: '80px' }}>
      <div id="top"></div>
        <div className="bannerBg">
         <div  
           className="text-white no-top no-bottom vh-100" 
         >
           <div className="v-center">
             <div className="container">
               <div className="row align-items-center">
                 <div className="col-md-5">
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
                     <h4>The largest collection of NFTs with purpose</h4>
                   </p>
                   <div className="mb-sm-30"></div>
   
                   <a
                     href="03_grey-explore.html"
                     className="btn-main wow fadeInUp lead mt-3"
                     data-wow-delay="1.25s"
                   >
                     Explore
                   </a>
                 </div>
                 <div className="col-md-6 offset-md-1 d-flex" style={{justifyContent: 'center'}} >
                   <img
                     src="/assets/images/misc/women-statue.png"
                     className="lazy img-fluid wow fadeIn handleImgforRespons"
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
              <div className="de-card has-border text-center">
                <i className="wow fadeInUp bg-color-2 i-boxed icon_wallet"></i>
                <div className="text">
                  <h4 className="wow fadeInUp">Login with your wallet</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="de-card has-border text-center">
                <i className="wow fadeInUp bg-color-2 i-boxed icon_cart_alt"></i>
                <div className="text">
                  <h4 className="wow fadeInUp">Buy our NFTs</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="de-card has-border text-center">
                <i className="wow fadeInUp bg-color-2 i-boxed icon_menu-square_alt2"></i>
                <div className="text">
                  <h4 className="wow fadeInUp">Use our NFTs</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section-collections">
        <div className="container">
          <div className="row wow fadeIn">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>
                  Celebrity Souvenir NFTs 
                </h2>
                <div className="small-border bg-color-2"></div>
              </div>
            </div>

            <SouvenirSlider/>
            <div className='d-flex' style={{ justifyContent: 'center'}}>
                 <Typography variant="h6" style={{color:'#d0d7c2', fontSize:"16px"}}>
                  Pay by DSL and get 30% discount.
                 </Typography>
             </div>
          </div>

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
             <MealSlider/>
             <div className='d-flex' style={{ justifyContent: 'center'}}>
                 <Typography variant="h6" style={{color:'#d0d7c2', fontSize:"16px"}}>
                  Pay by DSL and get 30% discount.
                 </Typography>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 
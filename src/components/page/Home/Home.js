import axios from 'axios';
import { useEffect, useState } from 'react';
import './home.css';
import MealSlider from './Meal.slider';
import SouvenirSlider from './Souvenir.slider';


function Home() {

    const [newData, setData] = useState([]) 
    useEffect(() => { 
        axios.get("/celebrity.json")
            .then(res => {
                setData(res.data);
                // setFilterData(res.data.slice(0, 5))
            });
        //  home auto open model set state
            // setAutoOpen(true)
    }, [])

    return (
     <div>
        <div className="bannerBg mt-5 pt-4">
         <div  
           className="text-white no-top no-bottom vh-100" 
         >
           <div className="v-center">
             <div className="container">
               <div className="row align-items-center">
                 <div className="col-md-5">
                   <div className="spacer-single"></div>
                   <h6 className="s1  line-one text-uppercase line-one" style={{ lineHeight: '30px' }}>
                     DS Legends Pte Ltd
                   </h6>
                   <h6 className="s1 line-one text-uppercase line-one"   style={{ lineHeight: '30px' }}>
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
                     <h4>The largest collection of NFTs with purpose</h4>
                   </p>
                   <div className="mb-sm-30"></div>
   
                   <a
                     href="03_grey-explore.html"
                     className="btn-main lead mt-3" 
                   >
                     Explore
                   </a>
                 </div>
                 <div className="col-md-6 offset-md-1">
                   <img
                     src="/assets/images/misc/women-statue.png"
                     className="lazy img-fluid fadeIn handleImgforRespons" 
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
              <div className="de-card has-border text-center">
                <i className=" bg-color-2 i-boxed icon_wallet"></i>
                <div className="text">
                  <h4 className="">Login with your wallet</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="de-card has-border text-center">
                <i className=" bg-color-2 i-boxed icon_menu-square_alt2"></i>
                <div className="text">
                  <h4 className="">Browse our NFTs</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="de-card has-border text-center">
                <i className=" bg-color-2 i-boxed icon_cart_alt"></i>
                <div className="text">
                  <h4 className="">Buy our NFTs</h4>
                </div>
              </div>
            </div>
           </div>
          </div>
        </div>

         <div className='backgroundSection'>
             <div className="container"> 
             <div className="row wow fadeIn">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>
                  Celebrity Souvenir <span className="text-gradient">NFTs</span>
                </h2>
                <div className="small-border bg-color-2"></div>
              </div>
             </div>

             <SouvenirSlider/>
             </div> 
             
             <div className="spacer-double"></div>
             <MealSlider/>
             </div>
         </div>
    </div>
    )
}

export default Home

import { useEffect, useState } from "react";
import "../../App.css";


export default function () {
  useEffect(() => { }, []);
  const [datas , setandelAutoCall] = useState('')
 

  useEffect(() => {
   
    
}, [])

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
                 <div className="col-md-6 offset-md-1">
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
                  How It <span className="text-gradient">Works</span>
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
                <i className="wow fadeInUp bg-color-2 i-boxed icon_menu-square_alt2"></i>
                <div className="text">
                  <h4 className="wow fadeInUp">Browse our NFTs</h4>
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
          </div>
        </div>
      </section>

      <section id="section-collections">
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

            <div id="items-carousel" className="owl-carousel wow fadeIn">
              <div className="d-item">
                <div className="nft__item style-2">
                  <div className="author_list_pp">
                    {/* <a
                      href="03_grey-author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Stacy Long"
                    >
                      <img
                        className="lazy"
                        src="/assets/images/author/author-10.jpg"
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </a> */}
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button>Buy Now</button>
                        <div className="nft__item_share">
                          <h4>Share</h4>
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
                        src="/assets/images/logo-6.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a className="textDect" href="03_grey-item-details.html">
                      <h4>Name of <span>NFT</span></h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                    Type of <span>NFT</span>
                    </div>  
                    <div className="nft__item_price">
                      Price:<span>SGD 1000</span>
                    </div>
                    {/* <div className="nft__item_price">
                      Details:<span></span>
                    </div> */}
                    <div className="nft__item_action textDect">
                      <a className="textDect" href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item">
                <div className="nft__item style-2">
                  <div className="author_list_pp">
                    {/* <a
                      href="03_grey-author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Stacy Long"
                    >
                      <img
                        className="lazy"
                        src="/assets/images/author/author-10.jpg"
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </a> */}
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button>Buy Now</button>
                        <div className="nft__item_share">
                          <h4>Share</h4>
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
                        src="/assets/images/logo-6.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a className="textDect" href="03_grey-item-details.html">
                      <h4>Name of <span>NFT</span></h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                    Type of <span>NFT</span>
                    </div>  
                    <div className="nft__item_price">
                      Price:<span>SGD 1000</span>
                    </div>
                    {/* <div className="nft__item_price">
                      Details:<span></span>
                    </div> */}
                    <div className="nft__item_action textDect">
                      <a className="textDect" href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item">
                <div className="nft__item style-2">
                  <div className="author_list_pp">
                    {/* <a
                      href="03_grey-author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Stacy Long"
                    >
                      <img
                        className="lazy"
                        src="/assets/images/author/author-10.jpg"
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </a> */}
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button>Buy Now</button>
                        <div className="nft__item_share">
                          <h4>Share</h4>
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
                        src="/assets/images/logo-6.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a className="textDect" href="03_grey-item-details.html">
                      <h4>Name of <span>NFT</span></h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                    Type of <span>NFT</span>
                    </div>  
                    <div className="nft__item_price">
                      Price:<span>SGD 1000</span>
                    </div>
                    {/* <div className="nft__item_price">
                      Details:<span></span>
                    </div> */}
                    <div className="nft__item_action textDect">
                      <a className="textDect" href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item">
                <div className="nft__item style-2">
                  <div className="author_list_pp">
                    {/* <a
                      href="03_grey-author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Stacy Long"
                    >
                      <img
                        className="lazy"
                        src="/assets/images/author/author-10.jpg"
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </a> */}
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button>Buy Now</button>
                        <div className="nft__item_share">
                          <h4>Share</h4>
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
                        src="/assets/images/logo-6.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a className="textDect" href="03_grey-item-details.html">
                      <h4>Name of <span>NFT</span></h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                    Type of <span>NFT</span>
                    </div>  
                    <div className="nft__item_price">
                      Price:<span>SGD 1000</span>
                    </div>
                    {/* <div className="nft__item_price">
                      Details:<span></span>
                    </div> */}
                    <div className="nft__item_action textDect">
                      <a className="textDect" href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item">
                <div className="nft__item style-2">
                  <div className="author_list_pp">
                    {/* <a
                      href="03_grey-author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Stacy Long"
                    >
                      <img
                        className="lazy"
                        src="/assets/images/author/author-10.jpg"
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </a> */}
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button>Buy Now</button>
                        <div className="nft__item_share">
                          <h4>Share</h4>
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
                        src="/assets/images/logo-6.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a className="textDect" href="03_grey-item-details.html">
                      <h4>Name of <span>NFT</span></h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                    Type of <span>NFT</span>
                    </div>  
                    <div className="nft__item_price">
                      Price:<span>SGD 1000</span>
                    </div>
                    {/* <div className="nft__item_price">
                      Details:<span></span>
                    </div> */}
                    <div className="nft__item_action textDect">
                      <a className="textDect" href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item">
                <div className="nft__item style-2">
                  <div className="author_list_pp">
                    {/* <a
                      href="03_grey-author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Stacy Long"
                    >
                      <img
                        className="lazy"
                        src="/assets/images/author/author-10.jpg"
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </a> */}
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button>Buy Now</button>
                        <div className="nft__item_share">
                          <h4>Share</h4>
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
                        src="/assets/images/logo-6.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a className="textDect" href="03_grey-item-details.html">
                      <h4>Name of <span>NFT</span></h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                    Type of <span>NFT</span>
                    </div>  
                    <div className="nft__item_price">
                      Price:<span>SGD 1000</span>
                    </div>
                    {/* <div className="nft__item_price">
                      Details:<span></span>
                    </div> */}
                    <div className="nft__item_action textDect">
                      <a className="textDect" href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item">
                <div className="nft__item style-2">
                  <div className="author_list_pp">
                    {/* <a
                      href="03_grey-author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Stacy Long"
                    >
                      <img
                        className="lazy"
                        src="/assets/images/author/author-10.jpg"
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </a> */}
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button>Buy Now</button>
                        <div className="nft__item_share">
                          <h4>Share</h4>
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
                        src="/assets/images/logo-6.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a className="textDect" href="03_grey-item-details.html">
                      <h4>Name of <span>NFT</span></h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                    Type of <span>NFT</span>
                    </div>  
                    <div className="nft__item_price">
                      Price:<span>SGD 1000</span>
                    </div>
                    {/* <div className="nft__item_price">
                      Details:<span></span>
                    </div> */}
                    <div className="nft__item_action textDect">
                      <a className="textDect" href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <div className="spacer-double"></div>

          <div className="row wow fadeIn">
            <div className="col-lg-12">
              <div className="text-center">
                <h2>
                  Celebrity Meal <span className="text-gradient">NFTs</span>
                </h2>
                <div className="small-border bg-color-2"></div>
              </div>
            </div> 
            <div id="items-carousel1" className="owl-carousel wow fadeIn">
              <div className="d-item">
                <div className="nft__item style-2">
                  <div className="author_list_pp">
                    {/* <a
                      href="03_grey-author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Stacy Long"
                    >
                      <img
                        className="lazy"
                        src="/assets/images/author/author-10.jpg"
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </a> */}
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button>Buy Now</button>
                        <div className="nft__item_share">
                          <h4>Share</h4>
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
                        src="/assets/images/logo-6.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a className="textDect" href="03_grey-item-details.html">
                      <h4>Name of <span>NFT</span></h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                    Type of <span>NFT</span>
                    </div>  
                    <div className="nft__item_price">
                      Price:<span>SGD 1000</span>
                    </div>
                    {/* <div className="nft__item_price">
                      Details:<span></span>
                    </div> */}
                    <div className="nft__item_action textDect">
                      <a className="textDect" href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item">
                <div className="nft__item style-2">
                  <div className="author_list_pp">
                    {/* <a
                      href="03_grey-author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Stacy Long"
                    >
                      <img
                        className="lazy"
                        src="/assets/images/author/author-10.jpg"
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </a> */}
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button>Buy Now</button>
                        <div className="nft__item_share">
                          <h4>Share</h4>
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
                        src="/assets/images/logo-6.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a className="textDect" href="03_grey-item-details.html">
                      <h4>Name of <span>NFT</span></h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                    Type of <span>NFT</span>
                    </div>  
                    <div className="nft__item_price">
                      Price:<span>SGD 1000</span>
                    </div>
                    {/* <div className="nft__item_price">
                      Details:<span></span>
                    </div> */}
                    <div className="nft__item_action textDect">
                      <a className="textDect" href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item">
                <div className="nft__item style-2">
                  <div className="author_list_pp">
                    {/* <a
                      href="03_grey-author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Stacy Long"
                    >
                      <img
                        className="lazy"
                        src="/assets/images/author/author-10.jpg"
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </a> */}
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button>Buy Now</button>
                        <div className="nft__item_share">
                          <h4>Share</h4>
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
                        src="/assets/images/logo-6.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a className="textDect" href="03_grey-item-details.html">
                      <h4>Name of <span>NFT</span></h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                    Type of <span>NFT</span>
                    </div>  
                    <div className="nft__item_price">
                      Price:<span>SGD 1000</span>
                    </div>
                    {/* <div className="nft__item_price">
                      Details:<span></span>
                    </div> */}
                    <div className="nft__item_action textDect">
                      <a className="textDect" href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item">
                <div className="nft__item style-2">
                  <div className="author_list_pp">
                    {/* <a
                      href="03_grey-author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Stacy Long"
                    >
                      <img
                        className="lazy"
                        src="/assets/images/author/author-10.jpg"
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </a> */}
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button>Buy Now</button>
                        <div className="nft__item_share">
                          <h4>Share</h4>
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
                        src="/assets/images/logo-6.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a className="textDect" href="03_grey-item-details.html">
                      <h4>Name of <span>NFT</span></h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                    Type of <span>NFT</span>
                    </div>  
                    <div className="nft__item_price">
                      Price:<span>SGD 1000</span>
                    </div>
                    {/* <div className="nft__item_price">
                      Details:<span></span>
                    </div> */}
                    <div className="nft__item_action textDect">
                      <a className="textDect" href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item">
                <div className="nft__item style-2">
                  <div className="author_list_pp">
                    {/* <a
                      href="03_grey-author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Stacy Long"
                    >
                      <img
                        className="lazy"
                        src="/assets/images/author/author-10.jpg"
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </a> */}
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button>Buy Now</button>
                        <div className="nft__item_share">
                          <h4>Share</h4>
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
                        src="/assets/images/logo-6.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a className="textDect" href="03_grey-item-details.html">
                      <h4>Name of <span>NFT</span></h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                    Type of <span>NFT</span>
                    </div>  
                    <div className="nft__item_price">
                      Price:<span>SGD 1000</span>
                    </div>
                    {/* <div className="nft__item_price">
                      Details:<span></span>
                    </div> */}
                    <div className="nft__item_action textDect">
                      <a className="textDect" href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item">
                <div className="nft__item style-2">
                  <div className="author_list_pp">
                    {/* <a
                      href="03_grey-author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Stacy Long"
                    >
                      <img
                        className="lazy"
                        src="/assets/images/author/author-10.jpg"
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </a> */}
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button>Buy Now</button>
                        <div className="nft__item_share">
                          <h4>Share</h4>
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
                        src="/assets/images/logo-6.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a className="textDect" href="03_grey-item-details.html">
                      <h4>Name of <span>NFT</span></h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                    Type of <span>NFT</span>
                    </div>  
                    <div className="nft__item_price">
                      Price:<span>SGD 1000</span>
                    </div>
                    {/* <div className="nft__item_price">
                      Details:<span></span>
                    </div> */}
                    <div className="nft__item_action textDect">
                      <a className="textDect" href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-item">
                <div className="nft__item style-2">
                  <div className="author_list_pp">
                    {/* <a
                      href="03_grey-author.html"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Creator: Stacy Long"
                    >
                      <img
                        className="lazy"
                        src="/assets/images/author/author-10.jpg"
                        alt=""
                      />
                      <i className="fa fa-check"></i>
                    </a> */}
                  </div>
                  <div className="nft__item_wrap">
                    <div className="nft__item_extra">
                      <div className="nft__item_buttons">
                        <button>Buy Now</button>
                        <div className="nft__item_share">
                          <h4>Share</h4>
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
                        src="/assets/images/logo-6.jpg"
                        className="lazy nft__item_preview"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="nft__item_info">
                    <a className="textDect" href="03_grey-item-details.html">
                      <h4>Name of <span>NFT</span></h4>
                    </a>
                    <div className="nft__item_click">
                      <span></span>
                    </div>
                    <div className="nft__item_price">
                    Type of <span>NFT</span>
                    </div>  
                    <div className="nft__item_price">
                      Price:<span>SGD 1000</span>
                    </div>
                    {/* <div className="nft__item_price">
                      Details:<span></span>
                    </div> */}
                    <div className="nft__item_action textDect">
                      <a className="textDect" href="#">Place a bid</a>
                    </div>
                    <div className="nft__item_like">
                      <i className="fa fa-heart"></i>
                      <span>80</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




 
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const MealNFT = () => {

  const [isMeal, setMeal] = useState([])
  useEffect(() => { 
    axios.get("/mealData.json")
        .then(res => { 
          setMeal(res.data.slice(0, 4))
        }); 
    }, [])

    return (
        <Fragment>  
          <Box className="souvenirNFT_Box" id="Meal"> 
            <div style={{ backgroundColor: '#1A1A25' }}>
               <h1 style={{ marginTop: '80px' }} className='text-gradient text-center pt-5 text-uppercase'>Meal NFT</h1>
            </div>
            <Container className="SouvenirNFT_card row pt-2">  
                {
                  isMeal.map((data, idx) => (
                    <div key={{idx}} className="col-sm-12 col-md-4 col-lg-3 p-2">
                      <div class="card">
                         <div className="nft__item_like like_card">
                             <i className="fa fa-heart"></i>
                             <span>{data.fvt}</span>
                          </div>
                         <div class="card-img" style={{backgroundImage:`url(${data.image})`}}>
                           <div class="overlay d-grid " style={{alignContent: 'center',justifyItems: 'center'}}>
                         		 <div className="d-flex card_hover_icon">
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
                               </div> 
                           	</div>
                          </div> 
                          <div class="card-content">
                             <div className="row"> 
                                <a href="#!">
                                <Typography variant="body2">
                                 {data.name} <span></span>
                                </Typography>
                             	</a> 
                               <Typography variant="body2">
                                {data.type} <span></span>
                               </Typography>   
                              <Typography variant="body2">
                                 Price of NFT(SGD):<span> </span>
                                </Typography>
                                <Typography variant="body2">
                                {data.details}<span> </span>
                                </Typography> 
                            </div>
                            <hr style={{margin:"10px 0px 10px 0px"}}/>
                            <div className="d-flex card_bottom_btn_main">
                              <div className="col-10 d-grid">
                               <Link to={`/mealnft/${data.id}`} className="d-grid"> <button className="card_button" href="#!">BUY THIS NFT</button> </Link>
                              </div> 
                            </div> 
	                        </div>
                      </div>
                     </div>
                  ))
                }
             </Container>
           </Box>
        </Fragment>
    );
};

export default MealNFT;
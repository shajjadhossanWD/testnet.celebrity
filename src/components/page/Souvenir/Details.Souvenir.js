
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";
import './Souvenir.css';

function SouvenirDetails() {
    const { souvenirId } = useParams();
    const [isDetails, setDetails] = useState([])
    const [isSouvenir, setSouvenir] = useState([])

    useEffect(() => { 
      axios.get("/souvenir.json")
          .then(res => {
            setDetails(res.data?.find((data) => data.id === souvenirId)); 
          }); 
      }, [])

      useEffect(() => { 
        axios.get("/mealData.json")
           .then(res => { 
             setSouvenir(res.data.slice(0, 4))
           }); 
       }, [])

       const hendelButton = ()=>{
        swal({
          title: "Coming soon!",
          // text: "You clicked the button!",
          icon: "warning",
          button: "Ok",
         
        }); 
      }

    return (
      <div style={{ backgroundColor: '#1A1A25' }}>
      <div className="d-grid justify_items_center">
      <Container className="row"  style={{marginTop:"100px"}}>
          <div className="col-sm-12 col-md-6 col-lg-6 d-grid justify_items_center pt-2">
              <Box className=" col-12 card_top_icon mb-2">
                  <Box className="icon_love_Dtl_box icon_love_Dtl_box_none pt-1">
                    <i className="fa fa-heart"></i>
                    <span className="ps-1">{isDetails.fvt}</span>
                  </Box>
                </Box>
             <img alt="Souvenir_Image" src="/assets/images/logo-6.jpg" className='deteilsPageImage' />
             
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-grid">
              <Box className="pt-5" style={{color:"white"}}>
                <Typography variant="subtitle2" gutterBottom component="div">
                  {isDetails.name}
                </Typography> 
                <Typography className="pt-1" variant="subtitle2" gutterBottom component="div">
                {isDetails.type}
                </Typography>
                <Typography className="pt-1" variant="subtitle2" component="div">
                {isDetails.price}
                </Typography>
                <Typography className="pt-1" variant="subtitle2" gutterBottom component="div">
                 ( <span className="spanDiscount" >30% discount if paid with DSL tokens</span>) 
                </Typography>
                <Typography className="pt-1" variant="subtitle2" gutterBottom component="div">
                Details Of NFT: 
                </Typography> 
                <Typography className="pt-1" variant="subtitle2"   component="div">
                 What is it? 
                </Typography>
                <Typography className="pt-1" variant="subtitle2"  component="div">
                1. NFT in BSC network
                </Typography>
                <Typography className="pt-1" variant="subtitle2"   component="div">
                2. Digital Artwork of the Celebrity
                </Typography>
                <Typography className="pt-1" variant="subtitle2"   component="div">
                3. A Real Product used by the Celebrity
                </Typography>
                <Typography className="pt-1" variant="subtitle2" gutterBottom component="div">
                4. A digital certificate of the Souvenir 
                </Typography>
                <Typography className="pt-1" variant="subtitle2"  component="div">
                Benefits for Buyer
                </Typography>
                <Typography className="pt-1" variant="subtitle2"   component="div">
                1. A shoutout in social media
                </Typography>
                <Typography className="pt-1" variant="subtitle2"   component="div">
                2. Display in their showcase
                </Typography>
                <Typography className="pt-1" variant="subtitle2"   component="div">
                3. Use it and Feel like the Celebrity
                </Typography> 
              </Box> 
              <div className="d-flex rpv_center" style={{ alignItems: 'flex-end',justifyContent: 'center'}}>
              <Link to="#" className=" justify_content_center mt-4 mb-1"> <button onClick={hendelButton} className="card_button button_dtl" href="#!">BUY THIS NFT AT SGD 3000</button> </Link>
              </div>
          </div>   
        </Container>
        <Container> 
            <h3 className="text-white text-start mb-0 mt-5 mb-3 d-grid justify_items_center" style={{fontFamily:"system-ui"}}>Related NFTs</h3>
             <div className="small-border bg-color-2"></div>
           <div className="row" > 
              {
                isSouvenir?.map((data, idx) => (
                    <div key={{idx}} className="col-sm-12 col-md-4 col-lg-3 d-flex" style={{justifyContent: 'center'  }}>
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
                                {data.price}<span> </span>
                                </Typography> 
                                <Typography variant="body2">
                                 Details: <Link to={`/mealnft/${data.id}`} classsName="clickHere"> For more details click here </Link>  
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
           </div> 
           <div className='d-flex mt-1' style={{ justifyContent: 'center'}}>
                <Typography variant="h6" style={{color:'#d0d7c2', fontSize:"16px"}}>
                 Pay by DSL and get 30% discount.
                </Typography>
            </div>
        </Container>
      </div>
     </div>
    )
}

export default SouvenirDetails


{/* <h1 style={{ marginTop: '80px' }} className='text-gradient text-center pt-5 text-uppercase'>{isDetails.id}</h1> */}

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function  MealDetails() {
    const { mealnId } = useParams();
    const [isDetails, setDetails] = useState([])

    console.log('isDetails', isDetails)

    useEffect(() => { 
      axios.get("/mealData.json")
          .then(res => {
            setDetails(res.data?.find((data) => data.id === mealnId));
              // setFilterData(res.data.slice(0, 5))
          }); 
      }, [])
      
    return (
      <div style={{ height: '700px', backgroundColor: '#1A1A25' }}>
      <div className="d-grid justify_items_center">
        <Container className="row"  style={{marginTop:"100px"}}>
          <div className="col-sm-12 col-md-6 col-lg-6 d-grid justify_items_center pt-2">
             <img alt="Souvenir_Image" src="/assets/images/logo-6.jpg" className='deteilsPageImage' />
             <div>
             {/* <Typography className="mt-2" variant="h6" gutterBottom component="div">
                  OTHER RELATED NFTS
                </Typography> */}
             </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-grid">
              <Box className="pt-5" style={{color:"white"}}>
                <Typography variant="subtitle2" gutterBottom component="div">
                  {isDetails.name}
                </Typography>
                <Box>
                    {/* <Box className="icon_love_Dtl_box pt-1">
                      <i className="fa fa-heart"></i>
                      <span className="ps-1">{isDetails.fvt}</span>
                    </Box> */}
                </Box>
                <Typography className="pt-1" variant="subtitle2" gutterBottom component="div">
                {isDetails.type}
                </Typography>
                <Typography className="pt-1" variant="subtitle2" gutterBottom component="div">
                {isDetails.price}
                </Typography>
                <Typography className="pt-1" variant="subtitle2" gutterBottom component="div">
                 {isDetails.details}
                </Typography>
              </Box> 
              <div className="col-10 d-flex" style={{ alignItems: 'flex-end'}}>
              <Link to="#" className=" justify_content_center mt-4 mb-1"> <button className="card_button button_dtl" href="#!">BUY THIS NFT AT SGD XXXX.XX</button> </Link>
              </div>
          </div> 
        </Container>
      </div>
     </div>
    )
}

export default  MealDetails

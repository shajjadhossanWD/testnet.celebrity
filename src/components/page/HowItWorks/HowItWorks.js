import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";

function HowItWorks() {
    return (
        <div style={{   backgroundColor: '#1A1A25' }}>
           <div>
                <h3  className="text-gradient text-center pt-5 text-uppercase" style={{ marginTop: '80px' }}>How it works</h3>
                <div className="small-border bg-color-2"></div>
            </div>
            <div>
              <Container>
                    <div className="text-white p-2">
                       <Typography className="titelColor" variant="h5" gutterBottom component="div">
                         Celebrity Souvenir NFT
                        </Typography>
                        <Typography className="pt-2 pb-2 text-primary" variant="h6"   component="div">
                         What is it? 
                        </Typography>
                        <Typography className="pt-1" variant="subtitle2"   component="div">
                         1. NFT in BSC network
                        </Typography>
                        <Typography className="pt-1" variant="subtitle2"   component="div">
                        2. Digital Artwork of the Celebrity
                        </Typography>
                        <Typography className="pt-1" variant="subtitle2"   component="div">
                        3. A Real Product used by the Celebrity
                        </Typography>
                        <Typography className="pt-1" variant="subtitle2"   component="div">
                        4. A digital certificate of the Souvenir 
                        </Typography>
                        <Typography className="pt-2 pb-2 text-primary" variant="h6"   component="div">
                        Benefits for Buyer:
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
                    </div>
                    <div className="text-white mt-3 p-2">
                      <Typography className="titelColor" variant="h5" gutterBottom component="div">
                        Celebrity Meal NFT
                        </Typography>
                        <Typography className="pt-2 pb-2 text-primary" variant="h6"   component="div">
                         What is it? 
                        </Typography>
                        <Typography className="pt-1" variant="subtitle2"   component="div">
                         1. NFT in BSC network
                        </Typography>
                        <Typography className="pt-1" variant="subtitle2"   component="div">
                        2. Digital Artwork of the Celebrity
                        </Typography>
                        <Typography className="pt-1" variant="subtitle2"   component="div">
                        3. A Meal Section with the Celebrity
                        </Typography>
                        <Typography className="pt-1" variant="subtitle2"   component="div">
                        4. Selfie Section with the Celebrity
                        </Typography>
                        <Typography className="pt-2 pb-2 text-primary" variant="h6"   component="div">
                         Benefits for Buyer:
                        </Typography>
                        <Typography className="pt-1" variant="subtitle2"   component="div">
                        1. A shoutout in social media
                        </Typography>
                        <Typography className="pt-1" variant="subtitle2"   component="div">
                        2. Display in their showcase
                        </Typography>
                        <Typography className="pt-1" variant="subtitle2"   component="div">
                        3. Lifetime Experience with the Celebrity
                        </Typography>
                    </div>
                    <div className='d-flex pt-2 pb-3' style={{ justifyContent: 'center'}}>
                        <Typography className="titelColor" variant="h6">
                         Pay by DSL and get 30% discount.
                        </Typography>
             </div>
              </Container> 
            </div>
        </div>
    )
}

export default HowItWorks

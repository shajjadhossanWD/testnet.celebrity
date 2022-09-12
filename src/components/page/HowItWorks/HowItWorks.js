import { Typography } from "@mui/material";
import { Container } from "react-bootstrap";

function HowItWorks() {
  return (
    <div style={{ backgroundColor: '#1A1A25' }}>
      <div>
        <h3 className="text-gradient text-center pt-5 text-uppercase" style={{ marginTop: '80px' }}>How it works</h3>
        <div className="small-border bg-color-2"></div>
      </div>
      <div>
        <Container>

          <div className="text-white p-2">
            <Typography className="pt-1 howItWorksFs" variant="subtitle2" component="div">
              DS Legends Pte Ltd (DSL) is launching <a target="_blank" href="https://testnet.celebrity.sg/" style={{ textDecoration: 'none' }} className="text-primary">Celebrity.sg</a> to attract more visitors to Singapore. Anyone can buy these NFTS WITH Perks to enjoy attractive perks which comes with the NFT. This is the first time, where NFTs with real Perks are being launched.
            </Typography>
            <Typography className="pt-3 howItWorksFs" variant="subtitle2" component="div">
              NFT, Non-fungible token is a unique and is a cryptographic token designed to give you something that can’t be copied. At a very high level, most NFTs are part of a blockchain. It is like a digital certificate representing an asset. NFTs can represent real-world items like artwork and real estate. NFT with Perks are created by DSL to personally use and experience the purpose it’s created for unlike other NFTs.
            </Typography>
            <Typography className="pt-3 howItWorksFs" variant="subtitle2" component="div">
              <a target="_blank" href="https://testnet.celebrity.sg/" style={{ textDecoration: 'none' }} className="text-primary">Celebrity.sg</a> wants to connect fans with their celebrities. Fans always exhibit love and admiration towards their favorite celebrities. Celebrity crush and worship has been a fascinating acts of fans.
            </Typography>
            <Typography className="pt-3 howItWorksFs" variant="subtitle2" component="div">
              <a target="_blank" href="https://testnet.celebrity.sg/" style={{ textDecoration: 'none' }} className="text-primary">Celebrity.sg</a> allows fans to meet their favorite celebrity in Singapore. Purchasers of the NFT can have a meal and a selfie session with their favorite celebrity in Singapore.
            </Typography>
            <Typography className="pt-3 pb-3 howItWorksFs" variant="subtitle2" component="div">
              It comes with a digital art of the celebrity, meal with the celebrity, a memorabilia of the celebrity and a selfie session with the celebrity.
            </Typography>

          </div>
          <div className="text-white mt-3 p-2">
            <Typography className="titelColor" variant="h5" gutterBottom component="div">
              What is Celebrity Meal NFT?

            </Typography>
            <Typography className="pt-1 howItWorksFs" variant="subtitle2" component="div">
            Celebrity Meal NFT allows fans to meet their favourite celebrity over a meal.
            </Typography>
            <Typography className="pt-2 pb-2 text-primary" variant="h6" component="div">
              What do you get?
            </Typography>
            <Typography className="pt-1 howItWorksFs" variant="subtitle2" component="div">
              1. Digital Art of the Celebrity
            </Typography>
            <Typography className="pt-1 howItWorksFs" variant="subtitle2" component="div">
              2. Canvas print of the Celebrity
            </Typography>
            <Typography className="pt-1 howItWorksFs" variant="subtitle2" component="div">
              3. 5 mins Live Performance by the Celebrity
            </Typography>
            <Typography className="pt-1 howItWorksFs" variant="subtitle2" component="div">
              4. Meal Session with Celebrity
            </Typography>
            <Typography className="pt-1 howItWorksFs" variant="subtitle2" component="div">
              5. Selfie Session with the Celebrity
            </Typography>
            <Typography className="pt-2 pb-2 text-primary" variant="h6" component="div">
              Why buy?
            </Typography>
            <Typography className="pt-1 howItWorksFs" variant="subtitle2" component="div">
              1. Participate in the NFT project of your Celebrity
            </Typography>
            <Typography className="pt-1 howItWorksFs" variant="subtitle2" component="div">
              2. Opportunity to meet your Celebrity
            </Typography>
            <Typography className="pt-1 howItWorksFs" variant="subtitle2" component="div">
              3. Enjoy a meal with your Celebrity
            </Typography>
            <Typography className="pt-1 howItWorksFs" variant="subtitle2" component="div">
              4. Selfie with your Celebrity
            </Typography>
            <Typography className="pt-1 howItWorksFs" variant="subtitle2" component="div">
              5. Keep the Celebrity Canvas print
            </Typography>
            <Typography className="pt-1 howItWorksFs" variant="subtitle2" component="div">
              6. Sell your Celebrity NFT in BSC marketplaces (Digital Art)
            </Typography>
          </div>
          <div className='d-flex pt-2 pb-3' style={{ justifyContent: 'center' }}>
            <Typography className="text-gradient" variant="h6">
              Pay by DSL and get 30% discount.
            </Typography>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default HowItWorks

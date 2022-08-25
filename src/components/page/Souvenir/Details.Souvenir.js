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
  const [isDetails, setDetails] = useState({})
  const [isSouvenir, setSouvenir] = useState([])
  const [token, setToken] = useState("bnb");

  useEffect(() => {
    axios.get(`https://backend.celebrity.sg/api/nft/${souvenirId}`)
      .then(res => {
        setDetails(res.data?.nft);
      });
  }, [souvenirId])

  useEffect(() => {
    axios.get("https://backend.celebrity.sg/api/nft/allsouvenir")
      .then(res => {
        setSouvenir(res.data.nft.slice(0, 4))
      });
  }, [])

  const hendelButton = () => {
    swal({
      title: "Coming soon!",
      // text: "You clicked the button!",
      icon: "warning",
      button: "Ok",

    });
  }

  const [bnbToken, setBnbToken] = useState();
  const [dslToken, setDslToken] = useState();
  const [s39Token, setS39Token] = useState();

  // Calculation
  const totalSgd = isDetails?.price;
  const usdPerSgd = 0.72;
  const rsPerSgd = 57.45;
  const usd = totalSgd * usdPerSgd;
  const rs = totalSgd * rsPerSgd;

  // BNB Price
  const bnb = usd / bnbToken;
  const bnbTwoDec = bnb.toFixed(2);

  // DSL Price
  const dsl = usd / dslToken;
  const dslTwoDec = dsl.toFixed(2);

  // USDSC Price
  const usdsc = usd.toFixed(2);

  // S39 Price
  const s39 = usd / s39Token;
  const s39TwoDec = s39.toFixed(2);

  // Discount (30%)
  const discountSgd = 30 / 100 * totalSgd;
  const disSgdTwoDec = discountSgd.toFixed(2);

  // RS Discount
  const discountRs = 30 / 100 * rs;
  const disRsTwoDec = discountRs.toFixed(2);

  // USD Discount
  const discountUsd = 30 / 100 * usd;
  const disUsdTwoDec = discountUsd.toFixed(2);
  return (
    <div style={{ backgroundColor: '#1A1A25' }}>
      <div className="d-grid justify_items_center">
        <Container className="row" style={{ marginTop: "100px", alignItems: 'flex-start' }}>
          <Typography className="meal_details_type_title text-gradient" variant="subtitle2" gutterBottom component="div">
            <span>Type Of NFT :</span> {isDetails?.type}
          </Typography>
          <div className="col-sm-12 col-md-6 col-lg-6 d-grid justify_items_center pt-2">
            <Box className=" col-12 card_top_icon mb-2">
              <Box className="icon_love_Dtl_box icon_love_Dtl_box_none pt-1">
                <i className="fa fa-heart"></i>
                <span className="ps-1">{isDetails?.__v}</span>
              </Box>
            </Box>
            <img alt="Souvenir_Image" src={isDetails?.avatar} className='deteilsPageImage' />

          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-grid">

            <h5 className="paymentOptionsChoose">Choose how you want to pay</h5>

            <Box className="pt-5" style={{ color: "white" }}>
              <select className='form-control mb-3 w-50' name="token" id="token" value={token} onChange={e => setToken(e.target.value)} style={{ maxWidth: 450, width: "100%" }}>
                <option value="bnb">BNB</option>
                <option value="usdsc">USDSC</option>
                <option value="dsl">DSL</option>
                <option value="s39">S39</option>
                <option value="s39">QUEST</option>
              </select>

              <Typography className="pt-1 pb-3" variant="subtitle2" gutterBottom component="div">
                ( <span className="spanDiscount">30% discount if paid with DSL tokens</span>)
              </Typography>

              <Typography variant="subtitle2" gutterBottom component="div">
                <span className="text-primary">Name Of NFT :<br /></span> {isDetails?.name}
              </Typography>

              <Typography className="pt-1" variant="subtitle2" component="div">
                <span className="text-primary">Price Of NFT(SGD):<br /> </span>{
                  token === "bnb" || token === "usdsc" ? `${isDetails?.price}` : `${isDetails?.price}`
                }
              </Typography>

              <Typography className="pt-1" variant="subtitle2" gutterBottom component="div">
                <span className="text-primary">Available NFTs:<br /><span className="text-light">{isDetails?.availableNfts}</span></span>
              </Typography>

              <Typography className="pt-1" variant="subtitle2" gutterBottom component="div">
                <span className="text-primary">NFT Details:</span>
              </Typography>

              <div className="pb-1" dangerouslySetInnerHTML={{ __html: isDetails?.description }}></div>

              <Typography className="pt-1" variant="subtitle2" component="div">
                <span className="text-primary">Date:</span><br /> {`${isDetails?.startDate?.slice(8, 10)}/${isDetails?.startDate?.slice(5, 7)}/${isDetails?.startDate?.slice(0, 4)}`}
              </Typography>

              <Typography className="pt-1" variant="subtitle2" component="div">
                <span className="text-primary">Start Time:</span><br /> {isDetails?.startTime}
              </Typography>

              <Typography className="pt-1" variant="subtitle2" component="div">
                <span className="text-primary">End Time:
                </span><br />
                {isDetails?.endTime}
              </Typography>

              <Typography className="pt-1" variant="subtitle2" component="div">
                <span className="text-primary">Venue:</span><br /> {isDetails?.venue}
              </Typography>

              <Typography className="pt-1" variant="subtitle2" component="div">
                <span className="text-primary">Purchase Till:</span><br /> {`${isDetails?.purchaseDate?.slice(8, 10)}/${isDetails?.purchaseDate?.slice(5, 7)}/${isDetails?.purchaseDate?.slice(0, 4)}`}
              </Typography>
              <Typography className="pt-1" variant="subtitle2" gutterBottom component="div">
                <span className="text-primary">Brief Details of Celebrity:</span>
              </Typography>
              <div className="pb-1" dangerouslySetInnerHTML={{ __html: isDetails?.briefDetails }}></div>
            </Box>


            <div style={{ color: '#ffffff', marginTop: '2rem', textAlign: 'center' }}>
              {token === "bnb" && <p style={{ margin: '0' }}>You need to pay {bnbTwoDec} BNB</p>}
              {token === "usdsc" && <p style={{ margin: '0' }}>You need to pay {usdsc} USDSC</p>}
              {token === "dsl" && <p>You need to pay {dslTwoDec} DSL</p>}
              {token === "s39" && <p>You need to pay {s39TwoDec} S39</p>}
            </div>
            <div className="dslDiscountForPayment">
              {token === "dsl" && <p style={{ margin: '0' }}>YOU GET DISCOUNT OF : SGD {disSgdTwoDec} (RS {disRsTwoDec} ) : USD {disUsdTwoDec}</p>}
            </div>
            <div className="d-flex rpv_center" style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
              <Link to="#" className=" justify_content_center mt-4 mb-1">
                {token === "bnb" &&
                  <button onClick={hendelButton} className="card_button button_dtl" href="#!">BUY THIS NFT FOR {bnbTwoDec} BNB</button>}
                {token === "usdsc" &&
                  <button onClick={hendelButton} className="card_button button_dtl" href="#!">BUY THIS NFT FOR {usdsc} USDSC</button>}
                {token === "dsl" &&
                  <button onClick={hendelButton} className="card_button button_dtl" href="#!">BUY THIS NFT FOR {dslTwoDec} DSL</button>}
                {token === "s39" &&
                  <button onClick={hendelButton} className="card_button button_dtl" href="#!">BUY THIS NFT FOR {s39TwoDec} S39</button>}
              </Link>
            </div>
            {/* </Box> */}
          </div>
        </Container>
        <Container>
          <h3 className="text-white text-start mb-0 mt-5 mb-3 d-grid justify_items_center" style={{ fontFamily: "system-ui" }}>Related NFTs</h3>
          <div className="small-border bg-color-2"></div>
          <div className="row" >
            {
              isSouvenir?.map((data, idx) => (
                <div key={{ idx }} className="col-sm-12 col-md-4 col-lg-3 d-flex" style={{ justifyContent: 'center' }}>
                  <div class="card">
                    <div className="nft__item_like like_card">
                      <i className="fa fa-heart"></i>
                      <span>{data.fvt}</span>
                    </div>
                    <div class="card-img" style={{ backgroundImage: `url(${data.avatar})` }}>
                      <div class="overlay d-grid " style={{ alignContent: 'center', justifyItems: 'center' }}>
                        <div className="d-flex card_hover_icon">
                          <Link to={`/mealnft/${data?._id}`}><button className="card_hover_button mt-5" href="#!">BUY NOW</button></Link>
                        </div>
                      </div>
                    </div>
                    <div class="card-content">
                      <div className="row">
                        <Typography className="mt-2" variant="body2">
                          <span className="text-primary">Type of NFT :</span> {data?.type}
                        </Typography>

                        <Typography className="mt-2" variant="body2">
                          <span className="text-primary">Name of NFT :</span> {data.name.slice(0, 30)}{data.name.length > 30 ? ".." : null}
                        </Typography>

                        <Typography className="mt-2" variant="body2">
                          <span className="text-primary">Price of NFT(SGD):</span> {data.price}
                        </Typography>

                        <Typography className="mt-2" variant="body2">
                          <span className="text-primary">Available NFTs: <span className="text-light">50</span></span>
                        </Typography>
                        <Typography className="mt-2" variant="body2">
                          <span className="text-primary">Date:</span> {`${data?.startDate.slice(8, 10)}/${data?.startDate.slice(5, 7)}/${data?.startDate.slice(0, 4)}`}
                        </Typography>
                        <Typography className="mt-2" variant="body2">
                          <span className="text-primary">Start Time:</span> {data?.startTime}
                        </Typography>

                        <Typography className="mt-2" variant="body2">
                          <span className="text-primary">End Time:</span> {data?.endTime}
                        </Typography>

                        <Typography className="mt-2 mb-1" variant="body2">
                          <span className="text-primary">Venue:</span> {data?.venue.slice(0, 32)}{data.venue.length > 30 ? ".." : null}
                        </Typography>

                      </div>
                      <hr style={{ margin: "10px 0px 10px 0px" }} />
                      <div className="d-flex card_bottom_btn_main">
                        <div className="col-10 d-grid">
                          <Link to={`/mealnft/${data._id}`} className="d-grid"> <button className="card_button" href="#!">BUY THIS NFT</button> </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className='d-flex mt-1' style={{ justifyContent: 'center' }}>
            {isSouvenir?.length > 0 ?
              <Typography variant="h6" style={{ color: '#d0d7c2', fontSize: "16px", marginTop: "1rem" }}>
                Pay by DSL and get 30% discount.
              </Typography>
              :
              <Typography variant="h6" style={{ color: '#d0d7c2', fontSize: "16px", marginTop: "1rem" }}>
                Stay Tuned!
              </Typography>}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default SouvenirDetails


{/* <h1 style={{ marginTop: '80px' }} className='text-gradient text-center pt-5 text-uppercase'>{isDetails.id}</h1> */ }

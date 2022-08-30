import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Button, Container, Form, InputGroup, Modal } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import * as htmlToImage from 'html-to-image';
import { CelebrityContext } from "../../../context/CelebrityContext";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { verifyMessage } from "ethers/lib/utils";
import "./MealNft.css";
import { MdArrowDropDownCircle } from 'react-icons/md';

function MealDetails() {
  const { mealnId } = useParams();
  console.log(mealnId);
  const [disableAfterActivation, setDisableAfterActivation] = useState(false);
  // const native = window.location.search;
  // const { title, language } = useParams();
  // const params = new URLSearchParams(native);
  // const nativeTitle = params.get('native');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [isDetails, setDetails] = useState({});
  const [otp, setOtp] = useState("");
  const [isSouvenir, setSouvenir] = useState([]);
  const [token, setToken] = useState("bnb");
  const [bnbToken, setBnbToken] = useState();
  const [dslToken, setDslToken] = useState();
  const [s39Token, setS39Token] = useState();
  const [nftData, setNftData] = useState();
  const [otpVerify, setOtpVerify] = useState();
  const [matchMint, setMatchMint] = useState("");
  const navigate = useNavigate();
  const [automint, setAutomint] = useState("");
  const [onsubDisable, setOnsubDisable] = useState(false);
  const {
    user,
    setRequestLoading,
    openWalletModal,
    mintTicketNFTTestnetBNB,
    mintTicketNFTTestnetUSDSC,
    mintTicketNFTTestnetDSL,
    mintTitleNFTTestnetS39,
    mintTitleNFTTestnetQuest,
    mintAddressTestnet,

  } = useContext(CelebrityContext);
  const handleEmail = e => {
    setEmail(e.target.value);
  }
  useEffect(() => {
    axios.get(`https://backend.celebrity.sg/api/nft/${mealnId}`)
      .then(res => {
        setDetails(res.data?.nft);
      });
  }, [mealnId])

  const todayDate = new Date();

  useEffect(() => {
    axios.get("https://backend.celebrity.sg/api/nft/allmeal")
      .then(res => {
        setNftData(res.data.nft);
        const filtering = res.data.nft.filter(items => items.isDraft === false && items._id != mealnId && new Date(`${items?.purchaseDate.slice(5, 7)}/${items?.purchaseDate.slice(8, 10)}/${items?.purchaseDate.slice(0, 4)}`) > todayDate);
        setSouvenir(filtering?.slice(0, 4))
      });
  }, [])


  useEffect(() => {
    axios.get('https://dslegends.org/api/get-asset-price.php?asset=BNB', {
      headers: {
        Tokenkey: `f02063004b60270f693bfefcbd8a37e91273a4290fdcc9e4ea7b0f531a9d9e64`
      }
    })
      .then(res => {
        setBnbToken(res.data.message);
        console.log(res.data.message)
      })
      .catch(err => {
        console.log(err)
      });
  }, []);

  useEffect(() => {
    axios.get('https://dslegends.org/api/get-asset-price.php?asset=DSL', {
      headers: {
        Tokenkey: `f02063004b60270f693bfefcbd8a37e91273a4290fdcc9e4ea7b0f531a9d9e64`
      }
    })
      .then(res => {
        setDslToken(res.data.message);
        console.log(res.data.message)
      })
      .catch(err => {
        console.log(err)
      });
  }, []);

  useEffect(() => {
    axios.get('https://dslegends.org/api/get-asset-price.php?asset=S39', {
      headers: {
        Tokenkey: `f02063004b60270f693bfefcbd8a37e91273a4290fdcc9e4ea7b0f531a9d9e64`
      }
    })
      .then(res => {
        setS39Token(res.data.message);
        console.log(res.data.message)
      })
      .catch(err => {
        console.log(err)
      });
  }, []);
  const handleVerifyEmail = async (e) => {
    // check if email is valid
    setDisableAfterActivation(true);
    if (email.length > 0 && email.includes("@" && ".")) {
      // setLoading(true);
      await axios.post('https://backend.celebrity.sg/api/v1/verifymint/mail', {
        email: email
      }).then(res => {
        if (res.status === 200) {
          // alert(res.data.message);
          swal({
            text: res.data.message,
            icon: "success",
            button: "OK!",
            className: "modal_class_success",
          });
          setOtpVerify(res.data.otp);

          setTimeout(() => {
            console.log("Delayed for 1 minute");
            setDisableAfterActivation(false);
          }, 120000);
        }
      }).catch(err => {
        // alert(err.response.data.message);
        swal({
          title: "Attention",
          text: err.response.data.message,
          icon: "warning",
          button: "OK!",
          className: "modal_class_success",
        });
      })
        .finally(() => {
          // setLoading(false);
        });
    }
    else {
      swal({
        title: "Attention",
        text: "Please enter a valid email address",
        icon: "warning",
        button: "OK!",
        className: "modal_class_success",
      });
    }
  }

  const onsubAutoMint = async (e) => {
    e.preventDefault();

    const automintcode = e.target.automintcode.value;
    const email = e.target.email.value;
    // const otp = e.target.verificationCode;

    if (otp == otpVerify) {
      await axios.get(`https://backend.dsl.sg/api/v1/paymentverifyemail/dsldata/${email}`)
        .then(res => {
          if (res.status === 200) {
            setMatchMint(res.data[0]);
            const user = res.data.filter(userpro => userpro.email == email);
            if (user) {
              if (res.data[0]?.otp === automintcode) {
                swal({
                  title: "Success",
                  text: "Auto mint successful",
                  icon: "success",
                  button: "OK!",
                  className: "modal_class_success",
                });
                e.target.reset();
                setEmail("");
                setOtp("");
                setAutomint("");
                setOnsubDisable(true);
              }
              else {
                swal({
                  title: "Attention",
                  text: "Auto mint unsuccessful",
                  icon: "warning",
                  button: "OK!",
                  className: "modal_class_success",
                });
              }
              // console.log(matchMint);
            }
            else {
              swal({
                title: "Attention",
                text: "User not found",
                icon: "warning",
                button: "OK!",
                className: "modal_class_success",
              });
            }
          }
        })
    }
    else {
      swal({
        title: "Attention",
        text: "Auto mint unsuccessful",
        icon: "warning",
        button: "OK!",
        className: "modal_class_success",
      });
    }

  }


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

  // FINQUEST Price
  const finquest = usd / 0.0005;
  const finquestTwoDec = finquest.toFixed(2);

  // Discount (30%)
  const discountSgd = 30 / 100 * totalSgd;
  const disSgdTwoDec = discountSgd.toFixed(2);

  // RS Discount
  const discountRs = 30 / 100 * rs;
  const disRsTwoDec = discountRs.toFixed(2);

  // USD Discount
  const discountUsd = 30 / 100 * usd;
  const disUsdTwoDec = discountUsd.toFixed(2);
  //minit


  const mintCelebrityNft = async () => {

    setRequestLoading(true);
    const data = new FormData();
    data.append('name', nftData.name);
    data.append('image', nftData.avatar);
    data.append('description', nftData.description);
    data.append('type', nftData.type);
    data.append('date', nftData.date);
    data.append('price', nftData.price);
    data.append('venue', nftData.venue);
    data.append('token', nftData.token);

    await axios.post('https://backend.celebrity.sg/api/v1/mint/uri-json-nft', data, {
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`
      // }
    })
      .then(async (res) => {
        let Obj = {};
        if (res.status === 200) {
          if (token === "bnb") {
            Obj = await mintTicketNFTTestnetBNB(res.data.uri, bnbTwoDec);
          }
          else if (token === "usdsc") {
            Obj = await mintTicketNFTTestnetUSDSC(res.data.uri, usdsc);
          }
          else if (token === "dsl") {
            Obj = await mintTicketNFTTestnetDSL(res.data.uri, dslTwoDec);
          }
          else if (token === "s39") {
            Obj = await mintTitleNFTTestnetS39(res.data.uri, s39TwoDec);
          }
          else if (token === "finquest") {
            Obj = await mintTitleNFTTestnetQuest(res.data.uri, finquestTwoDec);
          }
          data.append("mint_hash", Obj.mint_hash);
          await axios.post("https://backend.celebrity.sg/api/v1/mint/save-nft", data, {
            // headers: {
            //   Authorization: `Bearer ${localStorage.getItem("token")}`
            // }
          })
            .then(res => {
              if (res.status === 200) {
                setRequestLoading(false);
                const wrapper = document.createElement("div");
                wrapper.innerHTML = `
                <a href=${Obj.mint_hash} target="_any" className="link_hash">${Obj.mint_hash}</a>
                <br/>
                <p className="success"><b>You have successfully minted.<b></p>
                <p>Use the following information import your NFT to your wallet</p>
                <p className="address">Contract Address: ${mintAddressTestnet}</p>
                <p>Token ID: ${Obj.ID}</p>
                 `
                swal({
                  title: "Minted",
                  content: wrapper,
                  icon: "success",
                  buttons: true,
                  className: "modal_class_success",
                })
                  .then((willDelete) => {
                    if (willDelete) {
                      navigate(`/mintednft/${Obj.ID}/${mintAddressTestnet}`)
                    } else {
                      console.log("good job")
                    }
                  });

              }
            })
            .catch(err => {
              console.log(err);
              setRequestLoading(false);
              const wrapper = document.createElement("div");
              wrapper.innerHTML = `<a href=${Obj.mint_hash} target="_any" className="link_hash">${Obj.mint_hash}</a> <br/> <p className="success"><b>You have successfully minted but error in while saving data.<b></p>`
              swal({
                title: "Warning",
                content: wrapper,
                icon: "warning",
                button: "OK",
                className: "modal_class_success",
              });
            })
        }
      })
      .catch(err => {
        console.log(err);
        setRequestLoading(false);
        if (err.code === 4001) {
          return swal({
            title: "Failed",
            text: "Minting Failed!",
            icon: "warning",
            button: "OK",
            dangerMode: true,
            className: "modal_class_success",
          });
        }
        return swal({
          title: "Attention",
          text: "Something went wrong. Please try again later.",
          icon: "warning",
          button: "OK",
          dangerMode: true,
          className: "modal_class_success",
        });
      })
  }

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



            <Box className="pt-5 fontArial" style={{ color: "white" }}>

             

              <Typography variant="subtitle2" gutterBottom component="div">
                <span className="text-primary">Name Of NFT :<br /></span> <span className="fw-normal">{isDetails?.name}</span>
              </Typography>

              <Typography className="pt-1" variant="subtitle2" component="div">
                <span className="text-primary">Price Of NFT(SGD):<br /> </span><span className="fw-normal">{
                  token === "bnb" || token === "usdsc" ? `${isDetails?.price}` : `${isDetails?.price}`
                }</span>
              </Typography>

              <Typography className="pt-1" variant="subtitle2" gutterBottom component="div">
                <span className="text-primary">Available NFTs:<br /><span className="text-light fw-normal">{isDetails?.availableNfts}</span></span>
              </Typography>

              <Typography className="pt-1" variant="subtitle2" gutterBottom component="div">
                <span className="text-primary">NFT Details:</span>
              </Typography>

              <div className="pb-1" dangerouslySetInnerHTML={{ __html: isDetails?.description }}></div>

              <Typography className="pt-1" variant="subtitle2" component="div">
                <span className="text-primary">Date:</span><br /> <span className="fw-normal">{`${isDetails?.startDate?.slice(8, 10)}/${isDetails?.startDate?.slice(5, 7)}/${isDetails?.startDate?.slice(0, 4)}`}</span>
              </Typography>

              <Typography className="pt-1" variant="subtitle2" component="div">
                <span className="text-primary">Start Time:</span><br /> <span className="fw-normal">{isDetails?.startTime} SGT</span>
              </Typography>

              <Typography className="pt-1" variant="subtitle2" component="div">
                <span className="text-primary">End Time:
                </span><br />
                <span className="fw-normal">{isDetails?.endTime} SGT</span>
              </Typography>

              <Typography className="pt-1" variant="subtitle2" component="div">
                <span className="text-primary">Venue:</span><br /> <span className="fw-normal">{isDetails?.venue}</span>
              </Typography>

              <Typography className="pt-1" variant="subtitle2" component="div">
                <span className="text-primary">Purchase Till:</span><br /> <span className="fw-normal">{`${isDetails?.purchaseDate?.slice(8, 10)}/${isDetails?.purchaseDate?.slice(5, 7)}/${isDetails?.purchaseDate?.slice(0, 4)}`}</span>
              </Typography>
              <Typography className="pt-1" variant="subtitle2" gutterBottom component="div">
                <span className="text-primary">Brief Details of Celebrity:</span>
              </Typography>
              <div className="pb-1" dangerouslySetInnerHTML={{ __html: isDetails?.briefDetails }}></div>

              <span className="text-primary">Choose how you want to pay:</span>
              {/* <h5 className="paymentOptionsChoose">Choose how you want to pay</h5> */}
              <div className="d-flex align-items-center">
                <select className='form-control mb-3 mt-1 w-50' name="token" id="token" value={token} onChange={e => setToken(e.target.value)} style={{ maxWidth: 450, width: "100%" }}>
                  <option value="bnb">BNB</option>
                  <option value="usdsc">USDSC</option>
                  <option value="dsl">DSL</option>
                  <option value="s39">S39</option>
                  <option value="finquest">FINQUEST</option>
                </select> <span className="text-dark handlePosition rounded-circle fs-5"><i class="fas fa-angle-down"></i></span>
              </div>

              <Typography className="pt-1 pb-3" variant="subtitle2" gutterBottom component="div">
                ( <span className="spanDiscount">30% discount if paid with DSL tokens</span>)
              </Typography>

            </Box>


            <div style={{ color: '#ffffff', marginTop: '2rem', textAlign: 'center' }}>
              {token === "bnb" && <p style={{ margin: '0' }}>You need to pay {bnbTwoDec} BNB</p>}
              {token === "usdsc" && <p style={{ margin: '0' }}>You need to pay {usdsc} USDSC</p>}
              {token === "dsl" && <p>You need to pay {dslTwoDec} DSL</p>}
              {token === "s39" && <p>You need to pay {s39TwoDec} S39</p>}
              {token === "finquest" && <p>You need to pay {finquestTwoDec} FINQUEST</p>}
            </div>
            <div className="dslDiscountForPayment">
              {token === "dsl" && <p style={{ margin: '0' }}>YOU GET DISCOUNT OF : SGD {disSgdTwoDec} (RS {disRsTwoDec} ) : USD {disUsdTwoDec}</p>}
            </div>
            <div className="d-flex rpv_center" style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
              {
                (!user.walletAddress || user.walletAddress === "undefined") ?
                  <button className="card_button button_dtl mt-3" onClick={openWalletModal} href="#!"><i className="icon_wallet_alt me-1"></i> <span>Connect Wallet</span></button>

                  :
                  <Link to="#" className=" justify_content_center mt-4 mb-1">
                    {token === "bnb" &&
                      <button className="card_button button_dtl" onClick={mintCelebrityNft} href="#!">BUY THIS NFT FOR {bnbTwoDec} BNB</button>}
                    {token === "usdsc" &&
                      <button className="card_button button_dtl" onClick={mintCelebrityNft} href="#!">BUY THIS NFT FOR {usdsc} USDSC</button>}
                    {token === "dsl" &&
                      <button className="card_button button_dtl" onClick={mintCelebrityNft} href="#!">BUY THIS NFT FOR {dslTwoDec} DSL</button>}
                    {token === "s39" &&
                      <button className="card_button button_dtl" onClick={mintCelebrityNft} href="#!">BUY THIS NFT FOR {s39TwoDec} S39</button>}
                    {token === "finquest" &&
                      <button className="card_button button_dtl" onClick={mintCelebrityNft} href="#!">BUY THIS NFT FOR {finquestTwoDec} FINQUEST</button>}
                  </Link>

              }
              <br />

            </div>
            {/* <div className="mx-auto my-3 text-center">
              <Button variant="danger" className="ps-5 pe-5 text-center" onClick={handleShow}>Auto Mint</Button>
            </div> */}
            {/* </Box> */}
          </div>
        </Container>
        <Container>
          <h3 className="text-white text-start mb-0 mt-5 mb-3 d-grid justify_items_center" style={{ fontFamily: "system-ui" }}>Related NFTs</h3>
          <div className="small-border bg-color-2"></div>
          {isSouvenir?.length < 2 ? <div style={{ marginTop: '-20px', marginBottom: '32px' }} className="text-gradient text-center fs-4 pt-4">No related NFTs for now!</div> : <div className="row d-flex justify-content-center" >
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
                      <div className="row" style={{ minHeight: '324px' }}>
                        <Typography className="mt-2" variant="body2">
                          <span className="text-primary">Type of NFT :</span> {data?.type}
                        </Typography>

                        <Typography className="mt-2 slider_nft_text" variant="div">
                          <span className="text-primary">Name of NFT :</span> {data?.name}
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
                          <span className="text-primary">Start Time:</span> {data?.startTime} SGT
                        </Typography>

                        <Typography className="mt-2" variant="body2">
                          <span className="text-primary">End Time:</span> {data?.endTime} SGT
                        </Typography>

                        <Typography className="mt-2 mb-1 slider_nft_text" variant="div">
                          <span className="text-primary">Venue:</span> {data?.venue}
                        </Typography>
                      </div>
                      <hr style={{ margin: "10px 0px 10px 0px" }} />
                      <div className="d-flex card_bottom_btn_main" style={{ margin: '15px 0 8px 0' }}>
                        <div className="col-10 d-grid">
                          <Link to={`/mealnft/${data._id}`} className="d-grid"> <button className="card_button" href="#!">BUY THIS NFT at SGD {data?.price}</button> </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>}
          {isSouvenir?.length > 1 && <div className='d-flex mt-1' style={{ justifyContent: 'center' }}>
            {isSouvenir?.length > 0 ?
              <Typography variant="h6" style={{ color: '#d0d7c2', fontSize: "16px", marginTop: "1rem" }}>
                Pay by DSL and get 30% discount.
              </Typography>
              :
              <Typography variant="h6" style={{ color: '#d0d7c2', fontSize: "16px", marginTop: "1rem" }}>
                Stay Tuned!
              </Typography>}
          </div>}
        </Container>
      </div>
      <Modal show={show} onHide={handleClose} className="overflow-hidden text-light" style={{ overflowY: "hidden", overflowX: "hidden" }}>
        <Modal.Header className="text-light" closeButton style={{ backgroundColor: "#242435", color: "white" }}>
          <Modal.Title className="text-light">Auto Mint</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#242435", color: "white" }}>
          <form onSubmit={onsubAutoMint}>
            <Form.Control
              min="1"
              type="number"
              value={automint}
              onChange={e => setAutomint(e.target.value)}
              name="automintcode"
              placeholder="Auto Mint Code"
              required
            />
            <br />
            <InputGroup >
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleEmail}
                required />
              <button
                onClick={() => handleVerifyEmail()}
                disabled={(email.length === 0 || disableAfterActivation) ? true : false}
                type="button" className="btn btn-danger" id="button-addon2">
                Verify Email
              </button>
            </InputGroup>
            <label className="fs-6 pb-3">We will send your NFT to this email</label>
            {/* <p>We will send your NFT to this email</p> */}
            <br />
            <Form.Control
              min="1"
              type="number"
              name="verificationCode"
              placeholder="Verification Code"
              value={otp}
              onChange={e => setOtp(e.target.value)}
              required
            />
            <Modal.Footer style={{ backgroundColor: "#242435", color: "white" }}>
              <Button variant="secondary" onClick={handleClose}>
                CLOSE
              </Button>
              <Button variant="primary" type="submit" disabled={(email.length === 0 || otp.length === 0 || automint.length === 0 || onsubDisable || otp != otpVerify) ? true : false}>
                SUBMIT
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>

      </Modal>
    </div>
  )
}

export default MealDetails

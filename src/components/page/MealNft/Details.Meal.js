import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Button, Container, Dropdown, Form, InputGroup, Modal } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import * as htmlToImage from "html-to-image";
import { CelebrityContext } from "../../../context/CelebrityContext";
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
// import { verifyMessage } from "ethers/lib/utils";
import "./MealNft.css";
import { MdArrowDropDownCircle, MdArrowBack } from 'react-icons/md';
// import Barcode from '../../../Images/Barcode.jpeg';
import QRCode from 'qrcode';
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import EmailVerifyModal from "./EmailVerifyModal";
import Select from "react-select";
import { useTimer } from 'react-timer-hook';
import { BigNumber, ethers } from "ethers";
import { v4 as uuidv4 } from "uuid";

import {
  USDSCtokenAddressMainnet,
  DSLtokenAddressMainnet,
} from "../../../utils/constant";

const selectOptions = [
  {
    value: "bnb",
    label: "BNB",
    image: "/bnb.png",
  },
  {
    value: "usdsc",
    label: "USDSC",
    // image: "/usdsc.jpeg",
    image: "https://i.ibb.co/p1Vfjp0/usdsc.png",

  },
  {
    value: "dsl",
    label: "DSL",
    image: "/dsl.jpg",
  },

];


function MealDetails({ expiryTimestamp }) {

  const [selectedOption, setSelectedOption] = useState({
    value: "bnb",
    label: "BNB",
    image: "/bnb.png",
  });

  const { mealnId, addressImg } = useParams();
  const [disableAfterActivation, setDisableAfterActivation] = useState(false);
  const [allAvailable, setAllAvailable] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [isClickedMint, setIsClickedMint] = useState(false);

  const [dateCount, setDateCount] = useState("");
  const [targetCount, setTargetCount] = useState("");
  // const native = window.location.search;
  // const { title, language } = useParams();
  // const params = new URLSearchParams(native);
  // const nativeTitle = params.get('native');
  const [show, setShow] = useState(false);
  // const [expired, setExpired] = useState('');
  // const [seconds, setSeconds] = useState();
  // const [minutes, setMinutes] = useState();
  // const [hours, setHours] = useState();
  // const [days, setDays] = useState();
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [openEmail, setOpenEmail] = useState(false);
  const [email1, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  // const [sendEmailOTP, setSendEmailOTP] = useState(false);
  const [images, setImages] = useState('')
  const [isError, setError] = useState(false);


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
  const [gotRefCode, setGotRefCode] = useState(false);
  const [src, setSrc] = useState('');
  const [random, setRandom] = useState();
  const [sendMail, setSendMail] = useState('');
  const [latestNft, setLatestNft] = useState('');
  const [dataUrl, setDataUrl] = useState('');
  const [tokenId, setTokenId] = useState('');
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [affiliateWalletAddress, setAffiliateWalletAddress] = useState("");
  const [strTimeToAmPm, setStrTimeToAmPm] = useState('');
  const [endTimeToAmPm, setEndTimeToAmPm] = useState('');

  const {
    user,
    setRequestLoading,
    openWalletModal,
    mintTicketNFTTestnetBNB,
    mintTicketNFTTestnetUSDSC,
    mintTicketNFTTestnetDSL,
    mintAddressTestnet,
    signBuyFunction
  } = useContext(CelebrityContext);
  // const handleEmail = e => {
  //   setEmail(e.target.value);
  // }







  // QR code functionality
  useEffect(() => {
    const val = Math.floor(10000 + Math.random() * 900000000000);
    const staticValRan = "4816" + val;
    setRandom(staticValRan);
  }, [])

  useEffect(() => {
    QRCode.toDataURL(random?.toString())
      .then(setSrc);
  }, [random])


  useEffect(() => {
    axios.get("https://backend.celebrity.sg/api/v1/mint/mint-nft")
      .then(res => {
        setAllAvailable(res.data);
      });
  }, [])





  //get minted nft data
  useEffect(() => {
    axios.get("https://backend.celebrity.sg/api/v1/mint/mint-nft")
      .then(res => {
        setLatestNft(res.data[0].certificate);
        console.log(res.data[0].certificate);
        console.log(latestNft)
      });
  }, [])

  // console.log(allAvailable.length);
  useEffect(() => {
    axios.get(`https://backend.celebrity.sg/api/nft/${mealnId}`)
      .then(res => {
        setDetails(res.data?.nft);
        setDateCount(res.data?.nft?.startDate);
        setTargetCount(res.data?.nft?.purchaseDate);
        const convertTime24to12 = (time24h) => {
          let time = time24h
            .toString()
            .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time24h];

          if (time.length > 1) {
            time = time.slice(1, -1);
            time[5] = +time[0] < 12 ? ' am' : ' pm';
            time[0] = +time[0] % 12 || 12;
          }
          return time.join('');
        };
        const st = convertTime24to12(res.data?.nft?.startTime);
        const et = convertTime24to12(res.data?.nft?.endTime);
        setStrTimeToAmPm(st);
        setEndTimeToAmPm(et);
      });
  }, [mealnId])


  useEffect(() => {
    const todayDate = new Date();
    axios.get("https://backend.celebrity.sg/api/nft/allmeal")
      .then(res => {
        setNftData(res.data.nft);
        const filtering = res.data.nft.filter(items => items.isDraft === false && items._id != mealnId && new Date(`${items?.purchaseDate.slice(5, 7)}/${items?.purchaseDate.slice(8, 10)}/${items?.purchaseDate.slice(0, 4)}`) > todayDate);
        setSouvenir(filtering?.slice(0, 4))
      });
  }, [mealnId])


  useEffect(() => {
    axios.get('https://dslegends.org/api/get-asset-price.php?asset=BNB', {
      headers: {
        Tokenkey: `f02063004b60270f693bfefcbd8a37e91273a4290fdcc9e4ea7b0f531a9d9e64`
      }
    })
      .then(res => {
        setBnbToken(res.data.message);
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
        // console.log(res.data.message)
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
        // console.log(res.data.message)
      })
      .catch(err => {
        console.log(err)
      });
  }, []);


  // Re-send OTP functionality
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  const restarting = (sec) => {


    const time = new Date();
    time.setSeconds(time.getSeconds() + sec);
    restart(time)

  }

  const handleVerifyEmail = async (e) => {
    // check if email is valid
    setDisableAfterActivation(true);
    if (email1.length > 0 && email1.includes("@" && ".")) {
      // setLoading(true);
      setEmailVerify(true);
      await axios.post('https://backend.celebrity.sg/api/v1/verifymint/mail', {
        email: email1
      }).then(res => {
        if (res.status === 200) {
          // alert(res.data.message);
          setSendMail(res.data.email)
          restarting(180);
          swal({
            text: res.data.message,
            icon: "success",
            button: "OK!",
            className: "modal_class_success",
          });
          setOtpVerify(res.data.otp);

          setTimeout(() => {
            setDisableAfterActivation(false);
          }, 120000);
        }
        setOpenEmail(true)
      }).catch(err => {
        // alert(err.response.data.message);
        setEmailVerify(false);
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


  // Referal Code Discount
  const discountReferal = 10 / 100 * isDetails?.price;
  const disRefTwoDec = discountReferal.toFixed(2);


  // Calculation
  let totalSgd;

  if (!gotRefCode) {
    totalSgd = isDetails?.price;
  } else {
    totalSgd = isDetails?.price - disRefTwoDec;
  }

  const usdPerSgd = 0.72;
  const rsPerSgd = 57.45;
  const usd = totalSgd * usdPerSgd;
  const rs = totalSgd * rsPerSgd;

  // BNB Price
  const bnb = usd / bnbToken;
  const bnbTwoDec = bnb.toFixed(6);

  // DSL Price
  const dsl = usd / dslToken;
  const dslTwoDec = dsl.toFixed(4);

  // USDSC Price
  const usdsc = usd.toFixed(4);



  // Discount (30%)
  const discountSgd = 30 / 100 * totalSgd;
  const disSgdTwoDec = discountSgd.toFixed(2);

  // RS Discount
  const discountRs = 30 / 100 * rs;
  const disRsTwoDec = discountRs.toFixed(2);

  // USD Discount
  const discountUsd = 30 / 100 * usd;
  const disUsdTwoDec = discountUsd.toFixed(2);


  // Calculation without discounts
  const allSgdCost = isDetails?.price;

  const usdPerSgd01 = 0.72;
  const usd01 = allSgdCost * usdPerSgd01;

  // BNB Price
  const bnb01 = usd01 / bnbToken;
  const bnbTwoDec01 = bnb01.toFixed(6);

  // DSL Price
  const dsl01 = usd01 / dslToken;
  const dslTwoDec01 = dsl01.toFixed(4);

  // USDSC Price
  const usdsc01 = usd01.toFixed(4);

  // S39 Price
  // const s3901 = usd01 / s39Token;
  // const s39TwoDec01 = s3901.toFixed(2);

  // // FINQUEST Price
  // const finquest01 = usd01 / 0.0005;
  // const finquestTwoDec01 = finquest01.toFixed(2);


  // Saved prices calculation
  const savedBNB = bnbTwoDec01 - bnbTwoDec;
  const savedDSL = dslTwoDec01 - dslTwoDec;
  const savedUSDSC = usdsc01 - usdsc;
  // const savedS39 = s39TwoDec01 - s39TwoDec;
  // const savedFINQ = finquestTwoDec01 - finquestTwoDec;

  const savedBNB4Digit = savedBNB.toFixed(6);
  const savedDSL4Digit = savedDSL.toFixed(4);
  const savedUSDSC4Digit = savedUSDSC.toFixed(4);
  // const savedS394Digit = savedS39.toFixed(4);
  // const savedFINQ4Digit = savedFINQ.toFixed(4);




  let newDate = new Date();
  let dd = String(newDate.getDate()).padStart(2, '0');
  let mm = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = newDate.getFullYear();
  let hh = newDate.getHours();
  let min = newDate.getMinutes();
  let ss = newDate.getSeconds();
  newDate = dd + '/' + mm + '/' + yyyy + '  ' + hh + ':' + min + ':' + ss;
  const nftId = random?.toString();


  const postDataAfterMint = async (e) => {
    const perkStatus = false;

    const data = {
      NFTID: nftId,
      NFTWebsite: "https://celebrity.sg",
      NFTType: isDetails.type,
      NFTDetails: isDetails.description,
      NFTPerks: isDetails.perkNft,
      NFTPerksStatus: perkStatus,
      NFTCreated: newDate
    }


    await axios.post('https://backend.dsl.sg/api/v1/nftdetails', data, {

    })
      .then(res => {
        if (res.status === 200) {

          console.log("Successfully data passed")
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


  // const smartContract = async (price, tokenaddress) => {

  //   const data = {
  //     id: isDetails._id,
  //     price: price,
  //     tokenAddress: tokenaddress,
  //     refAddress: affiliateWalletAddress,
  //     nonce: uuidv4(),
  //     uri: isDetails.avatar,
  //     signature: newDate
  //   }
  //   console.log(data);

  //   await axios.post('https://backend.dsl.sg/api/v1/nftdetails', data, {

  //   })
  //     .then(res => {
  //       if (res.status === 200) {

  //         console.log("Successfully data passed")
  //       }
  //     }).catch(err => {
  //       console.log(err)
  //     })
  //     .finally(() => {
  //       // setLoading(false);
  //     });

  // }



  let celebrityTemplate = useRef();

  useEffect(() => {

    const dataUrlNft = celebrityTemplate.current;
    console.log(dataUrlNft)

    setDataUrl(dataUrlNft)

  }, [isDetails])


  let availableNft = parseInt(isDetails?.availableNfts) - parseInt(allAvailable.length);
  // let availableNft = 0;


  /// send full details to user

  const handleSubmit = (TokeNID, dataUrlCelebrity) => {
    
    const NFTID = TokeNID
    const address = mintAddressTestnet
    const type = isDetails.type
    const name = isDetails.name
    const details = isDetails.name
    const price = isDetails.price
    const available = availableNft
    const startTime = isDetails.startTime
    const perkNft = isDetails.perkNft
    const briefDetails = isDetails.briefDetails
    const endTime = isDetails.endTime
    const venue = isDetails.venue
    const image = isDetails.avatar
    const date = isDetails.startDate
    const endDate = isDetails.purchaseDate
    const email = email1
    const Qrcode = nftId
    const QrcodeImg = dataUrlCelebrity

    console.log('44444')

    axios.post("https://backend.celebrity.sg/api/v1/verifymint/send-user", {
      NFTID, perkNft, Qrcode, QrcodeImg, address, briefDetails, details, type, date, name, image, price, venue, email, available, startTime, endTime, endDate
    }, {
    })
      .then(res => {
        if (res.status === 200) {
          console.log(res.data.message)

        }
      })
      .catch(error => {
        console.log(error)
      });
  }



  //===============//// MINTED NFT FUNCTION////===================//

  const mintCelebrityNft = async (priceByToken, tokenAddress, affiliateWalletAddress, mealnId) => {

    if (!otpVerify) {
      return swal({
        title: "Warning",
        text: "Before minting please enter your email and verify it. We will send the details to you.",
        icon: "warning",
        button: "OK",
        dangerMode: true,
        className: "modal_class_success",
      });
    }



    setIsClickedMint(true)
    setRequestLoading(true);
    // const dataUrl = await htmlToImage.toPng(celebrityTemplate.current);
    let dataUrlCelebrity = await htmlToImage.toPng(dataUrl)


    const data = new FormData();
    data.append('Id', isDetails._id);
    data.append('price', priceByToken);
    data.append('tokenAddress', tokenAddress);
    data.append('refAddress', affiliateWalletAddress);
    data.append('nonce', uuidv4());
    data.append('name', isDetails.name);
    data.append('image', isDetails.avatar);
    data.append('file', dataUrlCelebrity);
    data.append('description', isDetails.description);
    data.append('type', isDetails.type);
    data.append('date', isDetails.date);
    data.append('venue', isDetails.venue);
    data.append('token', isDetails.token);


    await axios.post('https://backend.celebrity.sg/api/v1/mint/uri-json-nft', data, {
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`
      // }
    })
      .then(async (res) => {
        let Obj = {};
        console.log("111111123: ", data)
        console.log(res.data.uri)
        if (res.status === 200) {
          const data1 = await signBuyFunction(mealnId,
            ethers.utils.parseEther(priceByToken),
            tokenAddress,
            affiliateWalletAddress,
            res.data.uri)
          console.log('11111112322222222222222222222299', data1)



          if (token === "bnb") {
            Obj = await mintTicketNFTTestnetBNB(data1);
          }
          else if (token === "usdsc") {
            Obj = await mintTicketNFTTestnetUSDSC(data1);
          }
          else if (token === "dsl") {
            Obj = await mintTicketNFTTestnetDSL(data1);
          }
          // else if (token === "s39") {
          //   Obj = await mintTitleNFTTestnetS39(data1);
          // }
          // else if (token === "finquest") {
          //   Obj = await mintTitleNFTTestnetQuest(data1);
          // }
        console.log(res.data.fileQr)
          const data2 = {
            name: isDetails.name,
            price: isDetails.price,
            image: isDetails.avatar,
            file: res.data.fileQr, 
          }
          data.append("mint_hash", Obj.mint_hash);
          setTokenId(Obj.ID);
          console.log(data);
          await axios.post("https://backend.celebrity.sg/api/v1/mint/save-nft", data2, {
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
                <p className="success">You have successfully minted.</p>
                <p>Use the following information to import the NFT to your wallet</p>
                <p className="address">Contract Address: <br/> ${mintAddressTestnet}</p>
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
                      swal({
                        title: "Success",
                        text: "Please Check your mail for Minted NFT details",
                        icon: "success",
                        button: "OK!",
                        className: "modal_class_success",
                      });
                    } else {
                      console.log("good job")
                      swal({
                        title: "Success",
                        text: "Please Check your mail for Minted NFT details",
                        icon: "success",
                        button: "OK!",
                        className: "modal_class_success",
                      });
                    }
                  });
                postDataAfterMint();
                handleSubmit(Obj.ID, res.data.ImgCelebrity);

                // smartContract(Obj.mintPrice, Obj.address);
              }
            })
            .catch(err => {
              console.log(err);
              setRequestLoading(false);
              const wrapper = document.createElement("div");
              wrapper.innerHTML = `<a href=${Obj.mint_hash} target="_any" className="link_hash">${Obj.mint_hash}</a> <br/> <p className="success">You have successfully minted but error in while saving data.</p>`
              swal({
                title: "Warning",
                content: wrapper,
                icon: "warning",
                button: "OK",
                className: "modal_class_success",
              });
            })
          console.log(res.data.fileQr)

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



  // Referal code discount
  useEffect(() => {
    axios.get('https://backend.celebrity.sg/api/v1/user/all')
      .then(res => {
        setAllUsers(res.data);
      })
  }, [])

  const othersRefCodes = allUsers.filter(i => i?.myReferralCode !== user?.myReferralCode);

  const handleAffiliateCode = (e) => {
    console.log(e.target.value);
    const refCode = othersRefCodes.find(i => i?.myReferralCode === e.target.value);
    setAffiliateWalletAddress(refCode?.walletAddress);
    if (refCode?.myReferralCode === e.target.value) {
      setGotRefCode(true);
    }
    else {
      setGotRefCode(false);
    }
  }



  // Select options functionality
  const handleChoosePayment = e => {
    setSelectedOption(e);
    setToken(e.value);
  }

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
      color: "#000",
      backgroundColor: "#fff",
    }),

    singleValue: (provided, state) => {

      return { ...provided, };
    },
  };

  const handleClick = () => {
    if (!user.walletAddress || user.walletAddress === "undefined") {
      openWalletModal();
    } else {
      if (isClicked) {
        // setLikes(likes - 1);
        localStorage.setItem("like", likes - 1);
      } else {
        // setLikes(likes + 1);
        localStorage.setItem("like", likes + 1);
      }
      setIsClicked(!isClicked);
      // setLikes(likess);
      // console.log(likess);
    }

  };


  // like functionality
  const likeNft = (id) => {
    console.log("inside like");
    if (!user.walletAddress || user.walletAddress === "undefined") {
      openWalletModal();
    } else {
      console.log(id)
      fetch('https://backend.celebrity.sg/api/nft/like', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          nftId: id,
          walletAddress: user?.walletAddress
        })
      }).then(res => res.json())
        .then(result => {
          if (isDetails._id == result._id) {
            setDetails(result)
          } else {
            setDetails(isDetails)
          }

        }).catch(err => {
          console.log(err)
        })
    }
  }
  const unlikeNft = (id) => {
    console.log("inside unlike");
    if (!user.walletAddress || user.walletAddress === "undefined") {
      openWalletModal();
    } else {
      console.log(id)
      fetch('https://backend.celebrity.sg/api/nft/unlike', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          nftId: id,
          walletAddress: user?.walletAddress
        })
      }).then(res => res.json())
        .then(result => {

          if (isDetails._id == result._id) {
            setDetails(result)
          } else {
            setDetails(isDetails)
          }

        }).catch(err => {
          console.log(err)
        })
    }
  }

  return (
    <div style={{ backgroundColor: '#1A1A25' }}>

      <div className="d-grid justify_items_center">
        <Container className="row" style={{ marginTop: "100px", alignItems: 'flex-start' }}>
          <Typography className="meal_details_type_title text-gradient" variant="subtitle2" gutterBottom component="div">
            <span>Type Of NFTs :</span> {isDetails?.type}
          </Typography>
          <div className="col-sm-12 col-md-6 col-lg-6 d-grid justify_items_center pt-2">
            <Box className=" col-12 card_top_icon mb-2">
              <Box className="icon_love_Dtl_box icon_love_Dtl_box_none pt-1"
                onClick={() => isDetails.likes?.includes(user?.walletAddress) ? unlikeNft(isDetails?._id) : likeNft(isDetails?._id)}
              >
                <i className={`fa fa-heart ${isDetails?.likes?.includes(user?.walletAddress) && "heart-icon"}`}></i>
                <span className="ps-1">
                  {/* {isDetails?.__v} */}
                  {isDetails?.likes?.length}
                </span>
              </Box>
            </Box>

            {isDetails?.avatar && <div className="certificateCelebrity" >

              {/* <img alt="This is celebrity meal NFT" src="https://i.ibb.co/st4H9R5/c1.jpg" className='deteilsPageImage' /> */}
              <img alt="This is celebrity meal NFT" src={`https://backend.celebrity.sg/assets/${addressImg}`} className='deteilsPageImage' />
              <img src="https://i.ibb.co/Pwt1fRw/9ee03415-e591-4320-bf25-af881b8c27a6.jpg" alt="" className={`img-fluid nft-watermark ${isClickedMint ? "d-none" : ""}`} />
              <img src={src} alt="barcode" className="img-fluid handleBarcode" ref={celebrityTemplate} />
            </div>
            }

            <img src="https://i.ibb.co/Pwt1fRw/9ee03415-e591-4320-bf25-af881b8c27a6.jpg" alt="" className={`img-fluid nft-watermark3 ${isClickedMint ? "d-none" : ""}`} />


          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-grid marginPhone">

            <Box className="pt-0 fontArial" style={{ color: "white" }}>

              <Typography variant="subtitle2" gutterBottom component="div">
                <span className="text-primary fontArial  fontExtand">Name Of NFT :<br /></span> <span className="fw-normal fontArial  fontExtand">{isDetails?.name}</span>
              </Typography>

              <Typography className="pt-1 fontArial  fontExtand" variant="subtitle2" component="div">
                <span className="text-primary fontArial  fontExtand">Price Of NFT(SGD):<br /> </span><span className="fw-normal fontArial  fontExtand">{isDetails?.price}</span>
              </Typography>

              <Typography className="pt-1 fontArial  fontExtand" variant="subtitle2" gutterBottom component="div">
                <span className="text-primary fontArial  fontExtand">Available NFTs:<br /><span className="text-light fw-normal fontArial  fontExtand">{availableNft}</span></span>
              </Typography>

              <Typography className="pt-1 fontArial  fontExtand" variant="subtitle2" gutterBottom component="div">
                <span className="text-primary fontArial  fontExtand">Perks of NFT:</span>
              </Typography>
              <div className="spaceIssue fontArial" dangerouslySetInnerHTML={{ __html: isDetails?.perkNft }}></div>


              <Typography className="pt-1 fontArial  fontExtand" variant="subtitle2" gutterBottom component="div">
                <span className="text-primary fontArial  fontExtand">NFT Details:</span>
              </Typography>

              <div className="spaceIssue fontArial" dangerouslySetInnerHTML={{ __html: isDetails?.description }}></div>

              <Typography className="pt-1 fontArial  fontExtand" variant="subtitle2" component="div">
                <span className="text-primary fontArial  fontExtand">Date:</span><br /> <span className="fw-normal fontArial  fontExtand">{`${isDetails?.startDate?.slice(8, 10)}/${isDetails?.startDate?.slice(5, 7)}/${isDetails?.startDate?.slice(0, 4)}`}</span>
              </Typography>

              <Typography className="pt-1 fontArial  fontExtand" variant="subtitle2" component="div">
                <span className="text-primary fontArial  fontExtand">Start Time:</span><br /> <span className="fw-normal fontArial  fontExtand">{strTimeToAmPm} SGT</span>
              </Typography>

              <Typography className="pt-1 fontArial  fontExtand" variant="subtitle2" component="div">
                <span className="text-primary fontArial  fontExtand">End Time:
                </span><br />
                <span className="fw-normal fontArial  fontExtand">{endTimeToAmPm} SGT</span>
              </Typography>

              <Typography className="pt-1 fontArial  fontExtand" variant="subtitle2" component="div">
                <span className="text-primary fontArial  fontExtand">Venue:</span><br /> <span className="fw-normal fontArial  fontExtand">{isDetails?.venue}</span>
              </Typography>

              <Typography className="pt-1 fontArial  fontExtand" variant="subtitle2" component="div">
                <span className="text-primary fontArial  fontExtand">Purchase Till:</span><br /> <span className="fw-normal fontArial  fontExtand">{`${isDetails?.purchaseDate?.slice(8, 10)}/${isDetails?.purchaseDate?.slice(5, 7)}/${isDetails?.purchaseDate?.slice(0, 4)}`}</span>
              </Typography>
              {/* 
              <Typography className="pt-1 fontArial  fontExtand" variant="subtitle2" component="div">
                <span className="text-primary fontArial  fontExtand">Time left:</span><br /> <span className="fw-normal fontArial  fontExtand">
                  <div id="demo">
                  </div>
                </span>
              </Typography> */}
              {/* <DateCountdown dateTo={isDetails?.startDate} /> */}

              <Typography className="pt-1 fontArial  fontExtand" variant="subtitle2" gutterBottom component="div">
                <span className="text-primary fontArial fontExtand">Brief Details of Celebrity:</span>
              </Typography>
              <div className="pb-1 fontArial" dangerouslySetInnerHTML={{ __html: isDetails?.briefDetails }}></div>

              <span className="text-primary mb-2 fontArial fontExtand">Choose how you want to pay:</span>
              {/* <h5 className="paymentOptionsChoose">Choose how you want to pay</h5> */}
              {/* <div className="priceDropdown">
                <select className='form-control mb-3 mt-1 select-drop' name="token" id="token" value={token} onChange={e => setToken(e.target.value)} style={{ maxWidth: 450, width: "400px", backgroundColor: "white", color: "black" }}>
                  <option value="bnb">BNB</option>
                  <option value="usdsc">USDSC</option>
                  <option value="dsl">DSL</option>
                  <option value="s39">S39</option>
                  <option value="finquest">FINQUEST</option>
                </select> <span className="text-dark handlePosition rounded-circle fs-5"><i class="fas fa-angle-down"></i></span>
              </div> */}

              <div className="w-75 mt-1">
                <Select
                  value={selectedOption}
                  onChange={handleChoosePayment}
                  options={selectOptions}
                  styles={customStyles}
                  formatOptionLabel={(option) => (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <img
                        src={option.image}
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "100px",
                        }}
                        alt=""
                      />
                      <span>{option.label}</span>
                    </div>
                  )}
                />
              </div>
              {/* <button onClick={()=>handleSubmit("100654")}>click here</button> */}

              <Typography className="pt-2 pb-3" variant="subtitle2" gutterBottom component="div">
                ( <span className="spanDiscount ">30% discount if paid with DSL tokens</span>)
              </Typography>
              <Typography className="pt-1 pb-1  text-gradient" variant="subtitle2" gutterBottom component="div">
                <span className="spanDiscount ">Enjoy 10% if you have affiliate code.</span>
              </Typography>

            </Box>

            <span className="text-primary fontArial fontExtand mb-1">Affiliate Code:</span>
            <div class="input-group mb-2 w-75">
              <input type="text" name="affiliateCode" onChange={handleAffiliateCode} class="form-control" placeholder="Enter Affiliate Code" aria-label="Enter Affiliate Code" aria-describedby="button-addon2" />
              <button className={!gotRefCode ? "btn btn-danger" : "btn btn-success"} type="button" id="button-addon2" style={{ zIndex: '0' }}>{
                !gotRefCode ? <AiOutlineClose /> : <AiOutlineCheck />
              }</button>
            </div>

            {/* Saved bucks */}
            {gotRefCode && <div style={{ textAlign: 'start' }}>
              {token === "bnb" && <Typography className="pt-1 pb-1  text-gradient" variant="subtitle2" gutterBottom component="div">
                <span className="spanDiscount ">You saved {savedBNB4Digit} BNB</span>
              </Typography>}
              {token === "usdsc" && <Typography className="pt-1 pb-1  text-gradient" variant="subtitle2" gutterBottom component="div">
                <span className="spanDiscount ">You saved {savedUSDSC4Digit} USDSC</span>
              </Typography>}
              {token === "dsl" && <Typography className="pt-1 pb-1  text-gradient" variant="subtitle2" gutterBottom component="div">
                <span className="spanDiscount ">You saved {savedDSL4Digit} DSL</span>
              </Typography>}
              {/* {token === "s39" && <Typography className="pt-1 pb-1  text-gradient" variant="subtitle2" gutterBottom component="div">
                <span className="spanDiscount ">You saved {savedS394Digit} S39</span>
              </Typography>}
              {token === "finquest" && <Typography className="pt-1 pb-1  text-gradient" variant="subtitle2" gutterBottom component="div">
                <span className="spanDiscount ">You saved {savedFINQ4Digit} FINQUEST</span>
              </Typography>} */}
            </div>}
            <span className="text-primary fontArial fontExtand mb-1">Email Address:</span>
            <div className='w-75'>
              <InputGroup >
                <Form.Control
                  style={{ textTransform: 'lowercase' }}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={e => { setEmail(e.target.value); setEmailVerify(false) }}
                  value={email1}
                  required />
                <button
                  // onClick={() => handleVerifyEmail()}
                  // onClick={sendEmailVerificationCode}
                  onClick={handleVerifyEmail}
                  disabled={(email1.length === 0 || disableAfterActivation) ? true : false}
                  type="button" className="btn btn-danger" id="button-addon2" style={{ zIndex: '0' }}>
                  Verify Email
                </button>
              </InputGroup>
            </div>
            {/* <div className='mb-1'>
                            <label className='text14' for="comment">Email*</label>
                            <div className='d-flex'>
                                <Tippy content="Please Enter Your Email">
                                    <input type="text" className='form-control' name="email" placeholder="Email" value={email} onChange={e => { setEmail(e.target.value); setEmailVerify(false) }} style={{ borderRadius: "3px 0px 0px 3px", textTransform: "lowercase"}} required />
                                </Tippy>
                                <button type="button" className={`btn ${email ? emailVerify ? "btn-secondary" : "btn-danger" : "btn-secondary"}`} style={{ borderRadius: "0px 3px 3px 0px" }} onClick={sendEmailVerificationCode} disabled={email ? emailVerify ? true : false : true}>Verify</button>
                            </div>
                        </div> */}

            <div style={{ color: '#ffffff', marginTop: '2rem', textAlign: 'start' }}>
              {token === "bnb" && <p style={{ margin: '0' }}>You need to pay {bnbTwoDec} BNB</p>}
              {token === "usdsc" && <p style={{ margin: '0' }}>You need to pay {usdsc} USDSC</p>}
              {token === "dsl" && <p>You need to pay {dslTwoDec} DSL</p>}
              {/* {token === "s39" && <p>You need to pay {s39TwoDec} S39</p>}
              {token === "finquest" && <p>You need to pay {finquestTwoDec} FINQUEST</p>} */}
            </div>
            <div className="dslDiscountForPayment">
              {token === "dsl" && <p style={{ margin: '0' }}>YOU GET DISCOUNT OF : SGD {disSgdTwoDec} (RS {disRsTwoDec} ) : USD {disUsdTwoDec}</p>}
            </div>

            <div className="d-flex rpv_center" style={{ alignItems: 'flex-end', justifyContent: 'start' }}>
              {
                (!user.walletAddress || user.walletAddress === "undefined") ?
                  <button className="card_button button_dtl mt-3" onClick={openWalletModal} href="#!"><i className="icon_wallet_alt me-1"></i> <span>Connect Wallet</span></button>

                  :
                  <Link to="#" className=" justify_content_center mt-4 mb-1">
                    {token === "bnb" &&
                      <button disabled={availableNft < 1} className="card_button button_dtl" onClick={() => mintCelebrityNft(bnbTwoDec, "0x0000000000000000000000000000000000000000", affiliateWalletAddress, mealnId)} href="#!">{availableNft < 1 ? "No Nft available" : `BUY THIS NFT FOR ${bnbTwoDec} BNB`}</button>}
                    {token === "usdsc" &&
                      <button disabled={availableNft < 1} className="card_button button_dtl" onClick={() => mintCelebrityNft(usdsc, USDSCtokenAddressMainnet, affiliateWalletAddress, mealnId)} href="#!">{availableNft < 1 ? "No Nft available" : `BUY THIS NFT FOR ${usdsc} USDSC`}</button>}
                    {token === "dsl" &&
                      <button disabled={availableNft < 1} className="card_button button_dtl" onClick={() => mintCelebrityNft(dslTwoDec, DSLtokenAddressMainnet, affiliateWalletAddress, mealnId)} href="#!">{availableNft < 1 ? "No Nft available" : `BUY THIS NFT FOR ${dslTwoDec} DSl`}</button>}
                    {/* {token === "s39" &&
                      <button disabled={availableNft < 1} className="card_button button_dtl" onClick={() => mintCelebrityNft(s39TwoDec, S39tokenAddressTestnet,affiliateWalletAddress,mealnId)} href="#!">{availableNft < 1 ? "No Nft available" : `BUY THIS NFT FOR ${s39TwoDec} S39`}</button>}
                    {token === "finquest" &&
                      <button disabled={availableNft < 1} className="card_button button_dtl" onClick={() => mintCelebrityNft(finquestTwoDec, QuesttokenAddressTestnet,affiliateWalletAddress,mealnId)} href="#!">{availableNft < 1 ? "No Nft available" : `BUY THIS NFT FOR ${finquestTwoDec} FINQUEST`}</button>} */}
                  </Link>

              }
              <br />

            </div>
            <div className="my-3">
              <Button variant="danger" className="px-3"
                onClick={() => navigate(-1)}
              >
                {/* <MdArrowBack className="" /> */}
                <span className="">Back</span>
              </Button>
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
                <div key={idx} className="col-sm-12 col-md-4 col-lg-3 d-flex" style={{ justifyContent: 'center' }}>
                  <div class="card">
                    <div className="nft__item_like like_card">
                      <i className="fa fa-heart"></i>
                      <span>{data.fvt}</span>
                    </div>
                    <div class="card-img" style={{ backgroundImage: `url(${data.avatar})` }}>
                      <div class="overlay d-grid " style={{ alignContent: 'center', justifyItems: 'center' }}>
                        <div className="d-flex card_hover_icon">
                          <Link to={`/mealnft/${data?._id}/${data?.imageName}`}><button className="card_hover_button mt-5" href="#!">BUY NOW</button></Link>
                        </div>
                      </div>
                    </div>
                    <div class="card-content">
                      <div className="row" style={{ minHeight: '250px' }}>
                        {/* <Typography className="mt-2" variant="body2">
                          <span className="text-primary">Type of NFT :</span> {data?.type}
                        </Typography> */}

                        <Typography className="mt-2 slider_nft_text" variant="div">
                          <span className="text-primary">Name of NFT :</span> {data?.name}
                        </Typography>

                        <Typography className="mt-2" variant="body2">
                          <span className="text-primary">Price of NFT(SGD):</span> {data.price}
                        </Typography>

                        {/* <Typography className="mt-2" variant="body2">
                          <span className="text-primary">Available NFTs: <span className="text-light">{data?.availableNfts - allAvailable.length}</span></span>
                        </Typography> */}
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
                          <Link to={`/mealnft/${data._id}/${data?.imageName}`} className="d-grid"> <button className="card_button" href="#!">BUY THIS NFT at SGD {data?.price}</button> </Link>
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
                style={{ textTransform: "lowercase" }}
                type="email"
                name="email"
                placeholder="Email"
                // onChange={handleEmail}
                required />
              <button
                onClick={() => handleVerifyEmail()}
                disabled={(email1.length === 0 || disableAfterActivation) ? true : false}
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
              <Button variant="primary" type="submit" disabled={(email1.length === 0 || otp.length === 0 || automint.length === 0 || onsubDisable || otp != otpVerify) ? true : false}>
                SUBMIT
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>

      </Modal>
      <EmailVerifyModal

        handleVerifyEmail={handleVerifyEmail}
        minutes={minutes}
        seconds={seconds}
        open={openEmail} setOpenEmail={setOpenEmail}

        otpVerify={otpVerify}
        setError={setError} />

    </div>
  )
}

export default MealDetails
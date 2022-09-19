import { Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { CelebrityContext } from "../../../context/CelebrityContext";
import Swal from 'sweetalert2';
import swal from 'sweetalert';

const { ethereum } = window;

const MealSlider = ({ pull_meal }) => {
  const { openWalletModal, user } = useContext(CelebrityContext);
  const [isMeal, setIsMeal] = useState([])
  const [nftsPro, setNftsPro] = useState([]);
  const [usersWalletAdd, setUsersWalletAdd] = useState('');
  const [isLiked, setIsLiked] = useState({});
  const [updated, setUpdated] = useState(null);
  const [postIdDetails, setPostIdDetails] = useState([]);
  const [allAvailable, setAllAvailable] = useState([]);
  const [id, setId] = useState('');
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);



  const allNft = isMeal;

  const todayDate = new Date();

  useEffect(() => {
    axios.get("https://backend.celebrity.sg/api/v1/mint/mint-nft")
      .then(res => {
        setAllAvailable(res.data);
      });
  }, [])

  useEffect(() => {
    axios.get("https://backend.celebrity.sg/api/nft/allmeal")
      .then(res => {
        const filtering = res.data.nft.filter(items => items.isDraft === false && new Date(`${items?.purchaseDate.slice(5, 7)}/${items?.purchaseDate.slice(8, 10)}/${items?.purchaseDate.slice(0, 4)}`) > todayDate);
        setIsMeal(filtering);
        // setFilterData(res.data.slice(0, 5))
      });
  }, [isMeal])

  useEffect(() => {
    axios.get("https://backend.celebrity.sg/api/like/getLikes")
      .then(res => {
        setNftsPro(res.data.likes);
      })
  }, [id]);

  useEffect(() => {
    axios.get(`https://backend.celebrity.sg/api/nft/${id}`)
      .then(res => {
        setIsLiked(res.data.nft);
      })
  }, [id]);



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
          // console.log(result)
          const newNft = isMeal?.map(data => {
            if (data._id == result._id) {
              return result
            } else {
              return data
            }
          })
          setIsMeal(newNft)

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
          // console.log(result)
          const newNft = isMeal?.map(data => {
            if (data._id == result._id) {
              return result
            } else {
              return data
            }
          })
          setIsMeal(newNft)

        }).catch(err => {
          console.log(err)
        })
    }
  }




  let settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        }
      }
    ]
  };

  console.log(allNft)


  return (
    <div>
      <Slider {...settings} className="gap-2">
        {allNft?.map((aNft) => (<div key={aNft?._id} className="d-item1">
          <div class="card">
            <div
              onClick={() => aNft.likes?.includes(user?.walletAddress) ? unlikeNft(aNft?._id) : likeNft(aNft?._id)}

              className="nft_item_like like_card">
              <i className={`fa fa-heart ${aNft?.likes?.includes(user?.walletAddress) && "heart-icon"}`}></i>
              <span style={{ marginBottom: '2.2px' }}>

                {aNft?.likes?.length}
              </span>
            </div>
            <div class="card-img" style={{ backgroundImage: `url(${aNft?.avatar})` }}>
              <img src="https://i.ibb.co/Pwt1fRw/9ee03415-e591-4320-bf25-af881b8c27a6.jpg" alt="" className="img-fluid nft-watermark2" />
              <div class="overlay d-grid " style={{ alignContent: 'center', justifyItems: 'center' }}>

                <Link to={`/mealnft/${aNft?._id}/${aNft?.imageName}`}><button className="card_hover_button mt-5" href="#!">BUY THIS NFT FOR SGD {aNft?.price}</button></Link>
              </div>
            </div>
            <div class="card-content">
              <div className="row" style={{ minHeight: '250px' }}>
                {/* <Typography className="mt-1" variant="body2">
                  <span className="text-primary">Type of NFT :</span> {aNft?.type}
                </Typography> */}
                <a href="#!">
                  <Typography className="slider_nft_text" variant="div">
                    <span className="text-primary">Name of NFT :</span> {aNft?.name}
                  </Typography>
                </a>
                <Typography className="" variant="body2">
                  <span className="text-primary">Price of NFT(SGD):</span> {aNft?.price}
                </Typography>
                {/* <Typography className="" variant="body2">
                  <span className="text-primary">Available NFTs: <span className="text-light">{aNft?.availableNfts - allAvailable.length}</span></span>
                </Typography> */}
                {/* <Typography className="mt-2" variant="body2">
                  Details: <Link to={`/mealnft/${aNft?._id}`} classsName="clickHere"> For more details click here </Link>
                </Typography> */}
                <Typography className="" variant="body2">
                  <span className="text-primary">Date:</span> {`${aNft?.startDate.slice(8, 10)}/${aNft?.startDate.slice(5, 7)}/${aNft?.startDate.slice(0, 4)}`}
                </Typography>
                <Typography className="" variant="body2">
                  <span className="text-primary">Start Time:</span> {aNft?.startTime} SGT
                </Typography>
                <Typography className="" variant="body2">
                  <span className="text-primary">End Time:</span> {aNft?.endTime} SGT
                </Typography>
                <Typography className=" mb-1 slider_nft_text" variant="div">
                  <span className="text-primary">Venue:</span> {aNft?.venue}
                </Typography>
              </div>
              <hr style={{ margin: "10px 0px 10px 0px" }} />
              <div className="d-flex card_bottom_btn_main " style={{ margin: '15px 0 8px 0' }}>
                <div className="col-6 d-grid me-2">
                  <Link to={`/mealnft/${aNft?._id}/${aNft?.imageName}`} className="d-grid"> <button className={ethereum ? "card_button2 bg-success glow_crypto_button" : "card_button2 bg-success"} href="#!">PAY BY CRYPTO</button> </Link>
                </div>
                <div className="col-6 d-grid">
                  <Link to={`/paynow/${aNft?._id}/${aNft?.imageName}`} className="d-grid"> <button className={!ethereum ? "card_button2 bg-primary glow_paynow_button" : "card_button2 bg-primary"} href="#!">PAY BY PAYNOW </button> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>))}
      </Slider>

      <div>

        {allNft?.length > 0 ?
          <>
            <Typography variant="h6" style={{ color: '#d0d7c2', textAlign: 'center', fontSize: "16px", marginTop: "1rem" }}>
              Pay by DSL and get 30% discount.
            </Typography>
            <p className="text-gradient text-center fs-6 pt-4">Types of NFTs available: {allNft?.length}</p>
          </>
          :
          <Typography variant="h6" style={{ color: '#d0d7c2', textAlign: 'center', fontSize: "16px", marginTop: "1rem" }}>
            Stay Tuned!
          </Typography>}
        <p className="text-center"><Link className="viewall" to="/mealnft">View All</Link></p>
      </div>
    </div>
  );
};

export default MealSlider;
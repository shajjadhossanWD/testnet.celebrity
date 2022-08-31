import { Typography } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { CelebrityContext } from "../../../context/CelebrityContext";
import Swal from 'sweetalert2';
import swal from 'sweetalert';

const MealSlider = ({ pull_meal }) => {
  const { openWalletModal, user } = useContext(CelebrityContext);
  const [isMeal, setIsMeal] = useState([])
  const [nftsPro, setNftsPro] = useState([]);
  const [usersWalletAdd, setUsersWalletAdd] = useState('');
  const [isLiked, setIsLiked] = useState({});
  const [updated, setUpdated] = useState(null);
  const [postIdDetails, setPostIdDetails] = useState([]);
  const [allAvailable, setAllAvailable] = useState([]);

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


  axios.get("https://backend.celebrity.sg/api/like/getLikes")
    .then(res => {
      setNftsPro(res.data.likes);
    })


  // Like functionality
  const likeCount = (id) => {

    if (!user.walletAddress || user.walletAddress === "undefined") {
      openWalletModal();
    } else {
      const likesFiltering = nftsPro.find(i => i.walletAddress === user.walletAddress && i.likedMealId === id);
      console.log(likesFiltering);


      if (likesFiltering === undefined) {
        // 1st step
        const likeDetails = {
          likedMealId: id,
          walletAddress: user.walletAddress,
          liked: true
        }

        fetch("https://backend.celebrity.sg/api/like/addLike", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(likeDetails),
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.insertedId) {

            }
          });
      } else {
        // 2nd step
        axios.get("https://backend.celebrity.sg/api/like/getLikes")
          .then(res => {
            setPostIdDetails(res.data.likes);
          })

        // 3rd step
        const howManyLikes = postIdDetails.filter(i => i?.likedMealId === id);
        const totalLikes = howManyLikes?.length;
        console.log(totalLikes);
        const likesLenStr = JSON.stringify(totalLikes);

        // 4th step
        axios.get(`https://backend.celebrity.sg/api/nft/${id}`)
          .then(res => {
            setIsLiked(res.data.nft);
          })

        const name = isLiked.name;
        const date = isLiked.date;
        const availableNfts = isLiked.availableNfts;
        const description = isLiked.description;
        const startDate = isLiked.startDate;
        const startTime = isLiked.startTime;
        const endTime = isLiked.endTime;
        const venue = isLiked.venue;
        const briefDetails = isLiked.briefDetails;
        const isDraft = isLiked.isDraft;
        const likesCount = likesLenStr;
        const avatar = isLiked.avatar;
        const price = isLiked.price;
        const type = isLiked.type;
        const purchaseDate = isLiked.purchaseDate;

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('availableNfts', availableNfts);
        formData.append('description', description);
        formData.append('startDate', startDate)
        formData.append('startTime', startTime)
        formData.append('endTime', endTime)
        formData.append('venue', venue)
        formData.append('purchaseDate', purchaseDate)
        formData.append('briefDetails', briefDetails)
        formData.append('type', type);
        formData.append('date', date);
        formData.append('isDraft', isDraft);
        formData.append('likesCount', likesCount);
        formData.append('image', avatar);

        // setUpdated(false);
        axios.put(`https://backend.celebrity.sg/api/nft/update-nft2/${id}`, formData)
          .then(res => {
            if (res.status === 200) {
              // const parsing = JSON.parse(isLiked?.likesCount);
              // setUpdated(true);
            }
          })
          .catch(err => {
            swal({
              title: "Attention",
              text: "Your like has already been counted for this NFT",
              icon: "warning",
              button: "OK!",
              className: "modal_class_success",
            });
          })
      }
    }
  }

  // props.func(allNft);

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

  return (
    <div>
      <Slider {...settings} className="gap-2">
        {allNft?.map((aNft) => (<div key={aNft?._id} className="d-item1">
          <div class="card">
            <div onClick={() => likeCount(aNft?._id)} className="nft_item_like like_card">
              <i className="fa fa-heart"></i>
              <span style={{ marginBottom: '2.2px' }}> {aNft?.likesCount ? parseInt(aNft?.likesCount) : 0}</span>
            </div>
            <div class="card-img" style={{ backgroundImage: `url(${aNft?.avatar})` }}>
              <div class="overlay d-grid " style={{ alignContent: 'center', justifyItems: 'center' }}>

                <Link to={`/mealnft/${aNft?._id}`}><button className="card_hover_button mt-5" href="#!">BUY THIS NFT FOR SGD {aNft?.price}</button></Link>
              </div>
            </div>
            <div class="card-content">
              <div className="row" style={{ minHeight: '324px' }}>
                <Typography className="mt-1" variant="body2">
                  <span className="text-primary">Type of NFT :</span> {aNft?.type}
                </Typography>
                <a href="#!">
                  <Typography className=" slider_nft_text" variant="div">
                    <span className="text-primary">Name of NFT :</span> {aNft?.name}
                  </Typography>
                </a>
                <Typography className="" variant="body2">
                  <span className="text-primary">Price of NFT(SGD):</span> {aNft?.price}
                </Typography>
                <Typography className="" variant="body2">
                  <span className="text-primary">Available NFTs: <span className="text-light">{aNft?.availableNfts - allAvailable.length}</span></span>
                </Typography>
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
              <div className="d-flex card_bottom_btn_main" style={{ margin: '15px 0 8px 0' }}>
                <div className="col-10 d-grid">
                  <Link to={`/mealnft/${aNft?._id}`} className="d-grid"> <button className="card_button" href="#!">BUY THIS NFT at SGD {aNft?.price}</button> </Link>
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
            <p className="text-gradient text-center fs-5 pt-4">Types of NFTs available: {allNft?.length}</p>
          </>
          :
          <Typography variant="h6" style={{ color: '#d0d7c2', textAlign: 'center', fontSize: "16px", marginTop: "1rem" }}>
            Stay Tuned!
          </Typography>}
      </div>
    </div>
  );
};

export default MealSlider;
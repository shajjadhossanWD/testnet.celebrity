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
  const [isLiked, setIsLiked] = useState(false);
  const [color, setColor] = useState('');

  const allNft = isMeal;

  const todayDate = new Date();

  useEffect(() => {
    axios.get("https://backend.celebrity.sg/api/nft/allmeal")
      .then(res => {
        const filtering = res.data.nft.filter(items => items.isDraft === false && new Date(`${items?.purchaseDate.slice(5, 7)}/${items?.purchaseDate.slice(8, 10)}/${items?.purchaseDate.slice(0, 4)}`) > todayDate);
        setIsMeal(filtering);
        // setFilterData(res.data.slice(0, 5))
      });
  }, [isMeal])

  // Like functionality
  const likeCount = (id) => {
    axios.get(`https://backend.celebrity.sg/api/nft/${id}`)
            .then(res => {
                setNftsPro(res.data.nft);
                // console.log(res.data);
                

                const parsing = JSON.parse(nftsPro?.likeDetails);

                            for (const e of parsing) {
                              setUsersWalletAdd(e.walletAddress);
                              setIsLiked(e.liked);
                              
                              if (user.walletAddress === e.walletAddress) {
                                setColor('#EC7498')
                              }
                            };
                        
    })


    const likeDetailsInfo = [
      {
        walletAddress: user.walletAddress,
        liked: true
      }
    ];

    const likeDataStr = JSON.stringify(likeDetailsInfo);
    
        const name = nftsPro.name;
        const date = nftsPro.date;
        const availableNfts = nftsPro.availableNfts;
        const description = nftsPro.description;
        const startDate = nftsPro.startDate;
        const startTime = nftsPro.startTime;
        const endTime = nftsPro.endTime;
        const venue = nftsPro.venue;
        const briefDetails = nftsPro.briefDetails;
        const isDraft = nftsPro.isDraft;
        const likeDetails = likeDataStr;
        const avatar = nftsPro.avatar;
        const price = nftsPro.price;
        const type = nftsPro.type;
        const purchaseDate = nftsPro.purchaseDate;

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
        formData.append('likeDetails', likeDetails);
        formData.append('image', avatar);


    if (!user.walletAddress || user.walletAddress === "undefined") {
      openWalletModal();
    } else {
      console.log(user.walletAddress)
      axios.put(`https://backend.celebrity.sg/api/nft/update-nft2/${id}`, formData)
                    .then(res => {
                        if (res.status === 200) {
                            const parsing = JSON.parse(nftsPro?.likeDetails);

                            for (const e of parsing) {
                              setUsersWalletAdd(e.walletAddress);
                              setIsLiked(e.liked);
                              
                              if (user.walletAddress === e.walletAddress) {
                                setColor('#EC7498')
                              }
                            };
                        }
                    })
                    .catch(err => {
                        swal({
                            title: "Attention",
                            text: `${err.response.data.message}`,
                            icon: "warning",
                            button: "OK!",
                            className: "modal_class_success",
                        });
                    })
    }
  }

  // props.func(allNft);





  let settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
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
            <div onClick={() => likeCount(aNft?._id)} className="nft__item_like like_card">
              <i style={{color: `${color}`}} className="fa fa-heart"></i>
              <span>{aNft?.__v}</span>
            </div>
            <div class="card-img" style={{ backgroundImage: `url(${aNft?.avatar})` }}>
              <div class="overlay d-grid " style={{ alignContent: 'center', justifyItems: 'center' }}>
                {/* <div className="d-flex card_hover_icon">
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
                       </div> */}
                <Link to={`/mealnft/${aNft?._id}`}><button className="card_hover_button mt-5" href="#!">BUY THIS NFT FOR SGD {aNft?.price}</button></Link>
              </div>
            </div>
            <div class="card-content">
              <div className="row" style={{minHeight: '324px'}}>
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
                  <span className="text-primary">Available NFTs: <span className="text-light">{aNft?.availableNfts}</span></span>
                </Typography>
                {/* <Typography className="mt-2" variant="body2">
                  Details: <Link to={`/mealnft/${aNft?._id}`} classsName="clickHere"> For more details click here </Link>
                </Typography> */}
                <Typography className="" variant="body2">
                  <span className="text-primary">Date:</span> {`${aNft?.startDate.slice(8, 10)}/${aNft?.startDate.slice(5, 7)}/${aNft?.startDate.slice(0, 4)}`}
                </Typography>
                <Typography className="" variant="body2">
                  <span className="text-primary">Start Time:</span> {aNft?.startTime}
                </Typography>
                <Typography className="" variant="body2">
                  <span className="text-primary">End Time:</span> {aNft?.endTime}
                </Typography>
                <Typography className=" mb-1 slider_nft_text" variant="div">
                  <span className="text-primary">Venue:</span> {aNft?.venue}
                </Typography>
              </div>
              <hr style={{ margin: "10px 0px 10px 0px" }} />
              <div className="d-flex card_bottom_btn_main" style={{margin: '15px 0 8px 0'}}>
                <div className="col-10 d-grid">
                  <Link to={`/mealnft/${aNft?._id}`} className="d-grid"> <button className="card_button" href="#!">BUY THIS NFT at SGD {aNft?.price}</button> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>))}
      </Slider>

      <div className='d-flex' style={{ justifyContent: 'center' }}>

        {allNft?.length > 0 ?
          <Typography variant="h6" style={{ color: '#d0d7c2', fontSize: "16px", marginTop: "1rem" }}>
            Pay by DSL and get 30% discount.
          </Typography>
          :
          <Typography variant="h6" style={{ color: '#d0d7c2', fontSize: "16px", marginTop: "1rem" }}>
            Stay Tuned!
          </Typography>}
      </div>
      <p className="text-gradient text-center fs-4 pt-4">No of NFTs available: 50</p>
    </div>
  );
};

export default MealSlider;
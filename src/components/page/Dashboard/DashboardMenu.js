import { faSquarePollVertical, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
// import { GrighundContext } from '../../../context/GrighundContext';
import './DashboardMenu.css';


const DashboardMenu = () => {
    // const [allAdmin, setAllAdmin] = useState([])
    // const [mintNft, setMintNft] = useState([])
    const navigate = useNavigate();
    // const [polygon, setPolygon] = useState([]);
    // const [strength1, setStrength1] = useState(0);
    // const [strength2, setStrength2] = useState(0);
    // const [strength3, setStrength3] = useState(0);
    // // const { chains, logOut, user1 } = useContext(GrighundContext);

    // useEffect(() => {
    //     fetch('https://backend.grighund.net/api/parks/polygon')
    //         .then(res => res.json())
    //         .then(data => {
    //             setPolygon(data.parks)
    //             console.log(data.parks)
    //         })
    // }, [])

    // useEffect(() => {
    //     axios.get('https://backend.grighund.net/api/admin/all')
    //         .then(res => {
    //             setAllAdmin(res.data.admin);
    //             console.log(res.data.admin)
    //         })
    // }, [])

    // useEffect(() => {
    //     axios.get('https://backend.grighund.net/api/mintNft/get_mint_nft')
    //         .then(res => {
    //             setMintNft(res.data.mintNfts);
    //             console.log(res.data.mintNfts)
    //             //  mintNft.map(strengths => strengths.total);
    //             const total = res.data.mintNfts.map((element) => element.total)
    //             const highTotal = total.filter(item => item == 100)
    //             const midTotal = total.filter(item => item >= 51 && item < 100)
    //             const lowTotal = total.filter(item => item <= 50)

    //             console.log(highTotal);
    //             setStrength1(highTotal);
    //             console.log(midTotal);
    //             setStrength2(midTotal);
    //             console.log(lowTotal);
    //             setStrength3(lowTotal);
    //         })
    // }, [])

    // let totalLength = mintNft.length;

    // // strength 100 
    // let highTotalLength = strength1.length;
    // let percentage_1 = (highTotalLength * 100 / totalLength).toFixed(2);
    // // strength 51-100 
    // let midTotalLength = strength2.length;
    // let percentage_2 = (midTotalLength * 100 / totalLength).toFixed(2);
    // // strength 0-50 
    // let lowTotalLength = strength3.length;
    // let percentage_3 = (lowTotalLength * 100 / totalLength).toFixed(2);


    const handleClickOpenAdmin = () => {
        navigate('/dashboard/dAdmin');
    }

    // const handleClickOpenNft = () => {
    //     navigate('/admin/mintnft')
    // }
    const handleClickOpenPolygon = () => {
        navigate('/dashboard/dnfts')
    }
    // const handleClickOpenBsc = () => {
    //     navigate('/admin/bsc')
    // }
    // const handleClickOpenPolygonNfts = () => {
    //     navigate('/admin/parkPolygon')
    // }
    // const Logout = () => {
    //     logOut();
    //     swal({
    //         // title: "S",
    //         text: "You have successfully logout.",
    //         icon: "success",
    //         button: "OK!",
    //         className: "modal_class_success",
    //     });
    // }

    return (
        <div className='handleHeightDMenu'>
            <div className='container'>

                <h4 className='text-white text-start marginAlign'>Dashboard</h4>
                <Row xs={1} md={2} lg={3} xl={4} className="gx-5 card-row">

                    <Col onClick={handleClickOpenAdmin} className="marginAlign">
                        <Card className='cardDash mx-auto'>
                            <Card.Body className="card-body w-100 d-flex align-items-center justify-content-between">
                                <Card.Text className='dashboardTxt'>
                                    <p>Admins</p>
                                    <h2 className='text-start'>10</h2>
                                </Card.Text>
                                <div className="iconDas">
                                    <p className='text-white coinsIcon'>
                                        <FontAwesomeIcon icon={faUsers} />
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col onClick={handleClickOpenPolygon} className="marginAlign">
                        <Card className='cardDash mx-auto'>
                            <Card.Body className="card-body w-100 d-flex align-items-center justify-content-between">
                                <Card.Text className='dashboardTxt'>
                                    <p>NFTS</p>
                                    <h2 className='text-start'>10</h2>
                                </Card.Text>
                                <div className="iconDas">
                                    <p className='text-white coinsIcon'><i class="fas fa-dot-circle"></i></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


            </div>
        </div>
    );
};

export default DashboardMenu;
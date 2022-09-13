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
    const [allAdmin, setAllAdmin] = useState([])
    const [mintNft, setMintNft] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://backend.celebrity.sg/api/v1/admin/')
            .then(res => {
                setAllAdmin(res.data.length);
                console.log(res.data)
            })
    }, [])

    useEffect(() => {
        axios.get('https://backend.celebrity.sg/api/nft/all')
            .then(res => {
                setMintNft(res.data.nft.length);
                console.log(res.data)
            })
    }, [])




    const handleClickOpenAdmin = () => {
        navigate('/dashboard/admin');
    }


    const handleClickOpenPolygon = () => {
        navigate('/dashboard/nfts')
    }


    return (
        <div className='handleHeightDMenu'>
            <div className='container'>

                <h4 className='text-white text-start marginAlign dashboardTitle'>Dashboard</h4>
                <Row xs={1} md={2} lg={3} xl={4} className="gx-5 card-row">

                    <Col onClick={handleClickOpenAdmin} className="marginAlign">
                        <Card className='cardDash mx-auto'>
                            <Card.Body className="card-body w-100 d-flex align-items-center justify-content-between">
                                <Card.Text className='dashboardTxt'>
                                    <p>ADMINS</p>
                                    <h2 className='text-start'>{allAdmin}</h2>
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
                                    <h2 className='text-start'>{mintNft}</h2>
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
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import DashboardModal from './DashboardModal';
import './DashboardNfts.css';
import Table from 'react-bootstrap/Table';
import { BsPencilFill } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';

const DashboardNfts = () => {
    const [modalShow, setModalShow] = useState(false);

    const fakeData = [
        { image: "https://alpha.physicalnft.org/assets/frontend/images/png.png", title: "Title of NFT", token: "DSl", amount: "1.0", price: "0.01038623", category: "Meal", auctionEnd: "	February 19, 2022", id: 1 },
        { image: "https://alpha.physicalnft.org/assets/frontend/images/png.png", title: "Title of NFT", token: "DSl", amount: "1.0", price: "0.01038623", category: "Meal", auctionEnd: "	February 19, 2022", id: 2 },
        { image: "https://alpha.physicalnft.org/assets/frontend/images/png.png", title: "Title of NFT", token: "DSl", amount: "1.0", price: "0.01038623", category: "Meal", auctionEnd: "	February 19, 2022", id: 3 },
        { image: "https://alpha.physicalnft.org/assets/frontend/images/png.png", title: "Title of NFT", token: "DSl", amount: "1.0", price: "0.01038623", category: "Meal", auctionEnd: "	February 19, 2022", id: 4 },
        { image: "https://alpha.physicalnft.org/assets/frontend/images/png.png", title: "Title of NFT", token: "DSl", amount: "1.0", price: "0.01038623", category: "Meal", auctionEnd: "	February 19, 2022", id: 5 },
        { image: "https://alpha.physicalnft.org/assets/frontend/images/png.png", title: "Title of NFT", token: "DSl", amount: "1.0", price: "0.01038623", category: "Meal", auctionEnd: "	February 19, 2022", id: 6 },
        { image: "https://alpha.physicalnft.org/assets/frontend/images/png.png", title: "Title of NFT", token: "DSl", amount: "1.0", price: "0.01038623", category: "Meal", auctionEnd: "	February 19, 2022", id: 7 },
        { image: "https://alpha.physicalnft.org/assets/frontend/images/png.png", title: "Title of NFT", token: "DSl", amount: "1.0", price: "0.01038623", category: "Meal", auctionEnd: "	February 19, 2022", id: 8 },
        { image: "https://alpha.physicalnft.org/assets/frontend/images/png.png", title: "Title of NFT", token: "DSl", amount: "1.0", price: "0.01038623", category: "Meal", auctionEnd: "	February 19, 2022", id: 9 },
        { image: "https://alpha.physicalnft.org/assets/frontend/images/png.png", title: "Title of NFT", token: "DSl", amount: "1.0", price: "0.01038623", category: "Meal", auctionEnd: "	February 19, 2022", id: 10 },
    ]

    return (
        <>
            <div style={{ color: "white" }}>
                <h5 className='ms-2 mb-3'>NFTS</h5>
                <Container fluid>
                    <div className='nftsBox'>
                        <Container fluid className='mt-3'>
                            <Button variant="primary" className='border-0' style={{ backgroundColor: 'blueviolet' }} onClick={() => setModalShow(true)}>New NFT</Button>
                            <div className='text-end'>
                                {/* <input type="text" placeholder='Search...' className='ps-2 rounded border border-white' style={{ backgroundColor: "#272d47" }} /> */}
                            </div>
                            <div className='mt-4'>
                                <Table bordered responsive className='border-0 text-light'>
                                    <thead>
                                        <tr>
                                            <th>NFT</th>
                                            <th>Title</th>
                                            <th className='handleForDnoneinRespo'>Token</th>
                                            <th className='handleForDnoneinRespo'>Amount</th>
                                            <th>Price</th>
                                            <th className='handleForDnoneinRespo'>Category</th>
                                            <th className='handleForDnoneinRespo'>Auction End</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            fakeData?.map(data => <tr data={data} key={data?.id}>
                                                <td><img src={data.image} alt="" /></td>
                                                <td>{data.title}</td>
                                                <td className='handleForDnoneinRespo'>{data.token}</td>
                                                <td className='handleForDnoneinRespo'>{data.amount}</td>
                                                <td>{data.price}</td>
                                                <td className='handleForDnoneinRespo'>{data.category}</td>
                                                <td className='handleForDnoneinRespo'>{data.auctionEnd}</td>
                                                <td className='pt-3'><span className='bg-success p-2 rounded'><BsPencilFill></BsPencilFill></span> <span className='bg-danger p-2 rounded'><RiDeleteBin6Line></RiDeleteBin6Line></span></td>
                                            </tr>)
                                        }

                                    </tbody>
                                </Table>
                            </div>
                        </Container>
                    </div>
                </Container>
            </div>

            <DashboardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>

    );
};

export default DashboardNfts;
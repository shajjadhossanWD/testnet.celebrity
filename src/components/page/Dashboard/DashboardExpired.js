import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import { FaSave } from 'react-icons/fa';

const DashboardExpired = () => {
    const [dates, setDates] = useState([]);
    const [nfts, setNfts] = useState([]);
    const [nftsPro, setNftsPro] = useState([]);
    const [refetch, setRefetch] = useState(false);
    const CustomTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: theme.palette.common.black,
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.black,
        },
    }))

    // Date
    const todayDate = new Date();

    useEffect(() => {
        fetch('https://backend.celebrity.sg/api/nft/all', {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                const filtering = data.nft.filter(items => new Date(`${items?.purchaseDate.slice(5, 7)}/${items?.purchaseDate.slice(8, 10)}/${items?.purchaseDate.slice(0, 4)}`) < todayDate);
                setNfts(filtering);
            })

    }, [refetch])
    // console.log(nfts);

    const saveIssue = (id) => {
        axios.get(`https://backend.celebrity.sg/api/nft/${id}`)
            .then(res => {
                setNftsPro(res.data.nft);
                // console.log(res.data);
            })
        console.log(nftsPro);
        const name = nftsPro.name;
        const date = nftsPro.date;
        const availableNfts = nftsPro.availableNfts;
        const description = nftsPro.description;
        const startDate = nftsPro.startDate;
        const startTime = nftsPro.startTime;
        const endTime = nftsPro.endTime;
        const venue = nftsPro.venue;
        const briefDetails = nftsPro.briefDetails;
        const isDraft = true;
        const avatar = nftsPro.avatar;
        const price = nftsPro.price;
        const type = nftsPro.type;
        const purchaseDate = nftsPro.purchaseDate;

        // const updated = { name, date, description, startDate, startTime, endTime, venue, briefDetails, isDraft, avatar, price, type };

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
        formData.append('ifDraft', isDraft);
        formData.append('image', avatar);

        Swal.fire({
            title: "Are you sure you want to save this NFT?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            // denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`https://backend.celebrity.sg/api/nft/update-nft/${id}`, formData)
                    .then(res => {
                        if (res.status === 200) {
                            // alert(res.data.message);
                            swal({
                                title: "Success",
                                text: "Saved successfully",
                                icon: "success",
                                button: "OK!",
                                className: "modal_class_success",
                            });

                            // setRefetch(!refetch);
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
        })

    }

    const handleOrderDelete = (id) => {
        // const confirmDelete = window.confirm("Are you sure you want to delete this NFT? You can't recover.")

        Swal.fire({
            text: "Are you sure you want to delete this NFT? You can't recover.",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Yes',
            // denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://backend.celebrity.sg/api/nft/delete/${id}`)
                    .then(res => {
                        if (res.status === 200) {
                            swal({
                                title: "Succesfully deleted",
                                text: "You successfully deleted the NFT",
                                icon: "success",
                                button: "OK",
                                className: "modal_class_success",
                            });
                            setRefetch(!refetch);
                        }
                    })
                    .catch(error => {
                        // alert(error.response.data.message);
                        swal({
                            title: "Attention",
                            text: `${error.response.data.message}`,
                            icon: "warning",
                            button: "OK!",
                            className: "modal_class_success",
                        });
                    })
            }
        })
    }



    return (
        <div>
            <div className="mt-4">
                <Table bordered responsive className="border-0 text-light">
                    <thead>
                        <tr>
                            <th>NFT<br />Image</th>
                            <th>NFT<br />Name</th>
                            <th>Price<br />(SGD)</th>
                            <th className="handleForDnoneinRespo">NFT<br />Type</th>
                            <th className="handleForDnoneinRespo">NFT<br />Created</th>
                            {/* <th>Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {nfts?.map((data) => (
                            <tr data={data} key={data?.id}>
                                <td>
                                    <img src={data.avatar} alt="" style={{ width: "65px", hight: "65px" }} />
                                </td>
                                <td>{data.name}</td>
                                <td>{data.price}</td>
                                <td className="handleForDnoneinRespo">
                                    {data.type}
                                </td>
                                <td className="handleForDnoneinRespo">
                                    {data.date}
                                </td>
                                {/* <td className="pt-3">
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <CustomTooltip title="Edit NFT">
                                            <Link to={`editNft/${data._id}`}>
                                                <button className="editBtn"><i className="fas fa-edit"></i></button>
                                            </Link>
                                        </CustomTooltip>{" "}
                                        <CustomTooltip title="Delete NFT">
                                            <span className="rounded nft-delete-button" onClick={() => handleOrderDelete(data._id)}>
                                                <button className="deleteBtn"><i className="fas fa-trash"></i></button>
                                            </span>
                                        </CustomTooltip>
                                    </div>
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <h6 className='text-center text-danger'>No of NFTs: {nfts.length ? nfts.length : "0"}</h6>

            </div>
        </div>
    );
};

export default DashboardExpired;
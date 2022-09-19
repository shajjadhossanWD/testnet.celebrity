import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import swal from 'sweetalert';
import { FaSave } from 'react-icons/fa';

const DashboardDraft = ({ setSelectedTab }) => {
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

    useEffect(() => {
        fetch('https://backend.celebrity.sg/api/nft/all', {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const filtering = data.nft.filter(items => items.isDraft === true);
                setNfts(filtering);
            })

    }, [refetch])
    // console.log(nfts);

    const saveIssue = (id) => {

        Swal.fire({
            text: "Are you sure you want to save this NFT?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Yes',
            // denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {
                axios.put(`https://backend.celebrity.sg/api/nft/update-nft1/${id}`)
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
                            console.log(res.data);
                            setRefetch(!refetch);
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
        <>
            <div className="text-end">
                {/* <input type="text" placeholder='Search...' className='ps-2 rounded border border-white' style={{ backgroundColor: "#272d47" }} /> */}
            </div>

            <div className="mt-4">
                <Table bordered responsive className="border-0 text-light">
                    <thead>
                        <tr>
                            <th>NFT<br />Image</th>
                            <th>NFT<br />Name</th>
                            <th>Price<br />(SGD)</th>
                            <th className="handleForDnoneinRespo">NFT<br />Type</th>
                            {/* <th className="handleForDnoneinRespo">Timestamp</th> */}
                            <th>NFT<br />Action</th>
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
                                {/* <td className="handleForDnoneinRespo">
                                    {data.date}
                                </td> */}
                                <td className="pt-3">
                                    <div className='d-flex justify-content-start'>
                                        {/* <Button variant="primary" className='me-1' onClick={() => saveIssue(data._id)} title='Save NFT'><FaSave></FaSave></Button> */}
                                        {/* <CustomTooltip title="Save NFT">
                                            <div onClick={() => saveIssue(data._id)}>
                                                <button className="saveBtn"><i className="fas fa-save"></i></button>
                                            </div>
                                        </CustomTooltip>{" "} */}
                                        <CustomTooltip title="Edit NFT">
                                            <Link to={`editDraftNft/${data._id}`}>
                                                <button className="editBtn"><i className="fas fa-edit"></i></button>
                                            </Link>
                                        </CustomTooltip>{" "}
                                        <CustomTooltip title="Delete NFT">
                                            <span className="rounded nft-delete-button" onClick={() => handleOrderDelete(data._id)}>
                                                <button className="deleteBtn"><i className="fas fa-trash"></i></button>
                                            </span>
                                        </CustomTooltip>
                                        <CustomTooltip title="MINT NFT">
                                            <span className="rounded mint_button nft-delete-button ms-1 me-0">
                                                <button className="saveBtn me-0"><i className="fas fa-plus"></i></button>
                                            </span>
                                        </CustomTooltip>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <h6 className='text-center text-danger'>No of NFTs: {nfts.length ? nfts.length : "0"}</h6>

            </div>
        </>
    );
};

export default DashboardDraft;
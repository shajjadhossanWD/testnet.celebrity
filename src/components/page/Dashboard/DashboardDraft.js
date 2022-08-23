import React from 'react';
import { Table } from 'react-bootstrap';
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import swal from 'sweetalert';

const DashboardDraft = () => {
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

    const handleOrderDelete = (id) => {
        // const confirmDelete = window.confirm("Are you sure you want to delete this NFT? You can't recover.")

        Swal.fire({
            title: "Are you sure you want to delete this NFT? You can't recover.",
            showDenyButton: true,
            showCancelButton: true,
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
                            //   setnfts(nfts.filter(nft => nft._id !== id))
                        }
                    })
                    .catch(error => {
                        alert(error.response.data.message);
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
                            <th>NFT</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th className="handleForDnoneinRespo">Type</th>
                            <th className="handleForDnoneinRespo">Timestamp</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {nfts?.map((data) => (
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
                                <td className="pt-3">
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
                                </td>
                            </tr>
                        ))} */}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default DashboardDraft;
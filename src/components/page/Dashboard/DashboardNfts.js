import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import DashboardModal from "./DashboardModal";
import Table from "react-bootstrap/Table";
import { BsPencilFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import EditNftModal from "./EditNftModal";
import "./DashboardNfts.css";
import axios from 'axios';
import swal from 'sweetalert';
import Loading from '../../Loading/Loading';
import { Link } from 'react-router-dom';
import DashboardActive from './DashboardActive';
import DashboardExpired from './DashboardExpired';
import DashboardDraft from './DashboardDraft';
import Swal from 'sweetalert2';

const DashboardNfts = () => {
  const [modalShow, setModalShow] = useState(false);
  const [editNftmodalShow, setEditNftModalShow] = useState(false);
  const [nfts, setnfts] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const [isloading, SetIsloading] = useState(false);
  const [selectedTab, setSelectedTab] = useState("nft");

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
      .then(data => setnfts(data.nft))
  }, [refetch])


  // if (nfts.length <= 0) {
  //   return <Loading></Loading>
  // }
  // if (isloading) {
  //   return <Loading></Loading>
  // }

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
              setnfts(nfts.filter(nft => nft._id !== id))
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
      <div className="handleHeightNFTS">
        {/* <p className="ms-2 mb-3 d-inline">NdFTS</p> */}

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px', marginRight: '40px' }}>
          <Button
            variant="primary"
            className="border-0 text-uppercase"
            style={{ backgroundColor: "blueviolet" }}
            onClick={() => setModalShow(true)}
          >
            New NFT
          </Button>
        </div>

        <div className='mb-3 ps-1'>
          <Button
            variant="primary"
            className="ms-2 border-0 text-uppercase bg-success"
            style={{ backgroundColor: "blueviolet" }}
            onClick={() => setSelectedTab("nft")}
          >
            Acitve
          </Button>

          <Button
            variant="primary"
            className="ms-2 border-0 text-uppercase bg-success"
            style={{ backgroundColor: "blueviolet" }}
            onClick={() => setSelectedTab("expired")}
          >
            Expired
          </Button>
          <Button
            variant="primary"
            className="ms-2 border-0 text-uppercase  bg-success"
            style={{ backgroundColor: "blueviolet" }}
            onClick={() => setSelectedTab("draft")}
          >
            Draft
          </Button>
        </div>
        <Container fluid>
          <div className="nftsBox">
            <Container fluid className="mt-3">
              {
                selectedTab === "nft" &&
                <>
                  {/* <Button
                    variant="primary"
                    className="border-0 text-uppercase"
                    style={{ backgroundColor: "blueviolet" }}
                    onClick={() => setModalShow(true)}
                  >
                    New NFT
                  </Button> */}

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
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </>
              }

              {
                selectedTab === "expired" &&
                <DashboardExpired />
              }
              {
                selectedTab === "draft" &&
                <DashboardDraft />
              }
            </Container>
          </div>
        </Container>
      </div>

      <DashboardModal show={modalShow} setModalShow={setModalShow} onHide={() => setModalShow(false)} setRefetch={setRefetch} refetch={refetch} SetIsloading={SetIsloading} />
      <EditNftModal
        show={editNftmodalShow}
        onHide={() => setEditNftModalShow(false)}
      />
    </>
  );
};

export default DashboardNfts;
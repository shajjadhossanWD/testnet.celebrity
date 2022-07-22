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

const DashboardNfts = () => {
  const [modalShow, setModalShow] = useState(false);
  const [editNftmodalShow, setEditNftModalShow] = useState(false);
  const [nfts, setnfts] = useState([])

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
    axios.get('https://backend.celebrity.sg/api/nft/all')
      .then(res => {
        setnfts(res.data.nft);
      })
  }, [])

  const handleOrderDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this NFT? You can't recover.")
    if (confirmDelete) {
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
  }

  return (
    <>
      <div className="handleHeightNFTS">
        <h5 className="ms-2 mb-3">NFTS</h5>
        <Container fluid>
          <div className="nftsBox">
            <Container fluid className="mt-3">
              <Button
                variant="primary"
                className="border-0"
                style={{ backgroundColor: "blueviolet" }}
                onClick={() => setModalShow(true)}
              >
                New NFT
              </Button>
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
                          <img src={data.avatar} alt="" style={{width:"65px", hight:"65px"}} />
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
                          <CustomTooltip title="Edit NFT">
                            <span
                              onClick={() => setEditNftModalShow(true)}
                              className="bg-success p-2 rounded nft-edit-button"
                            >
                              <BsPencilFill></BsPencilFill>
                            </span>
                          </CustomTooltip>{" "}
                          <CustomTooltip title="Delete NFT">
                            <span className="bg-danger p-2 rounded nft-delete-button" onClick={()=>handleOrderDelete(data._id)}>
                              <RiDeleteBin6Line></RiDeleteBin6Line>
                            </span>
                          </CustomTooltip>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Container>
          </div>
        </Container>
      </div>

      <DashboardModal show={modalShow} onHide={() => setModalShow(false)} />
      <EditNftModal
        show={editNftmodalShow}
        onHide={() => setEditNftModalShow(false)}
      />
    </>
  );
};

export default DashboardNfts;
import React, { useState } from 'react';
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

const DashboardNfts = () => {
  const [modalShow, setModalShow] = useState(false);
  const [editNftmodalShow, setEditNftModalShow] = useState(false);

  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  const fakeData = [
    {
      image: "https://alpha.physicalnft.org/assets/frontend/images/png.png",
      title: "Name Of NFT",
      token: "DSl",
      amount: "1.0",
      price: "0.01038623",
      category: "Meal",
      auctionEnd: "	February 19, 2022",
      id: 1,
    },
    {
      image: "https://alpha.physicalnft.org/assets/frontend/images/png.png",
      title: "Name Of NFT",
      token: "DSl",
      amount: "1.0",
      price: "0.01038623",
      category: "Meal",
      auctionEnd: "	February 19, 2022",
      id: 2,
    },
    {
      image: "https://alpha.physicalnft.org/assets/frontend/images/png.png",
      title: "Name Of NFT",
      price: "0.01038623",
      category: "Meal",
      auctionEnd: "	February 19, 2022",
      id: 3,
    },
    {
      image: "https://alpha.physicalnft.org/assets/frontend/images/png.png",
      title: "Name Of NFT",
      amount: "1.0",
      price: "0.01038623",
      category: "Meal",
      auctionEnd: "	February 19, 2022",
      id: 4,
    },


  ];

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
                      <th className="handleForDnoneinRespo">Auction</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fakeData?.map((data) => (
                      <tr data={data} key={data?.id}>
                        <td>
                          <img src={data.image} alt="" />
                        </td>
                        <td>{data.title}</td>
                        <td>{data.price}</td>
                        <td className="handleForDnoneinRespo">
                          {data.category}
                        </td>
                        <td className="handleForDnoneinRespo">
                          {data.auctionEnd}
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
                            <span className="bg-danger p-2 rounded nft-delete-button">
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
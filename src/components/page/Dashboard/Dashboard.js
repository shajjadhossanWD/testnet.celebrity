import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CustomLink from '../../CustomLink';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { TiGroup } from 'react-icons/ti';
import { HiCheckCircle } from 'react-icons/hi';
import './Dashboard.css';
import { MdMenuOpen } from 'react-icons/md';

const Dashboard = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      className="dashboardFlex"
      style={{ height: "auto", backgroundColor: "#1A1A25" }}
    >
      <div
        className="handleNested text-center"
        style={{ backgroundColor: "#323246", color: "white" }}
      >
        <div className='positionHandleLogo'>
          <Link to='/'> <img
            src="https://alpha.physicalnft.org/assets/frontend/images/png.png"
            className="img-fluid w-25 h-auto mt-3"
            alt="logo"
          /></Link>
          <hr />
        </div>
        <Navbar
          expand="sm"
          className="mb-3"
          style={{ marginTop: "100px", width: "220px" }}
          fixed="top"
        >
          <Container fluid style={{ color: "white" }}>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" />
            <Navbar.Offcanvas
              id={"offcanvasNavbar-expand-sm}"}
              aria-labelledby={"offcanvasNavbarLabel-expand-sm"}
              placement="start"
              style={{ backgroundColor: "#323246", color: "white" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={"offcanvasNavbarLabel-expand-sm"}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="d-flex flex-column justify-content-center align-items-center handleNav mx-auto text-center">

                  <Nav.Link
                    className="text-light mb-3"
                    as={CustomLink}
                    to="/dashboard"
                  >
                    <span className="pe-3 fs-4">
                      <TiGroup></TiGroup>
                    </span>{" "}
                    <span className="pe-3">Dashboard</span>
                  </Nav.Link>

                  <Nav.Link
                    className="text-light mb-3"
                    as={CustomLink}
                    to="/dashboard/dAdmin"
                  >
                    <span className="pe-3 fs-4">
                      <TiGroup></TiGroup>
                    </span>{" "}
                    <span className="pe-3">Admin</span>
                  </Nav.Link>

                  <Nav.Link
                    className="pe-4 text-light"
                    as={CustomLink}
                    to="/dashboard/dnfts"
                  >
                    <span className="pe-4 fs-4">
                      <HiCheckCircle></HiCheckCircle>
                    </span>{" "}
                    <span>NFTS</span>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
      <div className="handleNavbarSecond">
        <Navbar
          expand="lg"
          variant="dark"
          className="navIssue"
          collapseOnSelect


        >
          <Container fluid>
            <Container className="d-flex justify-content-between align-items-center">
              {/* <Navbar.Brand href="#">Navbar</Navbar.Brand> */}
              <div className="hanleMenuBarForRespo">
                <MdMenuOpen
                  className="fs-3 text-light"
                  onClick={handleShow}
                ></MdMenuOpen>
                <Offcanvas
                  show={show}
                  onHide={handleClose}
                  style={{ backgroundColor: "#323246", color: "white" }}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="text-light">
                      <Nav className="d-flex flex-column justify-content-center align-items-center handleNav mx-auto text-center">
                        <Nav.Link
                          className="text-light mb-3"
                          as={CustomLink}
                          to="/"
                        >
                          <img
                            src="https://alpha.physicalnft.org/assets/frontend/images/png.png"
                            className="w-50"
                            alt="logo"
                          />
                        </Nav.Link>
                      </Nav>
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body
                    style={{ backgroundColor: "#323246", color: "white" }}
                  >
                    <Nav className="d-flex flex-column justify-content-center align-items-center handleNav ps-0 ms-0">
                      <Nav.Link
                        className="ps-2 pe-2 text-light"
                        as={CustomLink}
                        to="/dashboard"
                        href="#admin"
                      >
                        <span className="me-2 fs-4">
                          <TiGroup></TiGroup>
                        </span>{" "}
                        <span>Dashboard</span>
                      </Nav.Link>

                      <Nav.Link
                        className="ps-2 pe-2 text-light"
                        as={CustomLink}
                        to="/dashboard/dAdmin"
                        href="#admin"
                      >
                        <span className="me-2 fs-4">
                          <TiGroup></TiGroup>
                        </span>{" "}
                        <span>Admin</span>
                      </Nav.Link>

                      <Nav.Link
                        className="ps-2 pe-2 text-light"
                        as={CustomLink}
                        to="/dashboard/dnfts"
                        href="#nfts"
                      >
                        <span className="me-2 fs-4">
                          <HiCheckCircle></HiCheckCircle>
                        </span>{" "}
                        <span>NFTS</span>
                      </Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
              <div className="profile">
                <div className="imgDashDiv p-3">
                  {/* <img
                    src="https://backend.grighund.net/assets/1658149611777.jpeg"
                    alt=""
                  /> */}
                </div>
              </div>
            </Container>
          </Container>
        </Navbar>

        <div className="handleOutlet">
          <Outlet />
        </div>
        <Navbar
          expand="lg"
          variant="dark"
          style={{
            backgroundColor: "#272D47",
            marginBottom: "50px",
            marginTop: "20px",
          }}
        >
          <Container fluid style={{ backgroundColor: "#272D47" }}>
            <Container>
              {/* <Navbar.Brand href="#">Navbar</Navbar.Brand> */}
              <p className="text-light text-center pt-3">
                Copyright &copy; 2022 - DS Legends Pte. Ltd.
              </p>
            </Container>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Dashboard;
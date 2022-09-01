import React, { useContext, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import CustomLink from '../../CustomLink';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { TiGroup } from 'react-icons/ti';
import { HiCheckCircle } from 'react-icons/hi';
import './Dashboard.css';
import { MdMenuOpen, MdClose } from 'react-icons/md';
import { AdminContext } from '../../../context/AdminContext';

const Dashboard = () => {
  const { logout } = useContext(AdminContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

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
                  DS Legends Pte. Ltd.
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="d-flex flex-column justify-content-center align-items-start  text-start">

                  <Nav.Link
                    className="text-light mb-3 text-start"
                    as={CustomLink}
                    to="/dashboard"
                    style={{ width: '190px' }}
                  >
                    <span className="pe-3 ps-3 fs-4">
                      <TiGroup></TiGroup>
                    </span>{" "}
                    <span className="pe-3">DASHBOARD</span>
                  </Nav.Link>

                  <Nav.Link
                    className="text-light mb-3 text-start"
                    as={CustomLink}
                    to="/dashboard/admin"
                    style={{ width: '190px' }}
                  >
                    <span className="pe-3 ps-3 fs-4">
                      <TiGroup></TiGroup>
                    </span>{" "}
                    <span className="pe-3">ADMINS</span>
                  </Nav.Link>

                  <Nav.Link
                    className="pe-4 text-light ps-4 text-start"
                    as={CustomLink}
                    to="/dashboard/nfts"
                    style={{ width: '190px' }}
                  >
                    <span className="pe-3 fs-4">
                      <HiCheckCircle></HiCheckCircle>
                    </span>{" "}
                    <span>NFTS</span>
                  </Nav.Link>
                  <div style={{ width: '120px', marginLeft: '-1rem' }}>
                    <Button variant="danger" className='text-uppercase w-100 pt-2 pb-2 mt-4' size="sm" onClick={() => handleLogout()}>Log Out</Button>
                  </div>
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
                  <Offcanvas.Header className='mb-4'>
                    <Offcanvas.Title className="text-light">
                      <Nav className="d-flex flex-column justify-content-center align-items-center handleNav mx-auto text-center">
                        <Nav.Link
                          className="text-light"
                          as={CustomLink}
                          to="/"
                        >
                          <img
                            src="https://alpha.physicalnft.org/assets/frontend/images/png.png"

                            style={{ width: "50px", marginLeft: "-95px" }}

                            // style={{ width: "50px", marginLeft: "-135px" }}
                            className="logoAdmins"

                            alt="logo"
                          />
                        </Nav.Link>
                      </Nav>
                    </Offcanvas.Title>
                    <MdClose onClick={handleClose} color='#fff' size={30} style={{ cursor: 'pointer' }} />
                  </Offcanvas.Header>
                  <Offcanvas.Body
                    style={{ backgroundColor: "#323246", color: "white" }}
                  >
                    <Nav className="d-flex flex-column justify-content-center align-items-start handleNav nav_start ps-0 ms-0">
                      <Nav.Link
                        className="text-center ps-2 text-light text-start"
                        as={CustomLink}
                        to="/dashboard"
                        href="#admin"
                        onClick={handleClose}
                      >
                        <span className="me-2 fs-4">
                          <TiGroup></TiGroup>
                        </span>{" "}
                        <span>DASHBOARD</span>
                      </Nav.Link>

                      <Nav.Link
                        className="text-center pe-4 text-light text-start"
                        as={CustomLink}
                        to="/dashboard/admin"
                        href="#admin"
                        onClick={handleClose}
                      >
                        <span className="me-2 fs-4">
                          <TiGroup></TiGroup>
                        </span>{" "}
                        <span>ADMINS</span>
                      </Nav.Link>

                      <Nav.Link
                        className="text-center pe-5 ps-3 text-light text-start"
                        as={CustomLink}
                        to="/dashboard/nfts"
                        href="#nfts"
                        onClick={handleClose}
                        style={{ width: '168px' }}
                      >
                        <span className="me-2 fs-4">
                          <HiCheckCircle></HiCheckCircle>
                        </span>{" "}
                        <span>NFTS</span>
                      </Nav.Link>
                      <div className='ms-4'>
                        <Button variant="danger" className='text-uppercase w-100 me-5 pt-2 pb-2 mt-3' size="sm" onClick={() => handleLogout()}>Log Out</Button>
                      </div>
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
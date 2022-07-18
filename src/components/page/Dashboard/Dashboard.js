import React from 'react';
import { Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CustomLink from '../../CustomLink';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { TiGroup } from 'react-icons/ti';
import { HiCheckCircle } from 'react-icons/hi';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='dashboardFlex' style={{ height: "975px", backgroundColor: '#1A1A25' }}>
            <div className='handleNested' style={{ backgroundColor: '#323246', color: 'white' }}>
                <Navbar expand="sm" className="mb-3" style={{ marginTop: '100px' }}>
                    <Container fluid style={{ color: 'white' }}>
                        <Navbar.Toggle aria-controls='offcanvasNavbar-expand-sm' />
                        <Navbar.Offcanvas
                            id={'offcanvasNavbar-expand-sm}'}
                            aria-labelledby={'offcanvasNavbarLabel-expand-sm'}
                            placement="start"
                            style={{ backgroundColor: '#323246', color: 'white' }}
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={'offcanvasNavbarLabel-expand-sm'}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className='d-flex flex-column justify-content-center align-items-center handleNav ps-5 ms-2'>
                                    <Nav.Link className='ps-2 pe-2 text-light' as={CustomLink} to='/dashboard'><span className='me-2 fs-4'><TiGroup></TiGroup></span> <span>Admin</span></Nav.Link>
                                    <Nav.Link className='ps-2 pe-2 text-light' as={CustomLink} to='/dashboard/dnfts'><span className='me-2 fs-4'><HiCheckCircle></HiCheckCircle></span> <span>NFTS</span></Nav.Link>
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>
            <div className='handleOutlet'>
                <Outlet />
            </div>
        </div >
    );
};

export default Dashboard;
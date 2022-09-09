import { useContext, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { CelebrityContext } from '../../context/CelebrityContext';
import './header.css';

function Header() {
  const { openWalletModal, user } = useContext(CelebrityContext);




  return (
    <Navbar bg="light" expand="lg" id='navbars' className='navbarsContainer' collapseOnSelect>
      <Container className='navbarsContainer'>
        <Navbar.Brand as={HashLink} to="/" href="#homeone" style={{ width: '10%' }}><img alt="logo" src="/assets/images/logo-6.jpg" className='handleImage' /></Navbar.Brand>

        <InputGroup className="search-bar">

          <Form.Control
            style={{ textTransform: "lowercase" }}
            aria-label="" className='inputBackground' placeholder='Search' type="text" required name="search" />
          <InputGroup.Text
            className='bg-dark text-center border-0 cursor-pointer text-white' role="button" type="submit"
          ><i class="fas fa-search"></i>
          </InputGroup.Text>
        </InputGroup>
        {/* <input type="text" /> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="NavbarToggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link as={Link} to="/home" href="#home" className='menuText'>Home</Nav.Link> */}
            <Nav.Link as={Link} to="/about_us" href="#home" className='menuText'>ABOUT US</Nav.Link>

            <Nav.Link href="https://dsl.sg/testnettokens" target="_blank" className='menuText'>GET TEST TOKENS</Nav.Link>

            <Nav.Link href="https://dsl.sg/news" target="_blank" className='menuText'>NEWS</Nav.Link>

            <Nav.Link as={Link} to="/how_it_works" href="#home" className='menuText'>HOW IT WORKS</Nav.Link>

            {/* <div class="dropdown-menus">
              <button class="menu-btns">Countries </button>
              <div class="menu-contents">
                <Nav.Link as={HashLink} to="/Singapore" className='menuText'>Singapore</Nav.Link>
                <Nav.Link as={HashLink} to="/malaysia" className='menuText'>Malaysia</Nav.Link>
                <Nav.Link as={HashLink} to="/india" className='menuText'>India</Nav.Link>
                
              </div>
            </div> */}

            {/* <div class="dropdown-menus">
              <button class="menu-btns">Types </button>
              <div class="menu-contents">
                <Nav.Link as={HashLink} href="#Souvenir" to="/souvenirNft#Souvenir" className='menuText dropdown-text'>Souvenir NFT</Nav.Link>
                <Nav.Link as={HashLink} href="#Meal" to="/mealnft#Meal" className='menuText dropdown-text'>Meal NFT</Nav.Link>
              </div>
            </div> */}

            {/* <Nav.Link as={HashLink} to="/dashboard" href='#dashboard' className='menuText'>Dashboard</Nav.Link> */}
            {
              (!user.walletAddress || user.walletAddress === "undefined") ?
                <div className='menuText headerButtonW'><button class="button-18" role="button" onClick={openWalletModal}><i className="icon_wallet_alt me-1"></i> <span>LOGIN WITH WALLET</span> </button> </div>
                :
                <Nav.Link as={HashLink} href="#Meal" to="/profile" className='menuText dropdown-text'><div className='menuText headerButtonW'><button class="button-18" role="button" >Profile</button> </div></Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './header.css';

function Header() {

  return (
    <Navbar bg="light" expand="lg" id='navbars' className='navbarsContainer' collapseOnSelect>
      <Container className='navbarsContainer'>
        <Navbar.Brand as={HashLink} to="/" href="#homeone" style={{ width: '50%' }}><img alt="logo" src="/assets/images/logo-6.jpg" className='handleImage' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="NavbarToggle" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" href="#home" className='menuText'>Home</Nav.Link>  
            {/* <div class="dropdown-menus">
              <button class="menu-btns">Countries </button>
              <div class="menu-contents">
                <Nav.Link as={HashLink} to="/Singapore" className='menuText'>Singapore</Nav.Link>
                <Nav.Link as={HashLink} to="/malaysia" className='menuText'>Malaysia</Nav.Link>
                <Nav.Link as={HashLink} to="/india" className='menuText'>India</Nav.Link>
                
              </div>
            </div> */}

            <div class="dropdown-menus">
              <button class="menu-btns">Types </button>
              <div class="menu-contents">
                <Nav.Link as={HashLink} href="#souven" to="/souvenirNft" className='menuText dropdown-text'>Souvenir NFT</Nav.Link>
                <Nav.Link as={HashLink} to="/mealnft" href='#meal' className='menuText dropdown-text'>Meal NFT</Nav.Link>
                 
              </div>
            </div>

            <Nav.Link as={HashLink} to="/connect_wallet" className='menuText'><button class="button-18" role="button"><i className="icon_wallet_alt me-1"></i> <span>Connect Wallet</span> </button> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;


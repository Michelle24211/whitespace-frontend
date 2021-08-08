import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthButton from './AuthButton';
import NavDropdownItems from './NavDropdown';
import '../style/navBar.css';
import CartButton from './CartButton';

const NavBar: React.FC = () => (
  <Navbar
    className="move-up-front"
    collapseOnSelect
    expand="lg"
    bg="dark"
    variant="dark"
  >
    <Container>
      <Navbar.Brand>
        <Link to="/" className="link-no-style">
          <span className="white">
            White·<span className="italic">Space</span>
          </span>
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/item/create-item">Create Listing</Nav.Link>

          <NavDropdown title="Shop" id="collasible-nav-dropdown">
            <NavDropdownItems />
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav>
            <AuthButton />
          </Nav>
          <Nav.Link>
            <CartButton />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;

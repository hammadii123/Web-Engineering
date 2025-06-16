import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function NavbarComponent() {
  const location = useLocation();

  return (
    <Navbar className="bg-dark shadow-sm   "  expand="lg" sticky="top" >
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-light">🏋️ GymZone</Navbar.Brand>
       <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0"
          style={{ filter: 'invert(1)' }}
        />
        <Navbar.Collapse id="basic-navbar-nav text-light">
          <Nav className="ms-auto t">
            <Nav.Link as={Link} className="text-light" to="/" active={location.pathname === '/'}>Home</Nav.Link>
            <Nav.Link as={Link} className="text-light" to="/members" active={location.pathname === '/members'}>Members</Nav.Link>
            <Nav.Link as={Link} className="text-light" to="/classes" active={location.pathname === '/classes'}>Classes</Nav.Link>
            <Nav.Link as={Link} className="text-light" to="/contact" active={location.pathname === '/contact'}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
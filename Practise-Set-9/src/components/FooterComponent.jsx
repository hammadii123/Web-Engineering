import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FooterComponent() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>🏋️ GymZone</h5>
            <p>Your ultimate fitness partner. Achieve your goals with us.</p>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>Email: support@gymzone.com</p>
            <p>Phone: +92 123 4567890</p>
            <p>Location: Karachi, Pakistan</p>
          </Col>
        </Row>
        <hr className="border-secondary" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} GymZone. All Rights Reserved.</p>
      </Container>
    </footer>
  );
}

export default FooterComponent;

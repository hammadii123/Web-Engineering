import React from 'react';
import { Container, Navbar, Nav, Button, Card, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">MyApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="text-center py-5">
        <h1 className="mb-4">Welcome to My Beautiful App</h1>
        <p className="lead">This React app is styled with React Bootstrap and designed for a clean, elegant look.</p>
        <Button variant="primary" size="lg" className="mb-5">Get Started</Button>

        {/* Cards */}
        <Row className="g-4">
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Feature One</Card.Title>
                <Card.Text>
                  This is a simple card that highlights an important feature of your app.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Feature Two</Card.Title>
                <Card.Text>
                  Another amazing feature that your users will love.
                </Card.Text>
                <Button variant="success">Discover</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Feature Three</Card.Title>
                <Card.Text>
                  Show off what your app can do in a stylish card format.
                </Card.Text>
                <Button variant="warning">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3 mt-5">
        <Container>
          <p className="mb-0">&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
}

export default App;

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaDumbbell, FaRunning, FaHeartbeat } from 'react-icons/fa';

function Home() {
  return (
    <Container className="mt-5">
      {/* Hero Section */}
      <Row className="align-items-center mb-5">
        <Col md={6} className="text-center text-md-start">
          <h1 className="display-4 fw-bold">
            Welcome to <span className="text-primary">GymZone</span>
          </h1>
          <p className="lead">
            Achieve your fitness goals with our world-class equipment, certified trainers,
            and a motivating environment.
          </p>
          <Button variant="dark" size="lg" className="mt-3">
            Join Now
          </Button>
        </Col>
        <Col md={6}>
          <Card className="shadow border-0">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
              alt="Gym image"
            />
          </Card>
        </Col>
      </Row>

      {/* Features Section */}
      <Row className="text-center mb-5">
        <Col md={4}>
          <FaDumbbell size={50} className="text-primary mb-3" />
          <h4>Modern Equipment</h4>
          <p>Top-notch machines to boost your strength and endurance.</p>
        </Col>
        <Col md={4}>
          <FaRunning size={50} className="text-success mb-3" />
          <h4>Personal Training</h4>
          <p>Work 1-on-1 with certified trainers to reach your full potential.</p>
        </Col>
        <Col md={4}>
          <FaHeartbeat size={50} className="text-danger mb-3" />
          <h4>Healthy Lifestyle</h4>
          <p>Fitness, diet, and recovery programs tailored for your needs.</p>
        </Col>
      </Row>

      {/* Motivational Quote */}
      <Row className="text-center mb-5">
        <Col>
          <blockquote className="blockquote">
            <p className="mb-0 fst-italic">
              "Push yourself because no one else is going to do it for you."
            </p>
            <footer className="blockquote-footer mt-2">GymZone Inspiration</footer>
          </blockquote>
        </Col>
      </Row>

      {/* Call To Action */}
      <Row className="text-center">
        <Col>
          <Card className="p-4 bg-light border-0 shadow-sm">
            <h3 className="fw-bold mb-3">Ready to transform your body and mind?</h3>
            <p className="lead">Join GymZone today and start your fitness journey with us.</p>
            <Button variant="success" size="lg">
              Get Started
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

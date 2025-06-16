import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Classes() {
  const workoutClasses = ["Yoga", "Zumba", "CrossFit", "Cardio Blast", "Pilates"];

  return (
    <Container>
      <h2 className="text-center my-4">Workout Classes</h2>
      <Row>
        {workoutClasses.map((classItem, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{classItem}</Card.Title>
                <Card.Text>
                  Join our {classItem} class and get fit with professional trainers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Classes;
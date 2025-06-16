import React, { useState } from 'react';
import {
  Button,
  Container,
  ListGroup,
  Row,
  Col,
  Card,
  Form,
  Alert
} from 'react-bootstrap';

function Members() {
  const [members, setMembers] = useState(["Ali", "Sara", "John"]);
  const [newMember, setNewMember] = useState("");
  const [error, setError] = useState("");

  const addMember = () => {
    if (newMember.trim() === "") {
      setError("Member name cannot be empty.");
      return;
    }

    setMembers([...members, newMember.trim()]);
    setNewMember("");
    setError("");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow p-4">
            <h2 className="text-center mb-3">Our Valued Members</h2>

            <Form className="mb-3">
              <Row>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="Enter member name"
                    value={newMember}
                    onChange={(e) => setNewMember(e.target.value)}
                  />
                </Col>
                <Col sm={4}>
                  <Button onClick={addMember} variant="success" className="w-100">
                    Add Member
                  </Button>
                </Col>
              </Row>
            </Form>

            {error && (
              <Alert variant="danger" onClose={() => setError("")} dismissible>
                {error}
              </Alert>
            )}

            <div className="d-flex justify-content-between align-items-center mb-2">
              <span>Total Members: <strong>{members.length}</strong></span>
            </div>

            <ListGroup>
              {members.map((member, index) => (
                <ListGroup.Item key={index}>{member}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Members;

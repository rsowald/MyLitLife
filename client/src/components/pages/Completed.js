import React from "react";
import {
  Container,
  Row,
  Col,
  ButtonToolbar,
  ButtonGroup,
  Button,
  InputGroup,
  FormControl,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import "./BookQueue";
import { useAuth } from '../authentication/context/AuthContext'

function CompletedBooks() {
  const { currentUser } = useAuth();
  return (
    <Container>
      <h1>{currentUser.uid}</h1>
      <Row>
        <Col size="md-8" className="text-left" style={{ borderRadius: "5px" }}>
          <h1>Completed Books</h1>
          <>
            <ButtonToolbar
              className="justify-content-between"
              aria-label="Toolbar with Button groups"
            >
              <ButtonGroup aria-label="First group">
                <Button variant="secondary">1</Button>{" "}
                <Button variant="secondary">2</Button>{" "}
                <Button variant="secondary">3</Button>{" "}
                <Button variant="secondary">4</Button>
              </ButtonGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id="btnGroupAddon2">
                    Example Text
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="text"
                  placeholder="Completed Book Search"
                  aria-label="Search Completed"
                  aria-describedby="btnGroupAddon2"
                />
              </InputGroup>
            </ButtonToolbar>
          </>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              href="#"
              variant="top"
              src="https://www.pngkey.com/png/detail/350-3500680_placeholder-open-book-silhouette-vector.png"
            />
            <Card.Body>
              <Card.Title>Book Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content, this is where a description
                could be.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Title</ListGroupItem>
              <ListGroupItem>Author</ListGroupItem>
              <ListGroupItem>Genre</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Reviews Link</Card.Link>
              <Card.Link href="#">Google Books Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CompletedBooks;

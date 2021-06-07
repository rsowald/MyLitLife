import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function SearchForm(props) {
  return (
    <Container>
      <Row
        style={{ margin: "5px", padding: "20px", backgroundColor: "#f7d065", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", borderRadius: "5px" }}
      >
        <Col size="md-4">
          <h3 style={{ textAlign: "center" }}>Google Books Search</h3>

          <Form onSubmit={props.handleSearch}
            style={{
              padding: "10px",
              color: "saddlebrown",
              fontWeight: "bold",
            }}
          >

            <Form.Group controlId="formBasicTitle">
              <Form.Control
                onChange={props.handleChange}
                type="text"
                name="title"
                placeholder="Enter title"
              />
            </Form.Group>
            <Form.Group controlId="formBasicAuthor">
              <Form.Control
                onChange={props.handleChange}
                type="text"
                name="author"
                placeholder="Author"
              />
            </Form.Group>
            <Form.Group controlId="formBasicGenre">
              <Form.Control
                onChange={props.handleChange}
                type="text"
                name="genre"
                placeholder="Genre"
              />
            </Form.Group>
            <Form.Group controlId="formBasicIsbn">
              <Form.Control
                onChange={props.handleChange}
                type="text"
                name="isbn"
                placeholder="ISBN"
              />
            </Form.Group>

            <Button
              variant="secondary"
              className="float-right mb-2"
              type="submit"

            >
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchForm;

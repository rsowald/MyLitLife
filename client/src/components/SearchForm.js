import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function SearchForm(props) {
    return (
        <Container>
            <Row style={{ margin: "5px", padding: "20px", backgroundColor: "#f7d065" }}>
                <Col size="md-4">
                    <Form style={{ padding: "10px", color: "saddlebrown", fontWeight: "bold" }}>
                        {/* <Form.Group controlId="searchForm.Input">
                            <Form.Label>Search Terms</Form.Label>
                            <Form.Control type="text" onChange={() => console.log("handleInputChange")} placeholder="Keyword? Title? Author? Whatever." />
                        </Form.Group>
                        <Form.Group controlId="searchForm.Select">
                            <Form.Label>Search By</Form.Label>
                            <Form.Control as="select">
                                <option value="title" >Title</option>
                                <option value="author" >Author</option>
                                <option value="genre" >Genre</option>
                            </Form.Control>
                        </Form.Group> */}


                        <Form.Group controlId="formBasicTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control onChange={props.handleChange} type="text" name="title" placeholder="Enter title" />
                        </Form.Group>
                        <Form.Group controlId="formBasicAuthor">
                            <Form.Label>Author</Form.Label>
                            <Form.Control onChange={props.handleChange} type="text" name="author" placeholder="Author" />
                        </Form.Group>
                        <Form.Group controlId="formBasicGenre">
                            <Form.Label>Genre</Form.Label>
                            <Form.Control onChange={props.handleChange} type="text" name="genre" placeholder="genre" />
                        </Form.Group>
                        <Form.Group controlId="formBasicIsbn">
                            <Form.Label>ISBN</Form.Label>
                            <Form.Control onChange={props.handleChange} type="text" name="isbn" placeholder="ISBN" />
                        </Form.Group>


                        {/* <Button variant="primary" className="float-right mb-2" onClick={() => console.log("handleSearch")}>Search</Button> */}
                        <Button variant="secondary" className="float-right mb-2" onClick={props.handleSearch}>Search</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchForm;
import React from "react";

function SearchForm() {
    return (
        <Container>
            <Row style={{ border: "3px solid black", borderRadius: "5px", padding: "20px" }}>
                <Col size="md-4">
                    <Form style={{ padding: "10px" }}>
                        <Form.Group controlId="searchForm.Input">
                            <Form.Label>Search Terms</Form.Label>
                            <Form.Control type="text" onChange={handleInputChange} placeholder="Keyword? Title? Author? Whatever." />
                        </Form.Group>
                        <Form.Group controlId="searchForm.Select">
                            <Form.Label>Search By</Form.Label>
                            <Form.Control as="select">
                                <option value="title">Title</option>
                                <option value="author">Author</option>
                                <option value="genre">Genre</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" className="float-right mb-2" onClick={handleSearch}>Search</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchForm;
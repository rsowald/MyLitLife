import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Grid, Segment, Image } from "react-bootstrap";


class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
                                  <h3 className="text-center mb-4">Completed Books</h3>
                            <Form onSubmit={handleAddedBook}>
                                <Form.Group className="mb-3" id="title">
                                    <Form.Label >Title</Form.Label>
                                    <Form.Control name="title" type="name" ref={titleRef} placeholder="Book Title" required />
                                </Form.Group>
                                <Form.Group className="mb-3" id="author">
                                    <Form.Label>Author</Form.Label>
                                    <Form.Control name="author" type="name" ref={authorRef} placeholder="Author" required />
                                </Form.Group>
                                <Form.Group className="mb-3" id="email">
                                    <Form.Label>Pages</Form.Label>
                                    <Form.Control name="email" type="number" ref={pagesRef} placeholder="Pages" required />
                                </Form.Group>
                                {!spin
                                    ? < Button disabled={loading} className="mt-3 w-100" variant="success" type="submit">Add Book!</Button>
                                    : <Spinner className="mt-3" animation="border" variant="success" />
                                }
                            </Form>
    );
  }
}

export default BookForm;
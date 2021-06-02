import React, { useRef } from "react";
import { Form, Button } from 'react-bootstrap';
import API from "../utils/API";
import { useAuth } from "../components/authentication/context/AuthContext";

function BookForm() {
    const { currentUser } = useAuth();
    const titleRef = useRef();
    const authorRef = useRef();
    const pagesRef = useRef();
    const book = {VolumeInfo:{
      title: titleRef, 
      author: authorRef,
      pages: pagesRef
    }}

    function handleAddedBook(event) {
    event.preventDefault();

    API.addToCompleted(book, currentUser.uid)
      .catch(err => {
        console.log(err)
      });
      }

  return (
      <>
                            <Form onSubmit={()=>handleAddedBook}>
                                <Form.Group className="mb-3" id="title">
                                    <Form.Control name="title" type="name" placeholder="Book Title" ref={titleRef} required />
                                </Form.Group>
                                <Form.Group className="mb-3" id="author">
                                    <Form.Control name="author" type="name" placeholder="Author" ref={authorRef} required />
                                </Form.Group>
                                <Form.Group className="mb-3" id="email">
                                    <Form.Control name="pages" type="number" placeholder="Pages" ref={pagesRef} required />
                                </Form.Group>
                                <Button type="submit">Add Book!</Button>
                                </Form>
       </>
    )
};

export default BookForm;
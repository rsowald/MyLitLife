import React, { useRef, useState } from "react";
import { Form, Button, Toast } from 'react-bootstrap';
import API from "../utils/API";
import { useAuth } from "../components/authentication/context/AuthContext";

function BookForm() {
    const { currentUser } = useAuth();
    const titleRef = useRef();
    const authorRef = useRef();

    const [showToast, setShowToast] = useState(false);

    const handleAddedBook = (event) => {
        event.preventDefault();
        API.searchBooks(`intitle:${titleRef.current.value}+inauthor:${authorRef.current.value}`)
            .then(res => {
                if (res.data.items) {
                    API.addToCompleted(res.data.items[0], currentUser.uid)
                }
                else {
                    setShowToast(true);
                }
            })
            .catch(err => {
                console.log(err)
            });
        titleRef.current.value = "";
        authorRef.current.value = "";
    };

    return (
        <>
            <Form onSubmit={handleAddedBook} >
                <Form.Group className="mb-3" id="title">
                    <Form.Control name="title" type="name" placeholder="Book Title" ref={titleRef} required />
                </Form.Group>
                <Form.Group className="mb-3" id="author">
                    <Form.Control name="author" type="name" placeholder="Author" ref={authorRef} required />
                </Form.Group>
                <Button type="submit">Add Book!</Button>
            </Form>
            <Toast className="mt-3" show={showToast} onClose={() => setShowToast(false)}>
                <Toast.Header>
                    <strong className="mr-auto">Oh No! Try again.</strong>
                </Toast.Header>
                <Toast.Body>We couldn't find a book by that title and author.</Toast.Body>
            </Toast>
        </>
    );
};

export default BookForm;
import React, { useRef, useState } from "react";
import { Form, Button, Toast } from 'react-bootstrap';
import API from "../utils/API";
import { useAuth } from "../components/authentication/context/AuthContext";

function CompletedBookForm(props) {
    const { currentUser } = useAuth();
    const titleRef = useRef();
    const authorRef = useRef();

    const [showErrorToast, setShowErrorToast] = useState("");
    const [showSuccessToast, setShowSuccessToast] = useState(false);

    const handleAddedBook = async (event) => {
        event.preventDefault();
        const searchResult = await API.searchBooks(`intitle:${titleRef.current.value}+inauthor:${authorRef.current.value}`);

        if (searchResult.data.items) {
            const book = searchResult.data.items[0];
            try {
                await API.addToCompleted(book, currentUser.uid);
                setShowSuccessToast(true);
                setShowErrorToast("");
                props.onAdd();
            } catch (error) {
                setShowSuccessToast(false);
                setShowErrorToast(`${book.volumeInfo.title} by ${book.volumeInfo.authors[0]} is already in your completed list.`);
            }

            titleRef.current.value = "";
            authorRef.current.value = "";
        }
        else {
            setShowSuccessToast(false);
            setShowErrorToast("No book found by that title and author.");
        }
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
                <Button type="submit" variant="secondary">Add Book!</Button>
            </Form>
            <Toast animation={false} className="mt-3" show={showErrorToast} onClose={() => setShowErrorToast(false)}>
                <Toast.Header>
                    <strong className="mr-auto">Oh No! Try again.</strong>
                </Toast.Header>
                <Toast.Body>{showErrorToast}</Toast.Body>
            </Toast>
            <Toast animation={false} className="mt-3" show={showSuccessToast} onClose={() => setShowSuccessToast(false)}>
                <Toast.Header>
                    <strong className="mr-auto">Success!</strong>
                </Toast.Header>
                <Toast.Body>This book has been added to your Completed Books list.</Toast.Body>
            </Toast>
        </>
    );
};

export default CompletedBookForm;
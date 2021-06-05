import React, { useState, useEffect } from "react";
import { Button, Card, DropdownButton, Dropdown } from 'react-bootstrap';
import API from "../utils/API";
import { useAuth } from "../components/authentication/context/AuthContext"
import { useBookModal } from "../context/ModalContext";

function CurrentBookDropdown() {
    const [books, setBooks] = useState([]);
    const [currentBook, setCurrentBook] = useState();

    const { currentUser } = useAuth();
    const { showModal } = useBookModal();

    async function fetchBooks() {
        const queuedBooks = await API.getQueue(currentUser.uid);
        if (queuedBooks.data.length) {
            setBooks(queuedBooks.data);
        }
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    if (books.length === 0) {
        return null;
    }

    const displayCurrent = (id) => {
        setCurrentBook(books.find(b => b.id === id));

    }

    return (
        <Card className="card-current-book dashboard-card my-3" style={{ backgroundColor: "#f7d065" }}>
            <Card.Body className="justify-content-center">
                <DropdownButton variant="secondary" title="Set Current Book">
                    {books.map(book => <Dropdown.Item key={book.id} as="button" onClick={() => displayCurrent(book.id)}>{book.volumeInfo.title}</Dropdown.Item>)}
                </DropdownButton>

                {
                    currentBook && (
                        <>
                            <Card.Img
                                variant="top"
                                src={currentBook.volumeInfo.imageLinks.thumbnail}
                            />

                            <h3>{currentBook.volumeInfo.title}</h3>
                            <p>by {currentBook.volumeInfo.authors[0]}</p>
                            <Button variant="secondary" onClick={() => showModal(false, currentBook.id)}>See Details</Button>
                        </>)
                }
            </Card.Body >
        </Card>
    );
};

export default CurrentBookDropdown;
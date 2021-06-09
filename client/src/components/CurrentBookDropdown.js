import React, { useState, useEffect } from "react";
import { Button, Card, DropdownButton, Dropdown } from 'react-bootstrap';
import API from "../utils/API";
import { useAuth } from "../components/authentication/context/AuthContext";
import { useBookModal } from "../context/ModalContext";
import { useUser } from "../context/UserContext";

function CurrentBookDropdown() {
    const { upsertUser, user } = useUser();
    const [books, setBooks] = useState();
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

    useEffect(() => {
        if (!user.currentBook || !books || (currentBook && currentBook.id === user.currentBook)) {
            return;
        }
        setCurrentBook(books.find(b => b.id === user.currentBook));
    }, [user, books]);

    if (!books) {
        return null;
    }

    const setCurrent = (id) => {
        upsertUser({
            currentBook: id
        });
    };

    return (
        <Card className="card-current-book dashboard-card my-3" style={{ backgroundColor: "#f7d065" }}>
            <Card.Body className="justify-content-center">
                <DropdownButton variant="secondary" title="Set Current Book" className="mb-3">
                    {books.map(book => <Dropdown.Item key={book.id} as="button" onClick={() => setCurrent(book.id)}>{book.volumeInfo.title}</Dropdown.Item>)}
                </DropdownButton>

                {
                    currentBook && (
                        <Card className="d-flex align-items-center py-2">
                            <Card.Img
                                variant="top"
                                src={currentBook.volumeInfo.imageLinks.thumbnail}
                            />

                            <Card.Title>{currentBook.volumeInfo.title}</Card.Title>
                            <Card.Body>by {currentBook.volumeInfo.authors[0]}</Card.Body>
                            <Button variant="secondary" onClick={() => showModal(false, currentBook.id)}>See Details</Button>
                        </Card>)
                }
            </Card.Body >
        </Card>
    );
};

export default CurrentBookDropdown;
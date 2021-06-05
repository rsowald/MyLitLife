import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import { useAuth } from "../components/authentication/context/AuthContext";
import { useBookModal } from "../context/ModalContext";
import { Card, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RecentlyCompleted(props) {
    const [completed, setCompleted] = useState([]);
    const { currentUser } = useAuth();
    const { showModal } = useBookModal();

    const user = currentUser.uid;

    async function loadBooks() {
        const booksRes = await API.getCompletedLimit(user);
        const books = booksRes.data;
        if (books.length) {
            setCompleted(books);
        }
    }

    props.refresher(loadBooks);

    useEffect(() => {
        loadBooks();
    }, []);

    return (
        <Card className="dashboard-card" style={{ backgroundColor: "#f7d065" }}>
            <Card.Body>
                <Card.Title as="h2">Recently Completed</Card.Title>
                <hr></hr>
                <ListGroup>
                    {completed.map(book =>
                        <Button variant="light" className="mt-1" key={book.id} onClick={() => showModal(true, book.id)}>
                            {book.volumeInfo.title} by {book.volumeInfo.authors[0]}
                        </Button>)}
                </ListGroup>
                <Link to="/completed"><Button className="mt-3" variant="secondary">See all completed Books</Button></Link>
            </Card.Body>
        </Card>
    )
}

export default RecentlyCompleted;
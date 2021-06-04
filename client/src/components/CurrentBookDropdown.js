import React, { useState, useEffect } from "react";
import { DropdownButton, Dropdown } from 'react-bootstrap';
import API from "../utils/API";
import { useAuth } from "../components/authentication/context/AuthContext"

function CurrentBookDropdown() {
    const [completed, setCompleted] = useState([]);

    const { currentUser } = useAuth();

    const user = currentUser.uid;

    async function fetchCurrentBooks() {
        const queuedBooks = await API.getQueue(user);
        console.log(queuedBooks);
        if (queuedBooks.data.length) {
            console.log(queuedBooks.data);
            setCompleted(queuedBooks.data);
        }
    };

    useEffect(() => {
        fetchCurrentBooks();
    }, []);

    return (
        <DropdownButton title="Choose Current Book">
            {completed.map(book => <Dropdown.Item key={book.id} as="button">{book.volumeInfo.title}</Dropdown.Item>)}
        </DropdownButton>
    );
};

export default CurrentBookDropdown;
import React, { useRef, useState } from "react";
import { Dropdown, Button, Card } from 'react-bootstrap';
import API from "../utils/API";
import { useAuth } from "../components/authentication/context/AuthContext";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

function CurrentBook() {
    const { currentUser } = useAuth();
    const bookQueueRef = useRef();


    const handleCurrentBook = (event) => {
        event.preventDefault();
        API.searchBooks(`inqueue:${bookQueueRef.current.value}`)
            .then(res => {
                if (res.data.items) {
                    API.getQueue(res.data.items[0], currentUser.uid)
                }
            })
            .catch(err => {
                console.log(err)
            });
        bookQueueRef.current.value = "";
    };

    // const showCurrentBook = (event) => {

    //     }

    return (
        <>
            {/* <Card>
                return (
                    <h3>{ showCurrentBook }</h6>
                )
            </Card> */}
            <Dropdown onSubmit={handleCurrentBook} >
                <DropdownItem.Group className="mb-3" id="title">
                    <Dropdown.Control name="-current-book" type="name" placeholder="Book Queue Selection" ref={bookQueueRef} required />
                </DropdownItem.Group>
            </Dropdown>
            <Button type="submit">Add Book!</Button>
        </>
    );
};

export default CurrentBook;
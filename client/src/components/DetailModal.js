import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useBookModal } from "../context/ModalContext";
import API from "../utils/API";
import Rating from "./Rating";
import { useAuth } from "./authentication/context/AuthContext";


function DetailModal() {
    const { currentUser } = useAuth();
    const [rating, setRating] = useState();
    const { bookModalInfo, hideModal } = useBookModal();
    const [book, setBook] = useState();

    useEffect(() => {
        if (!bookModalInfo) {
            setBook(undefined);
            return;
        }
        async function fetchBook() {
            const bookAPI = bookModalInfo.isCompleted ? API.getCompletedBook : API.getQueuedBook;
            const book = await bookAPI(bookModalInfo.bookId, currentUser.uid);
            setBook(book.data);
        }
        fetchBook();
    }, [bookModalInfo]);


    if (!book) {
        return null;
    }

    // const onHide = () => {
    //     hideModal();

    // }

    return (
        <Modal
            show={!!bookModalInfo}
            onHide={() => hideModal()}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2>{book.volumeInfo.title}</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p text="muted" className="">by {book.volumeInfo.author}</p>
                <h4 className="mt-4">My Rating</h4>
                <Rating onChange={setRating} rating={rating} />
                <h4 className="mt-4">Reading Notes:</h4>
                <textarea value={book.volumeInfo.notes} />
                <h4 className="mt-4">My Review:</h4>
                <textarea value={book.volumeInfo.review} />
                <h4 className="mt-4">How it Should have Ended:</h4>
                <textarea value={book.volumeInfo.ending} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => hideModal()}>Save &amp; Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DetailModal;
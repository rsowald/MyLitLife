import React, { useEffect, useRef, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useBookModal } from "../context/ModalContext";
import API from "../utils/API";
import Rating from "./Rating";
import { useAuth } from "./authentication/context/AuthContext";


function DetailModal() {
    const { currentUser } = useAuth();
    const { bookModalInfo, hideModal } = useBookModal();
    const [rating, setRating] = useState();
    const [book, setBook] = useState();
    const notesRef = useRef();
    const reviewRef = useRef();
    const endingRef = useRef();

    useEffect(() => {
        if (!bookModalInfo) {
            setBook(undefined);
            return;
        }
        async function fetchBook() {
            const bookAPI = bookModalInfo.isCompleted ? API.getCompletedBook : API.getQueuedBook;
            const bookRes = await bookAPI(bookModalInfo.bookId, currentUser.uid);
            const book = bookRes.data;
            setBook(book);
            setRating(book.rating);
            notesRef.current.value = book.notes || '';
            reviewRef.current.value = book.review || '';
            endingRef.current.value = book.ending || '';
        }
        fetchBook();
    }, [bookModalInfo]);

    const onSave = async (e) => {
        e.preventDefault();

        book.rating = rating;
        book.notes = notesRef.current.value;
        book.review = reviewRef.current.value;
        book.ending = endingRef.current.value;

        const bookAPI = bookModalInfo.isCompleted ? API.updateCompletedBook : API.updateQueuedBook;
        await bookAPI(book, currentUser.uid);
        hideModal();
    };

    return (
        <Modal
            show={!!book}
            onHide={() => hideModal()}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2>{book && book.volumeInfo.title}</h2>
                </Modal.Title>
            </Modal.Header>
            <Form onSubmit={onSave}>
                <Modal.Body>
                    <p text="muted" className="">by {book && book.volumeInfo.authors[0]}</p>
                    <label className="mt-4">My rating
                        <Rating onChange={setRating} rating={rating} />
                    </label>
                    <label className="mt-4">Reading Notes
                        <textarea name="notes" ref={notesRef} />
                    </label>
                    <label className="mt-4">My Review
                        <textarea name="review" ref={reviewRef} />
                    </label>
                    <label className="mt-4">How it Should have Ended
                        <textarea name="ending" ref={endingRef} />
                    </label>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit">Save &amp; Close</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default DetailModal;
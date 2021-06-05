import React, { useEffect, useRef, useState } from "react";
import { Col, Button, Form, Modal } from "react-bootstrap";
import { useBookModal } from "../context/ModalContext";
import API from "../utils/API";
import StarRatings from 'react-star-ratings';
import { useAuth } from "./authentication/context/AuthContext";


function DetailModal() {
    const { currentUser } = useAuth();
    const { bookModalInfo, hideModal } = useBookModal();
    const [rating, setRating] = useState(0);
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
            setRating(book.rating || 0);
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
            <Modal.Header style={{ backgroundColor: "#f7d065", color: "saddlebrown" }}>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2 className="d-inline-flex mr-3">{book && book.volumeInfo.title}</h2><p className="d-inline-flex">by {book && book.volumeInfo.authors[0]}</p>
                </Modal.Title>
            </Modal.Header>
            <Form onSubmit={onSave}>
                <Modal.Body style={{ color: "saddlebrown" }}>
                    <Form.Row>
                        <Form.Label className="mr-5" >My rating</Form.Label>
                        <Col>
                            <StarRatings style={{ marginLeft: "10px" }}
                                rating={rating}
                                starRatedColor="red"
                                changeRating={setRating}
                                numberOfStars={5}
                                name='rating'
                            />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                        <Form.Label column lg={2}>
                            Reading Notes
                        </Form.Label>
                        <Col>
                            <Form.Control as="textarea" type="text" ref={notesRef} placeholder="Passages, marginalia, or words to remember." />
                        </Col>
                    </Form.Row>
                    <br />
                    <Form.Row>
                        <Form.Label column lg={2}>
                            My Review
                        </Form.Label>
                        <Col>
                            <Form.Control as="textarea" type="text" ref={reviewRef} placeholder="Synopsis and thoughts." />
                        </Col>
                    </Form.Row>
                    <br /><Form.Row>
                        <Form.Label column lg={2}>
                            How it Should have Ended
                        </Form.Label>
                        <Col>
                            <Form.Control as="textarea" type="text" ref={endingRef} placeholder="Would you have done it differently?" />
                        </Col>
                    </Form.Row>
                    <br />
                    <a href={book && book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">See on Google Books</a>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: "#f7d065" }}>
                    <Button variant="secondary" type="submit">Save &amp; Close</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default DetailModal;
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useBookModal } from "../context/ModalContext";
import Rating from "./Rating";


function DetailModal(props) {
    const [rating, setRating] = useState();
    const { bookModalInfo, hideModal } = useBookModal();

    //TODO - read book info from DB based on bookModalInfo properties, set into state for this modal and use below for things like title

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
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p text="muted" className="">by {props.author}</p>
                <h4 className="mt-4">My Rating</h4>
                <Rating onChange={setRating} rating={rating} />
                <h4 className="mt-4">Reading Notes:</h4>
                <textarea value={props.notes} />
                <h4 className="mt-4">My Review:</h4>
                <textarea value={props.review} />
                <h4 className="mt-4">How it Should have Ended:</h4>
                <textarea value={props.ending} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => hideModal()}>Save &amp; Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DetailModal;
import React from "react";
import { Modal } from "react-bootstrap/Modal"
import Rating from "./Rating";


function DetailModal(props) {
    const [rating, setRating] = useState();

    return (
        <Modal
            {...props}
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
                <Button onClick={props.onHide}>Save &amp; Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DetailModal;
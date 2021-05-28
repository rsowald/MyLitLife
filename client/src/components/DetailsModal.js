import React from "react";


function Modal(props) {
    return (
        <>
            {props.book.status === "enqueued" ? <AddNote /> : <AddReview />}
        </>
    )
}

export default Modal;
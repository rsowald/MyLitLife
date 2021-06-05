import React from 'react';
import { Form } from 'react-bootstrap';

function Rating(props) {
    return (
        <>
            <Form.Check checked={props.rating === 1} custom inline name="rating" type="radio" aria-label="1 star" id={`inline-radio-1`} onChange={() => props.onChange(1)} ><span className="oi oi-star"></span></Form.Check>
            <Form.Check checked={props.rating === 2} custom inline name="rating" type="radio" aria-label="2 stars" id={`inline-radio-2`} onChange={() => props.onChange(2)} ><span className="oi oi-star"></span></Form.Check>
            <Form.Check checked={props.rating === 3} custom inline name="rating" type="radio" aria-label="3 stars" id={`inline-radio-3`} onChange={() => props.onChange(3)} ><span className="oi oi-star"></span></Form.Check>
            <Form.Check checked={props.rating === 4} custom inline name="rating" type="radio" aria-label="4 stars" id={`inline-radio-4`} onChange={() => props.onChange(4)} ><span className="oi oi-star"></span></Form.Check>
            <Form.Check checked={props.rating === 5} custom inline name="rating" type="radio" aria-label="5 stars" id={`inline-radio-5`} onChange={() => props.onChange(5)} ><span className="oi oi-star"></span></Form.Check>
        </>
    );
}

export default Rating;
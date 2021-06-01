import React from 'react';
import { Form } from 'react-bootstrap';

function Rating(props) {
    return (
        <Form>
            <Form.Check checked={rating === 1} custom inline name="rating" type="radio" aria-label="1 star" id={`inline-radio-1`} onChange={() => props.onChange(1)} ><span class="oi oi-star"></span></Form.Check>
            <Form.Check checked={rating === 2} custom inline name="rating" type="radio" aria-label="2 stars" id={`inline-radio-2`} onChange={() => props.onChange(2)} ><span class="oi oi-star"></span></Form.Check>
            <Form.Check checked={rating === 3} custom inline name="rating" type="radio" aria-label="3 stars" id={`inline-radio-3`} onChange={() => props.onChange(3)} ><span class="oi oi-star"></span></Form.Check>
            <Form.Check checked={rating === 4} custom inline name="rating" type="radio" aria-label="4 stars" id={`inline-radio-4`} onChange={() => props.onChange(4)} ><span class="oi oi-star"></span></Form.Check>
            <Form.Check checked={rating === 5} custom inline name="rating" type="radio" aria-label="5 stars" id={`inline-radio-5`} onChange={() => props.onChange(5)} ><span class="oi oi-star"></span></Form.Check>
        </Form>
    )
}

export default Rating;
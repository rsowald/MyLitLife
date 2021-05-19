// import React, { useRef } from "react";
// import { Form, Button, Card } from "react-bootstrap";

// export default function Signup() {
//     const emailRef = useRef();
//     const passwordRef = useRef();
//     const passwordConfirmRef = useRef();

//     return (
//         <>
//         <Card>
//             <Card.Body>
//                 <h3 className="text-center mb-4">Sign Up</h3>
//                 <Form>
//                     <Form.Group id="email">
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control type="email" ref={emailRef} required />
//                         <Form.Group id="email">
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control type="email" ref={emailRef} required />
//                         <Form.Group id="password">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type= "password" ref={passwwordRef} required />
//                     </Form.Group>
//                     <Form.Group id="email">
//                         <Form.Label>Confirm Password</Form.Label>
//                         <Form.Control type="password-confirm" ref={confirmPasswordRef} required />
//                 </Form>
//             </Card.Body>
//         </Card>
//     )
// }
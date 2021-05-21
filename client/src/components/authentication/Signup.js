import React, { useCallback } from "react";
import { withRouter } from "react-router";
// import { Form, Button, Card } from "react-bootstrap";
import app from "./Base";


const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password, confirmPassword } = event.target.elements;
        try {
            await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value, confirmPassword.value);
            history.push("/");
        } catch (error) {
            alert(error);
                }
    }, [history])

    return (
        <div>
            <h3>Sign Up</h3>
            <form onSubmit={handleSignUp}>
                <label>
                    Email
                    <input name="email" type="email" placeholder="name@example.com" />
                </label>
                <label>
                    Password
                    <input name="password" type="password" placeholder="Minimum 8 characters" />
                </label>
                <label>
                    Confirm Password
                    <input name="confirm-password" type="confirmPassword" placeholder="Confirm Password" />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
    };

    
export default withRouter(SignUp);


// export default function Signup() {
//     const emailRef = useRef();
//     const passwordRef = useRef();
//     const passwordConfirmRef = useRef();

//     return (
//         <Card>
//             <Card.Body>
//                 <h3 className="text-center mb-4">Sign Up</h3>
//                 // Figure out why handleSignUp isn't working!
//                 <Form onSumbmit={handleSignUp}>
//                     <Form.Group id="email">
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control type="email" ref={emailRef} placeholder="Email" required />
//                         <Form.Group id="password"></Form.Group>
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="email" ref={passwordRef} placeholder="Min 8 characters" required />
//                         <Form.Group id="confirm-password"></Form.Group>
//                         <Form.Label>Confirm Password</Form.Label>
//                         <Form.Control type="confirm-password" ref={passwordConfirmRef} placeholder="Confirm Password" required />
//                     </Form.Group>
//                     <button type="submit">Signup</button>
//                 </Form>
//             </Card.Body>
//         </Card>
//     )
// };

export default withRouter(SignUp);
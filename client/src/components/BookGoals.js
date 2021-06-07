import React, { useRef, useEffect, useState } from "react";
import { useAuth } from "../components/authentication/context/AuthContext";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import API from "../utils/API";
import BookGoalChart from "./BookGoalChart";
import PageGoalChart from "./PageGoalChart";

function BookGoals() {
    const { currentUser } = useAuth();
    const [user, setUser] = useState({});
    const booksRef = useRef();
    const pagesRef = useRef();

    useEffect(() => {
        async function fetchUser() {
            try {
                const userRes = await API.getUser(currentUser.uid);
                const user = userRes.data;
                setUser(user);

                booksRef.current.value = user.bookGoal || '';
                pagesRef.current.value = user.pageGoal || '';
            } catch (error) {
                //User hasn't been saved before
            }
        }
        fetchUser();
    }, []);

    const saveGoals = async (e) => {
        e.preventDefault();

        const updated = await API.upsertUser({
            userId: currentUser.uid,
            bookGoal: booksRef.current.value,
            pageGoal: pagesRef.current.value,
            currentBook: user ? user.currentBook : undefined
        });
        setUser(updated);
    };

    return (
        <Card className="card-stats dashboard-card" style={{ backgroundColor: "#f7d065" }}>
            <Card.Title as="h2">Reading Goals</Card.Title>
            <hr />
            <Card.Body>
                <Card>
                    <Card.Body>
                        <Row>
                            <BookGoalChart className="chart" />
                        </Row>
                        <br />
                        <br />
                        <Row>
                            <PageGoalChart className="chart" />
                        </Row>
                    </Card.Body>
                </Card>
                <Form className="mt-3" onSubmit={saveGoals}>
                    <Form.Label as="h4">Set goals for this year:</Form.Label>
                    <Form.Row>
                        <Col>
                            <Form.Control placeholder="# books" required type="number" ref={booksRef} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="# pages" required type="number" ref={pagesRef} />
                        </Col>
                        <Col>
                            <Button type="submit">Set</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default BookGoals;
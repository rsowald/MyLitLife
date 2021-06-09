import React, { useRef, useEffect } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useUser } from "../context/UserContext";
import BookGoalChart from "./BookGoalChart";
import PageGoalChart from "./PageGoalChart";

function BookGoals() {
    const { upsertUser, user } = useUser();
    const booksRef = useRef();
    const pagesRef = useRef();

    useEffect(() => {
        booksRef.current.value = user.bookGoal || '';
        pagesRef.current.value = user.pageGoal || '';
    }, [user]);

    const saveGoals = (e) => {
        e.preventDefault();

        upsertUser({
            bookGoal: booksRef.current.value,
            pageGoal: pagesRef.current.value
        });
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
                            <Button variant="secondary" type="submit">Set</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default BookGoals;
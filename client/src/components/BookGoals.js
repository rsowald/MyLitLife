import React from "react";
import { Card, Row } from "react-bootstrap";
import BookGoalChart from "./BookGoalChart";
import PageGoalChart from "./PageGoalChart";

function BookGoals() {
    return (
        <Card className="card-stats" style={{ backgroundColor: "#f7d065" }}>
            <Card.Title as="h2">Book Goals</Card.Title>
            <hr></hr>
            <Card.Body>
                <Row>
                    <Card>
                        <Card.Body>
                            <Row>
                                <BookGoalChart className="chart" />
                            </Row>
                            <br></br>
                            <br></br>
                            <Row>
                                <PageGoalChart className="chart" />
                            </Row>
                            {/* {{ useRef }} */}
                        </Card.Body>
                    </Card>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default BookGoals;
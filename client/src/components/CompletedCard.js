import React from "react";

import { Card, Button } from "react-bootstrap";
import "./CompletedCard.css";

function CompletedCard(props) {
  return (
    <Card className="CompletedCard">
      <Card className="align-items-center mt-1" style={{ width: "90%" }}>
        <Card.Img
          variant="top"
          src={props.thumbnail}
        />
        <Card.Body className="justify-content-center">
          <Card.Title>{props.title}</Card.Title>
          <p>by {props.author}</p>
          <Button size="sm" variant="secondary" className="mb-2" onClick={props.onClick}>See Details</Button><br />
        </Card.Body>
        <Card.Footer style={{ width: "100%" }}><small className="text-muted mt-auto">Date Completed: {props.completedDate}</small></Card.Footer>
      </Card>
    </Card>
  );
}

export default CompletedCard;

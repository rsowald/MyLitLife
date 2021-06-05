import React from "react";

import { Card, Button } from "react-bootstrap";
import "./CompletedCard.css";

function CompletedCard(props) {
  return (
    <Card className="CompletedCard">
      <Card.Img
        variant="top"
        src={props.thumbnail}
      />
      <Card.Body className="justify-content-center">
        <Card.Title>{props.title}</Card.Title>
        <p>by {props.author}</p>
        <Button size="sm" variant="secondary" className="mb-2" onClick={props.onClick}>See Details</Button><br />
        <small className="text-muted">Date Completed: {props.completedDate}</small>
      </Card.Body>
    </Card>
  );
}

export default CompletedCard;

import React from "react";

import { Card, Button } from "react-bootstrap";
import "./CompletedCard.css";

function CompletedCard(props) {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={props.thumbnail}
      />
      <Card.Body className="justify-content-center">
        <Card.Title>{props.title}</Card.Title>
        <Button className="d-block" size="sm" variant="secondary" onClick={props.onClick}>See Details</Button>
        <small className="text-muted">{props.completedDate}</small>
      </Card.Body>
    </Card>
  );
}

export default CompletedCard;

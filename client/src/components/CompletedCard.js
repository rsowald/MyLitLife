import React from "react";
import { Card } from "react-bootstrap";
import "./CompletedCard.css";

function CompletedCard(props) {
  return (
    <Card className="CompletedCard">
      <Card.Img variant="top" src={props.thumbnail} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          <a href={props.previewLink} target="_blank" rel="noopener noreferrer">
            {props.title}
          </a>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{props.publishedDate}</small>
      </Card.Footer>
    </Card>
  );
}

export default CompletedCard;

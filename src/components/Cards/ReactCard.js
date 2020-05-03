import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import { Card } from "react-bootstrap";
import react from "../../img/logos/react.png";
export default class ReactCard extends Component {
  render() {
    return (
      <Card className="skill_card">
        <Card.Img variant="top" src={react} />
        <Card.Body>
          <Card.Title>React</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

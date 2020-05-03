import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import { Card } from "react-bootstrap";
import java from "../../img/logos/java.png";
export default class JavaCard extends Component {
  render() {
    return (
      <Card className="skill_card">
        <Card.Img variant="top" src={java} />
        <Card.Body>
          <Card.Title>Java</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

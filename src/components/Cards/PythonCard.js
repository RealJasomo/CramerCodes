import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import { Card } from "react-bootstrap";
import python from "../../img/logos/python.png";
export default class PythonCard extends Component {
  render() {
    return (
      <Card className="skill_card">
      <Card.Img variant="top" src={python} />
      <Card.Body>
        <Card.Title>Python</Card.Title>
      </Card.Body>
    </Card>
    );
  }
}

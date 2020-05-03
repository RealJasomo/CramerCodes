import React, { Component } from "react";
import { Card } from "react-bootstrap";
import js from "../../img/logos/js.png";
export default class JSCard extends Component {
  render() {
    return (
      <Card className="skill_card">
      <Card.Img variant="top" src={js} />
      <Card.Body>
        <Card.Title>JavaScript</Card.Title>
      </Card.Body>
    </Card>
    );
  }
}

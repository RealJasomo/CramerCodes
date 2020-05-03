import React, { Component } from "react";
import { Card } from "react-bootstrap";
import rust from "../../img/logos/rust.png";
export default class RustCard extends Component {
  render() {
    return (
      <Card className="skill_card">
      <Card.Img variant="top" src={rust} />
      <Card.Body>
        <Card.Title>Rust</Card.Title>
      </Card.Body>
    </Card>
    );
  }
}

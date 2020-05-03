import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import { Card } from "react-bootstrap";
import clangs from "../../img/logos/c-langs.png";
export default class ClangCard extends Component {
  render() {
    return (
      <Card className="skill_card">
      <Card.Img variant="top" src={clangs} />
      <Card.Body>
        <Card.Title>C/C++</Card.Title>
      </Card.Body>
    </Card>
    );
  }
}

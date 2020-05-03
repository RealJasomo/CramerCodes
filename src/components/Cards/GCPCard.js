import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import { Card } from "react-bootstrap";
import gcp from "../../img/logos/gcp.png";
export default class GCPCard extends Component {
  render() {
    return (
      <Card className="skill_card">
        <Card.Img variant="top" src={gcp} />
        <Card.Body>
          <Card.Title>Google Cloud</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

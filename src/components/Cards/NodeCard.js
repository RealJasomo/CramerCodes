import React, { Component } from "react";
import { Card } from "react-bootstrap";
import node from "../../img/logos/nodejs.png";
export default class NodeCard extends Component {
  render() {
    return (
      <Card className="skill_card">
      <Card.Img variant="top" src={node} />
      <Card.Body>
        <Card.Title>NodeJS</Card.Title>
      </Card.Body>
    </Card>
    );
  }
}

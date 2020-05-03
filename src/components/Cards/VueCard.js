import React, { Component } from "react";
import { Card } from "react-bootstrap";
import vue from "../../img/logos/vue.png";
export default class VueCard extends Component {
  render() {
    return (
      <Card className="skill_card">
        <Card.Img variant="top" src={vue} />
        <Card.Body>
          <Card.Title>VueJS</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

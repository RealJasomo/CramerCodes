import React, { Component } from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import java from "../img/logos/java.png";
import python from "../img/logos/python.png";
import rust from "../img/logos/rust.png";
import clangs from "../img/logos/c-langs.png";
import js from "../img/logos/js.png";
import node from "../img/logos/nodejs.png";
import gcp from "../img/logos/gcp.png";
import react from "../img/logos/react.png";
import vue from "../img/logos/vue.png";

export default class Skill extends Component {
  componentDidMount() {
    let elements = document.getElementsByClassName("grid_element");
    let arr = [];
    let index;
    for (index = 0; index < elements.length; index++) {
      arr.push(elements[index].offsetTop);
    }
    window.addEventListener(
      "scroll",
      function () {
        for (index = 0; index < elements.length; index++) {
          if (arr[index] < window.innerHeight + window.pageYOffset) {
            elements[index].classList.add("fade-in");
          } else {
            elements[index].classList.remove("fade-in");
          }
        }
      },
      true
    );
  }
  render() {
    return (
      <Container className="skills">
        <h1>Skills</h1>
        <Container>
          <Row>
            <Col className="grid_element">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={java} />
                <Card.Body>
                  <Card.Title>Java</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="grid_element">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={python} />
                <Card.Body>
                  <Card.Title>Python</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="grid_element">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={rust} />
                <Card.Body>
                  <Card.Title>Rust</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="grid_element">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={clangs} />
                <Card.Body>
                  <Card.Title>C/C++</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="grid_element">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={js} />
                <Card.Body>
                  <Card.Title>JavaScript</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="grid_element">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={node} />
                <Card.Body>
                  <Card.Title>NodeJS</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="grid_element">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={vue} />
                <Card.Body>
                  <Card.Title>VueJS</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="grid_element">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={react} />
                <Card.Body>
                  <Card.Title>React</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="grid_element">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={gcp} />
                <Card.Body>
                  <Card.Title>Google Cloud</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

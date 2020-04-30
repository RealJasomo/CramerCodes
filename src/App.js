import React from "react";
import { Navbar, Card, Container, Col, Row, Image } from "react-bootstrap";
import Typical from "react-typical";
import { ReactComponent as Logo } from "./img/logo.svg";
import Particles from "react-particles-js";
import me from "./img/me.PNG";
import java from "./img/logos/java.png";
import python from "./img/logos/python.png";
import rust from "./img/logos/rust.png";
import clangs from "./img/logos/c-langs.png";
import js from "./img/logos/js.png";
import node from "./img/logos/nodejs.png";
import gcp from "./img/logos/gcp.png";
import react from "./img/logos/react.png";
import vue from "./img/logos/vue.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar variant="light">
          <Navbar.Brand className="d-inline-block align-top">
            <Logo class="logo" />
          </Navbar.Brand>
        </Navbar>
        <Container className="centered">
          <Image roundedCircle src={me} className="profile_image" />
          <br />
          <br />
          <h1>Hi, I'm Jason Cramer</h1>
          <p>
            I am a{" "}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Full-Stack Web Developer",
                1000,
                "Software Engineer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
            />
          </p>
        </Container>
        
        <div className="indicator">
          <span />
          <span />
          <span />
          <br/>
        </div><Particles
          className="particles"
          width="100vw"
          height="100vh"
          params={{
            particles: {
              number: {
                value: window.innerWidth/20,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
              },
            },
          }}
        />
      </header>
      <Container className="skills">
        <h1>Skills</h1>
        <Container>
          <Row> 
            <Col className="grid_element">
              <Card style={{ width: "18rem"}}>
                <Card.Img variant="top" src={java}/>
                <Card.Body>
                  <Card.Title>Java</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            
            <Col className="grid_element">
              <Card style={{ width: "18rem"}}>
                <Card.Img variant="top" src={python} />
                <Card.Body>
                  <Card.Title>Python</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            
            <Col className="grid_element">
              <Card style={{ width: "18rem"}}>
                <Card.Img variant="top" src={rust} />
                <Card.Body>
                  <Card.Title>Rust</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col className="grid_element">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={clangs} />
                <Card.Body>
                  <Card.Title>C/C++</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            
            <Col className="grid_element">
              <Card style={{ width: "18rem"}}>
                <Card.Img variant="top" src={js} />
                <Card.Body>
                  <Card.Title>JavaScript</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            
            <Col className="grid_element">
              <Card style={{ width: "18rem"}}>
                <Card.Img variant="top" src={node} />
                <Card.Body>
                  <Card.Title>NodeJS</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col className="grid_element">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={vue} />
                <Card.Body>
                  <Card.Title>VueJS</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="grid_element">
              <Card style={{ width: "18rem"}}>
                <Card.Img variant="top" src={react} />
                <Card.Body>
                  <Card.Title>React</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col className="grid_element">
              <Card style={{ width: "18rem"}}>
                <Card.Img variant="top" src={gcp} />
                <Card.Body>
                  <Card.Title>Google Cloud</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default App;

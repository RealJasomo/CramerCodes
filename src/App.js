import React from "react";
import {Navbar, Container, Image } from "react-bootstrap";
import Typical from "react-typical";
import { ReactComponent as Logo } from "./img/logo.svg";
import Particles from "react-particles-js";
import me from "./img/me.PNG";
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
        <Particles
          className="particles"
          width="140vh"
          height="100vh"
          params={{
            particles: {
              number: {
                value: 130,
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
        <div className="indicator">
          <span />
          <span />
          <span />
        </div>
      </header>
      <h1>Skills</h1>
    </div>
  );
}

export default App;

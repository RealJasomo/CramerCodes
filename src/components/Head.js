import React, {Component} from 'react';
import {Navbar, Image, Container} from 'react-bootstrap';
import Typical from "react-typical";
import { ReactComponent as Logo } from "../img/logo.svg";
import Particles from "react-particles-js";
import me from "../img/me.PNG";
import "../css/Head.css";
export default class Head extends Component{
    render(){
        return(
        <header className="header">
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
        )
    }
}
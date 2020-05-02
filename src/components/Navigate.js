import React, { Component, Fragment } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import logo from "../img/logo.svg";
import "../css/Navigate.css";
export default class Navigate extends Component {
  componentDidMount() {
    let element = document.getElementsByClassName("color-nav")[0];
    let spacer = document.getElementsByClassName("skill_spacer")[0];
    var sticky = element.offsetTop;
    window.addEventListener(
      "scroll",
      function () {
        if (window.pageYOffset >= sticky) {
          element.classList.add("sticky");
          spacer.style.height= "9vh";
        } else {
          element.classList.remove("sticky");
          spacer.style.height= "0px";
        }
      },
      true
    );
  }
  render() {
    return (
      <Navbar className="color-nav" variant="dark">
        <Navbar.Brand href="#">
          <Image src={logo} className="logo" />
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#top">Home</Nav.Link>
          <Nav.Link href="#skill">Skills</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

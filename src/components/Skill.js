import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import {JavaCard, PythonCard, RustCard, ClangCard, JSCard, NodeCard, VueCard, ReactCard, GCPCard} from './Cards';


import "../css/Skill.css";
export default class Skill extends Component {
  componentDidMount() {
    let elements = document.getElementsByClassName("skill_card");
    let index;
    let arr = [];
    window.addEventListener("resize", function () {
      arr = [];
      for (index = 0; index < elements.length; index++) {
        arr.push(elements[index].offsetTop);
      }
        elements[4].childNodes[1].childNodes[0].innerHTML= "JavaScript";
            if (window.innerWidth < 380)
              elements[4].childNodes[1].childNodes[0].innerHTML= "Java Script";

    });
    window.dispatchEvent(new Event("resize"));
    window.addEventListener(
      "scroll",
      function () {
        for (index = 0; index < elements.length; index++) {
          if (arr[index] < window.innerHeight + window.pageYOffset) {
            elements[index].style.opacity = 0;
            elements[index].style.animationDelay = "" + index * 0.4 + "s";
            elements[index].classList.add("fade-in");
          } 
        }
      },
      true
    );
  }
  render() {
    return (
      <Container className="skills">
        <div className="outer_card_container">
          <h1>Skills</h1>
          <div className="card_container">
            <JavaCard />
            <PythonCard />
            <RustCard />
            <ClangCard />
            <JSCard />
            <NodeCard />
            <VueCard />
            <ReactCard />
            <GCPCard />
          </div>
        </div>
        <br />
      </Container>
    );
  }
}

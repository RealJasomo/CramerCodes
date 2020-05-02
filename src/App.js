import React from "react";
import Head from "./components/Head";
import Skill from "./components/Skill";
import Navigate from "./components/Navigate";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <section id="top">
        <Head />
      </section>
        <Navigate />
        <section id="skill">
          <div className="skill_spacer"/>
          <Skill />
        </section>
    </div>
  );
}

export default App;

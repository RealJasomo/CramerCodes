import React from "react";
import Head from "./components/Head";
import Skill from "./components/Skill";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Head/>
      <Skill/>
    </div>
  );
}

export default App;

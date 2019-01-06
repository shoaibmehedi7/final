import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import Download from "./Download/Dow";
import Works from "./Works/works";


class App extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <Download/>
        <Works/>
      </div>
    );
  }
}

export default App;

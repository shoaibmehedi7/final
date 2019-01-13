import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import Download from "./Download/Dow";
import Works from "./Works/works";
import Card from "./Card/Card";
import GettingStarted from "./GettingStarted/GettingStarted";
import Footer from './Footer/Footer'

class App extends Component {
  render() {
    return (
      <div >
        <Nav />
        <Download />
        <h1><br/></h1>
        <Works />
        <br />
        <Card />
        <br />
        <GettingStarted />
        <br />
        <br />
        <Footer/>
      </div>
    );
  }
}

export default App;

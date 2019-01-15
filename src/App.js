import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav/Nav";
import Download from "./Download/Dow";
import Works from "./Works/works";
import Card from "./Card/Card";
import GettingStarted from "./GettingStarted/GettingStarted";
import Footer from "./Footer/Footer";
import CardDot from "./CardDot/CardDot";
import Form from "./form/Form";

var bg = {
  background: "#FFFFFF"
};
class App extends Component {
  render() {
    return (
      <div style={bg}>
        <Nav />
        <Download />
        <CardDot />
        {/* <Works /> */}
        <Card />
        <br />
        <GettingStarted />
        <br />
        <Form />
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;

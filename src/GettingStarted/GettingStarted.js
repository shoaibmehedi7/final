import React, { Component } from "react";

import Steps from "./steps.jpg";

var img = {
  width: "100%",
  height: "auto"
};

class GettingStarted extends Component {
  render() {
    return (
      <div className="text-center text-success">
        <h1>Getting started with Rokkhi</h1>
        <br />
        <img src={Steps} alt="Smiley face" style={img} />
      </div>
    );
  }
}

export default GettingStarted;

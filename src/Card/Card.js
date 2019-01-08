import React, { Component } from "react";
import SingleCard from "./SingleCard";
export class Card extends Component {
  render() {
    return (
      <div className="App text-warning">
        <br />
        <h1>Rokkhi for Everyone</h1>
        <br />
        <div class="row text-center">
          <SingleCard />
          <SingleCard />
          <SingleCard />
        </div>
      </div>
    );
  }
}

export default Card;

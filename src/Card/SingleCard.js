import React, { Component } from "react";
import "./SingleCard.css";

export class SingleCard extends Component {
  render() {
    var bg = {
      background: this.props.background
    };

    return (
      <div class="card" style={bg}>
        <div class="card-footer text-center">
          <small class="text-white">
            <h5 class="card-title">{this.props.title}</h5>
          </small>
        </div>
        <img class="card-img-top" src={this.props.link} alt="Card image cap" />
        <div class="card-body">
          {/* <h5 class="card-title">{this.props.title}</h5> */}
          <p class="card-text">{this.props.details}</p>
        </div>
        {/* <div class="card-footer text-center">
          <small class="text-white">Demo Footer</small>
        </div> */}
      </div>
    );
  }
}

export default SingleCard;

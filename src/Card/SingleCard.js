import React, { Component } from "react";



export class SingleCard extends Component {
  render() {
    var bg = {
      background: this.props.background,
    };
    return (
      <div class="card" style={bg}>
        <img class="card-img-top" src={this.props.link} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{this.props.title}Card title</h5>
          <p class="card-text">{this.props.details}</p>
        </div>
        <div class="card-footer text-center">
          <small class="text-white">Demo Footer</small>
        </div>
      </div>
    );
  }
}

export default SingleCard;

import React from "react";
import "./workdetails.css";
class Workdetails extends React.Component {
  render() {
    let abc='./'+this.props.imagePath.toLowerCase()+'.jpg';
    let output = require("./one.jpg");
    output = (
      <div className="row">
        <div className="work-details col-sm">
          <p className="h1 text-muted  text-center">
            {this.props.details} This is Fixed This is Fixed This is Fixed This
            is Fixed This is Fixed
          </p>
        </div>
        <div className="work-img col-sm">
          {/* <h1>{this.props.imagePath}</h1> */}
          <img src={this.props.imagePath} alt={this.props.imagePath} />
        </div>
      </div>
    );

    return output;
  }
}

export default Workdetails;

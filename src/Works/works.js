import React from "react";
import "./works.css";
import Workdetails from "./workdetails";
import One from "./one.jpg";
import Two from "./two.jpg";
import Three from "./three.jpg";
import Four from "./four.jpg";

var divStyle = {
  background: "lightblue",
  color: "white"
};

class Works extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descrioption: "First",
      images: One
    };
  }

  first() {
    this.setState({
      ...this.state,
      descrioption: "First",
      images: One
    });
  }

  second() {
    this.setState({
      ...this.state,
      descrioption: "Second.",
      images: Two
    });
  }

  third() {
    this.setState({
      ...this.state,
      descrioption: "Third.",
      images: Three
    });
  }

  fourth() {
    this.setState({
      ...this.state,
      descrioption: "Fourth.",
      images: Four
    });
  }

  render() {
    return (
      <div className="container">
        <div className="form-group row" style={divStyle}>
          <div className="col-md-1 text-center justify-content-center align-self-center">
            <div className="pt-4">
              <button
                type="button"
                className="btn-primary btn-lg"
                onMouseOver={() => this.first()}
                onClick={() => this.first()}
              >
                <i class="fa fa-home" />
              </button>
            </div>

            <div className="pt-4">
              <button
                type="button"
                className="btn-primary btn-lg"
                onMouseOver={() => this.second()}
                onClick={() => this.second()}
              >
                <i class="fa fa-bars" />
              </button>
            </div>

            <div className="pt-4">
              <button
                type="button"
                className="btn-primary btn-lg"
                onMouseOver={() => this.third()}
                onClick={() => this.third()}
              >
                <i class="fa fa-trash" />
              </button>
            </div>

            <div className="pt-4">
              <button
                type="button"
                className="btn-primary btn-lg" //   className="btn btn-success"
                onMouseOver={() => this.fourth()}
                onClick={() => this.fourth()}
              >
                <i class="fa fa-folder" />
              </button>
            </div>
          </div>

          <div className="col-md-11">
            <Workdetails
              details={this.state.descrioption}
              imagePath={this.state.images}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Works;

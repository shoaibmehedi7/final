import React from "react";
import "./works.css";
import Workdetails from "./workdetails";

var divStyle = {
  background: "lightblue",

  color: "white"
};

class Works extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descrioption: "First"
    };
  }

  first() {
    this.setState({
      ...this.state,
      descrioption: "First."
    });
  }

  second() {
    this.setState({
      ...this.state,
      descrioption: "Second."
    });
  }

  third() {
    this.setState({
      ...this.state,
      descrioption: "Third."
    });
  }

  fourth() {
    this.setState({
      ...this.state,
      descrioption: "Fourth."
    });
  }

  render() {
    return (
      <div className="form-group row" style={divStyle}>
        <div className="col-md-4 ">
          <div className="pt-4">
            <button
              type="button"
              className="btn-primary btn-lg"
              onMouseOver={() => this.first()}
              onClick={() => this.first()}
            >
              <i class="fa fa-home">e-Intercom</i>
            </button>
          </div>

          <div className="pt-4">
            <button
              type="button"
              className="btn-primary btn-lg"
              onMouseOver={() => this.second()}
              onClick={() => this.second()}
            >
              <i class="fa fa-bars">Visitor Management</i>
            </button>
          </div>

          <div className="pt-4">
            <button
              type="button"
              className="btn-primary btn-lg"
              onMouseOver={() => this.third()}
              onClick={() => this.third()}
            >
              <i class="fa fa-trash">Child Security</i>
            </button>
          </div>

          <div className="pt-4">
            <button
              type="button"
              className="btn-primary btn-lg"
              //   className="btn btn-success"
              onMouseOver={() => this.fourth()}
              onClick={() => this.fourth()}
            >
              <i class="fa fa-folder">Multi Property Management</i>
            </button>
          </div>
        </div>

        <div className="col-md-8">
          <Workdetails details={this.state.descrioption} />
        </div>
      </div>
    );
  }
}

export default Works;

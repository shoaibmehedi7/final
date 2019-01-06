import React, { Component } from "react";
import AndroidImg from "./android.png";
import AppleImg from "./apple.png";
import Demo from "./demo.png";

export class Dow extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <h1>Get the best of Tonic in one App!</h1>
              <p>
                Have a health need? Tonic brings you 21st century care to your
                fingertips.
              </p>

              <p>
                <i class="far fa-dot-circle">Basic Features</i>
              </p>
              <p>
                <i class="far fa-dot-circle">Our Clients</i>
              </p>
              <p>
                <i class="far fa-dot-circle">Services</i>
              </p>
              <div className="row">
                <div class="col-sm">
                  <img
                    src={AndroidImg}
                    alt="Italian Trulli"
                    height="60"
                    width="200"
                  />
                </div>
                <div class="col-sm">
                  <img
                    src={AppleImg}
                    alt="Italian Trulli"
                    height="60"
                    width="200"
                  />
                </div>
              </div>
            </div>
            <div class="col-sm">
              <img src={Demo} alt="Italian Trulli" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dow;

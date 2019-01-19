import React, { Component } from "react";
import AndroidImg from "./android.png";
import AppleImg from "./apple.png";
import Demo from "./demo.png";
import "./Dow.css";

export class Dow extends Component {
  render() {
    return <div>
        <div class="row ml-5 pl-5 pt-3">
          <div class="home-content ml-5 pl-5 pt-5 tonic-app-section">
            <div class="pt-5 pl-5 w-100">
              <h2 class="font-galano-md pt-1 pl-3">
                Get the best of Tonic in one App!
              </h2>
              <p class="font-light-grey m-t-md m-b-md" />
              <p class="pl-3">
                Have a health need? Tonic brings you 21st century care to
                your fingertips.
              </p>
              <p />
              <ul class="app-benefits">
                <li>
                  <span>Save money</span>
                </li>
                <li>
                  <span>Save time</span>
                </li>
                <li>
                  <span>Get access to the best</span>
                </li>
              </ul>
              <p />
              <p />
              <a href="https://play.google.com/store/apps/details?id=com.telenorhealth.tonicapp">
                <img class="im2" src={AndroidImg} alt="" />
              </a>
              <a href="https://itunes.apple.com/gb/app/tonic-telenor-health-as/id1287373313">
                <img src={AppleImg} alt="" />
              </a>
            </div>
          </div>
          <div class="col-sm">
          <img src={Demo} class="mx-auto d-block" alt="Italian Trulli" />
          </div>
        </div>
      </div>;
  }
}

export default Dow;

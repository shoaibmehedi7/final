import React, { Component } from "react";
import "./Footer.css";

export class Footer extends Component {
  render() {
    return <div class="footer">
        <div class="row text-center">
          <div class="col mt-4">
          <h5 class="font-weight-bold text-uppercase mb-4">
            Company Details
                </h5>

          <ul class="list-unstyled">
            <li>
              <p>
                <i class="fa fa-home mr-3" /> New York, NY 10012, US
                    </p>
            </li>
            <li>
              <p>
                <i class="fa fa-envelope mr-3" /> info@example.com
                    </p>
            </li>
            <li>
              <p>
                <i class="fa fa-phone mr-3" /> + 01 234 567 88
                    </p>
            </li>
            <li>
              <p>
                <i class="fa fa-print mr-3" /> + 01 234 567 89
                    </p>
            </li>
          </ul>
          </div>
        <div class="col mt-4">
            <h1>Support</h1>
            <ul>
              <li>Contact us</li>
              <li>Web chat</li>
              <li>Open ticket</li>
            </ul>
          </div>
        <div class="col social mt-4">
            <h1>Social</h1>
            <ul>
              <li>S</li>
              <li>A</li>
              <li>C</li>
            </ul>
          </div>
          <div class="clearfix" />
        </div>
      </div>;
  }
}

export default Footer;

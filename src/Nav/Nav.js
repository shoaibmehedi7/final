import React, { Component } from "react";
import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <StickyHeader
            // This is the sticky part of the header.
            header={
              <div className="Header_root">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <a class="navbar-brand" href="#">
                    Rokkhi
                  </a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon" />
                  </button>

                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="#">
                          Home <span class="sr-only">(current)</span>
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Features
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Why Rokkhi
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Contact
                        </a>
                      </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                      <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                          <a class="nav-link btn-warning" href="#">
                            Callback
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            <i class="fas fa-phone"> 01686038953</i>
                          </a>
                        </li>
                      </ul>
                    </form>
                  </div>
                </nav>
              </div>
            }
          />
          <h1>
            <br /> <br />
          </h1>
        </div>
      </div>
    );
  }
}

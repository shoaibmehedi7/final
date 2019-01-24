import React, { Component } from "react";
import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";
import "./Nav.css";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <StickyHeader
            header={
              <div className="Header_root">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <a class="navbar-brand p-3 mt-3" href="#">
                    Rokkhi
                  </a>
                  {/* <a href="tel:01686038953" id="callforphone">
                    <i class="fa fa-phone"> </i>
                  </a> */}
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
                          <a
                            class="nav-link btn-danger text-white rounded"
                            href="#"
                          >
                            Callback
                          </a>
                        </li>
                        <li class="nav-item">
                          <a href="tel:01686038953" class="nav-link">
                            <i class="fa fa-phone"> 01686038953</i>
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

import React, { Component } from "react";
import "./Footer.css";
import Map from "../Map/map";

export class Footer extends Component {
  render() {
    return (
      <div class="footer">
        <footer class="page-footer font-small cyan darken-3 pt-4 white-text">
          <div class="container text-center text-md-left">
            <div class="row">
              <div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
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
                </ul>
              </div>

              <hr class="clearfix w-100 d-md-none" />

              <div class="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
                <h5 class="font-weight-bold text-uppercase mb-4">Logo</h5>
              </div>

              <hr class="clearfix w-100 d-md-none" />

              <div class="social col-md-3 col-lg-3 text-center mx-auto my-4">
                <h5 class="font-weight-bold text-uppercase mb-4">Follow Us</h5>

                <a type="button" class="btn-floating btn-fb" href="jjj">
                  <i class="fa fa-facebook" />
                </a>

                <a type="button" class="btn-floating btn-tw" href="jjj">
                  <i class="fa fa-twitter" />
                </a>

                <a type="button" class="btn-floating btn-gplus">
                  <i class="fa fa-instagram" />
                </a>
                <form>
                  <div class="input-group mb-3 inputgroup">
                    <input
                      type="text"
                      class="form-control email"
                      placeholder="Email"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append submit">
                      <span
                        type="button"
                        class="input-group-text"
                        id="basic-addon2"
                      >
                        Subscribe
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div class="footer-copyright text-center py-3">
            © 2018 Copyright:
            <a href="https://Rokkhi.com/"> Rokkhi.com</a>
          </div>
        </footer>
        <div class="clearfix" />
      </div>
    );
  }
}

export default Footer;

import React, { Component } from "react";
import "./Scroll.css";
import OwlCarousel from "react-owl-carousel2";

import "../../node_modules/react-owl-carousel2/src/owl.carousel.css";
import "../../node_modules/react-owl-carousel2/src/owl.theme.green.css";
import "../../node_modules/react-owl-carousel2/lib/styles.css";
import one from "./1.jpg";
import two from "./2.jpg";
import three from "./3.jpg";
const options = {
  items: 3,
  nav: true,
  rewind: true,
  autoplay: true,
  navText: ["prev", "next"],
  loop: true,
  center: true,
  dots: true,
  dotsEach: true,
  dotData: true
};
const events = {
  // onDragged: function(event) {},
  // onChanged: function(event) {...}
};
export default class Scroll extends Component {
  render() {
    // id = "test"
    return <div id="test">
        <div className="owl">
          <OwlCarousel ref="car" options={options} events={events}>
            <div>
              <img src={one} alt="The Last of us" />
            </div>
            <div>
              <img src={two} alt="The Last of us" />
            </div>
            <div>
              <img src={three} alt="The Last of us" />
            </div>
            <div>
              <img src={one} alt="The Last of us" />
            </div>
            <div>
              <img src={two} alt="The Last of us" />
            </div>
            <div>
              <img src={three} alt="The Last of us" />
            </div>
          </OwlCarousel>
        </div>
      </div>
  }
}

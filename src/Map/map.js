import React, { Component } from "react";
import "./map.css";
// function scrollBottom() {
//   window.scrollTo(0, document.body.scrollHeight);
// }
import $ from "jquery";
export class Map extends Component {
  click() {
    $("#footer-map-collapse").toggle();
  }

  render() {
    let option = null;

    option = (
      <div>
        <div className="map" />
      </div>
    );

    return (
      <div class="map">
        <a
          role="button"
          class="footer-action-btn"
          onClick={() => this.click()}
          href="#footer-map-collapse"
        >
          <i class="po po-map-marker" />
          Find us on Map
        </a>

        <div id="footer-map-collapse" class="footer-map">
          <iframe
            class="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.6806419561717!2d90.40446522710164!3d23.792891701517352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7ca195c707e833ae!2sAccounting+Software+BD!5e0!3m2!1sen!2sbd!4v1547636840465"
            width="100%"
            height="500"
            frameborder="0"
            allowfullscreen
          />
        </div>
      </div>
    );
  }
}

export default Map;

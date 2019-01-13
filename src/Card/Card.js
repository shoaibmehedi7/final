import React, { Component } from "react";
import SingleCard from "./SingleCard";
var bg = {
  background: "#FFFFFF"
};

export class Card extends Component {
  render() {
    return <div className="container" style={bg}>
        <div className="container text-muted text-center">
          <br />
        <h1>Rokkhi for Everyone</h1>
          <br />
          <div class="card-deck text-light">
            <SingleCard details="This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer." background="#23B6C9" link="//www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/storage.png" title="This is first section" />
            <SingleCard details="This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer." link="//www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/database.png" title="This is second section" background="#EBB206" />
            <SingleCard background="#AB60B8" details="This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer." link="//www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/auth.png" title="This is third section" background="#AB60B8" />
          </div>
        </div>
        <br />
      </div>;
  }
}

export default Card;

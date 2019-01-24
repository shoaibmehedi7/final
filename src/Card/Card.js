import React, { Component } from "react";
import SingleCard from "./SingleCard";

var BackgroundColorForCard = ["#23B6C9", "#EBB206", "#AB60B8"];

var TitleForCard = [
  "This is first section",
  "This is second section",
  "This is third section"
];

var LinkForCard = [
  "//www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/storage.png",
  "//www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/database.png",
  "//www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/auth.png"
];

var DetailsForCard = [
  "This is a wider card with supporting text below as a naturallead -in to additional content.This content is a little bit longer.",
  "This is a wider card with supporting text below as a naturallead -in to additional content.This content is a little bit longer.",
  "This is a wider card with supporting text below as a naturallead -in to additional content.This content is a little bit longer."
];

var bg = {
  background: "#FFFFFF"
};

export class Card extends Component {
  funcForSingleCard() {
    let data = [];
    for (let i = 0; i < TitleForCard.length; i++) {
      data.push(
        <SingleCard
          details={DetailsForCard[i]}
          background={BackgroundColorForCard[i]}
          link={LinkForCard[i]}
          title={TitleForCard[i]}
        />
      );
    }
    return data;
  }

  render() {
    return (
      <div style={bg}>
        <div className="container">
          <div className="container text-muted text-center">
            <br />
            <h1>Rokkhi for Everyone</h1>
            <br />
            <div class="card-deck text-light">
              {this.funcForSingleCard()}
              {/* <SingleCard
                details="This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer."
                background="#23B6C9"
                link="//www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/storage.png"
                title="This is first section"
              />
              <SingleCard
                details="This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer."
                link="//www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/database.png"
                title="This is second section"
                background="#EBB206"
              />
              <SingleCard
                background="#AB60B8"
                details="This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer."
                link="//www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/auth.png"
                title="This is third section"
                background="#AB60B8"
              /> */}
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default Card;

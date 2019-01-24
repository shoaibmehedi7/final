import React, { Component } from "react";
import "./CardDot.css";
import SingleCard from "../Card/SingleCard";
import ChildPic from "./CHILD-SECURITY.png";
import IntercomPic from "./E-INTERCIM.png";
import VisitorlistPic from "./VISITORS-LIST.png";
import VMPic from "./VISITORS-MANAGMENT.png";

var imageId = [ChildPic, IntercomPic, VisitorlistPic, VMPic];

var BackgroundColorForCard = ["#23B6C9", "#EBB206", "#AB60B8", "#23B6C9"];

var TitleForCard = [
  "What is Lorem Ipsum?",
  "Why do we use it?",
  "Where does it come from?",
  "Where can I get some?"
];

var LinkForCard = [
  "//www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/storage.png",
  "//www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/database.png",
  "//www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/auth.png",
  "//www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/storage.png"
];

var DetailsForCard = [
  "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's when an unknown printer took a galley of type",
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
  "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
];

var bg = {
  // background: "#FFFFFF",
  // color: "lightblue"
};
export class CardDot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: BackgroundColorForCard[0],
      title: TitleForCard[0],
      link: LinkForCard[0],
      details: DetailsForCard[0]
    };
  }

  func(id) {
    this.setState({
      ...this.state,
      background: BackgroundColorForCard[id],
      title: TitleForCard[id],
      link: LinkForCard[id],
      details: DetailsForCard[id]
    });
  }

  LogoImage() {
    let logo = [];
    for (let i = 0; i < imageId.length; i++) {
      logo.push(
        <div>
          <img
            id="logo"
            src={imageId[i]}
            onMouseOver={() => this.func(i)}
            onClick={() => this.func(i)}
          />
          <br />
        </div>
      );
    }

    return logo;
  }

  render() {
    return (
      <div style={bg}>
        <div className="container text-center">
          <br />
          <h2>Features</h2>
          <br />
          <div className="form-group row">
            <div className="col-md-1" />
            <div className="col-md-3 justify-content-center align-self-center">
              {this.LogoImage()}
            </div>
            {/* <div className="col-md-2" /> */}
            <div className="col-md-7">
              <SingleCard
                background={this.state.background}
                details={this.state.details}
                link={this.state.link}
                title={this.state.title}
              />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardDot;

import React, { Component } from "react";
import "./CardDot.css";
import SingleCard from "../Card/SingleCard";
var bg = {
  background: "orange",
  color: "white"
};
export class CardDot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "#23B6C9",
      title: "What is Lorem Ipsum?",
      link:
        "//www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/storage.png",
      details:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's when an unknown printer took a galley of type"
    };
  }

  first() {
    this.setState({
      ...this.state,
      background: "#23B6C9",
      title: "What is Lorem Ipsum?",
      link:
        "//www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/storage.png",
      details:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's when an unknown printer took a galley of type"
    });
  }

  second() {
    this.setState({
      ...this.state,
      background: "#EBB206",
      title: "Why do we use it?",
      link:
        "//www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/database.png",
      details:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
    });
  }

  third() {
    this.setState({
      ...this.state,
      background: "#AB60B8",
      title: "Where does it come from?",
      link:
        "//www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/auth.png",
      details:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
    });
  }

  fourth() {
    this.setState({
      ...this.state,
      background: "#23B6C9",
      title: "Where can I get some?",
      link:
        "//www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/storage.png",
      details:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour"
    });
  }
  render() {
    return <div style={bg}>
        <div className="container text-center">
          <br />
          <h1>Changeable CardView</h1>
          <br />
          <div className="form-group row">
            <div className="col-md-1" />
            <div className="col-md-1 justify-content-center align-self-center">
              <span class="dot dotOne" onMouseOver={() => this.first()} onClick={() => this.first()} />
              <span class="dot dotTwo" onMouseOver={() => this.second()} onClick={() => this.second()} />
              <span class="dot dotThree" onMouseOver={() => this.third()} onClick={() => this.third()} />
              <span class="dot dotFour" onMouseOver={() => this.fourth()} onClick={() => this.fourth()} />
            </div>
            <div className="col-md-2" />
            <div className="col-md-7">
              <SingleCard background={this.state.background} details={this.state.details} link={this.state.link} title={this.state.title} />
              <br />
            </div>
          </div>
        </div>
      </div>;
  }
}

export default CardDot;

import React, { Component } from 'react'

export class SingleCard extends Component {
  render() {
    return (
        <div class="card col-sm">
          <img src="/w3images/team2.jpg" alt="John"/>
          <h1>John Doe</h1>
          <p class="title">CEO Founder, Example</p>
          <p>Harvard University</p>
          <div>
            <a href="#">
              <i class="fa fa-dribbble" />
            </a>
            <a href="#">
              <i class="fa fa-twitter" />
            </a>
            <a href="#">
              <i class="fa fa-linkedin" />
            </a>
            <a href="#">
              <i class="fa fa-facebook" />
            </a>
          </div>
          <p>
            <button>Contact</button>
          </p>
        </div>
    )
  }
}

export default SingleCard

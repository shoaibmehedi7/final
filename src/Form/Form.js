import React, { Component } from 'react'
import './Form.css'
export class Form extends Component {
  render() {
    return (
      <div>
        <div className="container text-center">
          <h2>Why are you waiting?</h2>
          <h4>Fill the form to hear from us.</h4>
          <form>
            <input class="form-control-lg" type="text" name="fname" placeholder="Name" />
            <input class="form-control-lg" type="text" name="fname" placeholder="Mobile No" /><br />
            <input class="form-control-lg" type="text" name="fname" placeholder="Address" />
            <br />
            <input class="form-control-lg" type="submit" value="Request a call" />
          </form>
        </div>
      </div>
    )
  }
}

export default Form;

import React, { Component } from 'react'
import './Form.css'
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

var config = {
  apiKey: "AIzaSyAjt_ff90T_Ch92pGg6g_sAtJkakCgI5WA",
  authDomain: "nsuslideshare.firebaseapp.com",
  projectId: "nsuslideshare"
};

firebase.initializeApp(config);
var db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true
});
export class Formm extends Component {
         constructor(props) {
           super(props);
           this.state = { name: "", phone: "", address: "" };
         }

         setData(n, p, a) {
           db.collection("users")
             .doc(p)
             .set({ Name: n, Phone: p, Address: a, Date: "Date" })
             .then(function() {
               console.log(firebase.app.length);
               // if (!firebase.apps.length) {
               //   firebase.initializeApp({});
               // }
               // window.location.reload();
             })
             .catch(function(error) {
               console.error("Error adding document: ", error);
             });
         }

         nameChange = event => {
           this.setState({ name: event.target.value });
           console.log(this.state.name);
         };

         phoneChange = event => {
           this.setState({ phone: event.target.value });
         };

         addressChange = event => {
           this.setState({ address: event.target.value });
         };

         onSubmit = event => {
           event.preventDefault();
           console.log(this.state.name);
           console.log(this.state.phone);
           console.log(this.state.address);
           this.setData(this.state.name, this.state.phone, this.state.address);
           this.setState({ name: "", phone: "", address: "" });
         };
         render() {
           return <div className="App">
               <form onSubmit={this.onSubmit}>
                 <input className="form-control-lg" type="text" name="fname" placeholder="Name" value={this.state.name} onChange={this.nameChange} />
                 <input className="form-control-lg" type="text" name="fname" placeholder="Mobile No" value={this.state.phone} onChange={this.phoneChange} />
                 <br />
                 <input className="form-control-lg" type="text" name="fname" placeholder="Address" value={this.state.address} onChange={this.addressChange} />
                 <br />
                 <input className="form-control-lg" type="submit" value="Submit" />
               </form>
             </div>;
         }
       }
export default Formm

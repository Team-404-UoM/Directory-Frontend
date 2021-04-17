import React, { Component } from 'react';
import boxicons from 'boxicons';
import './Notification.css';
import {Toast} from 'react-bootstrap';
import axios from 'axios';
import firebase from "firebase/app";
import "firebase/auth";
import moment from "moment";

class Notification extends Component{
  constructor(props) {
    super(props);
    this.state = {
      show:false,
      padding: { paddingBottom: "0px" },
      notification:[],
      firebaseid:"",
      test:"gdsafsdgksgkjhcxbjbvxcb jvbgf"
    };
    this.handleSidebar = this.handleSidebar.bind(this);
   
  }
 componentDidMount(){
this.getnotification();
console.log(this.state.notification.UserId);
this.firebasefunction(); 
 }
componentDidUpdate(){
  this.getnotification();
 
}
firebasefunction(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("done");
      console.log(user.uid);
      this.setState({firebaseid:user.uid})
    } else {
      this.setState({userid:""})
      // No user is signed in.
    }
  }.bind(this))};


  handleSidebar() {
    if (this.state.show==false){
    this.setState({
      show: true,
      padding: { paddingBottom: "400px" },
    })}else{
      this.setState({
        show: false,
        padding: { paddingBottom: "0px" },
      })
    }
    console.log(this.state.show);
    console.log(this.state.padding);
  }

getnotification(){
  const userdetails={
    userid:"1235"
  }
  axios.get('http://localhost:4000/notification/?id='+this.state.firebaseid)
  .then((res)=>{ this.setState((cur) => ({ ...cur, notification: res.data}));

  })
}
  
render(){
    return(<div className='notification-icon'>
      <div className='icon'>
      <box-icon type='solid' name='bell' color='#ffffff' onClick={this.handleSidebar}></box-icon>
      </div>

      <div className={"downbar"} 
      style={this.state.padding}>
        {this.state.notification.map((message)=>
  
    <div style={{color:'white'}}>
    
   
     <p>{message.NotificationType}{moment(message.Date).fromNow()}</p>
     <p>{message.Title}</p>
    <p>{message.Message}</p> 
    <div className='bar'/>
  
    </div>
    )}
  </div>

    </div>

    )
}
} 
export default Notification;







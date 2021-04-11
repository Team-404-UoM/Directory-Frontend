import React, { Component } from 'react';
import boxicons from 'boxicons';
import './Notification.css';
import {Toast} from 'react-bootstrap';

class Notification extends Component{
  constructor(props) {
    super(props);
    this.state = {
      show:false,
      padding: { paddingBottom: "0px" },
    };
    this.handleSidebar = this.handleSidebar.bind(this);
   
  }
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

  
render(){
    return(<div className='notification-icon'>
      <div className='icon'>
      <box-icon type='solid' name='bell' color='#ffffff' onClick={this.handleSidebar}></box-icon>
      </div>

      <div className={"downbar"} 
      style={this.state.padding}>
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Bootstrap</strong>
        <small>just now</small>
      </Toast.Header>
      <Toast.Body>See? Just like this.</Toast.Body>
    </Toast>
  </div>

    </div>

    )
}
} 
export default Notification;







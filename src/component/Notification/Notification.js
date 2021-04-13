import React, { Component } from 'react';
import boxicons from 'boxicons';
import './Notification.css';
import {Toast} from 'react-bootstrap';
import axios from 'axios';


class Notification extends Component{
  constructor(props) {
    super(props);
    this.state = {
      show:false,
      padding: { paddingBottom: "0px" },
      notification:[]
    };
    this.handleSidebar = this.handleSidebar.bind(this);
   
  }
 componentDidMount(){
this.getnotification();
console.log(this.state.notification.UserId);
 }
componentDidUpdate(){
  this.getnotification();
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

getnotification(){
  const userdetails={
    userid:"1235"
  }
  axios.get('http://localhost:4000/notification/?id='+1235)
  .then((res)=>{ this.setState((cur) => ({ ...cur, notification: res.data.reverse() }));

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
    <h5>{message.UserId}</h5>
    <hr style={{height:'5px',color:'white',backgroundColor:'white'}}/>
    </div>
    )}
  </div>

    </div>

    )
}
} 
export default Notification;







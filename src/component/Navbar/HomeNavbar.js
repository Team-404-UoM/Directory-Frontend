import React,{Component} from 'react';
import {Navbar,Nav, NavDropdown,DropdownButton,Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from './Team404.jpg';
import './Nav.css'; 
import boxicons from 'boxicons';
import history from '../../config/history';
import {Usercontext,user} from '../../context/context';
import Notification from '../Notification/Notification';
import firebase from "firebase/app";
import "firebase/auth";

/* const logout = () => {
  firebase.auth().signOut().then(() => {
    console.log("Logout Successfully");
    this.setState({userid:null})
    console.log(this.state.userid);
  }).catch((error) => {
    // An error happened.
  });
  
  history.push('/signin');
} */




class HomeNavbar extends Component{
  static contextType=Usercontext;
  constructor(props) {
    super(props);
    this.state = {
islogged:false,
username:"test",
userid:null,
details:[]
    }
    this.logout= this.logout.bind(this);
  }
 
componentDidMount(){
  this.firebasefunction(); 
  this.details();
}





 logout(){
  firebase.auth().signOut().then(() => {
    this.setState({details:""})
    localStorage.clear();
    console.log("Logout Successfully");
    console.log(this.state.userid);
    console.log(this.state.details.firstName);
   
  }).catch((error) => {
    console.log(error);
  });
  
  history.push('/signin');
} 


firebasefunction(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("done");
      console.log(user.uid);
      this.setState({userid:true})
      console.log(this.state.userid);
    } else {
      this.setState({userid:false})
      // No user is signed in.
    }
  }.bind(this));
  
}


details(){
  this.setState({
    details:JSON.parse(localStorage.getItem('userdetails'))
  })
}
  
    render(){
      const value=JSON.parse(localStorage.getItem('userdetails'));
       return(<div>
 {this.state.userid==true&&     
<Navbar bg="red" variant="dark" className="navigation">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="50"
        height="50"
        className="d-inline-block align-top"
      />{' '}
    
    </Navbar.Brand>

    <Nav className="mr-auto navigations">
      <Nav.Link as={Link} to='../User/Directory'>Directory</Nav.Link>
      <Nav.Link as={Link} to="../AboutUs">About</Nav.Link>
      <Nav.Link as={Link} to="../Events" >Event</Nav.Link>
      <Nav.Link as={Link} to="../Gallery">Gallery</Nav.Link>
      <Nav.Link as={Link} to="../Blog" >Blog</Nav.Link>
      <Nav.Link as={Link} to="../Forum" >Forum</Nav.Link>
      <Nav.Link as={Link} to="../Test" >Test</Nav.Link>
      <Nav.Link as={Link} to="../Settings" >Settings</Nav.Link>
      
      
    </Nav> 
    <Notification/>
<div style={{paddingLeft:'5px'}}>
   <NavDropdown  title={this.state.details.firstName+" "+" "+ this.state.details.lastName}>
     <NavDropdown.Item onClick={this.logout}>Logout</NavDropdown.Item>
     <NavDropdown.Item as={Link} to="../ProfileEdit">Profile Edit</NavDropdown.Item>
     <NavDropdown.Item as={Link} to="../Profilemode">Profile</NavDropdown.Item>
   </NavDropdown>
   </div>
  </Navbar>}

      
  </div>
        )
    }
}

export default HomeNavbar;

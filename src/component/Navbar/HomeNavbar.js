import React,{Component} from 'react';
import {Navbar,Nav, NavDropdown,DropdownButton,Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from './Team404.jpg';
import './Nav.css'; 
import boxicons from 'boxicons';
import history from '../../config/history';
import {Usercontext,user} from '../../context/context';
import Notification from '../Notification/Notification';

const logout = () => {

  history.push('/signin');
}


class HomeNavbar extends Component{
  static contextType=Usercontext;
  constructor(props) {
    super(props);
    this.state = {
islogged:"",
    }
    
  }
  componentDidMount() {
    this.getusername();
   
  }


  getusername(){
    this.setState({islogged:this.context.loggedInUser.username})
  }
  
    render(){
      const islogged=this.context.loggedInUser.username? true:false;
      console.log(islogged);
      console.log(this.context.loggedInUser.username);


        return(<div>
          
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
    

   <NavDropdown title="User Name">
     <NavDropdown.Item onClick={() => { logout() }}>Logout</NavDropdown.Item>
     <NavDropdown.Item as={Link} to="../ProfileEdit">Profile Edit</NavDropdown.Item>
     <NavDropdown.Item as={Link} to="../Profilemode">Profile</NavDropdown.Item>
   </NavDropdown>

  </Navbar>
  
      
  </div>
        )
    }
}

export default HomeNavbar;

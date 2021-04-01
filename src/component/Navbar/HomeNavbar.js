import React,{Component} from 'react';
import {Navbar,Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from './Team404.jpg';
import './Nav.css'; 
import boxicons from 'boxicons';
import history from '../../config/history';

const logout = () => {

  history.push('/signin');
}


class HomeNavbar extends Component{
    render(){
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
    <Nav><box-icon className="mr-sm-2" name='bell' type="solid" color="white"></box-icon></Nav>
   
   <NavDropdown title="User name">
     <NavDropdown.Item onClick={() => { logout() }}>Logout</NavDropdown.Item>
   </NavDropdown>
  </Navbar>
  

  </div>
        )
    }
}

export default HomeNavbar;

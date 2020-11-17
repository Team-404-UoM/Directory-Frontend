import React,{Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Uom from './uom.png';
import './Nav.css'; 

class HomeNavbar extends Component{
    render(){
        return(<div>
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={Uom}
        width="50"
        height="50"
        className="d-inline-block align-top"
      />{' '}
    
    </Navbar.Brand>
    <Nav className="mr-auto navigations">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link as={Link} to="../AboutUs">About</Nav.Link>
      <Nav.Link as={Link} to="../Events" >Event</Nav.Link>
      <Nav.Link as={Link} to="../Gallery">Gallery</Nav.Link>
      <Nav.Link as={Link} to="../Blog" >Blog</Nav.Link>
      <Nav.Link as={Link} to="../Forum" >Forum</Nav.Link>
      <Nav.Link as={Link} to="../Test" >Test</Nav.Link>
      <Nav.Link as={Link} to="../Settings" >Settings</Nav.Link>
    </Nav>
  </Navbar>

  </div>
        )
    }
}

export default HomeNavbar;

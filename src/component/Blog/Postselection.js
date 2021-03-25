import React,{Component} from 'react';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';


class Postselection extends Component{
    render(){
        return(
<Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link as={Link} to="./BlogEditor">Writer</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link as={Link} to="./Bloguploader">Link</Nav.Link>
  </Nav.Item>
</Nav>
        )}
}
export default Postselection;
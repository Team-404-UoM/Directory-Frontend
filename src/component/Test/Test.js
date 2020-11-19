import React, { Component } from 'react';
import { Card, Container, Row, Col,Form,Button } from 'react-bootstrap';
//students sign up
import './about.css';
//import img5 from "./images/img5.jpg";
//import uni from "./images/uni.png";
//import mission from "./images/mission.jpg";

//import ab from "./images/ab.jpg";

class Test extends Component {
    constructor(props){
		super(props);
		this.state = {
            likes:0,
         updated:false,
			
		}
    }
   


    updatevote=()=> {
      
        if(!this.state.updated) {
          this.setState((prevState, props) => {
            return {
              likes: prevState.likes + 1,
              updated: true,
              //color:'danger'
            };
          });
        } else {
    
          this.setState((prevState, props) => {
            return {
              likes: prevState.likes - 1,
              updated: false,
             // color: 'info'
            };
          });
        }
    }

    render() {
        return (<div className="background">
           <Form>
            <Form.Group controlId="formBasicEmail">
              
              <Form.Control style={{borderStyle:'solid'}} type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
    </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
  </Button>
          </Form>
            
           
            
          
           <button onClick={this.updatevote}>Like</button>
           <p>{this.state.likes}</p>
       <h1>Hello world</h1>



        </div>
        )
    }
}
export default Test;
import React, { Component } from 'react';
//import uni from './uni.png';
import './Login.css';
import { Row, Col, Button, Form, Jumbotron, Container } from 'react-bootstrap';
import { MdMail } from "react-icons/md";


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.onChangeTodoEmail = this.onChangeTodoEmail.bind(this);
    this.onChangeTodoPassword = this.onChangeTodoPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      todo_email: '',
      todo_password: '',


    }
  }
  onChangeTodoEmail(e) {
    this.setState({
      todo_email: e.target.value
    });
  }

  onChangeTodoPassword(e) {
    this.setState({
      todo_password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log('Form submitted:');

    //console.log('TodoEmail: ${this.state.todo_email}');
    ///console.log('TodoPassword: ${this.state.todo_password}');

    this.setState({

      todo_email: '',
      todo_password: '',

    })
  }
  render() {
    return (<div className="backgrnd">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
</style>
      <Container fluid>
        <div className="myform" >
          <div style={{  marginLeft: '40px', marginBottom: '30px' }}>
            <p className='h1'>LogIn</p>
            <Form>
              <Form.Group controlId="formBasicEmail">

                <Form.Control className='textfield' style={{ borderStyle: 'solid', borderWidth: "2px", borderRadius: '10px' }} type="email" placeholder="Username" />

              </Form.Group>

              <Form.Group controlId="formBasicPassword">

                <Form.Control className='textfield' type="password" placeholder="Password" />
              </Form.Group>

              <Button className='signbutton' variant="info" type="submit">
                <strong>Sign In</strong>
              </Button>
            </Form>
            <p style={{marginTop:'5px',color: 'white',fontWeight:'bold'}}>Don't have account yet?<a style={{fontSize:'20px',fontWeight:'bold',color:'white',marginLeft:'5px'}} href='/signUp/selection'>SignUp</a></p>

          </div>
        </div>
      </Container>
    </div>)

  }

}


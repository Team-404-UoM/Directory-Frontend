import React, { Component } from 'react';
//import uni from './uni.png';
import './Login.css';
import { Row, Col, Button, Form, Jumbotron, Container, } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { MdMail } from "react-icons/md";
import { firebaseAuth } from '../../../config/FirebaseConfig';
import history from '../../../config/history';
import {Usercontext,user} from '../../../context/context';
import axios from "axios";


export default class Home extends Component {
  static contextType=Usercontext;
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      errors: {},
      firstname:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      let input = {};

      input["todo_email"] = "";
      input["todo_password"] = "";

      this.setState({ input: input });

      alert('Login Success');
    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;



    if (!input["todo_email"]) {
      isValid = false;
      errors["todo_email"] = "Please enter your email Address.";
    }

    if (typeof input["todo_email"] !== "undefined") {

      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["todo_email"])) {
        isValid = false;
        errors["todo_email"] = "Please enter valid email address.";
      }
    }

    if (!input["todo_password"]) {
      isValid = false;
      errors["todo_password"] = "Please enter your password.";
    }

    if (typeof input["todo_password"] !== "undefined") {
      if (input["todo_password"].length < 6) {
        isValid = false;
        errors["todo_password"] = "Please enter the correct password.";
      }
    }

    this.onChangeTodoEmail = this.onChangeTodoEmail.bind(this);
    this.onChangeTodoPassword = this.onChangeTodoPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      todo_email: '',
      todo_password: '',
    }
  }
  onChangeTodoEmail(e) {
    console.log(e.target.value);
    this.setState({
      todo_email: e.target.value
    });
    console.log(this.state.todo_email);
  }

  onChangeTodoPassword(e) {
    console.log(e.target.value);
    this.setState({
      todo_password: e.target.value
    });
    console.log(this.state.todo_password);
  }

  async onSubmit(e) {

    e.preventDefault();



    //console.log('TodoEmail: ${this.state.todo_email}');
    ///console.log('TodoPassword: ${this.state.todo_password}');
   
    const email = this.state.todo_email;

    const password = this.state.todo_password;
    

    try {
      const signInresponse = await firebaseAuth.signInWithEmailAndPassword(email, password).then((res)=>{
        console.log(res.user.X.X);
        user.loggedInUser={username:res.user.X.X}
        /* this.getuserprofile(res.user.X.X) */
        this.setlocal(res.user.X.X);
        
      })
      
      history.push('/User/Directory');
    } catch (e) {
      console.error(e);
    } 
    

    this.setState({

      todo_email: '',
      todo_password: '',

    })


  }
  getuserprofile(username){
    console.log(username);
    axios.get('http://localhost:4000/user/'+username)
    .then((res)=>user.UserDetails=res.data) 
       
}

setlocal(id){
  localStorage.setItem('firebaseId',id);
  const userid=localStorage.getItem('firebaseId')
  this.getuserprofile(userid)
}

  render() {
    return (<div className="backgrnd">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
</style>
      <Container fluid>
        <div className="myform" >
          <div style={{ marginLeft: '40px', marginBottom: '30px' }}>
            <p className='h1'>LogIn</p>
            <Form>
              <Form.Group controlId="formBasicEmail">

                <Form.Control className='textfield' onChange={(e) => this.onChangeTodoEmail(e)} style={{ borderStyle: 'solid', borderWidth: "2px", borderRadius: '10px' }} type="email" placeholder="Username" />

              </Form.Group>

              <Form.Group controlId="formBasicPassword">

                <Form.Control className='textfield' type="password" placeholder="Password" onChange={(e) => this.onChangeTodoPassword(e)} />
              </Form.Group>

              <Button className='signbutton' variant="info" onClick={(e) => this.onSubmit(e)}>
                <strong>Sign In</strong>
              </Button>
            </Form>
            <p style={{ marginTop: '5px', color: 'white', fontWeight: 'bold' }}>Don't have account yet?<a style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', marginLeft: '5px' }} href='/signUp/selection'>SignUp</a></p>
            <div className="mt-3">
              <Link to="/forget" style={{ color: "black" }}>
                <b className="text-secondary">Forget Password</b>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>)

  }

}


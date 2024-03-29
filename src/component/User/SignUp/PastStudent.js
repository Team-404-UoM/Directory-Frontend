import React, { Component } from 'react';
import "./bootstrap.min.css"
import axios from 'axios'
import './PastStudent.css';
import student from "./student.png";
import { Row, Col, Button, Jumbotron, InputGroup, Container } from 'react-bootstrap';
import Questionform from './Questionform';
import { firebaseAuth } from '../../../config/FirebaseConfig';
import history from '../../../config/history';





const initialState = {
    firstName: '',
    lastName: '',
    faculty: '',
    gender: '',
    Batch: '',
    email: '',
    password: '',
    showSignUp: false,
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    batchError: "",
    facultyError: "",
    genderError: "",
    passwordError: "",



}
class create extends Component {
    constructor() {
        super()
        this.state = initialState;
        //  this.changeFirstName = this.changeFirstName.bind(this)
        //  this.changeLastName = this.changeLastName.bind(this)
        //  this.changeFaculty = this.changeFaculty.bind(this)
        //   this.changeGender = this.changeGender.bind(this)
        //  this.changeEmail = this.changeEmail.bind(this)
        //   this.changePassword = this.changePassword.bind(this)
        //   this.onSubmit = this.onSubmit.bind(this)
    }
    changeFirstName(event) {
        this.setState({
            firstName: event.target.value
        })
    }
    changeLastName(event) {
        this.setState({
            lastName: event.target.value
        })
    }

    changeFaculty(event) {
        this.setState({
            faculty: event.target.value
        })
    }
    changeGender(event) {
        this.setState({
            gender: event.target.value
        })
    }

    changeBatch(e) {
        this.setState({
            batch: e.target.value
        })
    }

    changeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    //validating
    validate = () => {
        let firstNameError;
        let lastNameError;
        let emailError;
        let passwordError;
        let facultyError;
        let batchError;
        let genderError;


        if (!this.state.firstNameError) {

            firstNameError = "First name required";
        }
        if (!this.state.lastNameError) {

            lastNameError = "Last name required";
        }
        if (!this.state.passwordError) {

            passwordError = "password required";
        }
        if (!this.state.facultyError  || this.state.facultyError.length == 0) {

            facultyError = "Faculty required";
        }
        if (!this.state.batchtError) {

            batchError = "Batch required";
        }
        if (!this.state.genderError) {

            genderError = "Gender required";
        }
        if (!this.state.email.includes('@')) {
            emailError = 'invalid email';

        }
        if (emailError || firstNameError || lastNameError || passwordError || facultyError || batchError || genderError) {
            this.setState({ emailError, firstNameError, lastNameError, passwordError, facultyError, batchError, genderError });
            return false;
        } else {
            return true;
        }

    };//till here

    async onSubmit(event) {
        event.preventDefault()
        // //newly added email verification
        // await firebaseAuth.currentUser.sendEmailVerification();

        //alert(" Successfully loged to the system");
        // this.setState({ loading: false });
        // //till here

        //huh
        const isValid = this.validate();

        const registered = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            faculty: this.state.faculty,
            gender: this.state.gender,
            email: this.state.email,
            batch: this.state.batch,
            password: this.state.password
        }
        try {
            alert(registered);
            const response = await axios.post('http://localhost:4000/signup', registered, {
                params: {
                    type: "PAST_STUDENT"
                }
            })

            const customeToken = response.data;

            console.log(customeToken);
            if (isValid) {

                const userDeatils = await firebaseAuth.signInWithCustomToken(customeToken);
                history.push("/signin");
                this.setState({
                    firstName: '',
                    lastName: '',
                    faculty: '',
                    gender: '',
                    email: '',
                    password: '',
                    batch: ''
                })
            }
            this.setState(initialState)
        } catch (e) {
            alert(e);
        }

    }

    render() {
        //  this.state.showSignUp 
        const condition = true;
        return condition ? (

            <div className="past">
                <Container fluid>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
                    </style>



                    <center > < img src={student}
                        alt=''
                        width="100"
                        height="100"
                        className="std"
                        border="2px" /> </center>
                    <div className="topic"> <center> <h3> SignUp - Past Student </h3></center > </div>

                    <div style={{ marginLeft: '250px', marginTop: '20px' }}>
                        <Jumbotron className='jumbo'>
                            <form  >
                                <Row>
                                    <Col className='type'>

                                        <input type='text'
                                            placeholder='First Name'
                                            onChange={(e) => this.changeFirstName(e)}
                                            value={this.state.firstName}
                                            className='form-control form-group'
                                            size="sm" />
                                        <div style={{ color: "red" }}>{this.state.firstNameError} </div>
                                    </Col>
                                    <Col className='type'>

                                        <input type='text'
                                            placeholder='Last Name'
                                            onChange={(e) => this.changeLastName(e)}
                                            value={this.state.lastName}
                                            className='form-control form-group' />
                                        <div style={{ color: "red" }}>{this.state.lastNameError} </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='type'>
                                        <select className='form-control form-group' name="gender" id="gender"
                                            onChange={(e) => this.changeFaculty(e)}
                                        >
                                            <option value="" selected disabled hidden>
                                                Faculty
                                        </option>
                                            <option value="Faculty of Engineering">Faculty of Engineering</option>
                                            <option value="Faculty of Information Technology">Faculty of Information Technology</option>
                                            <option value="Faculty of Architecture">Faculty of Architecture</option>
                                            <option value="Faculty of Business">Faculty of Business</option>

                                        </select>
                                        <div style={{ color: "red" }}>{this.state.facultyError} </div>

                                    </Col> <Col xs={1} className='type'>



                                        <input type='text'
                                            placeholder='Batch'
                                            onChange={(e) => this.changeBatch(e)}
                                            value={this.state.Batch}
                                            className='form-control form-group type2'
                                        />
                                        <div style={{ color: "red" }}>{this.state.batchError} </div>

                                    </Col>

                                    <Col xs={5} ><p style={{ fontSize: '14px', float: 'left', marginLeft: '25px', marginTop: '10px', color: 'white' }}>example:18</p> </Col>
                                </Row> <Row>

                                    <Col className='type'>

                                        <input type='text'
                                            placeholder='E-mail'
                                            onChange={(e) => this.changeEmail(e)}
                                            value={this.state.email}
                                            className='form-control form-group' />
                                        <div style={{ color: "red" }}>{this.state.emailError} </div>
                                    </Col> <Col>
                                        <select className='form-control form-group type3' name="gender" id="gender" onChange={(e) => this.changeGender(e)}
                                        >
                                            <option value="" selected disabled hidden>
                                                Gender
                                        </option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>

                                        </select>
                                        <div style={{ color: "red" }}>{this.state.genderError} </div>

                                    </Col> </Row> <Row>

                                    <Col className='type'>

                                        <input type='password'
                                            placeholder='Password'
                                            onChange={(e) => this.changePassword(e)}
                                            value={this.state.password}
                                            className='form-control form-group' />
                                        <div style={{ color: "red" }}>{this.state.passwordError} </div>
                                    </Col>

                                    <Col> </Col> </Row> <Col>
                                    <center> < Button variant="dark" as="input"
                                        type="Button"
                                        onClick={(e) => this.onSubmit(e)}
                                        value="Submit" /> {' '} </center>
                                    <br /> <br />
                                   
                                </Col> </form>
                        </Jumbotron>
                    </div>

                </Container>
            </div>




        ) : <Questionform onValidationPass={() => {

            this.setState({ showSignUp: true }, () => {
                console.log(this.state);
            });

        }} />;

    }
}
export default create;
import React, { Component } from 'react';
import "./bootstrap.min.css"
import axios from 'axios'
import './PastStudent.css';
import student from "./student.png";
import { Row, Col, Button, Jumbotron, InputGroup, Container } from 'react-bootstrap';


class create extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            faculty: '',
            gender: '',
            email: '',
            password: ''
        }
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeFaculty = this.changeFaculty.bind(this)
        this.changeGender = this.changeGender.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
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
    onSubmit(event) {
        event.preventDefault()

        const registered = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            faculty: this.state.faculty,
            gender: this.state.gender,
            email: this.state.email,
            password: this.state.password
        }
        axios.post(`${process.env.REACT_APP_BASE_URL}/signup`, registered)
            .then(response => console.log(response.data))

        this.setState({
            firstName: '',
            lastName: '',
            faculty: '',
            gender: '',
            email: '',
            password: ''
        })
    }
    render() {
        return (

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
                            <form onSubmit={this.onSubmit} >
                                <Row>
                                    <Col className='type'>

                                        <input type='text'
                                            placeholder='First Name'
                                            onChange={this.changeFirstName}
                                            value={this.state.firstName}
                                            className='form-control form-group'
                                            size="sm" />
                                    </Col>
                                    <Col className='type'>

                                        <input type='text'
                                            placeholder='Last Name'
                                            onChange={this.changeLastName}
                                            value={this.state.lastName}
                                            className='form-control form-group' />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='type'>
                                    <select className='form-control form-group' name="gender" id="gender"
                                    // onChange={this.changeGender}
                                    >
                                        <option value="" selected disabled hidden>
                                            Faculty
                                        </option>
                                        <option value="Faculty of Engineering">Faculty of Engineering</option>
                                        <option value="Faculty of Information Technology">Faculty of Information Technology</option>
                                        <option value="Faculty of Architecture">Faculty of Architecture</option>
                                        <option value="Faculty of Business">Faculty of Business</option>

                                    </select>

                                    </Col> <Col xs={1} className='type'>



                                        <input type='text'
                                            placeholder='Batch'
                                            //onChange={this.changeEmail}
                                            //value={this.state.email}
                                            className='form-control form-group type2'
                                        />

                                    </Col>

                                    <Col xs={5} ><p style={{ fontSize: '14px', float: 'left', marginLeft: '25px', marginTop: '10px', color: 'white' }}>example:18</p> </Col>
                                </Row> <Row>

                                    <Col className='type'>

                                        <input type='text'
                                            placeholder='E-mail'
                                            onChange={this.changeEmail}
                                            value={this.state.email}
                                            className='form-control form-group' />
                                    </Col> <Col>
                                        <select className='form-control form-group type3' name="gender" id="gender" onChange={this.changeGender}
                                        >
                                            <option value="" selected disabled hidden>
                                                Gender
                                        </option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>

                                        </select>


                                    </Col> </Row> <Row>

                                    <Col className='type'>

                                        <input type='password'
                                            placeholder='Password'
                                            onChange={this.changePassword}
                                            value={this.state.password}
                                            className='form-control form-group' />
                                    </Col>

                                    <Col> </Col> </Row> <Col>
                                    <center> < Button variant="dark" as="input"
                                        type="submit"
                                        value="Submit" /> {' '} </center>
                                    <br /> <br />

                                </Col> </form>
                        </Jumbotron>
                    </div>

                </Container>
            </div>




        );

    }
}
export default create;
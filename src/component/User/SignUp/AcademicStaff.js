import React, { Component } from 'react';
import "./bootstrap.min.css"
//import axios from 'axios'
import './AcademicStaff.css';
import lecturer from "./lecturer.png";
import { Row, Col, Button, Jumbotron } from 'react-bootstrap';
import Questionform from './Questionform';


class create extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            faculty: '',
            gender: '',
            email: '',
            password: '',
            showSignUp: false
        }
        // this.changeFirstName = this.changeFirstName.bind(this)
        // this.changeLastName = this.changeLastName.bind(this)
        // this.changeFaculty = this.changeFaculty.bind(this)
        // this.changeGender = this.changeGender.bind(this)
        // this.changeEmail = this.changeEmail.bind(this)
        // this.changePassword = this.changePassword.bind(this)
        // this.onSubmit = this.onSubmit.bind(this)
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
    // onSubmit(event) {
    //     event.preventDefault()

    //     const registered = {
    //         firstName: this.state.firstName,
    //         lastName: this.state.lastName,
    //         faculty: this.state.faculty,
    //         gender: this.state.gender,
    //         email: this.state.email,
    //         password: this.state.password
    //     }
    //     /* axios.post('http://localhost:4000/app/signup', registered )
    //      .then(response => console.log(response.data))*/

    //     this.setState({
    //         firstName: '',
    //         lastName: '',
    //         faculty: '',
    //         gender: '',
    //         email: '',
    //         password: ''
    //     })
    // }
    render() {
        return this.state.showSignUp ? (

            <div className="academic">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
</style>



                <center><img src={lecturer} alt='' width="100" height="100" className="lec" border="2px" /></center>
                <div> <center>  <h3 className='topic '>SignUp - Academic staff</h3></center></div>

                <div >
                    <Jumbotron className="jumboaca">
                        <form onSubmit={this.onSubmit}>
                            <Row>
                                <Col className="acatype">

                                    <input type='text'
                                        placeholder='First Name'
                                        onChange={this.changeFirstName}
                                        value={this.state.firstName}
                                        className='form-control form-group'
                                        size="sm"

                                    />
                                </Col>
                                <Col className="acatype">

                                    <input type='text'
                                        placeholder='Last Name'
                                        onChange={this.changeLastName}
                                        value={this.state.lastName}
                                        className='form-control form-group'
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="acatype">
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

                                </Col>
                                <Col className="acatype">
                                    <select className='form-control form-group' name="gender" id="gender"
                                    // onChange={this.changeGender}
                                    >
                                        <option value="" selected disabled hidden>
                                            Department
                                        </option>
                                        <option value="department1">Department 1</option>
                                        <option value="department2">Department 2</option>

                                    </select>
                                </Col>
                            </Row>
                            <Row>

                                <Col className="acatype">

                                    <input type='text'
                                        placeholder='E-mail'
                                        onChange={this.changeEmail}
                                        value={this.state.email}
                                        className='form-control form-group'
                                    />
                                </Col>
                                <Col className="acatype">
                                    <select className='form-control form-group acatype2' name="gender" id="gender"
                                    // onChange={this.changeGender}
                                    >
                                        <option value="" selected disabled hidden>
                                            Gender
                                        </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>

                                    </select>
                                </Col>
                            </Row>
                            <Row>

                                <Col className="type">

                                    <input type='password'
                                        placeholder='Password'
                                        onChange={this.changePassword}
                                        value={this.state.password}
                                        className='form-control form-group'
                                    /></Col>

                                <Col></Col>
                            </Row>
                            <Col>
                                <center>    <Button variant="dark" as="input" type="submit" value="Submit" />{' '}</center>
                                <br /><br />

                            </Col>
                        </form>
                    </Jumbotron>
                </div>


            </div>





        ) : <Questionform onValidationPass={() => {
            
            this.setState({ showSignUp: true }, ()=>{
                console.log(this.state);
            });
            
        }} />;

    }
}
export default create;

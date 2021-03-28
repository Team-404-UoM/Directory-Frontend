import React, { Component } from 'react';
import "./bootstrap.min.css"
import './AcademicStaff.css';
import lecturer from "./lecturer.png";
import { Row, Col, Button, Jumbotron } from 'react-bootstrap';
import Questionform from './Questionform';
import { firebaseAuth } from '../../../config/FirebaseConfig';
import history from '../../../config/history';
import { axiosInstance } from '../../../services/services';


const initialState = {
    firstName: '',
    lastName: '',
    faculty: '',
    department: '',
    gender: '',
    email: '',
    password: '',
    showSignUp: false,
    firstNameError: "",
    lastNameError: "",
    emailError: "",
    facultyError: "",
    departmentError: "",
    genderError: "",
    passwordError: "",



}
class create extends Component {
    constructor() {
        super()
        this.state = initialState;

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

    changeDepartment(event) {
        this.setState({
            department: event.target.value
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
    //validating
    validate = () => {
        let firstNameError;
        let lastNameError;
        let emailError;
        let passwordError;
        let facultyError;
        let departmentError;
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
        if (!this.state.facultyError) {

            facultyError = "Faculty required";
        }
        if (!this.state.departmentError) {

            departmentError = "Department required";
        }
        if (!this.state.genderError) {

            genderError = "Gender required";
        }
        if (!this.state.email.includes('@')) {
            emailError = 'invalid email';

        }
        if (emailError || firstNameError || lastNameError || passwordError || facultyError || departmentError || genderError) {
            this.setState({ emailError, firstNameError, lastNameError, passwordError, facultyError, departmentError, genderError });
            return false;
        } else {
            return true;
        }

    };//till here

    async onSubmit(event) {
        event.preventDefault()


        //newly added email verification
        // await firebaseAuth.currentUser.sendEmailVerification();

        alert(" Successfully loged to the system. Check Email For Verification");
        this.setState({ loading: false });
        //till here


        //pushhh

        try {
            history.push('/signin');
        } catch (e) {
            console.error(e);
        }

        //huh
        const isValid = this.validate();

        const registered = {
            firstName: this.state.firstName,
            lastName: this.state.lastName, 
            faculty: this.state.faculty,
            department: this.state.department,
            gender: this.state.gender,
            email: this.state.email,
            password: this.state.password
        }
        /* axios.post('http://localhost:4000/app/signup', registered )
         .then(response => console.log(response.data))*/
        try {
            alert(registered);
            const response = await axiosInstance.post('/signup', registered, {
                params: {
                    type: "ACADEMIC"
                }
            })

            const customeToken = response.data;
            //here
            /*  if (isValid) {
                  console.log(customeToken);
                  this.setState(initialState)
              }*/
            // console.log(customeToken);
            //clear form
            if (isValid) {

                const userDeatils = await firebaseAuth.signInWithCustomToken(customeToken);
                history.push("/waiting");
                this.setState({
                    firstName: '',
                    lastName: '',
                    faculty: '',
                    department: '',
                    gender: '',
                    email: '',
                    password: ''
                })
            }
            this.setState(initialState)
        }
        catch (e) {
            alert(e);


        }
    }

    render() {
        //  this.state.showSignUp 
        const condition = true;
        return condition ? (

            <div className="academic">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
</style>



                <center><img src={lecturer} alt='' width="100" height="100" className="lec" border="2px" /></center>
                <div> <center>  <h3 className='topic '>SignUp - Academic staff</h3></center></div>

                <div >

                    <Jumbotron className="jumboaca">
                        <form onSubmit={(e) => this.onSubmit(e)}>
                            <Row>
                                <Col className="acatype">


                                    <input type='text'
                                        placeholder='First Name'
                                        onChange={(e) => this.changeFirstName(e)}
                                        value={this.state.firstName}
                                        className='form-control form-group'
                                        size="sm"

                                    />

                                    <div style={{ color: "red" }}>{this.state.firstNameError} </div>

                                </Col>




                                <Col className="acatype">

                                    <input type='text'
                                        placeholder='Last Name'
                                        onChange={(e) => this.changeLastName(e)}
                                        value={this.state.lastName}
                                        className='form-control form-group'
                                    />
                                    <div style={{ color: "red" }}>{this.state.lastNameError} </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="acatype">
                                    <select className='form-control form-group' name="faculty" id="faculty"
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

                                </Col>
                                <Col className="acatype">
                                    <select className='form-control form-group' name="department" id="department"
                                        onChange={(e) => this.changeDepartment(e)}
                                    >
                                        <option value="" disabled selected hidden >
                                            Department
                                        </option>
                                        <option value="department1">IDS Department </option>
                                        <option value="department2">Computational Mathematics Department </option>
                                        <option value="department2">IT Department </option>

                                    </select>
                                    <div style={{ color: "red" }}>{this.state.departmentError} </div>
                                </Col>
                            </Row>
                            <Row>

                                <Col className="acatype">

                                    <input type='text'
                                        placeholder='E-mail'
                                        onChange={(e) => this.changeEmail(e)}
                                        value={this.state.email}
                                        className='form-control form-group'
                                    />
                                    <div style={{ color: "red" }}>{this.state.emailError} </div>
                                </Col>
                                <Col className="acatype">
                                    <select className='form-control form-group acatype2' name="gender" id="gender"
                                        onChange={(e) => this.changeGender(e)}
                                    >
                                        <option defaultValue='Gender'>
                                            Gender
                                        </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>

                                    </select>
                                    <div style={{ color: "red" }}>{this.state.genderError} </div>
                                </Col>
                            </Row>
                            <Row>

                                <Col className="type">

                                    <input type='password'
                                        placeholder='Password'
                                        onChange={(e) => this.changePassword(e)}
                                        value={this.state.password}
                                        className='form-control form-group'
                                    />
                                    <div style={{ color: "red" }}>{this.state.passwordError} </div>
                                </Col>

                                <Col></Col>
                            </Row>
                            <Col>
                                <center> < Button variant="dark" as="input"
                                    type="Button"
                                    onClick={(e) => this.onSubmit(e)}
                                    value="Submit" /> {' '} </center>
                                <br /> <br />

                            </Col>
                        </form>
                    </Jumbotron>
                </div>


            </div>





        ) : <Questionform onValidationPass={() => {

            this.setState({ showSignUp: true }, () => {
                console.log(this.state);
            });

        }} />;

    }
}
export default create;

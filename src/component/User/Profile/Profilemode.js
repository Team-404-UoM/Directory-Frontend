
import React, { Component } from "react";
import "./ProfileEditMode.css";
import { Row, Col, Button, Jumbotron, Image, Form, Card } from "react-bootstrap";
import boxicons from "boxicons";
import { Usercontext, user } from '../../../context/context';
import axios from 'axios';
import pic5 from "./pic5.png";
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalTitle from 'react-bootstrap/ModalTitle';
import { Link } from "react-router-dom";


class ProfileForm extends Component {

    static contextType = Usercontext;
    constructor(props) {
        super(props);
        this.state = {

            profiledetails: [],
            firstname: "",
            lastname: "",
            type: "",
            email: "",
            faculty: "",
            department: "",
            batch: "",
            message: "",
            show: false

        }

    }
    handleModal() {
        this.setState({ show: !this.state.show })
    }


    componentDidMount() {
        console.log(this.context.UserDetails.firstName);
        this.getuserprofile(this.context.loggedInUser.username)
        console.log(this.props.location);
        
    }
    getuserprofile(username) {
        console.log(username);
        axios.get('http://localhost:4000/user/' + username)
            .then((res) => this.setState({ profiledetails: res.data }))
            .then(console.log(this.profiledetails))

    }


    getuserdetails(){
        console.log(this.props.match.params.id);
        axios.get(`http://localhost:4000/user/${this.props.match.params.id}`)
        .then((res)=>{console.log(res.data.firstName)})
    }


    render() {
        return (
            <div className="container-fluid">
                <form>
                    <Jumbotron className="jumboacaq mt-5">
                        <Row>
                            <Col className="col-2">
                                <center>
                                    <div className="row">{this.state.profiledetails.photo ?
                                        <Image
                                            src={`http://localhost:4000/images/${this.state.profiledetails.photo}`}/>:<Image
                                            src={pic5}/>}
                                    </div>
                                </center>
                            </Col>
                            <Col>
                                <center>
                                    {" "}
                                    <h2>{this.state.profiledetails.firstName} {this.state.profiledetails.lastName}</h2>
                                </center>
                                <center>
                                    {" "}
                                    <h3>{this.state.profiledetails.type}</h3>
                                </center>
                                <center>
                                    {" "}
                                    <h3>{this.state.profiledetails.faculty}</h3>
                                </center>
                            </Col>
                            <Col>
                            <br/>
                                <div className="mb-2">
                                    <Button variant="primary" size="lg" onClick={() => { this.handleModal() }}>
                                        Get Help
                  </Button>
                                    <Card className="forumstyle">
                                        <Modal show={this.state.show} >

                                            <Card.Header as="h5">Type a message here...</Card.Header>
                                            <Card.Body>
                                                <Card.Title></Card.Title>
                                                <Card.Text>
                                                    <textarea
                                                        style={{ width: "460px" }}
                                                        placeholder="Please write question here..."
                                                        value={this.state.message}

                                                    />
                                                    <div style={{ color: 'red', fontSize: 12 }}>{this.state.messagevalidate}</div>
                                                </Card.Text>
                                            </Card.Body>
                                            <Modal.Footer>
                                                <Button variant="primary" size="lg" onClick={() => { this.handleModal() }} >close </Button>{' '}<Button variant="primary" size="lg"  >Send message </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </Card>

                                </div>
                            </Col>
                        </Row>
                        <br />
                        <br /> <br />
                        <br /> <br />
                        <br />
                        <div className="row">
                            <div className="col-5">

                                {/* <Row>
                  <Col className="mb-3">
                    <label>First Name</label>
                    <br />
                    <input type="text" value={this.state.profiledetails.firstName} className="form-field" />
                  </Col>
                  <div className="mb-3">
                  <label>Last Name</label> <br />
                  <input type="text" className="form-field" value={this.state.profiledetails.lastName} />
                </div>
                  
                  <Col className="mb-3">
                    <label>Gender</label>
                    <br />
                    <input type="email" value={this.state.profiledetails.gender} className="form-field" />
                  </Col>
                </Row>
                <Row>
                <Col className="mb-3">
                    <label>Membership Type</label>
                    <br />
                    <input type="email" value={this.state.profiledetails.type} className="form-field" />
                  </Col>
                  <Col className="mb-3">
                    <label>Faculty</label>
                    <br />
                    <input type="email" value={this.state.profiledetails.faculty} className="form-field" />
                  </Col>
</Row> */}
                                <Form>
                                    <Form.Row>
                                        <Col className="formhandle">
                                        <Form.Label>First Name</Form.Label>
                                            <Form.Control placeholder="First name" input type="text" className="form-field" value={this.state.profiledetails.firstName} />
                                        </Col>
                                    </Form.Row>
                                    <br />  <br />

                                    <Form.Row>
                                        <Col>
                                        <Form.Label>Last Name</Form.Label>
                                            <Form.Control placeholder="Last name" input type="text" className="form-field" value={this.state.profiledetails.lastName} />
                                        </Col>
                                    </Form.Row>
                                    <br />
                                    <Form.Row>
                                        <Col>
                                        <Form.Label>Gender</Form.Label>
                                            <Form.Control placeholder="Gender" input type="text" className="form-field" value={this.state.profiledetails.gender} />
                                        </Col>

                                    </Form.Row>
                                    <br />

                                    <Form.Row>
                                        <Col>
                                        <Form.Label>Membership Type</Form.Label>
                                            <Form.Control placeholder="Type" input type="text" className="form-field" value={this.state.profiledetails.type} />
                                        </Col>
                                    </Form.Row>
                                    <br />
                                    <Form.Row>
                                        <Col>
                                        <Form.Label>Faculty</Form.Label>
                                            <Form.Control placeholder="faculty" input type="text" className="form-field" value={this.state.profiledetails.faculty} />
                                        </Col>

                                    </Form.Row>
                                    <br /> <br />
                                    <Form.Row>
                                        <Col></Col>
                                        <Col>
                                        <Link to="/ProfileEdit" >
                                            <Button variant="danger" >Edit profile</Button>
                                           </Link>

                                        </Col>
                                    </Form.Row>









                                </Form>


                            </div>
                        </div>
                    </Jumbotron>
                </form>
            </div>
        );
    }
}

export default ProfileForm;

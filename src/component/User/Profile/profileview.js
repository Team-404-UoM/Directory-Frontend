
import React, { Component } from "react";
import "./profileview.css";
import { Row, Col, Button, Jumbotron, Image, Form, Card } from "react-bootstrap";
import boxicons from "boxicons";
import { Usercontext, user } from '../../../context/context';
import axios from 'axios';
import pic5 from "./pic5.png";
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalTitle from 'react-bootstrap/ModalTitle';
import { Link } from "react-router-dom";
import 'boxicons';


class ProfileView extends Component {

    static contextType = Usercontext;
    constructor(props) {
        super(props);
        this.state = {

            firstname: "",
            lastname: "",
            gender: "",
            type: "",
            email: "",
            faculty: "",
            department: "",
            Batch: "",
            status: "",
            dob: "",
            education: [],
            position: [],
            workingplace: [],
            experience: [],
            fblink: "",
            instalink: "",
            twitterlink: "",
            linkedinlink: "",
            userimage: "",
            message: "",
            show: false

        }

    }

    componentDidMount() {

        console.log(this.props.location);
        this.getuserdetails();
    }
    handleModal() {
        this.setState({ show: !this.state.show })

    }


    getuserdetails() {
        console.log(this.props.match.params.id);
        axios.get(`http://localhost:4000/user/${this.props.match.params.id}`)
            .then((res) => this.setState({
                firstname: res.data.firstName,
                lastname: res.data.lastName,
                faculty: res.data.faculty,
                type: res.data.type,
                status: res.data.status,
                dob: res.data.dob,
                fblink: res.data.socialLinkFB,
                instalink: res.data.socialLinkInsta,
                twitterlink: res.data.socialLinkTwitter,
                linkedinlink: res.data.socialLinkLinkedin,
                gender: res.data.gender,
                education: res.data.education,
                experience: res.data.experience,
                position: res.data.position,
                workingplace: res.data.workingPlace,
                userimage: res.data.photo
            }))
    }


    render() {
        return (

            <div className="container">

                <Jumbotron>
                    <Card>
                        <Card>
                            <Row>

                                <br /><br /> <center> <Card className="backgroundcl">
                                    <br /><br />
                                    <div className="col-4">{this.state.userimage ?
                                        <Image width={'180px'} height={'195px'} src={`http://localhost:4000/images/${this.state.userimage}`}></Image> :
                                        <Image width={'150px'} height={'165px'} src={pic5}></Image>}
                                        <Col></Col>
                                        <Col></Col>
                                        <br />
                                        <Button variant="primary" size="lg" onClick={() => { this.handleModal() }}>
                                            Get Help
                  </Button>
                                    </div>
                                    <br />
                                    <div className="mb-2">


                                        <Modal show={this.state.show} >
                                            <Card className="gethelp">
                                                <Card.Header as="h5">Get help</Card.Header>
                                                <Card.Body>
                                                    <Card.Title></Card.Title>
                                                    <Card.Text>
                                                        <textarea
                                                            id="colorchange"
                                                            style={{ width: "460px", height: "90px", paddingLeft: "5px" }}
                                                            placeholder="Please type a message here..."
                                                            value={this.state.message}
                                                            onChange={this.handleChange}
                                                        ></textarea>
                                                        <div style={{ color: 'red', fontSize: 12 }}>{this.state.messagevalidate}</div>
                                                    </Card.Text>
                                                </Card.Body>
                                                <Modal.Footer>
                                                    <Button variant="primary" size="lg" onClick={() => { this.handleModal() }} >close </Button>{' '}<Button variant="primary" size="lg"  >Send </Button>
                                                </Modal.Footer>
                                            </Card>
                                        </Modal>


                                    </div>

                                    <Col>

                                        <div><center> {" "} <h2 className="firstname" >{this.state.firstname} {this.state.lastname} </h2></center>
                                            <center> {" "}<h3 className="firstname">{this.state.type} {' '}  {this.state.Batch}</h3></center>
                                            <center> {" "} <h3 className="firstname">{this.state.faculty}</h3></center>
                                        </div>


                                    </Col> </Card></center>



                            </Row>

                            <br /><br />  <br /><br />

                            <div className='row'>

                                <Col>
                                    <Card>


                                        <Card.Header><Card.Title>About me</Card.Title></Card.Header>
                                        <Card.Body>

                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk
                                                of the card's content.
      </Card.Text>
                                        </Card.Body>
                                        <br />
                                    </Card>
                                    <Card>
                                        <Card.Header><Card.Title>Social media Links</Card.Title></Card.Header>
                                        <Card.Body>

                                            <Card.Text>
                                                <div><a href={this.state.fblink} target="_blank" ><box-icon name='facebook-square' type='logo' color='#0672f1' ></box-icon></a></div>
                                                <div><a href={this.state.instalink} target="_blank" ><box-icon name='instagram' type='logo' color='#e34c4c' ></box-icon></a></div>
                                                <div><a href={this.state.twitterlink} target="_blank" ><box-icon name='twitter' type='logo' color='#4a7ae5' ></box-icon></a></div>
                                                <div><a href={this.state.linkedinlink} target="_blank" ><box-icon name='linkedin-square' type='logo' color='#0048e9' ></box-icon></a></div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <div className='col-3'>

                                    <h5>First Name</h5>
                                    <h5>Last Name</h5>

                                    <h5>Member Type</h5>
                                    <h5>Faculty</h5>
                                    <h5>Gender</h5>

                                    <h5>Status</h5>
                                    <h5>Date of Birth</h5>
                                    <h5>Education</h5>
                                    <h5>Position</h5>
                                    <h5>Working Place</h5>


                                </div>
                                <div className='col'>
                                    <div> <h6>{this.state.firstname}</h6></div>
                                    <div><h6>{this.state.lastname}</h6></div>

                                    <h6>{this.state.type}</h6>
                                    <h6>{this.state.faculty}</h6>
                                    <div><h6>{this.state.gender}</h6></div>

                                    <h6>{this.state.status}</h6>
                                    <h6>{this.state.dob}</h6>

                                    {this.state.education.map((edu) => {
                                        return (
                                            <h6 key={edu}>
                                                <span>{edu}</span>
                                            </h6>
                                        );
                                    })}
                                    {this.state.position.map((post) => {
                                        return (
                                            <h6 key={post}>
                                                <span>{post}</span>
                                            </h6>
                                        );
                                    })}
                                    {this.state.experience.map((exp) => {
                                        return (
                                            <h6 key={exp}>
                                                <span>{exp}</span>
                                            </h6>
                                        );
                                    })}
                                    {this.state.workingplace.map((work) => {
                                        return (
                                            <h6 key={work}>
                                                <span>{work}</span>
                                            </h6>
                                        );
                                    })}


                                </div>

                                {/* <div className="col-4">{this.state.userimage?
                        <Image width={'180px'} height={'195px'} src={`http://localhost:4000/images/${this.state.userimage}`}></Image>:
                        <Image width={'150px'} height={'165px'} src={pic5}></Image>}
                        </div>    */}

                            </div>
                        </Card>
                    </Card>
                </Jumbotron>

            </div>

        );
    }
}

export default ProfileView;

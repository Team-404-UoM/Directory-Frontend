
import React, { Component } from "react";
import "./ProfileEditMode.css";
import { Row, Col, Button, Jumbotron, Image, Form, Card } from "react-bootstrap";
import boxicons from "boxicons";
import { Usercontext, user } from '../../../context/context';
import axios from 'axios';
import pic5 from "./pic5.png";
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
            Batch: "",
            message: "",
            socialLinkFB: "",
            socialLinkTwitter: "",
            socialLinkLinkedin: "",
            sociallLinkInsta:"",
            show: false

        }

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
                        <Card>
                        <Card> 
                        <Card> 
                        <Row>
                            <Card>
                        
                            <Col className="col-2">
                                <center>
                                    <div className="row">{this.state.profiledetails.photo ?
                                        <Image
                                            src={`http://localhost:4000/images/${this.state.profiledetails.photo}`}/>:<Image
                                            width={'190px'} height={'195px'} src={pic5}/>}
                                    </div>
                                </center>
                            </Col>
                            <Col>
                                <center>
                                    {" "}
                                    <h2>{this.state.profiledetails.firstName} {this.state.profiledetails.lastName} {this.state.profiledetails.Batch}</h2>
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
                            
                            <div><a href={this.state.profiledetails.socialLinkFB} target="_blank" ><box-icon  name='facebook-square' type='logo' color='#0672f1' ></box-icon></a> {' '} 
                                        <a href={this.state.sociallLinkInsta} target="_blank" ><box-icon name='instagram' type='logo' color='#e34c4c' ></box-icon></a>{' '} 
                                        <a href={this.state.socialLinkTwitter} target="_blank" ><box-icon name='twitter' type='logo' color='#4a7ae5' ></box-icon></a>{' '} 
                   <a href={this.state.socialLinkLinkedin} target="_blank" ><box-icon name='linkedin-square' type='logo' color='#0048e9' ></box-icon></a></div>{' '} 
                            
                            </Col>
                            </Card>
                        </Row>
                        <br />
                        <br /> <br />
                        <br /> <br />
                        <br />
                        <div className="row">
                            <div className="col-5">

                                <Form>
                                
                                    <Form.Row>
                                    <Col></Col>
                                        <Col className="formhandle">
                                            
                                        <Form.Label>First Name</Form.Label>
                                      
                                            <Form.Control placeholder="First name" input type="text" className="form-field" value={this.state.profiledetails.firstName} />
                                            </Col>
                                    </Form.Row>
                                    <br />  <br />

                                    <Form.Row>
                                    <Col></Col>
                                        <Col>
                                        <Form.Label>Last Name</Form.Label>
                                            <Form.Control placeholder="Last name" input type="text" className="form-field" value={this.state.profiledetails.lastName} />
                                        </Col>
                                    </Form.Row>
                                    <br />
                                    <Form.Row>
                                    <Col></Col>
                                        <Col>
                                        <Form.Label>Gender</Form.Label>
                                            <Form.Control placeholder="Gender" input type="text" className="form-field" value={this.state.profiledetails.gender} />
                                        </Col>

                                    </Form.Row>
                                  
                                    <br />

                                    <Form.Row>
                                    <Col></Col>
                                        <Col>
                                        <Form.Label>Membership Type</Form.Label>
                                            <Form.Control placeholder="Type" input type="text" className="form-field" value={this.state.profiledetails.type} />
                                        </Col>
                                    </Form.Row>
                               
                                    <br />
                                    <Form.Row>
                                    <Col></Col>
                                        <Col>
                                        <Form.Label>Faculty</Form.Label>
                                            <Form.Control placeholder="faculty" input type="text" className="form-field" value={this.state.profiledetails.faculty} />
                                        </Col>

                                    </Form.Row>
                                    <br /> <br />
                                    <Form.Row>
                                   
                                        <Col>
                                        
                                        <div><a href={this.state.profiledetails.socialLinkFB} target="_blank" ><box-icon  name='facebook-square' type='logo' color='#0672f1' ></box-icon></a></div> {' '} 
                                        <div><a href={this.state.sociallLinkInsta} target="_blank" ><box-icon name='instagram' type='logo' color='#e34c4c' ></box-icon></a></div>
                                        <div><a href={this.state.socialLinkTwitter} target="_blank" ><box-icon name='twitter' type='logo' color='#4a7ae5' ></box-icon></a></div>
                    <div><a href={this.state.socialLinkLinkedin} target="_blank" ><box-icon name='linkedin-square' type='logo' color='#0048e9' ></box-icon></a></div>
                                        
                                        </Col>
                                        <Col>
                                        <Link to="/ProfileEdit" >
                                            <Button variant="danger" >Edit profile</Button>
                                           </Link>

                                        </Col>
                                    </Form.Row>
                                    <br /><br /><br /><br /><br /><br /><br /><br />


                                </Form>


                            </div>
                        </div>
                        </Card>
                        </Card>
                        </Card>
                    </Jumbotron>
                </form>
            </div>
        );
    }
}

export default ProfileForm;

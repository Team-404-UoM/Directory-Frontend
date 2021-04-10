
import React, { Component } from "react";
import "./ProfileEditMode.css";
import { Row, Col, Button, Jumbotron, Image, Form } from "react-bootstrap";
import boxicons from "boxicons";
import { Usercontext, user } from '../../../context/context';
import axios from 'axios';
import pic5 from "./pic5.png";
import Modal from 'react-bootstrap/Modal'


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
  

    render() {
        return (
            <div className="container-fluid">
                <form>
                    <Jumbotron className="jumboacaq mt-5">
                        <Row>
                            <Col className="col-2">
                                <center>
                                    <div className="row">
                                        <Image
                                            src={pic5}
                                            input
                                            type="file"
                                            accept="image/*"
                                            multiple="false"
                                        />
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
                                <div className="mb-2">
                                    <Button variant="primary" size="lg" >
                                        Get Help
                  </Button>
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
    <Col  className="formhandle">
      <Form.Control placeholder="First name" input type="text" className="form-field" value={this.state.profiledetails.firstName} />
    </Col>
   
  </Form.Row>
    <br/>
   
  <Form.Row>
    <Col>
      <Form.Control placeholder="Last name" input type="text" className="form-field" value={this.state.profiledetails.lastName} />
    </Col>
  </Form.Row>
  <br/>
  <Form.Row>
    <Col>
      <Form.Control placeholder="Gender" input type="text" className="form-field" value={this.state.profiledetails.gender}/>
    </Col>
   
  </Form.Row>
    <br/>

  <Form.Row>
    <Col>
      <Form.Control placeholder="Type" input type="text" className="form-field" value={this.state.profiledetails.type} />
    </Col>
    </Form.Row>
    <br/>
    <Form.Row>
    <Col>
      <Form.Control placeholder="faculty" input type="text" className="form-field" value={this.state.profiledetails.faculty}/>
    </Col>
  
  </Form.Row>
  <br/> <br/>
  <Form.Row>
      <Col></Col>
      <Col>
  <Button variant="danger" >Edit profile</Button>

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

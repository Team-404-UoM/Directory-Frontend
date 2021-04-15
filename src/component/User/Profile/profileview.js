
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
 import  'boxicons';


class ProfileView extends Component {

    static contextType = Usercontext;
    constructor(props) {
        super(props);
        this.state = {

            firstname: "",
            lastname: "",
            gender:"",
            type: "",
            email: "",
            faculty: "",
            department: "",
            batch: "",
            status:"",
            dob:"",
            education:[],
            position:[],
            workingplace:[],
            experience:[],
            fblink:"",
            instalink:"",
            twitterlink:"",
            linkedinlink:"",
            message: "",
            show: false

        }

    }

    componentDidMount() {
        
        console.log(this.props.location);
        this.getuserdetails();
    }
    


    getuserdetails(){
        console.log(this.props.match.params.id);
        axios.get(`http://localhost:4000/user/${this.props.match.params.id}`)
        .then((res)=>this.setState({
            firstname:res.data.firstName,
            lastname:res.data.lastName,
            type:res.data.type,
            status:res.data.status,
            dob:res.data.dob,
            fblink:res.data.socialLinkFB,
            instalink:res.data.socialLinkInsta,
            twitterlink:res.data.socialLinkTwitter,
            linkedinlink:res.data.socialLinkLinkedin,
            gender:res.data.gender,
            education:res.data.education,
            experience:res.data.experience,
            position:res.data.position,
            workingplace:res.data.workingPlace
}))
    }


    render() {
        return (
            <div className="container">
                <Jumbotron>
                <div className='row'>
                    <div className='col-3'>
                    <h5>First Name</h5>
                    <h5>Last Name</h5>
                    <h5>Gender</h5>
                    <h5>Member Type</h5>
                    <h5>Faculty</h5>
                    <h5>Batch</h5>
                    <h5>Status</h5>
                    <h5>Date of Birth</h5>
                    <h5>Education</h5>
                    <h5>Position</h5>
                    <h5>Working Place</h5>

                    <div><a href={this.state.fblink} target="_blank" ><box-icon  name='facebook-square' type='logo' color='#0672f1' ></box-icon></a></div>
                    <div><a href={this.state.instalink} target="_blank" ><box-icon name='instagram' type='logo' color='#e34c4c' ></box-icon></a></div>
                    <div><a href={this.state.twitterlink} target="_blank" ><box-icon name='twitter' type='logo' color='#4a7ae5' ></box-icon></a></div>
                    <div><a href={this.state.linkedinlink} target="_blank" ><box-icon name='linkedin-square' type='logo' color='#0048e9' ></box-icon></a></div>
                    
                    </div>  
                    <div className='col'>
                   <div> <h5>{this.state.firstname}</h5></div>
                    <div><h5>{this.state.lastname}</h5></div>
                    <div><h5>{this.state.gender}</h5></div>
                    <h5>{this.state.type}</h5>
                    <h5>{this.state.faculty}</h5>
                    <h5>{this.state.batch}</h5>
                    <h5>{this.state.status}</h5>
                    <h5>{this.state.dob}</h5>
                    
                    {this.state.education.map((edu)=>{
                        return (
                            <h5 key={edu}>
                                <span>{edu}</span>
                             </h5>
                          );
                    })}
                    {this.state.position.map((post)=>{
                        return (
                            <h5 key={post}>
                                <span>{post}</span>
                             </h5>
                          );
                    })}
                    {this.state.experience.map((exp)=>{
                        return (
                            <h5 key={exp}>
                                <span>{exp}</span>
                             </h5>
                          );
                    })}
                    {this.state.workingplace.map((work)=>{
                        return (
                            <h5 key={work}>
                                <span>{work}</span>
                             </h5>
                          );
                    })}
                   

                    
                    </div>                
                    </div>  
                    </Jumbotron>
            </div>
        );
    }
}

export default ProfileView;

import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from "./img1.jpg";
import img5 from "./img5.jpg";
import mission from "./mission.jpg";
import './AboutUs.css';
import engineer from "./engineer.jpg";
import swengineer from "./swengineer.jpg";
import businessman from "./businessman.jpg";
import archi from "./archi.jpg";




class Test extends Component {
    render() {
        return (<div>
            <Container fluid>
                <Row>

                    <div className='header'>
                        <div style={{ marginBottom: '200px' }}>
                            <h1>Welcome to University of Moratuwa Web Member Directory</h1>
                            <h5>About Us</h5>
                        </div>

                    </div>
                    <div className="background">
                    </div>

                </Row>
                <Row className="features">
                    <Col>
                        <div className="para">
                            <h1>Our Values</h1>
                            <p>This is the official Web Member Directory of University of Moratuwa. Through this web member directory <b>Past students</b> and the
                            <b>Academic staff</b> of University Of moratuwa would be able to maintain their proffessional relationships in a good mannar.
                            We hope to provide a user friendly platform for the users and number of benefits in order to optimize the usability of this platform.
                        <br/><br/>
                             <center> <div className="feat"><ul>
                                    <li>Personal Get Help option</li>
                                    <li>Directory</li>
                                    <li>Public Gallery</li>
                                    <li>Blog</li>
                                    <li>Forum</li>
                                    <li>Event and Payment</li>
                                </ul></div>  </center> 
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-4">

                        <div className="user-review">
                            <p> <div><h6>Faculty of Engineering</h6> </div>

                            </p>


                        </div>
                        <img className="profile-img" src={engineer} />




                    </Col>
                    <Col className ="col-md-4">
                    
                    <div className = "feature-box ">
                        <div className = "feature-img ">
                            <img src = {img5} />
                         
                        </div>
                        <div className="feature-details">
                            <h4>Vision</h4>
                            <p>To be the most globally recognized Knowledge Enterprise in South Asia..</p>
                            
                        
                    </div>
                    </div>
                    
                    </Col>
                    <Col className="col-md-4">

                        <div className="user-review">
                            <p> <div><h6>Faculty of Business </h6></div>
                                <div></div>
                                <div></div>
                            </p>


                        </div>
                        <img className="profile-img" src={businessman} />




                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-4">

                        <div className="user-review">
                            <p> <div><h6>Faculty of Information Technology </h6></div>
                                <div></div>
                                <div></div>
                            </p>
                            <h5></h5>

                        </div>
                        <img className="profile-img" src={swengineer} />

                    </Col>
                    <Col className ="col-md-4">
                    
                    <div className = "feature-box ">
                        <div className = "feature-img ">
                            <img src = {mission} />
                         
                        </div>
                        <div className="feature-details">
                            <h4>Mission</h4>
                            <p>To be the leading Knowledge Enterprise for technological and related disciplines in South Asia by:</p>
                            
                        
                    </div>
                    </div>
                    
                    </Col>
                 
                    <Col className="col-md-4">

                        <div className="user-review">
                            <p> <div><h6>Faculty of Architecture </h6></div>
                                <div></div>
                                <div></div>
                            </p>
                            <h5></h5>

                        </div>
                        <img className="profile-img" src={archi} />

                    </Col>
                </Row>



                <div className="down">
                    <Row style={{ backgroundImage: 'linear-gradient( 	#00008B,	#000080)', height: '250px' }}>

                        <Col style={{ marginLeft: '150px', marginTop: '30px', color: 'white' }}>
                            <h3 style={{ marginBottom: '30px' }}>Contact Us</h3>
                            <p> Tel: +94 112640051</p>
                            <p> Fax:+94112650622</p>
                            <p>Email: info@uom.lk</p>

                        </Col>

                        <Col xs={3} style={{ marginTop: '30px', color: 'white' }}>
                            <h3 style={{ marginBottom: '30px' }}>Follow Us on</h3>
                            <p><box-icon  name='facebook-square' type='logo' color='#0672f1' ></box-icon>{' '} FaceBook - @uom.facebook</p>
                            <p> <box-icon name='twitter' type='logo' color='#4a7ae5' ></box-icon>{' '} Twitter - @uom.twitter</p>
                            <p><box-icon name='linkedin-square' type='logo' color='#0048e9' > </box-icon>{' '} LinkedIn    - @uom.Linkedin</p>

                        </Col>


                    </Row>
                </div>
            </Container>



        </div>
        )
    }
}
export default Test;
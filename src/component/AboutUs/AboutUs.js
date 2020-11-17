import React, { Component } from 'react';
import {Container, Row, Col } from 'react-bootstrap';

import './AboutUs.css';




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
                            <p>This is the official Web Member Directory of University of Moratuwa. Through this web member directory Past students and the
                            Academic staff of University Of moratuwa would be able to maintain their proffessional relationships in a good mannar.
                            We hope to provide a user friendly platform for the users and number of benefits in order to optimize the usability of this platform.
                              <div className="feat"><ul>
                                    <li>Personal Get Help option</li>
                                    <li>Directory</li>
                                    <li>Public Gallery</li>
                                    <li>Blog</li>
                                    <li>Forum</li>
                                    <li>Event and Payment</li>
                                </ul></div>
                            </p>
                        </div>
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
                            <p> FaceBook</p>
                            <p> Twitter</p>
                            <p> Youtube</p>

                        </Col>


                    </Row>
                </div>
            </Container>



        </div>
        )
    }
}
export default Test;
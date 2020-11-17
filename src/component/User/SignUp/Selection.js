import React, { Component } from 'react';
import './Selection.css';
import lecturer from "./lecturer.png";
import student from "./student.png";
import { Row, Col } from 'react-bootstrap';



export default class selection extends Component {

    render() {
        return (
            <div className="selection">
                  <style>
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
       
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Noto+Sans+KR:wght@700&display=swap');
</style>
                <h1 style={{marginLeft:'20px',fontFamily: 'Oswald,sans-serif',fontSize:'50px'}}>Sign up</h1>
                <p style={{marginLeft:'20px'}}>Category selection</p>
                <div class="containers">

                    <br />
                    <Row>
                        <Col style={{marginLeft:'300px'}}>
                            <div className='outerbox'>
                                <p className='title'>Acadameic Staff</p>
                                <div className="box" >
                                  <a href="/SignUp/AcademicStaff">
                                    <img src={lecturer} alt="" width="80" height="80" className="lec" border="2px" /></a>

                                </div>
                            </div>                        </Col>
                        <Col style={{marginRight:'200px'}}>
                            <div className='outerbox'>
                                <p className='title'>
                                    Past Student
                            </p>
                                <div  className="box">
                                    
                                   <a href="/SignUp/PastStudent"> <img src={student} alt="" width="80" height="80" className="stu" /></a>
                                </div>
                            </div>

                        </Col>
                    </Row>

                </div>
            </div>
        )
    }
}

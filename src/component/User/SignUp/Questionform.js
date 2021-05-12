import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from "axios"
import { Form, Row, Col, Button, Container,Card } from "react-bootstrap";
import './Questionform.css';
import Jumbotron from 'react-bootstrap/Jumbotron'

export default class Questionform extends Component {

    constructor() {
        super();
        /**
         * 
         * [
         *   {
         *         "_id": "6016ac56509ce33feccbabed",
         *         "possible_answers": [],
         *         "question": "HEllo",
         *         "correct_answer": "Hello",
         *         "createdAt": "2021-01-31T13:10:46.429Z",
         *         "updatedAt": "2021-01-31T13:10:46.429Z",
         *         "__v": 0
         *    }
         * ]
         */
        this.state = {
            questions: [],
            answers: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/questions')
            .then(response => this.setState({ ...this.state, questions: response.data ? response.data : [], answers: new Array(response.data.length).fill(0) }));
    }

    onClickSubmit() {
        
        for(let i = 0; i < this.state.answers.length; i++){
            if(this.state.questions[i].correct_answer !== this.state.answers[i]){
                alert("You can't register");
                return;
            }
        }
        alert("You can register");
        this.props.onValidationPass();
    }

    render() {
        return (
            <Jumbotron  className="jam">
            <Card className="cardpic">
                
                  <Card className="cardpic2">
                
                  <Container>
                  <Card className="topictit"> <center><h2 className="h1">Question form</h2></center></Card>
            <Form className="form1" >
              
               <br/>
                { 
                    this.state.questions.map((question, questionIndex) => {
                        return <Form.Group as={Row} key={questionIndex} className="formgroup">
                            <Form.Label as="legend" column sm={5} className="formlabel">
                                {question.question}
                            </Form.Label>
                            <Col sm={10}>
                                {question.possible_answers.map((answer, index) =>
                                    <Form.Check className="formcheck"
                                        type="radio"
                                        onChange={(e) => {
                                            const newAnswers = this.state.answers.map((one, answerIndex) => {
                                                if (questionIndex === answerIndex) {
                                                    return e.target.value;
                                                } else return one;
                                            });
                                            this.setState({ answers: newAnswers });
                                        }}
                                        label={answer}
                                        key={index}
                                        value={answer}
                                        name={questionIndex}

                                 />)}
                            </Col>
                        </Form.Group>
                      })
                 }
                <br/>
                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button onClick={() => this.onClickSubmit()}>Submit Answer</Button>
                    </Col>
                </Form.Group>
              
            </Form> </Container>  </Card><br/></Card></Jumbotron>
        )
    }
}

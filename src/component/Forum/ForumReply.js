import React from 'react';
import { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import './ForumReply.css'
import pic2 from './pic2.jpg';
import axios from 'axios';
import moment from 'moment';

class ForumReply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            createtime: "",
            replymessage:"",
            reply:["h1","h2"]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleReply=this.handleReply.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/Forum/'+this.props.location.query.id)
            .then(res => this.setState({
                message: res.data.forum.message,
                createtime: res.data.forum.createdAt

            }))


    }

    handleChange(event){
        this.setState({replymessage:event.target.value});
        // console.log(this.state.reply)
    
      }

      handleClick=(event)=>{
          event.preventDefault();
          const newreply=this.state.replymessage;
          console.log(newreply);
         this.setState({ reply:this.state.reply.concat(newreply)})
        console.log(this.state.reply);
      }

      handleReply(){
          const reply={
              reply:this.state.replymessage
          }

        axios.put('http://localhost:4000/Forum/reply/'+this.props.location.query.id,reply)
            .then(res => console.log(res))
      }
    
    render() {
        return (<div>

            <Container>
                <Row>
                    <Col><Card style={{ width: '25rem', marginTop: '20px', border: '2px solid grey' }}>
                        <Card.Body>
                            <Card.Title><img src={pic2} style={{ width: '30px' }} className="rounded mr-2" alt="" />Anushka Praveen</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><small>{moment(this.state.createtime).fromNow()}</small></Card.Subtitle>
                            <Card.Text>
                                {this.state.message}
                            </Card.Text>

                        </Card.Body>
                    </Card></Col>




                    <Col><Card className='replycard'>
                        <Card.Header as="h5">Reply Here</Card.Header>
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                <textarea placeholder="Please Type reply here" style={{ width: '460px' }} value={this.state.replymessage} onChange={this.handleChange}/>
                            </Card.Text>

                        </Card.Body>
                        <Button variant="primary" onClick={this.handleReply}>Post</Button>
                    </Card>






                        <Card style={{ width: '400px', marginBottom: '30px', marginTop: '20px', border: '1px solid grey' }}>
                            <Card.Header >
                                <img src={pic2} style={{ width: '30px' }} className="rounded mr-2" alt="" />Anushka Praveen<small style={{ float: 'right' }}></small></Card.Header>

                            <Card.Body>

                                <Card.Text>
                                 <p>{this.state.replymessage}</p>
                                </Card.Text>

                                <Button className='cardbutton' variant="outline-info" size='sm' >Edit</Button>
                                <Button variant="outline-danger" size='sm' >Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>

        )
    }
}

export default ForumReply;
import React, { Component } from "react";
import {
  Card,
  Button,
  Container,
  Col,
  Row,
  Modal,
  Media,
  Badge
} from "react-bootstrap";
import "./Forumprofile.css";
import { Usercontext, user } from "../../context/context";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import moment from "moment";

class Userforum extends Component {
    static contextType = Usercontext;
  constructor(props) {
    super(props);

    this.state = {
      userquestion:[],
    };
    
  }

  componentDidMount() {
    this.getuserforum();
  }

getuserforum(){
  axios
  .get(
    `${process.env.REACT_APP_BASE_URL}/Forum/forumprofile/?Id=` +
      this.context.loggedInUser.username
  )
  .then((res) => {
    this.setState((cur) => ({ ...cur,userquestion: res.data.reverse() }));
  });
}

  
  render() {
    return (
      <div className="container">
        <div className="row">
          
            {this.state.userquestion.map((message)=>
            <div className="col-6">
            <Modal.Dialog>
              <Modal.Body>
                <h5>{message.message}</h5>
              </Modal.Body>

              <Modal.Footer>
               <div><p className='timeslot'>Question Created {moment(message.createdAt).fromNow()}</p></div> 
                <Button variant="outline-info">Reply <Badge className="badgestyle" variant="info">
                        {message.reply.length}
                      </Badge></Button>
                <Button variant="outline-info">Edit</Button>
                <Button variant="outline-danger"><RiDeleteBin6Line /></Button>
              </Modal.Footer>
            </Modal.Dialog>
            </div>)}
          
        </div>
      </div>
    );
  }
}

export default Userforum;

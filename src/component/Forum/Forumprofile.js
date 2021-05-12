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
import { Link } from "react-router-dom";

class Userforum extends Component {
    static contextType = Usercontext;
  constructor(props) {
    super(props);

    this.state = {
      userquestion:[],
      deletequestion:"",
      showdeletemodal:false,
      editmodal:false,
      editmode:{message:"",id:""},
    };
    
  }

  componentDidMount() {
    this.getuserforum();
  }

getuserforum(){
  const username=localStorage.getItem('firebaseId')
  axios
  .get(
    `${process.env.REACT_APP_BASE_URL}/Forum/forumprofile/?Id=`+username
  )
  .then((res) => {
    this.setState((cur) => ({ ...cur,userquestion: res.data.reverse() }));
  });
}

deleteQuestion = (id) => {
  axios
    .delete("http://localhost:4000/Forum/" + this.state.deletequestion)
    .then((res) => {
      console.log(res);
      this.handleModalClose();
      this.getuserforum();
    });
};


editQuestion=()=>{
  axios
  .patch("http://localhost:4000/Forum/" + this.state.editmode.id, {
    message: this.state.editmode.message,
  })
  .then((res) => {
    this.setState((currentState) => ({
      ...currentState,
      editmodal:false,
    }));
    this.getuserforum();
  });

}

onChangehandler = (e) => {
  e.persist();
  this.setState((currentState) => ({
    ...currentState,
    editmode: { ...currentState.editmode, message: e.target.value },
  }));
};

handledelete(id){
  this.setState({showdeletemodal:true,deletequestion:id})
}

handleModalClose(){
  this.setState({showdeletemodal:false})
}

handleeditmode(message,id){
  if(this.state.editmodal==false){
  this.setState({editmodal:true,editmode:{message:message,id:id}})
}else{
  this.setState({editmodal:false})
}
}
  
  render() {
    return (
      <div className="container">
        <div className="row">
          {(this.state.userquestion=="")&&(
          <p style={{padding:'80px 100px 40px 450px'}}>You have not posted any questions</p>)}
            {this.state.userquestion.map((message)=>
            <div className="col-6">
            <Modal.Dialog key={message._id}>
              <Modal.Body>
                <h5>{message.message}</h5>
                <p className='visibletype'><span style={{fontWeight:"bold"}}>Visible Type :</span> {(message.privacytype).toUpperCase()}</p>
              {(message.privacytype=='student') &&(<p className='visiblefaculty'><span style={{fontWeight:'bold'}}>Visible Faculty : </span>{message.faculty}</p>)} 
              </Modal.Body>

              <Modal.Footer>
              
               <div><p className='timeslot'>Question Created {moment(message.createdAt).fromNow()}</p></div> 
               <Link
                    to={{
                      pathname: "ForumReply",
                      query: { id: message._id },
                    }}
                  >
                <Button variant="outline-info">Reply <Badge className="badgestyle" variant="info">
                        {message.reply.length}
                      </Badge></Button></Link>
                {((moment(message.createdAt).add(6,'hours')>moment()||(message.reply.length)===0)&&(
                <Button variant="outline-info" onClick={this.handleeditmode.bind(this,message.message,message._id)}>Edit</Button>))}
                <Button variant="outline-danger" onClick={this.handledelete.bind(this,message._id)}><RiDeleteBin6Line /></Button>
              </Modal.Footer>
            </Modal.Dialog>
            </div>)}
          
        </div>
        <Modal show={this.state.showdeletemodal}>
          <Modal.Header>
            <Modal.Title>Delete Question</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want delete this Question?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleModalClose.bind(this)}>
              Cancle
            </Button>

            <Button variant="danger" onClick={this.deleteQuestion}>
              Delete Question
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.editmodal}>
          <Modal.Header>
            <Modal.Title>Edit Question</Modal.Title>
          </Modal.Header>
          <Modal.Body><textarea style={{ width: "29rem",height:"5rem",paddingLeft:'5px' }} value={this.state.editmode.message} onChange={this.onChangehandler}></textarea></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleeditmode.bind(this)}>
              Cancle
            </Button>

            <Button variant="danger" onClick={this.editQuestion}>
              Save 
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Userforum;

import React, { Component } from "react";

import { Card, Button, Badge, Modal } from "react-bootstrap";
import pic2 from "./pic2.jpg";
import "./Forum.css";
import { BiMessageRounded } from "react-icons/bi";
import axios from "axios";
import moment from "moment";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
//import  '../NotificationBar/SideNotification.css';

class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      posts: [],
      showModel: false,
      showConfirm: false,
      showDeleteConfirm: false,
      deletePost: "",
      editPost: { message: "", id: "" },
      visiblequestions: 10,
      visibletype: "",
      faculty:"",
      messagevalidate:""

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.loadmore = this.loadmore.bind(this);
    this.handletypechange = this.handletypechange.bind(this);
    this.handlefaculty = this.handlefaculty.bind(this);
    
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  validate=()=>{
    let messagevalidate="";

    if(!this.state.message){
      messagevalidate="Question Cannot be blank";
      this.setState({messagevalidate});
      return false;
    }
    return true;

  }

  handleClick(event) {
    console.log(this.state.message);
    const isValid=this.validate();
    
    event.preventDefault();
    if(isValid){
    const message = { message: this.state.message ,faculty:this.state.faculty,privacytype:this.state.visibletype};

    axios.post("http://localhost:4000/Forum", message).then((res) => {
      console.log(res);
      console.log(res.data);
      this.handleCloseModal();
      this.getAllPosts();
    });
    
    this.setState({
      message: "",
    });
  }}

  componentDidMount() {
    this.getAllPosts();
    this.timelimit();
  }
  

  getAllPosts = () => {
    axios
      .get("http://localhost:4000/Forum/home")
      .then((res) => this.setState({ posts: res.data.reverse() }));
  };

  deletePost = (id) => {
    axios
      .delete("http://localhost:4000/Forum/" + this.state.deletePost)
      .then((res) => {
        console.log(res);
        this.handleDeleteCloseModal();

        this.getAllPosts();
      });
  };

  editPost = (id, message) => {
    this.setState((currentState) => ({
      ...currentState,
      showModel: true,
      editPost: { message: message, id: id },
    }));
    console.log(this.state);
  };

  updatePost = () => {
    axios
      .patch("http://localhost:4000/Forum/" + this.state.editPost.id, {
        message: this.state.editPost.message,
      })
      .then((res) => {
        this.setState((currentState) => ({
          ...currentState,
          showModel: false,
        }));
        this.getAllPosts();
      });
  };

  onChangehandler = (e) => {
    e.persist();
    this.setState((currentState) => ({
      ...currentState,
      editPost: { ...currentState.editPost, message: e.target.value },
    }));
  };

  cancleEdit = () => {
    this.setState((currentState) => ({ ...currentState, showModel: false }));
    this.getAllPosts();
  };

  handleModal = () => {
    this.setState({ showConfirm: true });
  };

  handleCloseModal = () => {
    this.setState({ showConfirm: false });
  };

  handleDeleteModal = (id) => {
    this.setState(() => ({ showDeleteConfirm: true, deletePost: id }));
  };

  handleDeleteCloseModal = () => {
    this.setState({ showDeleteConfirm: false });
  };

  loadmore() {
    this.setState((old) => {
      return { visiblequestions: old.visiblequestions + 5 };
    });
  }

  handletypechange(event) {
    this.setState(
      { visibletype: event.target.value },
      console.log(this.state.visibletype)
    );
  }
  handlefaculty(event) {
    this.setState(
      { faculty: event.target.value },
      console.log(this.state.faculty)
    );
  }

  timelimit(id){
   if(this.state.timenow<2.30){
     console.log("yes");
   }else{
     console.log("no");
   }
    
    console.log(this.state.timenow);
    
  }
 
  

  render() {
    return (
      <div>
        <div className="sidenav">
          <h5 style={{ textAlign: "center", color: "white" }}>
            Notification Bar
          </h5>
        </div>
        <div className="divstyle">
          <Card className="forumstyle">
            <Card.Header as="h5">Post Question Here</Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                <textarea
                  style={{ width: "460px" }}
                  placeholder="Please write question here..."
                  value={this.state.message}
                  onChange={this.handleChange}
                />
                <div style={{color:'red',fontSize:12}}>{this.state.messagevalidate}</div>
              </Card.Text>
            </Card.Body>
            <div>
              <p className="select-description">Select Type</p>
              {this.state.visibletype === "student" && (
              <p className="select-description-faculty">Select Faculty</p>)}
              <select
                className="form-select-sm select-type"
                aria-label="Default select example"
                onChange={this.handletypechange}
              >
                
                <option defaultValue="all">All</option>
                <option value="academic">Academic</option>
                <option value="student">Student</option>
              </select>
              
              {this.state.visibletype === "student" && (
                <select
                  className="form-select-sm select-faculty"
                  aria-label="Default select example"
                  onChange={this.handlefaculty}
                >
                  
                  <option defaultValue="All">All</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Information Technology">
                    Information Technology
                  </option>
                  <option value="Architecture">Architecture</option>
                  <option value="Business">Business</option>
                </select>
              )}
            </div>
          </Card>
          <Button
            className="button"
            variant="primary"
            onClick={this.handleModal}
          >
            Post
          </Button>
        </div>

        <div style={{ backgroundColor: "rgba(192,192,192,0.3)" }}>
          {this.state.posts
            .slice(0, this.state.visiblequestions)
            .map((post) => (
              <Card
                key={post._id}
                style={{
                  width: "500px",
                  marginLeft: "30%",
                  marginBottom: "30px",
                  marginTop: "20px",
                  border: "1px solid grey",
                }}
              >
                <Card.Header>
                  <img
                    src={pic2}
                    style={{ width: "20px" }}
                    className="rounded mr-2"
                    alt=""
                  />
                  Anushka Praveen
                  <small style={{ float: "right" }}>
                    {moment(post.createdAt).fromNow()}
                  </small>
                </Card.Header>

                <Card.Body>
                  <Card.Text>{post.message}</Card.Text>
                  <Link
                    to={{
                      pathname: "Forum/ForumReply",
                      query: { id: post._id },
                    }}
                  >
                    <Button
                      variant="outline-info"
                      className="cardbutton"
                      size="sm"
                    >
                      <BiMessageRounded style={{ marginRight: "2px" }} />
                      Reply
                      <Badge className="badgestyle" variant="info">
                        {post.reply.length}
                      </Badge>
                    </Button>
                  </Link>

                  {(moment(post.createdAt).add(6,'hours')>moment()||(post.reply.length)===0)&&(
                  <Button
                    variant="outline-info"
                    className="cardbutton"
                    size="sm"
                    onClick={this.editPost.bind(this, post._id, post.message)}
                  >
                    Edit
                  </Button>)}
                  <Button
                    variant="outline-danger"
                    className="carddeletebutton"
                    size="sm"
                    onClick={() =>
                      this.handleDeleteModal(post._id)
                    } /* {this.deletePost.bind(this, post._id)} */
                  >
                    <RiDeleteBin6Line />
                  </Button>
                </Card.Body>
              </Card>
            ))}
          <div className="col-md-12 p-3 text-center">
            {this.state.visiblequestions < this.state.posts.length && (
              <button
                type="button"
                class="btn btn-outline-info"
                onClick={this.loadmore}
              >
                Read more
              </button>
            )}
          </div>
        </div>
        <Modal show={this.state.showModel}>
         <Modal.Header>
            <Modal.Title>Edit Question</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <textarea
              style={{ width: "29rem" }}
              value={this.state.editPost.message}
              onChange={this.onChangehandler}
            >
              {this.state.editPost.message}
            </textarea>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.cancleEdit}>
              Close
            </Button>
            <Button variant="primary" onClick={this.updatePost}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showConfirm}>
          <Modal.Header>
            <Modal.Title>Post Question</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want post this Question?</Modal.Body>
          <div style={{color:'red',fontSize:15,marginLeft:'20px',marginTop:"-10px",marginBottom:'5px'}}>{this.state.messagevalidate}</div>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModal}>
              Close
            </Button>

            <Button variant="danger" onClick={this.handleClick}>
              Post Question
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showDeleteConfirm}>
          <Modal.Header>
            <Modal.Title>Delete Question</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want Delete this Question?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleDeleteCloseModal}>
              Close
            </Button>

            <Button variant="danger" onClick={this.deletePost}>
              Delete Question
            </Button>
          </Modal.Footer>
        </Modal>
        
      </div>
    );
  }
}

export default Forum;

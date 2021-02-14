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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.loadmore = this.loadmore.bind(this);
    this.handletypechange = this.handletypechange.bind(this);
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleClick(event) {
    console.log(this.state.message);
    event.preventDefault();
    const message = { message: this.state.message };

    axios.post("http://localhost:4000/Forum", message).then((res) => {
      console.log(res);
      console.log(res.data);
      this.handleCloseModal();
      this.getAllPosts();
    });

    this.setState({
      message: "",
    });
  }

  componentDidMount() {
    this.getAllPosts();
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

  render() {
    return (
      <div>
        <div class="sidenav">
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
              </Card.Text>
            </Card.Body>
            <div>
              <select
                className="form-select-sm select"
                aria-label="Default select example"
                onChange={this.handletypechange}
              >
                <option selected>Select Type</option>
                <option value="all">All</option>
                <option value="academic">Academic</option>
                <option value="student">Student</option>
              </select>
              {this.state.visibletype == "student" && (
                <select
                  className="form-select-sm select"
                  aria-label="Default select example"
                >
                  <option selected>Select Faculty</option>
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
                      <Badge className="badgestyle" variant="light">
                        {post.reply.length}
                      </Badge>
                    </Button>
                  </Link>
                  <Button
                    variant="outline-info"
                    className="cardbutton"
                    size="sm"
                    onClick={this.editPost.bind(this, post._id, post.message)}
                  >
                    Edit
                  </Button>
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
          <div class="col-md-12 p-3 text-center">
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
          <Modal.Header closeButton>
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

import React from "react";
import { Component } from "react";
import { Card, Button, Container, Col, Row, Modal } from "react-bootstrap";
import pic2 from "./images/react.png";
import axios from "axios";
import { Usercontext, user } from "../../context/context";
import "./blogprofile.css";
import { Link } from "react-router-dom";
class blogprofile extends Component {
  static contextType = Usercontext;
  constructor(props) {
    super(props);

    this.state = {
      profileblog: [],
      uploadprofileblog:[],
      deleteblog: "",
      showdeletemodal: false,
      showuploaddeletemodal:false,
    };
    this.handleclose = this.handleclose.bind(this);
  }

  componentDidMount() {
    this.getAllPosts();
    this.getUploadPosts();
  }

  getAllPosts() {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/Blog/blogprofile/?Id=` +
          this.context.loggedInUser.username
      )
      .then((res) => {
        this.setState((cur) => ({ ...cur, profileblog: res.data.reverse() }));
      });
  }

  getUploadPosts() {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/Bloguploader/userblogs/?Id=` +
          this.context.loggedInUser.username
      )
      .then((res) => {
        this.setState((cur) => ({ ...cur, uploadprofileblog: res.data.reverse() }));
      });
  }

  deletePost = () => {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/Blog/` + this.state.deleteblog)
      .then((res) => {
        console.log(res);
        this.handleclose();
        this.getAllPosts();
    this.getUploadPosts();
      });
  };
  deleteUploadPost = () => {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/Bloguploader/` + this.state.deleteblog)
      .then((res) => {
        this.handleuploadclose();
        this.getAllPosts();
        this.getUploadPosts();
      });
  };

  handledelete(id) {
    this.setState({ showdeletemodal: true, deleteblog: id });
  }
  handleclose() {
    this.setState({
      showdeletemodal: false,
    });
  }
  handleuploaddelete(id) {
    this.setState({ showuploaddeletemodal: true, deleteblog: id });
  }
  handleuploadclose() {
    this.setState({
      showuploaddeletemodal: false,
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
              <div><h2 className='topic'> Written Blogs</h2></div>
              
            {this.state.profileblog.map((blog) => (
              <div className="col-3 ">
                <Card
                  key={blog._id}
                  className="card-shadow"
                  style={{
                    width: "18rem",
                    marginTop: "50px",
                    marginLeft: "50px",
                  }}
                >
                  <Card.Img
                    className="image-size "
                    variant="top"
                    src={`http://localhost:4000/images/${blog.coverImage}`}
                  />
                  <Card.Body>
                    <Card.Title>
                      <center>
                        <h5>{blog.title}</h5>
                      </center>
                    </Card.Title>
                    <p style={{ fontWeight: "bold" }}>
                      Categorie : {blog.categorie}
                    </p>
                    <div>
                      Views
                      <span className="badge rounded-pill bg-dark blog-views">
                        {blog.views}
                      </span>
                     <span style={{marginLeft:'30px'}}>Comments</span> 
                      <span className="badge rounded-pill bg-dark blog-views">
                        {blog.comments.length}
                      </span>
                      </div>
                    <div>
                      Likes
                      <span className="badge rounded-pill bg-dark blog-views">
                        {blog.like}
                      </span>
                        <span style={{marginLeft:'36px'}}>Dislike</span>
                      <span className="badge rounded-pill bg-dark blog-views">
                        {blog.dislike}
                      </span>
                    </div>

                    <Link
                      to={{
                        pathname: "/Blog/BlogView/",
                        query: { id: blog._id },
                      }}
                    >
                    <Button style={{ margin: "5px" }} variant="primary">
                      Read
                    </Button>
                    </Link>
                    <Link
                          to={{
                            pathname: "/Blog/BlogEditPost",
                            query: { id: blog._id },
                          }}
                        >
                    <Button style={{ margin: "5px" }} variant="success">
                      Edit
                    </Button>
                    </Link>
                    <Button
                      style={{ margin: "5px" }}
                      variant="danger"
                      onClick={this.handledelete.bind(this, blog._id)}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
        <div>
           <h2 className='topic'>Upload Blogs</h2> </div>
           {this.state.uploadprofileblog.map((blog) => (
              <div className="col-3 ">
                <Card
                key={blog._id}
                  className="card-shadow"
                  style={{
                    width: "18rem",
                    marginTop: "50px",
                    marginLeft: "50px",
                  }}
                >
                  <Card.Img
                    className="image-size "
                    variant="top"
                    src={blog.image}
                  />
                  <Card.Body>
                    <Card.Title>
                      <center>
                        <h5>{blog.title}</h5>
                      </center>
                    </Card.Title>
                    <p style={{ fontWeight: "bold" }}>
                      Categorie : {blog.categorie}
                    </p>
                    <div>
                      Likes
                      <span class="badge rounded-pill bg-dark blog-views">
                        {blog.like}
                      </span>
                      <span style={{marginLeft:'36px'}}>Dislike</span>
                      <span className="badge rounded-pill bg-dark blog-views">
                        {blog.dislike}
                      </span>
                    </div>

                   
                    <Button target="_blank"
                        href={blog.url} style={{ margin: "5px" }} variant="primary">
                      Read
                    </Button>
                  
                    <Button
                      style={{ margin: "5px" }}
                      variant="danger"
                      onClick={this.handleuploaddelete.bind(this, blog._id)}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
        </div>
        
            
        
        <Modal show={this.state.showdeletemodal}>
          <Modal.Header>
            <Modal.Title>Delete Article</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want delete this Article?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleclose}>
              Close
            </Button>

            <Button variant="danger" onClick={this.deletePost}>
              Delete Article
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.showuploaddeletemodal}>
          <Modal.Header>
            <Modal.Title>Delete Article</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want delete this Article?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleuploadclose}>
              Close
            </Button>

            <Button variant="danger" onClick={this.deleteUploadPost}>
              Delete Article
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default blogprofile;

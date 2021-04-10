import React from "react";
import { Card, Button, Container, Col, Row, Modal } from "react-bootstrap";
import "./Bloginterface.css";
import "./bootstrap.min.css";
import { MdNoteAdd } from "react-icons/md";
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import pic2 from "../Forum/pic2.jpg";
import moment from "moment";
import {Usercontext,user} from '../../context/context';
class Bloginterface extends Component {
  static contextType=Usercontext;
  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
      allBlogs: [],
      uploadBlogs: [],
      allUploadBlogs: [],
      blogid: "",
      //vote:0,
      likeupdated: false,
      dislikeupdated: false,
      uploadlikeupdated: false,
      uploaddislikeupdated: false,
      showuploadmodal: false,
      showblogmodal: false,
      deleteBlog: "",
      deleteuploadBlog: "",
      visibleblog: 10,
      //color:'outline-info'
    };
    this.updatelike = this.updatelike.bind(this);
    this.updatedislike = this.updatedislike.bind(this);
    this.handleTextSearch = this.handleTextSearch.bind(this);
    this.handlemodal = this.handlemodal.bind(this);
    this.handleclosemodal = this.handleclosemodal.bind(this);
    this.uploadupdatelike = this.uploadupdatelike.bind(this);
    this.uploadupdatedislike = this.uploadupdatedislike.bind(this);
    this.loadmore = this.loadmore.bind(this);
  }

  updatelike = (id) => {
    console.log(id);

    if (!this.state.likeupdated) {
      axios.patch("http://localhost:4000/Blog/like/" + id).then((res) => {
        console.log(res);
        this.getAllPosts();
      });
      this.setState((prevState, props) => {
        return {
          likeupdated: true,
          likecolor: "blue",
        };
      });
    } else {
      axios.patch("http://localhost:4000/Blog/unlike/" + id).then((res) => {
        console.log(res);
        this.getAllPosts();
      });

      this.setState((prevState, props) => {
        return {
          likeupdated: false,
          likecolor: "black",
        };
      });
    }
  };

  updatedislike = (id) => {
    console.log(id);

    if (!this.state.dislikeupdated) {
      axios.patch("http://localhost:4000/Blog/dislike/" + id).then((res) => {
        console.log(res);
        this.getAllPosts();
      });
      this.setState((prevState, props) => {
        return {
          dislikeupdated: true,
          dislikecolor: "blue",
        };
      });
    } else {
      axios.patch("http://localhost:4000/Blog/disunlike/" + id).then((res) => {
        console.log(res);
        this.getAllPosts();
      });

      this.setState((prevState, props) => {
        return {
          dislikeupdated: false,
          dislikecolor: "black",
        };
      });
    }
  };

  uploadupdatelike = (id) => {
    console.log(id);

    if (!this.state.uploadlikeupdated) {
      axios
        .patch("http://localhost:4000/Bloguploader/like/" + id)
        .then((res) => {
          console.log(res);
          this.getAllUploadPosts();
        });
      this.setState((prevState, props) => {
        return {
          uploadlikeupdated: true,
          likecolor: "blue",
        };
      });
    } else {
      axios
        .patch("http://localhost:4000/Bloguploader/unlike/" + id)
        .then((res) => {
          console.log(res);
          this.getAllUploadPosts();
        });

      this.setState((prevState, props) => {
        return {
          uploadlikeupdated: false,
          likecolor: "black",
        };
      });
    }
  };

  uploadupdatedislike = (id) => {
    console.log(id);

    if (!this.state.uploaddislikeupdated) {
      axios
        .patch("http://localhost:4000/Bloguploader/dislike/" + id)
        .then((res) => {
          console.log(res);
          this.getAllUploadPosts();
        });
      this.setState((prevState, props) => {
        return {
          uploaddislikeupdated: true,
          dislikecolor: "blue",
        };
      });
    } else {
      axios
        .patch("http://localhost:4000/Bloguploader/disunlike/" + id)
        .then((res) => {
          console.log(res);
          this.getAllUploadPosts();
        });

      this.setState((prevState, props) => {
        return {
          uploaddislikeupdated: false,
          dislikecolor: "black",
        };
      });
    }
  };

  componentDidMount() {
    this.getAllPosts();
    this.getAllUploadPosts();
    console.log(this.context.loggedInUser.username);
    console.log(this.context.UserDetails.firstName);
     
 
    
  }

  getAllPosts() {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/Blog/Bloginterface`)
      .then((res) => {
        this.setState((cur) => ({ ...cur, blogs: res.data.reverse() }));
        this.setState((cur) => ({ ...cur, allBlogs: res.data.reverse() }));
      });
    // console.log(res.data);
  }
  getAllUploadPosts = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/Bloguploader`).then((res) => {
      this.setState((cur) => ({ ...cur, uploadBlogs: res.data.reverse() }));
      this.setState((cur) => ({ ...cur, allUploadBlogs: res.data.reverse() }));
    });
    // console.log(this.state.res);
  };

  deletePost = () => {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/Blog/` + this.state.deleteBlog)
      .then((res) => {
        console.log(res);
        this.handleclosemodal();
        this.getAllPosts();
      });
  };

  deleteUploadPost = () => {
    axios
      .delete(
        `${process.env.REACT_APP_BASE_URL}/Bloguploader/` +
          this.state.deleteuploadBlog
      )
      .then((res) => {
        console.log(res);
        this.handleuploadclosemodal();
        this.getAllUploadPosts();
      });
  };

  editBlog = (id) => {
    this.setState(
      {
        blogid: id,
      },
      function () {
        console.log(this.state.blogid);
      }
    );
  };

  updateviews(id){
    axios.put(`${process.env.REACT_APP_BASE_URL}/Blog/updateviews/`+id)
    .then((res)=>{console.log(res)})
  }

  filterContent(blogs, uploadedBlogs, searchTerme) {
    const result1 = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerme)
    );

    const result2 = uploadedBlogs.filter((ublog) =>
      ublog.title.toLowerCase().includes(searchTerme)
    );

    //const result = this.state.blogs.filter((blog) => blog.title.toLowerCase().includes(searchTerme));
    this.setState((cur) => ({ ...cur, blogs: result1 }));
    this.setState((cur) => ({ ...cur, uploadBlogs: result2 }));
  }

  handleTextSearch = (e) => {
    const searchTerme = e.currentTarget.value;
    console.log(this.state.allBlogs);
    this.filterContent(
      this.state.allBlogs,
      this.state.allUploadBlogs,
      searchTerme
    );
  };
handleupdateviews(id){
  console.log(id);
this.updateviews(id)
}

  handlemodal(y) {
    console.log(y);
    this.setState(() => ({ showblogmodal: true, deleteBlog: y }));
  }

  handleuploadmodal(x) {
    this.setState(() => ({ showuploadmodal: true, deleteuploadBlog: x }));
  }

  handleclosemodal() {
    this.setState({ showblogmodal: false });
  }
  handleuploadclosemodal() {
    this.setState({ showuploadmodal: false });
  }

  loadmore() {
    this.setState((old) => {
      return { visibleblog: old.visibleblog + 5 };
    });
  }

  render() {
    return (
      
      <div style={{ backgroundColor: "rgba(192,192,192,0.3)" }}>
        <style>
@import url('https://fonts.googleapis.com/css2?family=B612:wght@400;700&display=swap');
</style> 
        <Button
          style={{ marginLeft: "40px", marginTop: "20px" }}
          as={Link}
          to="/Blog/BlogEditor"
        >
          <MdNoteAdd style={{ marginRight: "5px", fontSize: "20px" }} />
          Create Blog
        </Button>

        <Container>
          <Row>
            <Col>
              <div>
                <form class="d-flex searchbar">
                  <input
                    class="form-control me-2 "
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={this.handleTextSearch}
                  />
                </form>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} sm={12} md={6}>
              <h3 className="blog-section-title">Written Blogs</h3>
              {this.state.blogs.slice(0, this.state.visibleblog).map((blog) => (
                <Card
                  key={blog._id}
                  style={{
                    width: "30rem",
                    margin: "auto",
                    marginTop: "20px",
                    marginBottom: "50px",
                    borderStyle: "outset",
                    borderWidth: "2px",
                    borderColor: "black",
                    boxShadow:'10px 10px 5px #aaaaaa',
                    fontFamily:'B612'
                  }}
                >
                  <p style={{ fontSize: "13px" }}>
                    <img
                      src={pic2}
                      alt=""
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "5px",
                        marginTop: "10px",
                        marginLeft: "5px",
                        borderRadius: "2px",
                      }}
                    />
                    <strong>{blog.firstname} {blog.lastname} Shared by</strong>
                  </p>
                  <span
                    style={{
                      float: "right",
                      marginTop: "-15px",
                      marginLeft: "5px",
                    }}
                  >
                    <strong>Categorie | {blog.categorie}</strong>
                   {/*  <box-icon  style={{marginLeft:"235px"}} name='time' animation='flashing' size="xs" ></box-icon> */}
                    <span className="blog-date">
                      {moment(blog.createdAt).format("MMM DD ,YYYY")}
                    </span>
                  </span>
                  
                  
                  

                  <Card.Img
                    variant="top"
                    alt=""
                    style={{
                      border: "1px solid gray",
                      width: "29.8rem",
                      height: "19rem",
                    }}
                    src={`http://localhost:4000/images/${blog.coverImage}`}
                  />
                  <Card.Body>
                    <Card.Title className="cardtitle">
                      <h4>
                        <strong>{blog.title}</strong>
                      </h4>
                    </Card.Title>
                    <div className="row">
                      <div className="col-6">
                        <Link
                          to={{
                            pathname: "/Blog/BlogView/",
                            query: { id: blog._id },
                          }}
                        >
                          <Button
                            onClick={() => this.handleupdateviews(blog._id)}
                            style={{ marginLeft: "5px", marginRight: "5px" }}
                            variant="primary"
                            size="sm"
                          >
                            Read
                          </Button>
                        </Link>
                        <Link
                          to={{
                            pathname: "/Blog/BlogEditPost",
                            query: { id: blog._id },
                          }}
                        >
                          {(blog.firebaseId===this.context.UserDetails.firebaseUserId) &&(
                          <Button
                            className=""
                            variant="success"
                            onClick={this.editBlog.bind(this, blog._id)}
                            size="sm"
                          >
                            Edit
                          </Button>)}
                        </Link>
                        {(blog.firebaseId===this.context.UserDetails.firebaseUserId) &&(
                        <Button
                          style={{ marginLeft: "5px", marginRight: "5px" }}
                          variant="danger"
                          size="sm"
                          onClick={() =>
                            this.handlemodal(blog._id)
                          } /* onClick={this.deletePost.bind(this,blog._id)} */
                        >
                          Delete
                        </Button>)}
                        <div>
                          <p>
                            <span class="badge rounded-pill bg-dark blog-views">
                             {blog.views}
                            </span>{" "}
                            Views
                          </p>
                        </div>
                      </div>

                      <div className="col-6">
                        <div style={{ float: "right" }}>
                          <box-icon
                            onClick={this.updatedislike.bind(this, blog._id)}
                            id="1"
                            border="square"
                            type="solid"
                            name="dislike"
                            color={blog.dislikecolor}
                            size="md"
                          ></box-icon>
                          <label className="label">{blog.dislike}</label>
                          <box-icon
                            onClick={this.updatelike.bind(this, blog._id)}
                            id="1"
                            border="square"
                            type="solid"
                            name="like"
                            color={blog.likecolor}
                            size="md"
                          ></box-icon>
                          <label className="label">{blog.like}</label>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </Col>

            <Col>
              <h3 className="blog-section-title">Linked Blogs</h3>
              {this.state.uploadBlogs
                .slice(0, this.state.visibleblog)
                .map((blog) => (
                  <Card
                    key={blog._id}
                    style={{
                      width: "30rem",
                      margin: "auto",
                      marginTop: "20px",
                      marginBottom: "50px",
                      borderStyle: "outset",
                      borderWidth: "2px",
                      borderColor: "black",
                      boxShadow:'10px 10px 5px #aaaaaa',
                      fontFamily:'B612'
                    }}
                  >
                    <p style={{ fontSize: "13px" }}>
                      <img
                        src={pic2}
                        alt=""
                        style={{
                          width: "30px",
                          height: "30px",
                          marginRight: "5px",
                          marginTop: "10px",
                          marginLeft: "5px",
                          borderRadius: "2px",
                        }}
                      />
                      <strong>{blog.firstname} {blog.lastname} Shared by</strong>
                    </p>
                    <span
                      style={{
                        float: "right",
                        marginTop: "-15px",
                        marginLeft: "5px",
                      }}
                    >
                      <strong>Categorie | {blog.categorie}</strong>
                      {/* <box-icon  style={{marginLeft:"238px"}} name='time' animation='flashing' size="xs" ></box-icon> */}
                      <span className="blog-date">
                      {moment(blog.updatedAt).format("MMM DD ,YYYY")}
                    </span>
                    </span>
                    <Card.Img
                      variant="top"
                      alt=""
                      style={{
                        border: "1px solid gray",
                        width: "29.8rem",
                        height: "19rem",
                      }}
                      src={blog.image}
                    />
                    <Card.Body>
                      <Card.Title style={{ textAlign: "center" }}>
                        <h4>
                          <strong>{blog.title}</strong>
                        </h4>
                      </Card.Title>
                      <Button
                        target="_blank"
                        href={blog.url}
                        style={{ marginLeft: "5px", marginRight: "5px" }}
                        variant="primary"
                        size="sm"
                      >
                        Read
                      </Button>
                      {(blog.firebaseId===this.context.UserDetails.firebaseUserId) &&(
                      <Button
                        style={{ marginLeft: "5px", marginRight: "5px" }}
                        variant="danger"
                        size="sm"
                        onClick={() => this.handleuploadmodal(blog._id)}
                      >
                        Delete
                      </Button>)}
                      <div style={{ float: "right" }}>
                        <box-icon
                          onClick={this.uploadupdatedislike.bind(
                            this,
                            blog._id
                          )}
                          id="1"
                          border="square"
                          type="solid"
                          name="dislike"
                          color={blog.dislikecolor}
                          size="md"
                        ></box-icon>
                        <label className="label">{blog.dislike}</label>
                        <box-icon
                          onClick={this.uploadupdatelike.bind(this, blog._id)}
                          id="1"
                          border="square"
                          type="solid"
                          name="like"
                          color={blog.likecolor}
                          size="md"
                        ></box-icon>
                        <label className="label">{blog.like}</label>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              <Modal show={this.state.showblogmodal}>
                <Modal.Header>
                  <Modal.Title>Delete Article</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want delete this Article?</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleclosemodal}>
                    Close
                  </Button>

                  <Button variant="danger" onClick={this.deletePost}>
                    Delete Article
                  </Button>
                </Modal.Footer>
              </Modal>

              <Modal show={this.state.showuploadmodal}>
                <Modal.Header>
                  <Modal.Title>Delete Article</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want delete this Article?</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleclosemodal}>
                    Close
                  </Button>

                  <Button variant="danger" onClick={this.deleteUploadPost}>
                    Delete Article
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
          <Row>
            <div class="col-md-12 p-3 text-center">
              {this.state.visibleblog < (this.state.blogs.length || this.state.uploadBlogs.length ) && ( 
                <button
                  type="button"
                  class="btn btn-outline-info"
                  onClick={this.loadmore}
                >
                  Read more
                </button>
              )} 
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Bloginterface;

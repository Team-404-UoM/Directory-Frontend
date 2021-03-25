import React from "react";
import { Component } from "react";
import axios from "axios";
import pic2 from "../Forum/pic2.jpg";
import "./Blogview.css";
import moment from "moment";


import { Card } from "react-bootstrap";


class BlogView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: "",
      body: "",
      categorie: "",
      createtime: "",
      updatetime: "",
      coverImage: "",
      comment:"",
      comments:[],
      show: false,
      width: { width: "0%" },
      color: { backgroundColor: "white" },
    };
    this.handleSidebar = this.handleSidebar.bind(this);
    this.handleCloseSidebar = this.handleCloseSidebar.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleComment=this.handleComment.bind(this);
  }

  componentDidMount() {
    //{if(this.props.location.query!=undefined){
    console.log(this.props);
    this.getBlog()
  }
  
   getBlog(){
    axios.get(`${process.env.REACT_APP_BASE_URL}/Blog/` + this.props.location.query.id)
      .then((res) =>
        this.setState({
          title: res.data.blog.title,
          image: res.data.blog.image,
          body: res.data.blog.body,
          coverImage: res.data.blog.coverImage,
          categorie: res.data.blog.categorie,
          createtime: res.data.blog.createdAt,
          updatetime: res.data.blog.updatedAt,
          comments:res.data.blog.comments.reverse()
        })
      )
    console.log(this.state.title);
    //.catch((err)=>console.log(err))
  }
  handleChange(event){
    this.setState({comment:event.target.value});
    console.log(this.state.comment.value)

  }

 handleComment(){
  const comment={
    body:this.state.comment,
    date:Date.now()
  }
  axios.patch('http://localhost:4000/Blog/comment/'+this.props.location.query.id,comment)
  .then((res)=> this.getBlog(),this.setState({
    comment:"",
   
  }))

} 

handledDeleteComment(body){
  console.log(body)
 axios.delete("http://localhost:4000/Blog/comment/" + this.props.location.query.id +"/?name="+body)
  .then((res)=>this.getBlog())    
 
}


  handleSidebar() {
    this.setState({
      show: true,
      width: { width: "30%" },
    });
    console.log(this.state.show);
  }

  handleCloseSidebar() {
    this.setState({
      show: false,
      width: { width: "0%" },
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-4" hidden={this.state.show}></div>
            <div className="col-12">
              <div className="openbutton">
                <box-icon
                  onClick={this.handleSidebar}
                  size="lg"
                  name="comment-detail"
                ></box-icon>
                <div style={{marginTop:"-10px",marginLeft:"10px"}}><span class="badge rounded-pill bg-dark">{this.state.comments.length}</span></div>
                
              </div>

              <div
                className={"sidebar"}
                style={this.state.width }
              >
                <button
                  onClick={this.handleCloseSidebar}
                  type="button"
                  class="btn-close btn-close-white closeButton"
                  aria-label="Close"
                ></button>
                {/* <h1>Comments</h1> */}
                <center>
                  <textarea className="comment-size" placeholder="Type comment here" value={this.state.comment} onChange={this.handleChange}></textarea>
                </center>
                <button className="btn btn-primary comment-post-button" onClick={this.handleComment}>
                  Post
                </button> 
                {this.state.comments.map((comment)=>(
                /* <Toast className="comment-reply">
                  <Toast.Header>
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>{moment(comment.date).fromNow()}</small>
                  </Toast.Header>
                  <Toast.Body>
                   {comment.body}
                  </Toast.Body>
                </Toast>  */
               <Card style={{width:'20rem'}} className="comment-reply">
               <Card.Body>
                 <Card.Title style={{float:"left"}}>
                   <p style={{ fontSize: "13px", textAlign: "center" }}>
                    <img
                      src={pic2}
                      alt="blog-cover"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginTop: "-5px",
                        marginRight:"2px",
                        borderRadius: "2px",
                      }}
                    />
                    <strong>Anushka Praveen </strong></p></Card.Title>
                 <Card.Subtitle className="mb-2 text-muted "><small>{moment(comment.date).fromNow()}</small></Card.Subtitle><br/>
                 
                 <Card.Text>
                 {comment.body}
                 </Card.Text>
                 {/* <Card.Link href="#">Card Link</Card.Link>
                 <Card.Link href="#">Another Link</Card.Link> */}
                 <box-icon style={{float:'right'}} color='red' name='trash' onClick={()=>this.handledDeleteComment(comment.body)}></box-icon>
               </Card.Body>
             </Card>))}
              </div>

              <React.Fragment>
                <div>
                  <h1 style={{ textAlign: "center", marginTop: "20px" }}>
                   <b>{this.state.title}</b> 
                  </h1>
                  <p style={{ fontSize: "13px", textAlign: "center" }}>
                    <img
                      src={pic2}
                      alt="blog-cover"
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "15px",
                        marginTop: "-5px",
                        marginLeft: "0px",
                        borderRadius: "2px",
                      }}
                    />
                    <strong>Anushka Praveen </strong>
                    <span style={{ marginLeft: "40px" }}>
                      <box-icon
                        name="time"
                        animation="flashing"
                        size="xs"
                      ></box-icon>
                      <strong>
                        Created At:{" "}
                        {moment(this.state.createtime).format("MMM DD ,YYYY")}
                      </strong>
                    </span>
                    <span style={{ marginLeft: "50px" }}>
                      <box-icon
                        name="time"
                        animation="flashing"
                        size="xs"
                      ></box-icon>
                      <strong>
                        Updated At:{" "}
                        {moment(this.state.updatetime).format("MMM DD ,YYYY")}
                      </strong>
                    </span>
                  </p>
                  <p>
                    <span className="categorie-area">
                     <center>Category | {this.state.categorie}</center> 
                    </span>
                  </p>
                  <img
                    src={`http://localhost:4000/images/${this.state.coverImage}`}
                    alt="Cover"
                    style={{
                      border: "1px solid gray",
                      width: "29.8rem",
                      height: "20rem",
                      marginLeft: "32%",
                      marginBottom: "30px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div>
                  <p
                    style={{ padding: "20px 50px 20px" }}
                    dangerouslySetInnerHTML={{ __html: this.state.body }}
                  ></p>
                </div>
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogView;

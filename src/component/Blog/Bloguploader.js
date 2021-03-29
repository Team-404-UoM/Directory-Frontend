import React from "react";
import { Component } from "react";
import "./BlogEditor.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
//import { render } from '@testing-library/react';
import { Link } from "react-router-dom";
import Postselection from "./Postselection";
import axios from "axios";

class BlogEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: "",
      url: "",
      categorie:"",
      show: false,
      titlevalidate:"",
      imagevalidate:"",
      urlvalidate:"",
      categorievalidate:""
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleUrl = this.handleUrl.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlemodal = this.handlemodal.bind(this);
    this.handleclosemodal = this.handleclosemodal.bind(this);
    this.handlecategorie=this.handlecategorie.bind(this);
  }

  validate=()=>{
    let titlevalidate="";
    let imagevalidate="";
    let categorievalidate="";
    let urlvalidate="";

    if(!this.state.title){
      titlevalidate="Title Cannot be blank";
    }
    if(!this.state.url){
      urlvalidate="URL Cannot be blank";
    }
    if(!this.state.image){
      imagevalidate="Cover Image Cannot be blank";
    }
    if(!this.state.categorie){
      categorievalidate="Categorie Cannot be blank"
    }
    if (titlevalidate || urlvalidate || imagevalidate || categorievalidate) {
      this.setState({ titlevalidate, urlvalidate, imagevalidate, categorievalidate});
      return false;
  } else {
      return true;
  }
 }


  handleSubmit(event) {
    console.log(this.state.title);
    const isValid=this.validate();
    event.preventDefault();
    if(isValid){
    const blogdetails = {
      title: this.state.title,
      image: this.state.image,
      url: this.state.url,
      categorie:this.state.categorie
    };

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/BlogUploader`, blogdetails)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.handleclosemodal();
        console.log("mounted");
        this.setState({
          title: "",
          image: "",
          url: "",
        });
      });
  }}

  handleTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }
  handleImage(event) {
    this.setState({
      image: event.target.value,
    });
  }
  handleUrl(event) {
    this.setState({
      url: event.target.value,
    });
  }
  handlecategorie(event){
    this.setState({
      categorie:event.target.value,
    });
  }

  componentDidMount() {
    console.log("mounted");
  }

  handlemodal() {
    this.setState({ show: true });
  }
  handleclosemodal() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        <Postselection/>

        <div className="center">
          <h6> Link Your Article Here </h6>
        </div>

        <Jumbotron className="jumb">
          <form>
            <div>
              <label  className="link-topic-label"> Topic </label>{" "}
              <input
                className="link-topic-textbox"
                type="text"
                size="80"
                value={this.state.title}
                onChange={this.handleTitle}
              />
              <div style={{color:'red',fontSize:12,marginLeft:'10.5%'}}>{this.state.titlevalidate}</div>
            </div>
            <div >
              <label className="link-imgurl-label"> Cover Photo URL </label>
              <input
                className="link-imgurl-textbox"
                type="text"
                size="80"
                value={this.state.image}
                onChange={this.handleImage}
              />
              <div style={{color:'red',fontSize:12,marginLeft:'10.5%'}}>{this.state.imagevalidate}</div>
            </div>
            <div >
              <label className="link-url-label"> Blog URL </label>
              <input
                className="link-url-textbox"
                type="text"
                size="80"
                value={this.state.url}
                onChange={this.handleUrl}
              />
              <div style={{color:'red',fontSize:12,marginLeft:'10.5%'}}>{this.state.urlvalidate}</div>
            </div>
            <label className="categorie-label" for="categorie">Choose a Category:</label>
                  <select className="categorie-select" value={this.state.categorie} name="categorie" onChange={this.handlecategorie} id="catrgories">
                  <option defaultvalue="select" hidden>Select the Category</option>
                    <option value="Economic">Economic</option>
                    <option value="Finance">Finance</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Nature">Nature</option>
                    <option value="Medical">Medical</option>
                    <option value="Social">Social</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Technology">Technology</option>
                    <option value="Sport">Sport</option>
                    <option value="Science">Science</option>
                    <option value="Education">Education</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Business">Business</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Music">Music</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Law">Law</option>
                    <option value="Photography">Photography</option>
                    <option value="Design">Design</option>
                    <option value="Other">Other</option>
                  </select>
                  <div style={{color:'red',fontSize:12,marginLeft:'10.5%'}}>{this.state.categorievalidate}</div>
            <Modal show={this.state.show}>
              <Modal.Header closeButton onClick={this.handleclosemodal}>
                <Modal.Title>Save Article</Modal.Title>
              </Modal.Header>
              <Modal.Body>Do you want Post this Article?</Modal.Body>
              <span style={{color:'red',fontSize:12,marginLeft:'3%',marginTop:'-15px'}}>{this.state.titlevalidate}</span>
              <span style={{color:'red',fontSize:12,marginLeft:'3%'}}>{this.state.imagevalidate}</span>
              <span style={{color:'red',fontSize:12,marginLeft:'3%'}}>{this.state.urlvalidate}</span>
              <span style={{color:'red',fontSize:12,marginLeft:'3%',marginBottom:'5px'}}>{this.state.categorievalidate}</span>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleclosemodal}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleSubmit}>
                  Post Article
                </Button>
              </Modal.Footer>
            </Modal>

            <div>
              <Button
                onClick={this.handlemodal}
                className="button2"
                variant="dark"
              >
                Post
              </Button>

              <Link to="/Blog">
                <Button
                  className="button2"
                  variant="dark"
                  
                >
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </Jumbotron>
      </div>
    );
  }
}

export default BlogEditor;

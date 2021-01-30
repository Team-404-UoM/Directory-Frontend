import React from "react";
import { Component } from "react";
import "./BlogEditor.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import Jumbotron from "react-bootstrap/Jumbotron";

import Postselection from "./Postselection";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class BlogEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: "",
      body: "",
      like: 0,
      blogImage: "",
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
  }
  onChangeFile(event) {
    this.setState({
      blogImage: event.target.files[0],
    });
  }

  handleSubmit(event) {
    console.log(this.state.title);
    event.preventDefault();

    const blogdetails = {
      title: this.state.title,
      image: this.state.image,
      body: this.state.body,
      like: this.state.like,
      blogImage: this.state.blogImage,
    };

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/Blog/`, blogdetails)
      .then((res) => {
        console.log(res);
        console.log(res.data);

        console.log("mounted");
        this.setState({
          title: "",
          image: "",
          body: "",
        });
      });
  }

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

  render() {
    return (
      <div class="container-fluid">
        <div className="row">
          <div className="col-12">
            <Postselection />
            <div className="center">
              <h6> Write and Publish Your Article Here </h6>
            </div>
          </div>
        </div>
        <div>
          <Jumbotron className="jumb">
            <div className="row">
              <div className="col-6">
                <form>
                  <div className="label1">
                    <label>
                      {" "}
                      Topic{" "}
                      <input
                        className="textbox  "
                        type="text"
                        size="80"
                        value={this.state.title}
                        onChange={this.handleTitle}
                      />
                    </label>
                  </div>

                  <div className="label1">
                    <label> Cover Photo URL </label>{" "}
                    <input
                      className="textboxcover"
                      value={this.state.image}
                      onChange={this.handleImage}
                      type="text"
                      size="80"
                    />
                    <input
                      type="file"
                      filename="image"
                      onChange={this.onChangeFile}
                    />
                  </div>
                  <label for="categorie">Choose a Categories:</label>
                  <select name="categorie" id="cars">
                    <option value="volvo">Economic</option>
                    <option value="saab">Finance</option>
                    <option value="opel">Gaming</option>
                    <option value="audi">Nature</option>
                    <option value="audi">Medical</option>
                    <option value="audi">Social</option>
                    <option value="audi">Shopping</option>
                    <option value="audi">Technology</option>
                    <option value="audi">Sport</option>
                    <option value="audi">Science</option>
                    <option value="audi">Education</option>
                    <option value="audi">Social Media</option>
                    <option value="audi">Business</option>
                    <option value="audi">Fashion</option>
                    <option value="audi">Music</option>
                    <option value="audi">Food</option>
                    <option value="audi">Travel</option>
                    <option value="audi">Law</option>
                    <option value="audi">Photography</option>
                    <option value="audi">Design</option>
                    <option value="audi">Other</option>
                  </select>

                  <div className="label1">
                    <label> Description </label>
                  </div>
                  <div className="editor">
                    <CKEditor
                      placeholder="write"
                      editor={ClassicEditor}
                      data={this.state.body}
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        this.setState({ body: data });
                      }}
                    />
                  </div>

                  <div>
                    <Button
                      onClick={this.handleSubmit}
                      className="button2"
                      variant="dark"
                    >
                      Post
                    </Button>

                    <Button
                      className="button2"
                      variant="dark"
                      href="http://localhost:3000/Blog"
                    >
                      Cancel
                    </Button>

                    <Button
                      onClick={this.handleSubmit}
                      className="button2"
                      variant="primary"
                    >
                      Preview
                    </Button>
                  </div>
                </form>
              </div>

              <div className="col-6">
                <Button
                  style={{ folat: "right", marginLeft: "30rem" }}
                  variant="dark"
                >
                  Templates
                </Button>
              </div>
            </div>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default BlogEditor;

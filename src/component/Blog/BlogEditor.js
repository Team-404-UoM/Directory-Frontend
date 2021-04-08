import React from "react";
import { Component } from "react";
import "./BlogEditor.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

import Jumbotron from "react-bootstrap/Jumbotron";

import Postselection from "./Postselection";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";
import MyUploadAdapter from "./UploadAdapter";
import { Usercontext, user } from "../../context/context";
class BlogEditor extends Component {
  static contextType = Usercontext;
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      //image: "",
      body: "",
      like: 0,
      coverImage: null,
      show: false,
      previewshow: false,
      preview: { title: "", image: "", body: "" },
      result: "",
      imageUrl: null,
      bodyvalidate: "",
      coverimagevalidate: "",
      categorievalidate: "",
      titlevalidate: "",
      id: props.id,
      content: props.content,
      handleWYSIWYGInput: props.handleWYSIWYGInput,
      editor: ClassicEditor,
    };
    this.handleTitle = this.handleTitle.bind(this);
    //this.handleImage = this.handleImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    this.handlecategorie = this.handlecategorie.bind(this);
    this.handlemodal = this.handlemodal.bind(this);
    this.handleclosemodal = this.handleclosemodal.bind(this);
    this.handlePreviewModal = this.handlePreviewModal.bind(this);
    this.handleClosePreviewModal = this.handleClosePreviewModal.bind(this);
  }
//validate function
  validate = () => {
    let titlevalidate = "";
    let coverimagevalidate = "";
    let categorievalidate = "";
    let bodyvalidate = "";

    if (!this.state.title) {
      titlevalidate = "Title Cannot be blank";
    }
    if (!this.state.body) {
      bodyvalidate = "Body Cannot be blank";
    }
    if (!this.state.coverImage) {
      coverimagevalidate = "Cover Image Cannot be blank";
    }
    if (!this.state.categorie) {
      categorievalidate = "Catgorie Cannot be blank";
    }
    if (
      titlevalidate ||
      bodyvalidate ||
      coverimagevalidate ||
      categorievalidate
    ) {
      this.setState({
        titlevalidate,
        bodyvalidate,
        coverimagevalidate,
        categorievalidate,
      });
      return false;
    } else {
      return true;
    }
  };

  onChangeFile(event) {
    this.setState({
      coverImage: event.target.files[0],
      imageUrl: URL.createObjectURL(event.target.files[0]),
      loaded: 0,
    });
  }
//craete blog
  handleSubmit(event) {
    console.log(this.state.title);
    const isValid = this.validate();
    event.preventDefault();

    if (isValid) {
      const blogdetails = {
        title: this.state.title,
        body: this.state.body,
        like: this.state.like,
        categorie: this.state.categorie,
        firebaseId: this.context.UserDetails.firebaseUserId,
        firstname: this.context.UserDetails.firstName,
        lastname: this.context.UserDetails.lastName,
      };
      const data = new FormData();
      data.append("file", this.state.coverImage);
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/Blog/`, blogdetails)
        .then((res) => {
          this.setState({
            result: res.data,
          });
          console.log(this.state.result.blog._id);
          axios
            .put(
              "http://localhost:4000/file/upload/" + this.state.result.blog._id,
              data
            )
            .then((res) => {
              console.log(res);
            });
          console.log(res.data);
          this.handleclosemodal();
          console.log("mounted");
          this.setState({
            title: "",
            body: "",
          });
        })
        .catch((err) => {});
    }
  }

  handleTitle(event) {
    this.setState({
      title: event.target.value,
    });
  }
  handlecategorie(event) {
    this.setState({
      categorie: event.target.value,
    });
  }

  /*  handleImage(event) {
    this.setState({
      image: event.target.value,
    });
  } */

  handlemodal() {
    this.setState({ show: true });
  }
  handleclosemodal() {
    this.setState({ show: false });
  }
  handlePreviewModal() {
    this.setState({ previewshow: true });
  }
  handleClosePreviewModal() {
    this.setState({ previewshow: false });
  }

  render() {
    return (
      <div className="container-fluid">
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
              <div className="col-10">
                <form>
                  <div>
                    <label className="topic-label">Topic</label>
                    <input
                      className="topic-textbox"
                      type="text"
                      size="80"
                      value={this.state.title}
                      onChange={this.handleTitle}
                    />
                    <div
                      style={{ color: "red", fontSize: 12, marginLeft: "13%" }}
                    >
                      {this.state.titlevalidate}
                    </div>
                  </div>

                  <div>
                    <label className="url-label"> Cover Image </label>{" "}
                    {/* <input
                      className="url-textbox"
                      value={this.state.image}
                      onChange={this.handleImage}
                      type="text"
                      size="80"
                    /> */}
                    <input
                      className="image-select"
                      type="file"
                      filename="image"
                      onChange={this.onChangeFile}
                    />
                    <div
                      style={{ color: "red", fontSize: 12, marginLeft: "13%" }}
                    >
                      {this.state.coverimagevalidate}
                    </div>
                  </div>
                  <label className="categorie-label">Choose a Category:</label>
                  <select
                    className="categorie-select"
                    value={this.state.categorie}
                    name="categorie"
                    onChange={this.handlecategorie}
                    id="catrgories"
                  >
                    <option defaultValue="select" hidden>
                      Select the Category
                    </option>
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
                  <div
                    style={{ color: "red", fontSize: 12, marginLeft: "13%" }}
                  >
                    {this.state.categorievalidate}
                  </div>
                  <div className="label1">
                    <label> Description </label>
                  </div>
                  
                  <div className="editor">
                    <CKEditor
                      placeholder="write"
                      editor={ClassicEditor}
                      data={this.state.body}
                      config={{
                        ckfinder: {
                          // Upload the images to the server using the CKFinder QuickUpload command.
                          uploadUrl:
                            "https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json",
                        },
                      }}
                      /*  onInit={editor => {
                        // Connect the upload adapter using code below 
                        editor.plugins.get("FileRepository").createUploadAdapter = function(loader) {
                           return new MyUploadAdapter(loader);
                        }}} */
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
                  <div
                    style={{ color: "red", fontSize: 12, marginLeft: "13%" }}
                  >
                    {this.state.bodyvalidate}
                  </div>
                  
                  <Modal show={this.state.show}>
                    <Modal.Header closeButton onClick={this.handleclosemodal}>
                      <Modal.Title>Save Article</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you want Post this Article?</Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={this.handleclosemodal}
                      >
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        onClick={this.handleSubmit}
                        href="#test"
                      >
                        Post Article
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <Modal
                    show={this.state.previewshow}
                    dialogClassName="modal-90w"
                    size="lg"
                    aria-labelledby="example-custom-modal-styling-title"
                  >
                    <Modal.Header>
                      <Modal.Title id="example-custom-modal-styling-title">
                        <h3 className="preview-content">
                          <strong>{this.state.title}</strong>
                        </h3>
                        <img
                          className="preview-content"
                          src={this.state.imageUrl}
                          alt="preview-img"
                          width="120px"
                          height="100px"
                        />
                        <p>Categorie : {this.state.categorie}</p>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p
                        dangerouslySetInnerHTML={{ __html: this.state.body }}
                      ></p>
                      <Button onClick={this.handleClosePreviewModal}>
                        Close
                      </Button>
                    </Modal.Body>
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
                      {" "}
                      <Button className="button2" variant="dark">
                        Cancel
                      </Button>
                    </Link>
                    {this.state.title === "" ||
                      this.state.image === "" ||
                      this.state.body === "" || (
                        <Button
                          className="button2"
                          variant="primary"
                          onClick={this.handlePreviewModal}
                        >
                          Preview
                        </Button>
                      )}
                  </div>
                </form>
              </div>

              {/* <div className="col-2">
                <Button style={{ marginLeft: "40px" }} variant="dark">
                  Templates
                </Button>
              </div> */}
            </div>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default BlogEditor;

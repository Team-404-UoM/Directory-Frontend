import React from 'react';
import { Component } from 'react';
import './BlogEditor.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";


import Jumbotron from 'react-bootstrap/Jumbotron'

import Postselection from './Postselection';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



class BlogEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: '',
            body: '',
            categorie:'',
            previewshow:false,
            bodyvalidate: "",
      categorievalidate: "",
      titlevalidate: ""


        };

        this.handleTitle = this.handleTitle.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlecategorie=this.handlecategorie.bind(this);
        this.handlePreview = this.handlePreview.bind(this);
    }

    componentDidMount() {if(this.props.location.query!==undefined){
        console.log(this.props)
        axios.get(`${process.env.REACT_APP_BASE_URL}/Blog/`+this.props.location.query.id)
            .then(res => this.setState({
                title: res.data.blog.title,
                image: res.data.blog.coverImage,
                body: res.data.blog.body,
                categorie:res.data.blog.categorie,
                
            }))
            .catch((err)=>console.log(err))}

        
    }
   


    validate = () => {
        let titlevalidate = "";
        let categorievalidate = "";
        let bodyvalidate = "";
    
        if (!this.state.title) {
          titlevalidate = "Title Cannot be blank";
        }
        if (!this.state.body) {
          bodyvalidate = "Body Cannot be blank";
        }
        if (!this.state.categorie) {
          categorievalidate = "Catgorie Cannot be blank";
        }
        if (
          titlevalidate ||
          bodyvalidate ||
          categorievalidate
        ) {
          this.setState({
            titlevalidate,
            bodyvalidate,
            categorievalidate,
          });
          return false;
        } else {
          return true;
        }
      };



    handleSubmit(event) {
        const isValid = this.validate();
        console.log(this.state.title);
        event.preventDefault();
        if (isValid) {
        const blogdetails = {
            title: this.state.title,
            image: this.state.image,
            body: this.state.body,
            categorie:this.state.categorie,
        }

        axios.patch(`${process.env.REACT_APP_BASE_URL}/Blog/` + this.props.location.query.id, blogdetails)
            .then(res => {
                console.log(res);
                console.log(res.data);

                console.log("mounted")
                this.setState({
                    title: '',
                    image: '',
                    body: ''
                    
                })
            });
        }
    };




    handleTitle(event) {
        this.setState({
            title: event.target.value
        });

    }
    handleImage(event) {
        this.setState({
            image: event.target.value
        });

    }
    handlecategorie(event){
        this.setState({
          categorie:event.target.value,
        });
      }

      handlePreview(){
          console.log(this.state.image);
          console.log(this.state.title);
          if(this.state.previewshow==false){
          this.setState({previewshow:true

          })}else{
            this.setState({previewshow:false})
          }
      }




    render() {

        return (
            <Container fluid>
            <div>

                <Postselection />
                <div className='center' >
                    < h6 > Write and Publish Your Article Here </h6>
                </div>

                <Jumbotron className='jumb'>
                    
                    <form  >
                    {/* Edit mode insert sections */}
                        <div className='label1 '>
                            <label > Title   <input style={{marginLeft:'130px',paddingLeft:'8px',paddingBottom:'5px'}} type='text' size="80" value={this.state.title} onChange={this.handleTitle} />
                            </label>
                        </div>
                        <div
                      style={{ color: "red", fontSize: 12, marginLeft: "12%",marginTop:'-5px' }}
                    >
                      {this.state.titlevalidate}
                    </div>
                        
                        <div>
                        <label className="categorie-label" for="categorie">Choose a Categories:</label>
                  <select className="categorie-select" name="categorie" value={this.state.categorie} onChange={this.handlecategorie} id="catrgories">
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
                        </div>

                        <div className='label1'>
                            <label> Description </label>
                        </div>
                        <div className='editor'>


                            <CKEditor
                                editor={ClassicEditor}
                                data={this.state.body}
                                onReady={editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log('Editor is ready to use!', editor);
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    this.setState({ body: data });
                                }}

                            />
                        </div>
                        <div
                      style={{ color: "red", fontSize: 12, marginLeft: "11%",marginTop:'-5px' }}
                    >
                      {this.state.bodyvalidate}
                    </div>
                        <div>
                            <Button onClick={this.handleSubmit} className='button2' variant="dark">Post</Button>

                            <Link to="/Blog"><Button className='button2' variant="dark">Cancel</Button></Link>

                           
                    {this.state.title === "" ||
                                          this.state.body === "" || (             
              <Button
                onClick={this.handlePreview}
                className="button2"
                variant="primary"
              >
                Preview
              </Button>)}
                        </div>

                    </form>
                </Jumbotron>
                <Modal
        size="lg"
        show={this.state.previewshow}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            <div>
            <h5><span style={{fontWeight:'bold'}}>Title</span> - {this.state.title}</h5>
            </div>
           <div className='justify-content-center'>
             <img  src={`http://localhost:4000/images/${this.state.image}`}
                    alt="Cover"
                    style={{
                      border: "1px solid gray",
                      width: "10rem",
                      height: "8rem",
                      marginLeft: "130%",
                      marginBottom: "30px",
                      borderRadius: "5px",
                    }}
                  /></div>
           
           <p>Categorie : {this.state.categorie}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><p
                        dangerouslySetInnerHTML={{ __html: this.state.body }}
                      ></p><div><Button onClick={this.handlePreview}>Close</Button></div></Modal.Body>
        
      </Modal>
            </div>
            </Container>

        );
    }
}

export default BlogEditor;
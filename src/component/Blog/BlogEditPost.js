import React from 'react';
import { Component } from 'react';
import './BlogEditor.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


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


        };

        this.handleTitle = this.handleTitle.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {if(this.props.location.query!==undefined){
        console.log(this.props)
        axios.get('http://localhost:4000/Blog/'+this.props.location.query.id)
            .then(res => this.setState({
                title: res.data.blog.title,
                image: res.data.blog.image,
                body: res.data.blog.body
            }))
            .catch((err)=>console.log(err))}

        
    }



    handleSubmit(event) {
        console.log(this.state.title);
        event.preventDefault();

        const blogdetails = {
            title: this.state.title,
            image: this.state.image,
            body: this.state.body
        }

        axios.patch('http://localhost:4000/Blog/' + this.props.location.query.id, blogdetails)
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





    render() {

        return (
            <div>

                <Postselection />
                <div className='center' >
                    < h6 > Write and Publish Your Article Here </h6>
                </div>

                <Jumbotron className='jumb'>
                    <form  >
                        <div className='label1'>
                            <label > Topic   <input className='textbox' type='text' size="80" value={this.state.title} onChange={this.handleTitle} />
                            </label>
                        </div>
                        <div className='label1'>

                            <label> Cover Photo URL </label>  <input className='textboxcover' value={this.state.image} onChange={this.handleImage} type='text' size="80" />

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
                        <div>
                            <Button onClick={this.handleSubmit} className='button2' variant="dark">Post</Button>

                            <Button className='button2' variant="dark" href="/Blog/Bloginterface">Cancel</Button>
                        </div>

                    </form>
                </Jumbotron>

            </div>

        );
    }
}

export default BlogEditor;
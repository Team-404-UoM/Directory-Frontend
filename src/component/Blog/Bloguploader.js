import React from 'react';
import {Component} from 'react';
import './BlogEditor.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Modal} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
//import { render } from '@testing-library/react';
import { Link} from 'react-router-dom'
import Postselection from'./Postselection';
import axios from 'axios';

 class BlogEditor extends Component {

    constructor(props){
        super(props);
        this.state={
            title:'',
            image:'',
            url:'',
            show:false,
            
           
        };
          this.handleTitle=this.handleTitle.bind(this);
          this.handleImage=this.handleImage.bind(this);
          this.handleUrl=this.handleUrl.bind(this);
          this.handleSubmit=this.handleSubmit.bind(this);
          this.handlemodal=this.handlemodal.bind(this);
          this.handleclosemodal=this.handleclosemodal.bind(this);
    }

    handleSubmit(event){
        console.log(this.state.title);
        event.preventDefault();

        const blogdetails={
            title:this.state.title,
            image:this.state.image,
            url:this.state.url
        }  
    
       
            axios.post(`${process.env.REACT_APP_BASE_URL}/BlogUploader`,blogdetails).then(res=>{console.log(res);
            console.log(res.data);
            this.handleclosemodal();
            console.log("mounted")
            this.setState({
                title:'',
                image:'',
                url:''
            })
    });
        
    };

    handleTitle(event){
        this.setState({
            title: event.target.value}); 
        
    }
    handleImage(event){
        this.setState({
            image: event.target.value}); 
        
    }
    handleUrl(event){
        this.setState({
            url: event.target.value}); 
        
    }
     
     
    componentDidMount(){
        console.log("mounted")
    };

    handlemodal(){
        this.setState({show:true}
          )
      }
      handleclosemodal(){
        this.setState({show:false}
          )
      }

    
    render(){





    return ( 
        <div>
       <Postselection/>

        <div className = 'center' >
        < h6 > Upload Your Article Here </h6> 
        </div>

        <Jumbotron className='jumb'>
        <form >
        <div className='label1'>
        <label > Topic </label>  <input className='textbox' type='text' size="80" value={this.state.title} onChange={this.handleTitle}/>
        </div> 
        <div className='label1'>
        
        <label> Cover Photo URL </label>  <input className='textboxcover' type='text' size="80" value={this.state.image} onChange={this.handleImage}/>
        
        </div> 
        <div className='label1'>
        <label > Blog URL </label>  <input className='textbox' type='text' size="80" value={this.state.url} onChange={this.handleUrl}/>
        </div> 
        <Modal show={this.state.show} >
        <Modal.Header closeButton>
          <Modal.Title>Save Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want Post this Article?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleclosemodal} >
            Close
          </Button>
          <Button variant="primary" onClick={this.handleSubmit} >
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
       
        <Button className='button2' variant="dark" href="http://localhost:3000/Blog">Cancel</Button>
        </div>
        
        </form>	
        </Jumbotron>

        </div>

    );}
}

export default BlogEditor;
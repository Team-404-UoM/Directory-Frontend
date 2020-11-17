import React from 'react';
import {Component} from 'react';
import './BlogEditor.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
//import { render } from '@testing-library/react';
//import { Link} from 'react-router-dom'
import Postselection from'./Postselection';
import axios from 'axios';

 class BlogEditor extends Component {

    constructor(props){
        super(props);
        this.state={
            title:'',
            image:'',
            url:'',
            
           
        };
          this.handleTitle=this.handleTitle.bind(this);
          this.handleImage=this.handleImage.bind(this);
          this.handleUrl=this.handleUrl.bind(this);
          this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        console.log(this.state.title);
        event.preventDefault();

        const blogdetails={
            title:this.state.title,
            image:this.state.image,
            url:this.state.url
        }  
    
       
            axios.post('http://localhost:4000/BlogUploader',blogdetails).then(res=>{console.log(res);
            console.log(res.data);
        
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
        
        
       
        <div>
        <Button className='button2' variant="dark" onClick={this.handleSubmit}>Post</Button>
       
        <Button className='button2' variant="dark">Cancel</Button>
        </div>
        
        </form>	
        </Jumbotron>

        </div>

    );}
}

export default BlogEditor;
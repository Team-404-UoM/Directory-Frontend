import React from 'react';
import {Card,Button,Container,Col,Row} from 'react-bootstrap';
import './Bloginterface.css';
import { MdNoteAdd } from 'react-icons/md';
import { Component } from 'react';
import { Link} from 'react-router-dom'
import axios from 'axios';
import pic2 from '../Forum/pic2.jpg';





class Bloginterface extends Component {


   

        constructor(props){
      
          super(props);
          this.state ={
            blogs:[],
            uploadBlogs:[],
            blogid:'',
            vote:0,
            updated:false,
            color:'info'
          }
          this.updatevote = this.updatevote.bind(this);
        }
      
        updatevote() {
      
          if(!this.state.updated) {
            this.setState((prevState, props) => {
              return {
                vote: prevState.vote + 1,
                updated: true,
                color:'danger'
              };
            });
          } else {
      
            this.setState((prevState, props) => {
              return {
                vote: prevState.vote - 1,
                updated: false,
                color: 'info'
              };
            });
          }
      
      
        }
        componentDidMount() {
          this.getAllPosts();
          this.getAllUploadPosts();
        }      

        getAllPosts = () => {

          axios.get('http://localhost:4000/Blog/Bloginterface')
            .then(res => this.setState({ blogs: res.data.reverse() }))
            console.log(this.state.res)
        }
        getAllUploadPosts = () => {

          axios.get('http://localhost:4000/Bloguploader')
            .then(res => this.setState({ uploadBlogs: res.data.reverse() }))
            console.log(this.state.res)
        }


        deletePost = (id) => {
          axios.delete('http://localhost:4000/Blog/'+id)
            .then(res => {
              console.log(res);
              this.getAllPosts();
            })
           
        }
        
        deleteUploadPost = (id) => {
          axios.delete('http://localhost:4000/Bloguploader/'+id)
            .then(res => {
              console.log(res);
              this.getAllUploadPosts();
            })
           
        }

        editBlog=(id)=>{
          this.setState({
            blogid: id
        }, function () {
            console.log(this.state.blogid);
        });
      }
      



render(){
    return(
      
           <div style={{backgroundColor:'rgba(192,192,192,0.3)'}}>
            <Button style={{marginLeft:'40px',marginTop:'20px'}} as={Link} to="/Blog/BlogEditor"><MdNoteAdd style={{marginRight:'5px',fontSize:'20px'}} />Create Blog</Button>
           
           <Container>
             <Row>
               <Col>
           { this.state.blogs.map((blog)=>
           
            <Card key={blog._id} style={{width: '30rem',margin:'auto',marginTop:'20px',marginBottom:'50px',borderStyle:'outset',borderWidth:'2px', borderColor:'black'}}>
            <p style={{fontSize:'13px'}}><img src={pic2} alt="" style={{width:'30px',height:'30px',marginRight:'5px',marginTop:'10px',marginLeft:'5px',borderRadius:'2px'}}/><strong>Anushka Praveen Shared by</strong></p>
            <Card.Img variant="top" alt="" style={{border:'1px solid gray',width:'29.8rem',height:'19rem'}} src={blog.image} />
            <Card.Body>
            <Card.Title className='cardtitle'><h4><strong>{blog.title}</strong></h4></Card.Title>
            
            <Link to={{pathname:"/Blog/BlogView/",query:{id:blog._id}}}>
            <Button onClick={() => console.log('Click')}  style={{marginLeft:'5px',marginRight:'5px'}} variant="primary">Read</Button>
            </Link>
            <Link to={{pathname:'/Blog/BlogEditPost',query:{id:blog._id}}}><Button className='' variant="success" onClick={this.editBlog.bind(this,blog._id)}>Edit</Button>
            </Link>
            <Button style={{marginLeft:'5px',marginRight:'5px'}} variant="danger" onClick={this.deletePost.bind(this,blog._id)}>Delete</Button>
            <div style={{float:'right'}}>
              <Button onClick={this.updatevote} id='1'   variant={this.state.color}>Vote</Button>
            <label className='label' >{this.state.vote}</label>
            </div>
            

            </Card.Body>
            </Card>

           )} 
           </Col>
           
           <Col>
           {this.state.uploadBlogs.map((blog)=>
           
          <Card key={blog._id} style={{ width: '30rem',margin:'auto',marginTop:'20px',marginBottom:'50px',borderStyle:'outset',borderWidth:'2px', borderColor:'black'}}>
         <p style={{fontSize:'13px'}}><img src={pic2} alt="" style={{width:'30px',height:'30px',marginRight:'5px',marginTop:'10px',marginLeft:'5px',borderRadius:'2px'}}/><strong>Anushka Praveen Shared by</strong></p>
          <Card.Img variant="top" alt="" style={{border:'1px solid gray',width:'29.8rem',height:'19rem'}} src={blog.image} />
          <Card.Body>
          <Card.Title style={{textAlign:'center'}}><h4><strong>{blog.title}</strong></h4></Card.Title>
          <Button onClick={() => console.log('Click')}  href={blog.url} style={{marginLeft:'5px',marginRight:'5px'}} variant="primary">Read</Button>
          
          <Button style={{marginLeft:'5px',marginRight:'5px'}} variant="danger" onClick={this.deleteUploadPost.bind(this,blog._id)}>Delete</Button>
          <div style={{float:'right'}}>
            <Button onClick={this.updatevote} id='1'   variant={this.state.color}>Vote</Button>
          <label className='label' >0</label>
          </div>
          </Card.Body>
          </Card>
         
           )}
           </Col>
           </Row>
           </Container> 

                    
          
            

            
      </div>

      
    )}
}

export default Bloginterface;
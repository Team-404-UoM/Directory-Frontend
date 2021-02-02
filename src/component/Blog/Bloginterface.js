import React from 'react';
import {Card,Button,Container,Col,Row} from 'react-bootstrap';
import './Bloginterface.css';
import './bootstrap.min.css';
import { MdNoteAdd } from 'react-icons/md';
import { Component } from 'react';
import { Link} from 'react-router-dom'
import axios from 'axios';
import pic2 from '../Forum/pic2.jpg';
import { GrLike } from "react-icons/gr";
import { BsHeart } from "react-icons/bs";
import { BiDislike,BiLike } from "react-icons/bi";
import boxicons from 'boxicons';
import bootstrap from 'bootstrap';





class Bloginterface extends Component {


   

        constructor(props){
      
          super(props);
         
          this.state ={
            blogs:[],
            //allBlogs:[],
            uploadBlogs:[],
            //allUploadBlogs:[],
            blogid:'',
            //vote:0,
            likeupdated:false,
            dislikeupdated:false,
            //color:'outline-info'
          }
          this.updatelike = this.updatelike.bind(this);
          this.updatedislike = this.updatedislike.bind(this);
        }
      
        updatelike=(id)=> {
          console.log(id)
      
          if(!this.state.likeupdated) {
             axios.patch('http://localhost:4000/Blog/like/'+id)
             .then(res => {
               console.log(res);
               this.getAllPosts();
            })
             this.setState((prevState, props) => {
               return {
                 likeupdated:true,
                 //vote: prevState.vote + 1,
                //blogs.likestatus: true,
                 likecolor:'blue'
              };
             });
           } else {
            axios.patch('http://localhost:4000/Blog/unlike/'+id)
            .then(res => {
              console.log(res);
              this.getAllPosts();
           })
      
             this.setState((prevState, props) => {
               return {
                 //vote: prevState.vote - 1,
                likeupdated: false,
                likecolor: 'black'
               };
             });
           }
      
      
        }

        
        updatedislike=(id)=> {
          console.log(id)
      
          if(!this.state.dislikeupdated) {
             axios.patch('http://localhost:4000/Blog/dislike/'+id)
             .then(res => {
               console.log(res);
               this.getAllPosts();
            })
             this.setState((prevState, props) => {
               return {
                 dislikeupdated:true,
                 //vote: prevState.vote + 1,
                //blogs.likestatus: true,
                 dislikecolor:'blue'
              };
             });
           } else {
            axios.patch('http://localhost:4000/Blog/disunlike/'+id)
            .then(res => {
              console.log(res);
              this.getAllPosts();
           })
      
             this.setState((prevState, props) => {
               return {
                 //vote: prevState.vote - 1,
                dislikeupdated: false,
                dislikecolor: 'black'
               };
             });
           }
      
      
        }


        componentDidMount() {
         this.getAllPosts();
         this.getAllUploadPosts();
        }      

        getAllPosts () {

          axios.get(`${process.env.REACT_APP_BASE_URL}/Blog/Bloginterface`)
            .then(res => {
              this.setState({ blogs: res.data.reverse() })
              //this.setState({ allBlogs: res.data.reverse() })
            })
            console.log(this.state.res)
        }
        getAllUploadPosts = () => {

          axios.get(`${process.env.REACT_APP_BASE_URL}/Bloguploader`)
            .then(res => {
              this.setState({ uploadBlogs: res.data.reverse() })
              //this.setState({ allUploadBlogs: res.data.reverse() })
            })
            console.log(this.state.res)
        }


        deletePost = (id) => {
          axios.delete(`${process.env.REACT_APP_BASE_URL}/Blog/`+id)
            .then(res => {
              console.log(res);
              this.getAllPosts();
            })
           
        }
        
        deleteUploadPost = (id) => {
          axios.delete(`${process.env.REACT_APP_BASE_URL}/Bloguploader/`+id)
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

  /* filterContent(blogs,searchTerme){
   const result = blogs.filter((blog) => (blog.title).toLowerCase().includes(searchTerme));
   return (result);
 } */

      /* handleTextSearch = (e)=>{
        const res = filterContent(this.state.allBlogs,searchTerme)
        const searchTerme=e.currentTarget.value; */
  // this.setState({blogs:filterContent(this.state.allBlogs,searchTerme).reverse()});
  // this.setState({uploadBlogs:filterContent(this.state.allUploadBlogs,searchTerme).reverse()});
   //     };
      



render(){
    return(
      
           <div style={{backgroundColor:'rgba(192,192,192,0.3)'}}>
            <Button style={{marginLeft:'40px',marginTop:'20px'}} as={Link} to="/Blog/BlogEditor"><MdNoteAdd style={{marginRight:'5px',fontSize:'20px'}} />Create Blog</Button>
           
           <Container>
             <Row>
               <Col>
               <div>
             <form class="d-flex searchbar">
        <input class="form-control me-2 "  type="search" placeholder="Search" aria-label="Search" onChange={this.handleTextSearch}/>
        
             </form>
               
               </div>
               </Col>
              </Row>
              
              <Row>
               <Col xs={12} sm={12} md={6}>
                 <h3 className="blog-section-title">Written Blogs</h3>
           { this.state.blogs.map((blog)=>
           
            <Card key={blog._id} style={{width: '30rem',margin:'auto',marginTop:'20px',marginBottom:'50px',borderStyle:'outset',borderWidth:'2px', borderColor:'black'}}>
            <p style={{fontSize:'13px'}}><img src={pic2} alt="" style={{width:'30px',height:'30px',marginRight:'5px',marginTop:'10px',marginLeft:'5px',borderRadius:'2px'}}/><strong>Anushka Praveen Shared by</strong></p>
            <span style={{float:"right",marginTop:"-15px"}}><strong>Categorie | {blog.categorie}</strong></span>
            
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
           <box-icon onClick={this.updatedislike.bind(this,blog._id)} id='1'  border='square' type='solid' name='dislike' color={blog.dislikecolor} size='md'></box-icon>
            <label className='label' >{blog.dislike}</label>
             <box-icon onClick={this.updatelike.bind(this,blog._id)} id='1'   border='square' type='solid' name='like' color={blog.likecolor} size='md'></box-icon>
            <label className='label' >{blog.like}</label>
            </div>
            
  
            

            </Card.Body>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Comment
  </a>
 

<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>
            </Card>

           )} 
           </Col>
           
           <Col>
           <h3 className="blog-section-title">Linked Blogs</h3>
           {this.state.uploadBlogs.map((blog)=>
           
          <Card key={blog._id} style={{ width: '30rem',margin:'auto',marginTop:'20px',marginBottom:'50px',borderStyle:'outset',borderWidth:'2px', borderColor:'black'}}>
         <p style={{fontSize:'13px'}}><img src={pic2} alt="" style={{width:'30px',height:'30px',marginRight:'5px',marginTop:'10px',marginLeft:'5px',borderRadius:'2px'}}/><strong>Anushka Praveen Shared by</strong></p>
          <Card.Img variant="top" alt="" style={{border:'1px solid gray',width:'29.8rem',height:'19rem'}} src={blog.image} />
          <Card.Body>
          <Card.Title style={{textAlign:'center'}}><h4><strong>{blog.title}</strong></h4></Card.Title>
          <Button onClick={() => console.log('Click')}  href={blog.url} style={{marginLeft:'5px',marginRight:'5px'}} variant="primary">Read</Button>
          
          <Button style={{marginLeft:'5px',marginRight:'5px'}} variant="danger" onClick={this.deleteUploadPost.bind(this,blog._id)}>Delete</Button>
          {/* <div style={{float:'right'}}>
          <box-icon onClick={this.updatevote.bind(this,blog._id)} id='1'   variant={blog.color} border='square' type='solid' name='dislike' color="blue" size='md'></box-icon>
            <label className='label' >{blog.like}</label>
             <box-icon onClick={this.updatevote.bind(this,blog._id)} id='1'   variant={blog.color} border='square' type='solid' name='like' color="blue" size='md'></box-icon>
            <label className='label' >{blog.like}</label>
          </div> */}
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
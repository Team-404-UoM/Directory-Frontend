import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import pic2 from '../Forum/pic2.jpg';
import './Blogview.css';



class BlogView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            image:"",
            body:"",
            categorie:""
        };
    }

    componentDidMount() {//{if(this.props.location.query!=undefined){
        console.log(this.props)
        axios.get(`${process.env.REACT_APP_BASE_URL}/Blog/`+this.props.location.query.id)
            .then(res => this.setState({
                title: res.data.blog.title,
                image: res.data.blog.image,
                body: res.data.blog.body,
                categorie: res.data.blog.categorie
            }))
        console.log(this.state.title)
        //.catch((err)=>console.log(err))


    }
    /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
 openNav(){
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  } 



    render() {
        return (
            <div>
                <div id="mySidebar" class="sidebar">
  <a href="javascript:void(0)" class="closebtn" onclick={this.closeNav}>&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>

<div id="main">
  <button class="openbtn" onclick={this.openNav}>Comment</button>
  
</div>
                


                <React.Fragment>
                
                    <h1 style={{ textAlign: 'center', marginTop: '20px' }}>{this.state.title}</h1>
                    <p style={{fontSize:'13px',textAlign:"center"}}><img src={pic2} alt="" style={{width:'30px',height:'30px',marginRight:'5px',marginTop:'-5px',marginLeft:'5px',borderRadius:'2px'}}/><strong>Anushka Praveen </strong><span style={{marginLeft:"40px"}}>create at:Jan 08 2020</span><span style={{marginLeft:"50px"}}>update at:Jan 16 2020</span></p>
                    <p><span style={{textAlign:"center"}}>Categorie | {this.state.categorie}</span></p>
                  <img src={this.state.image} alt='Cover' style={{border:'1px solid gray',width:'29.8rem',height:'20rem',marginLeft:'35%',marginBottom:'30px',borderRadius:'5px'}}/> 
        <p style={{ padding: '20px 50px 20px' }}dangerouslySetInnerHTML={{__html:this.state.body}}></p>
                </React.Fragment>

            </div>
        )
    }
}

export default BlogView;


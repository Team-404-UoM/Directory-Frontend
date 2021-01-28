import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import pic2 from '../Forum/pic2.jpg';




class BlogView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            image:"",
            body:""
        };
    }

    componentDidMount() {//{if(this.props.location.query!=undefined){
        console.log(this.props)
        axios.get(`${process.env.REACT_APP_BASE_URL}/Blog/`+this.props.location.query.id)
            .then(res => this.setState({
                title: res.data.blog.title,
                image: res.data.blog.image,
                body: res.data.blog.body
            }))
        console.log(this.state.title)
        //.catch((err)=>console.log(err))


    }


    render() {
        return (
            <div>
                


                <React.Fragment>
                
                    <h1 style={{ textAlign: 'center', marginTop: '20px' }}>{this.state.title}</h1>
                    <p style={{fontSize:'13px',textAlign:"center"}}><img src={pic2} alt="" style={{width:'30px',height:'30px',marginRight:'5px',marginTop:'-5px',marginLeft:'5px',borderRadius:'2px'}}/><strong>Anushka Praveen </strong><span style={{marginLeft:"40px"}}>create at:Jan 08 2020</span><span style={{marginLeft:"50px"}}>update at:Jan 16 2020</span></p>
                  <img src={this.state.image} alt='Cover' style={{border:'1px solid gray',width:'29.8rem',height:'20rem',marginLeft:'35%',marginBottom:'30px',borderRadius:'5px'}}/> 
        <p style={{ padding: '20px 50px 20px' }}dangerouslySetInnerHTML={{__html:this.state.body}}></p>
                </React.Fragment>

            </div>
        )
    }
}

export default BlogView;


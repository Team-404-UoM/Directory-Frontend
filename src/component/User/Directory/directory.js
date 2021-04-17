import React, { Component } from "react";
import './directory.css';
import pic5 from "./pic5.png";
import axios from "axios";
import {Usercontext,user} from '../../../context/context';
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
class directory extends Component{
    static contextType=Usercontext;
    constructor(props) {
        super(props);
    this.state={
        allprofile:[],
        profiles:[],
        userprofile:[],
        

    }
    this.handleTextSearch = this.handleTextSearch.bind(this);
    }


    componentDidMount(){
        this.getProfile();
        
       
    }

   






    getProfile(){
        axios.get('http://localhost:4000/home')
        .then((res) => {
            this.setState({profiles: res.data.reverse()})
            this.setState({allprofile: res.data});
          });
          console.log(this.state.profiles);
      
    }


    filterContent(profiles,searchTerme) {
        const result1 = profiles.filter((profile) =>
          (profile.firstName).toLowerCase().includes(searchTerme)
        );
    
        
    
        //const result = this.state.blogs.filter((blog) => blog.title.toLowerCase().includes(searchTerme));
        this.setState((cur) => ({ ...cur, allprofile: result1 }));
        
      }

      handleTextSearch = (e) => {
        const searchTerme = e.currentTarget.value;
        console.log(this.state.profiles);
        console.log(e.currentTarget.value);
        this.filterContent(
          this.state.profiles,
          searchTerme
        );
      };


  

    render(){
      return (
        <div>
            <style>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@700;900&family=Montserrat:wght@800;900&display=swap');
</style> 
         <h1 style={{fontFamily: "Montserrat"}}>Web Member Directory</h1>
         <div className="serachbar-div" >
         <input className="searchBox" type="text" name="search" placeholder="Search.." onChange={this.handleTextSearch}/> 
            

         </div>
         <div className ="container">
        <div className ="row">
        {this.state.allprofile.map((profile)=>(
            <div key={profile._id} className="col-md-4">
             
                <div  className="user-review">
                    <p> <div><h6>{profile.faculty}</h6> </div>
                    <div>{profile.gender} </div>
                        <div>Manager at Commercial Credit PLC</div>
                    </p>
                    <Link to={{
                            pathname: `/profileview/${profile.firebaseUserId}`,
                            query: { id: profile._id },
                          }}>    <h5>{profile.firstName} {profile.lastName}</h5></Link>
                        <small>{profile.type}</small>
                </div>
                <img className="profile-img" src ={pic5}/>
            </div>))}
           
           
            </div>
            </div>
           

         
        </div>
    
      );
    }

}

  export default directory;
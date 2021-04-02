import React, { Component } from "react";
import './directory.css';
import pic2 from "./pic2.jpg";
import axios from "axios";
import {Usercontext,user} from '../../../context/context';
class directory extends Component{
    static contextType=Usercontext;
    constructor(props) {
        super(props);
    this.state={
        allprofile:[],
        profiles:[],
        userprofile:[],
        teststate:"",
        firstname:""

    }
    this.handleTextSearch = this.handleTextSearch.bind(this);
    }


    componentDidMount(){
        this.getProfile();
        console.log(this.context.loggedInUser.username);
        this.getuserprofile();
        
        this.getUserDetail();
       
        
    }

   

getuserprofile(){
    axios.get('http://localhost:4000/user/'+this.context.loggedInUser.username)
    .then((res)=>this.setState({firstname:res.data.firstName}))

    
    
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


  getUserDetail(){
       user.UserDetails={test:this.state.teststate,firstname:this.state.firstname}
        
    } 

    render(){
      return (
        <div>
            <style>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@700;900&family=Montserrat:wght@800;900&display=swap');
</style> 
         <h1 style={{fontFamily: "Montserrat"}}>Web Member Directory{this.state.firstname}</h1>
        <li>{this.state.userprofile.firstName}</li>
         <div className="serachbar-div" >
         <input className="searchBox" type="text" name="search" placeholder="Search.." onChange={this.handleTextSearch}/> 
            

         </div>
         <div class ="container">
        <div class ="row">
        {this.state.allprofile.map((profile)=>(
            <div class="col-md-4">
                <div class="user-review">
                    <p> <div>{profile.faculty} </div>
                    <div>{profile.gender} </div>
                        <div>Manager at Commercial Credit PLC</div>
                    </p>
                        <h5>{profile.firstName} {profile.lastName}</h5>
                        <small>Colombo</small>
                </div>
                <img className="profile-img" src ={pic2}/>
            </div>))}
           
           
            </div>
            </div>
           

         
        </div>
    
      );
    }

}

  export default directory;
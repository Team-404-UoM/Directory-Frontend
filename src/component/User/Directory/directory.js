import React, { Component } from "react";
import './directory.css';
import pic2 from "./pic2.jpg";
import axios from "axios";

class directory extends Component{
    constructor(props) {
        super(props);
    this.state={
        allprofile:[],

    }
    }


    componentDidMount(){
        this.getProfile();
       
        
    }

    getProfile(){
        axios.get('http://localhost:4000/home')
        .then((res)=>this.setState({allprofile:res.data.reverse()}))
      
    }

    render(){
      return (
        <div>
            <style>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@700;900&family=Montserrat:wght@800;900&display=swap');
</style> 
         <h1 style={{fontFamily: "Montserrat"}}>Web Member Directory</h1>
         <div className="serachbar-div" >
         <input className="searchBox" type="text" name="search" placeholder="Search.."/> 
            

         </div>
         <div class ="container">
        <div class ="row">
        {this.state.allprofile.map((profile)=>(
            <div class="col-md-4">
                <div class="user-review">
                    <p> <div>{profile.faculty} </div>
                        <div>Batch 14</div>
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
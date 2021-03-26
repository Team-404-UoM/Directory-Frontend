import React, { Component } from "react";
import './directory.css';
import pic2 from "./pic2.jpg";
import pic1 from "./pic1.jpg";
import pic3 from "./pic3.jpg";
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
         <h1>Web Member Directory</h1>
         <div class ="container">
        <div class ="row">
            {this.state.allprofile.map((profile)=>(
            <div class="col-md-4">
                <div class="user-review">
                    <p> <div>Faculty of {profile.faculty} </div>
                        <div>Batch {profile.Batch}</div>
                        <div>Manager at Commercial Credit PLC</div>
                    </p>
                        <h5>{profile.firstName} {profile.lastName}</h5>
                        <small>Colombo</small>
                </div>
                <img className="profile-img" src ={pic2}/>
            </div>))}


            <div class="col-md-4">
                <div class="user-review">
                    <p> <div>Faculty of Business </div>
                        <div>Batch 14</div>
                        <div>Manager at Commercial Credit PLC</div>
                    </p>
                        <h5>Nirasha Wimalasooriya</h5>
                        <small>Colombo</small>
                </div>
                <img className="profile-img" src ={pic1}/>
            </div>
            <div class="col-md-4">
                <div class="user-review">
                    <p> <div>Faculty of Business </div>
                        <div>Batch 14</div>
                        <div>Manager at Commercial Credit PLC</div>
                    </p>
                        <h5>Ramodya Lakrandi</h5>
                        <small>Colombo</small>
                </div>
                <img className="profile-img" src ={pic3}/>
            </div>
            </div>
            </div>
           

         
        </div>
    
      );
    }

}

  export default directory;
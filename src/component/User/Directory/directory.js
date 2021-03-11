import React, { Component } from "react";
import './directory.css';
import pic2 from "./pic2.jpg";




class directory extends Component{
    render(){
      return (
        <div>
         <h1>Web Member Directory</h1>
         <div class ="container">
        <div class ="row">
            <div class="col-md-4">
                <div class="user-review">
                    <p> <div>Faculty of Business </div>
                        <div>Batch 14</div>
                        <div>Manager at Commercial Credit PLC</div>
                    </p>
                        <h5>Nirasha Wimalasooriya</h5>
                        <small>Colombo</small>
                </div>
                <img className="profile-img" src ={pic2}/>
            </div>
            <div class="col-md-4">
                <div class="user-review">
                    <p> <div>Faculty of Business </div>
                        <div>Batch 14</div>
                        <div>Manager at Commercial Credit PLC</div>
                    </p>
                        <h5>Nirasha Wimalasooriya</h5>
                        <small>Colombo</small>
                </div>
                <img className="profile-img" src ={pic2}/>
            </div>
            <div class="col-md-4">
                <div class="user-review">
                    <p> <div>Faculty of Business </div>
                        <div>Batch 14</div>
                        <div>Manager at Commercial Credit PLC</div>
                    </p>
                        <h5>Nirasha Wimalasooriya</h5>
                        <small>Colombo</small>
                </div>
                <img className="profile-img" src ={pic2}/>
            </div>
            </div>
            </div>
           

         
        </div>
    
      );
    }

}

  export default directory;
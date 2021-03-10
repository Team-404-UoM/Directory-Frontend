import React, { Component } from "react";
import './directory.css';




class directory extends Component{
    render(){
      return (
        <div>
          <title>Directory website </title>
          <link rel="stylesheet" href="style.css" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <meta name="viewport" content="width=device-width,initial-scale=1.0" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" />
          {/*search bar */}
          <ul className="nav">
            <li id="settings">
            </li>
            <li>
              <a href="#">Application</a>
            </li>
            <li>
              <a href="#">Board</a>
            </li>
            <li id="search">
              <form action method="get">
                <input type="text" name="search_text" id="search_text" placeholder="Search" />
                <input type="button" name="search_button" id="search_button" />
              </form>
            </li>
            <li id="options">
              <a href="#">Options</a>
              <ul className="subnav">
                <li><a href="#">Settings</a></li>
                <li><a href="#">Application</a></li>
                <li><a href="#">Board</a></li>
                <li><a href="#">Options</a></li>
              </ul>
            </li>
          </ul>
          {/*user profiles */}
          <section className="users-feedback">
            <h1>WEB MEMBER DIRECTORY</h1>
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="user-review">
                    <p> </p><div>Faculty of Business </div>
                    <div>Batch 14</div>
                    <div>Manager at Commercial Credit PLC</div>
                    <p />
                    <h5>Nirasha Wimalasooriya</h5>
                    <small>Colombo</small>
                  </div>
                  <img src="images/user1.jpeg" />
                </div>
                <div className="col-md-4">
                  <div className="user-review">
                    <p> </p><div>Faculty of Information Technology </div>
                    <div>Batch 15</div>
                    <div>Manager at Commercial Credit PLC</div>
                    <p />
                    <h5>Vimeshi Bhagya</h5>
                    <small>Kandy</small>
                  </div>
                  <img src="images/user2.jpg" />
                </div>
                <div className="col-md-4">
                  <div className="user-review">
                    <p> </p><div>Faculty of Engineering</div>
                    <div>Batch 15</div>
                    <div>Manager at Commercial Credit PLC</div>
                    <p />
                    <h5>Ramodya Perea</h5>
                    <small>Kurunegala</small>
                  </div>
                  <img src="images/user3.jpg" />
                </div>
              </div>
            </div>
            {/*</section>*/}
            {/*<section class="users-feedback"> */}
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="user-review">
                    <p> </p><div>Faculty of Business </div>
                    <div>Batch 14</div>
                    <div>Manager at Commercial Credit PLC</div>
                    <p />
                    <h5>Nirasha Wimalasooriya</h5>
                    <small>Colombo</small>
                  </div>
                  <img src="images/user1.jpeg" />
                </div>
                <div className="col-md-4">
                  <div className="user-review">
                    <p> </p><div>Faculty of Information Technology </div>
                    <div>Batch 15</div>
                    <div>Manager at Commercial Credit PLC</div>
                    <p />
                    <h5>Vimeshi Bhagya</h5>
                    <small>Kandy</small>
                  </div>
                  <img src="images/user2.jpg" />
                </div>
                <div className="col-md-4">
                  <div className="user-review">
                    <p> </p><div>Faculty of Engineering</div>
                    <div>Batch 15</div>
                    <div>Manager at Commercial Credit PLC</div>
                    <p />
                    <h5>Ramodya Perea</h5>
                    <small>Kurunegala</small>
                  </div>
                  <img src="images/user3.jpg" />
                </div>
              </div>
            </div>
          </section>
        </div>
    
      );
    }

}

  export default directory;
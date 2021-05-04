import React,{useContext,useEffect} from 'react';
import './App.css';
import Bloginterface from './component/Blog/Bloginterface';
import Forum from './component/Forum/Forum';
import './component/Blog/Texteditor.css';
import HomeNavbar from './component/Navbar/HomeNavbar';
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import BlogEditor from './component/Blog/BlogEditor';
import Bloguploader from './component/Blog/Bloguploader';
import BlogView from './component/Blog/BlogView';
import BlogEditPost from './component/Blog/BlogEditPost';
import BlogProfile from './component/Blog/blogprofile';
import Test from './component/Test/Test';
// import Test3 from './component/Test/Test3';
import ForumReply from './component/Forum/ForumReply';
import UserForum from './component/Forum/Forumprofile';


import AlertTemplate from 'react-alert-template-basic'
import { transitions, positions, Provider as AlertProvider, types } from 'react-alert'
import 'bootstrap/dist/css/bootstrap.css';

import EventPage from './component/Events/Event_page';
import PayemetForm from './component/Events/PayemetForm';
import Albums from './component/Gallery/Main';
import View from './component/Gallery/View';
import Directory from './component/User/Directory/directory';
import EventAdminHome from './component/EventAdmin/EventAdminHome';
import JobView from './component/Jobs/JobView'

import Admin from './component/User/SignUp/Admin';
import PastStudent from './component/User/SignUp/PastStudent';
import AcademicStaff from './component/User/SignUp/AcademicStaff';
import Selection from './component/User/SignUp/Selection';
import Login from './component/User/SignIn/Login';
import AdminLogin from './component/User/SignIn/AdminLogin';
import Forget from './component/User/SignIn/forget';
import AboutUs from './component/AboutUs/AboutUs';
import Settings from './component/Settings/Settings';
import ProfileEdit from './component/User/Profile/ProfileEditMode';
import Profilemode from './component/User/Profile/Profilemode';
import ProfileView from './component/User/Profile/profileview';
import history from './config/history';
import {Usercontext,user} from './context/context';
import firebase from "firebase/app";
import "firebase/auth";


import 'bootstrap/dist/css/bootstrap.css';
//test commit 2

const options = {
    position: positions.TOP_RIGHT,
    timeout: 5000,
    offset: '10px',
    transition: transitions.FADE,
    type: types.INFO
  }
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user.uid);
      //console/log("user logged")
      // User is signed in.
    } else {
      console.log("user is not logged");
      // No user is signed in.
    }
  });
  

const App = () => {
   const userdetail=useContext(Usercontext);
   useEffect(() => {console.log('test');
       
   }, [userdetail.loggedInUser.username])
    return ( 
        
    <BrowserRouter>

        <div>
        <Router history={history}>


        <Switch>
        <AlertProvider template={AlertTemplate} {...options}>
        <React.Fragment>
        <div>

        
        <HomeNavbar/>
       
 
        <Route path = "/" exact component = {Login}>
        </Route> 
        <Route path = "/SignIn/AdminLogin/" exact component = {AdminLogin}>
        </Route> 
        
        <Route path="/admin/events" component={EventAdminHome} />

        <Route path = "/SignUp/PastStudent/" exact component = {PastStudent}/>
        <Route path="/SignUp/Admin/" exact component={Admin} />
        <Route path = "/SignUp/AcademicStaff/" exact component = {AcademicStaff}/> 
        <Route path = "/SignIn" exact component = {Login}/> 
        <Route path = "/SignUp/Selection" exact component = {Selection}/> 
        <Route path = "/AboutUs" exact component = {AboutUs}/>

        <Route path = "/Blog" exact component = {Bloginterface}/>


        <Route path = "/Forum" exact component = {Forum}/>
        <Route path = "/forum/forumprofile" exact component = {UserForum}/>
        

        <Route path = "/Blog/BlogEditor" exact>
        <BlogEditor/>
        </Route>

        <Route path = "/blog/Bloguploader" exact >
        <Bloguploader/>
        </Route>

        <Route path = "/Test" exact component = {Test}/>
        {/* <Route path = "/Test" exact component = {Test3}/> */}
        <Route path="/User/Directory" exact component={Directory} />
        <Route path = "/Blog/BlogView" exact component = {BlogView}/>


        <Route path = "/Blog/BlogEditPost" exact component = {BlogEditPost}/>
        <Route path="/blog/blogprofile" exact component={BlogProfile}/>

        <Route path="/forget" exact component={Forget} />





        <Route path = "/events" component = {EventPage}/> 
        <Route path = "/payments/:id" component = {PayemetForm}/>
        <Route path = "/Gallery" component = {Albums}/>
        <Route path = "/albums/:category/:id" component = {View}/>
        <Route path="/jobs" component={JobView} />



       <Route path = "/Forum/ForumReply" exact component = {ForumReply}/>
       <Route path = "/Settings" exact component = {Settings}/>
       <Route path = "/ProfileEdit" exact component = {ProfileEdit}/>
       <Route path = "/Profilemode" exact component = {Profilemode}/>
       <Route path = "/profileview/:id" exact component = {ProfileView}/>
        </div> 
        </React.Fragment> 
        </AlertProvider>
        </Switch> 
        </Router>
        </div> 
        </BrowserRouter>
       
       
    );
}

export default App;

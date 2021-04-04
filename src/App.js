import React from 'react';
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
import Test from './component/Test/Test';
import ForumReply from './component/Forum/ForumReply';


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


import PastStudent from './component/User/SignUp/PastStudent';
import AcademicStaff from './component/User/SignUp/AcademicStaff';
import Selection from './component/User/SignUp/Selection';
import Login from './component/User/SignIn/Login';
import Forget from './component/User/SignIn/forget';
import AboutUs from './component/AboutUs/AboutUs';
import Settings from './component/Settings/Settings';
import ProfileEdit from './component/User/Profile/ProfileEditMode';
import history from './config/history';
import {Usercontext,user} from './context/context';

import 'bootstrap/dist/css/bootstrap.css';
//test commit 2

const options = {
    position: positions.TOP_RIGHT,
    timeout: 5000,
    offset: '10px',
    transition: transitions.FADE,
    type: types.INFO
  }
  

const App = () => {
   
    return ( 
    <Usercontext.Provider value={user}>
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

        <Route path="/admin/events" component={EventAdminHome} />

        <Route path = "/SignUp/PastStudent/" exact component = {PastStudent}/>

        <Route path = "/SignUp/AcademicStaff/" exact component = {AcademicStaff}/> 
        <Route path = "/SignIn" exact component = {Login}/> 
        <Route path = "/SignUp/Selection" exact component = {Selection}/> 
        <Route path = "/AboutUs" exact component = {AboutUs}/>

        <Route path = "/Blog" exact component = {Bloginterface}/>


        <Route path = "/Forum" exact component = {Forum}/>
        

        <Route path = "/Blog/BlogEditor" exact>
        <BlogEditor/>
        </Route>

        <Route path = "/blog/Bloguploader" exact >
        <Bloguploader/>
        </Route>

        <Route path = "/Test" exact component = {Test}/>

        <Route path="/User/Directory" exact component={Directory} />
        <Route path = "/Blog/BlogView" exact component = {BlogView}/>


        <Route path = "/Blog/BlogEditPost" exact component = {BlogEditPost}/>

        <Route path="/forget" exact component={Forget} />





        <Route path = "/events" component = {EventPage}/> 
        <Route path = "/payments/:id" component = {PayemetForm}/>
        <Route path = "/Gallery" component = {Albums}/>
        <Route path = "/albums/:category/:id" component = {View}/>
        <Route path="/jobs" component={JobView} />



       <Route path = "/Forum/ForumReply" exact component = {ForumReply}/>
       <Route path = "/Settings" exact component = {Settings}/>
       <Route path = "/ProfileEdit" exact component = {ProfileEdit}/>

        </div> 
        </React.Fragment> 
        </AlertProvider>
        </Switch> 
        </Router>
        </div> 
        </BrowserRouter>
        </Usercontext.Provider>
    );
}

export default App;

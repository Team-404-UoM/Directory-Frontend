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

import EventPage from './component/Events/Event_page';
import PayemetForm from './component/Events/PayemetForm';
import Albums from './component/Gallery/Main';
import View from './component/Gallery/View';
import directory from './component/User/Directory/directory';
//import EventAdminHome from './components/EventAdmin/EventAdminHome';


import PastStudent from './component/User/SignUp/PastStudent';
import AcademicStaff from './component/User/SignUp/AcademicStaff';
import Selection from './component/User/SignUp/Selection';
import Login from './component/User/SignIn/Login';
import Forget from './component/User/SignIn/forget';
import AboutUs from './component/AboutUs/AboutUs';
import Settings from './component/Settings/Settings';
import ProfileEdit from './component/User/Profile/ProfileEditMode';
import history from './config/history';

import 'bootstrap/dist/css/bootstrap.css';
//test commit 2





const App = () => {
    return ( <BrowserRouter>

        <div>
        <Router history={history}>
        <Switch>
        <React.Fragment>
        <div>

        <HomeNavbar/>
        <Route path = "/">
        </Route> <Route path = "/SignUp/PastStudent/" exact component = {PastStudent}/>

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

        <Route path="/Directory/directory" exact component={directory} />
        <Route path = "/Blog/BlogView" exact component = {BlogView}/>


        <Route path = "/Blog/BlogEditPost" exact component = {BlogEditPost}/>

        <Route path="/forget" exact component={Forget} />
      
       <Route path = "/events" component = {EventPage}/> 

        <Route path = "/payments/:id" component = {PayemetForm}/>

        <Route path = "/Gallery" component = {Albums}/>

        <Route path = "/albums/:category/:id" component = {View}/>





        <Route path = "/Forum/ForumReply" exact component = {ForumReply}/>

        <Route path = "/Settings" exact component = {Settings}/>

        <Route path = "/ProfileEdit" exact component = {ProfileEdit}/>






        </div> 
        </React.Fragment> 
        </Switch> 
        </Router>
        </div> 
        </BrowserRouter>
    );
}

export default App;

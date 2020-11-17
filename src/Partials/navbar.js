import React from 'react';
import logo from './images/uom.png'

const Navbar = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg " style={{backgroundColor:'#204060'}}>
        <a className="navbar-brand" href="#">
            <img src={logo} width="50"/>
        </a>
        <div className="collapse navbar-collapse" id="navbarNav" >
            <ul className="navbar-nav" >
            <li className="nav-item navigations">
                <a className="nav-link" href="#" style={{color: 'white', marginLeft: 50, marginRight:15, fontWeight: 'bold'}}>Home</a>
            </li>
            <li className="nav-item navigations">
                <a className="nav-link" href="#" style={{color: 'white',marginRight:15, fontWeight: 'bold'}}>About</a>
            </li>
            <li className="nav-item navigations">
                <a className="nav-link" href="/events" style={{color: 'white',marginRight:15, fontWeight: 'bold'}}>Events</a>
            </li>
            <li className="nav-item navigations">
                <a className="nav-link" href="/gallery" style={{color: 'white',marginRight:15, fontWeight: 'bold'}}>Gallery</a>
            </li>
            <li className="nav-item navigations">
                <a className="nav-link" href="#" style={{color: 'white',marginRight:15, fontWeight: 'bold'}}>Blog</a>
            </li>
            <li className="nav-item navigations">
                <a className="nav-link" href="#" style={{color: 'white',marginRight:15, fontWeight: 'bold'}}>Fourm</a>
            </li>
            </ul>
        </div>
        </nav>
        </div>
    );
}

export default Navbar;

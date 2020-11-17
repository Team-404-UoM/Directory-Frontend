import React from 'react';
import { Component } from 'react';
import './SideNotification.css';

class SideNotification extends Component {
    render() {
        return (
            <div>
                <h1>hello world</h1>
                <div class="sidenav">
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#clients">Clients</a>
                    <a href="#contact">Contact</a>
                </div> 
            </div>

        )
    }
}

export default SideNotification;
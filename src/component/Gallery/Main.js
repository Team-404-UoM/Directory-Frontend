import React,{useState} from 'react'
import {
    CTabs,
    CNav,
    CNavLink,
    CTabContent,
    CTabPane,
    CNavItem, 
    CModalBody,
    CModalHeader,
    CModal,
    CDropdown,
    CDropdownMenu,
    CDropdownItem,
    CDropdownToggle
} from "@coreui/react";

import All from './Albums'
import Events from './Events' 
import Trips from './Trips'
import Other from './Other'

import {createAlbum} from '../../Events/Events_api_calls' //'../../config/api_calls'

import { BiPhotoAlbum } from "react-icons/bi";
import { HiPlus } from "react-icons/hi";
import { AiOutlineClear } from "react-icons/ai";
import { MdPhotoCamera } from "react-icons/md";

export default function Main() {
const [events, setevents] = useState([]);
  const [formmodal, setFormmodal] = useState(false);
  const [name, setname] = useState("");
  const [category, setcategory] = useState("");
  const [date, setdate] = useState([]);
  const [image, setimage] = useState("");
  const [privacy, setprivacy] = useState([]);
  const [faculty, setfaculty] = useState("");


  const toggleForm = () => {
    setFormmodal(!formmodal);
  };

    return (
        <div className="container" style={{marginTop: 20}}>
            <div style={{marginTop: 20, marginBottom: 30}}>
                <button className="btn btn-outline-dark" onClick={toggleForm}> Add New Album <BiPhotoAlbum/> </button>
            </div>
            <CTabs activeTab="all">
                    <CNav variant="tabs">
                        <CNavItem>
                        <CNavLink data-tab="all">
                            All
                        </CNavLink>
                        </CNavItem>
                        <CNavItem>
                        <CNavLink data-tab="events">
                            Events
                        </CNavLink>
                        </CNavItem>
                        <CNavItem>
                        <CNavLink data-tab="trips">
                            Trips
                        </CNavLink>
                        </CNavItem>
                        <CNavItem>
                        <CNavLink data-tab="other">
                            Other
                        </CNavLink>
                        </CNavItem>
                    </CNav>
                    <CTabContent>
                        <CTabPane data-tab="all">
                            <All />
                        </CTabPane>
                        <CTabPane data-tab="events">
                            <Events />
                        </CTabPane>
                        <CTabPane data-tab="trips">
                            <Trips />
                        </CTabPane>
                        <CTabPane data-tab="other">
                            <Other />
                        </CTabPane>
                    </CTabContent>
            </CTabs>
            <CModal show={formmodal} onClose={toggleForm}>
            <CModalHeader closeButton><h5>Create New Album <MdPhotoCamera/></h5></CModalHeader>
            <CModalBody>
            <form onSubmit={(e) => e.preventDefault && false} encType="multipart/form-data" >
                <div className="form-group">
                <label for="question">Event Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => {
                    setname(e.target.value);
                    }}
                />
                </div>
                <div class="form-group">
                <label for="sel1">Category</label>
                <select class="form-control" id="sel1" 
                value={category} 
                onChange={(e) => {
                    setcategory(e.target.value)
                }}
                >
                    <option selected>Select Category</option>
                    <option value={'events'}>Events</option>
                    <option value={'trips'}>Trips</option>
                    <option value={'other'}>Other</option>
                </select>
                </div>
                <div className="form-group">
                <label for="date">Event Date</label>
                <input
                    type="date"
                    className="form-control"
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e) => {
                    setdate(e.target.value);
                    }}
                />
                </div>
                <div className="form-group">
                <label for="image">Album Thumbnail</label>
                <input
                    type="file"
                    class="form-control-file"
                    id="image"
                    name="image"
                    onChange={(e) => {
                    console.log(e.target.files[0]);
                    setimage(e.target.files[0])
                    }}
                />
                </div>
                <div className="form-group">
                <label for="privacy">Add Privacy Labels</label>
                <input
                    type="privacy"
                    className="form-control"
                    id="privacy"
                    name="privacy"
                    placeholder="Enter Ticket Pricess And Press (+)"
                    value={faculty}
                    onChange={(e) => {
                    setfaculty(e.target.value);
                    }}
                />
                
                <button
                    className="btn btn-outline-success"
                    type="button"
                    style={{ marginTop: 10 }}
                    onClick={() => {
                    setprivacy([...privacy, faculty]);
                    setfaculty("");
                    }}
                >
                    <HiPlus />
                </button>
                <button
                    className="btn btn-outline-danger"
                    type="button"
                    style={{ marginTop: 10, marginLeft: 20 }}
                    onClick={() => {
                    setprivacy([]);
                    }}
                >
                    <AiOutlineClear />
                </button>
                <div>
                    <CDropdown className="mt-2">
                        <CDropdownToggle caret color="outline-dark">
                        Added privacy labels
                        </CDropdownToggle>
                        <CDropdownMenu>
                        {privacy.map(item =>{
                            return <CDropdownItem>{item}</CDropdownItem>
                        })}
                        </CDropdownMenu>
                    </CDropdown>
                </div>
                </div>
                <button
                type="submit"
                className="btn btn-success btn-block"
                onClick={() => {
                    createAlbum(name,category,date,image,privacy);
                    toggleForm();
                }}
                >
                Add New Event
                </button>
            </form>
            </CModalBody>
        </CModal>
        </div>
    )
}

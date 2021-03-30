import React, {useState, useEffect, useRef} from 'react';
import {RiCalendarEventFill} from 'react-icons/ri'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import {BsCheckAll} from 'react-icons/bs'
import '../../App.css';
import { useAlert } from 'react-alert'

import DateCountdown from 'react-date-countdown-timer';
import { CModal, CModalHeader, CModalBody,CModalFooter,CButton,
    CListGroup,
    CListGroupItem } from "@coreui/react";


//Import api calls
import {getEvents, updateAttendance, getThubnails, addJob} from '../../config/api_calls'

import JobView from '../Jobs/JobView';
import { BsFillBriefcaseFill } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";
import { AiOutlineClear } from "react-icons/ai";
import { AiFillFileAdd } from "react-icons/ai";

const Event_page = () => {

    const [events, setEvents] = useState([]);
    const [thumbs, setthumbs] = useState([]);
    const [modal, setModal] = useState(false);
    const [jmodal, setJModal] = useState(false);
    const [load, setload] = useState(false)

    const [jobs, setjobs] = useState([]);
    const [formmodal, setFormmodal] = useState(false);
    const [editformmodal, seteditformmodal] = useState(false);
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [closingDate, setclosingDate] = useState([]);
    const [requirements, setrequirements] = useState([]);
    const [requirement, setrequirement] = useState("");

    const dateDiff = (end) => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = mm + '-' + dd + '-' + yyyy;

        let date1 = new Date(today);
        let date2 = new Date(end);

        let Difference_In_Time = date2.getTime() - date1.getTime(); 
  
        let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

        return Difference_In_Days;
    }

    const didMountRef = useRef(false)

    //Fetch event data and thumnails to state
    useEffect(()=>{
        getEvents().then(result =>{
            setEvents(result)
        })
        //Thumbnails
        getThubnails().then(result =>{
            setthumbs(result);
        })

        setTimeout(() => {
            if(!didMountRef.current){
                setload(true)
            }
          }, 10000);

    }, [])



    const alert = useAlert()
    

    const toggle = ()=>{
        setModal(!modal);
    }
    const jtoggle = ()=>{
        setJModal(!jmodal);
    }

    const toggleForm = () => {
        setFormmodal(!formmodal);
      };

    return (
        <div>
        <div className="container" style={{marginTop: 20}}>
        <button 
            className="btn btn-outline-dark"
            onClick={jtoggle}
            style={{marginRight: 20}}
        >Find New Jobs  <BsFillBriefcaseFill /></button>
        <button 
            className="btn btn-outline-dark"
            onClick={toggleForm}
        >Add New Jobs  <AiFillFileAdd /></button>
        <hr/>
            {events.map((item, i) =>{
                return(
                    <div className="card" style={{marginTop: 20, borderRadius: 15, marginBottom: 20}}>
                    <div className="card-horizontal">
                        <div className="img-square-wrapper" style={{padding: 15}}>
                            {thumbs.map(thumbnail => {
                                if(item.image == thumbnail.filename){          
                                        return <img className="" src={`http://localhost:5000/events/image/${thumbnail.filename}`} alt="Card image cap" width={300} height={200} style={{borderRadius: 10}}/>
                                }
                            })}
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-text">{item.description}</p>
                            
                            <div className="container row" style={{}}>
                            {item.paid ?
                             <a className="btn btn-outline-dark btn-lg" href={`/payments/${item._id}`} style={{width:180, height: 60, fontSize: 24}}><RiCalendarEventFill/> Join Event </a>
                            : <button className="btn btn-outline-dark btn-lg" onClick={toggle} style={{width:180, height: 60, fontSize: 24}}><RiCalendarEventFill/>  Join Event</button>}
                            <div style={{ marginLeft: 60}}>
                            {!item.postpone ? 
                            <h4>
                            <DateCountdown 
                            dateTo={item.date} 
                            numberOfFigures={3} 
                            locales ={['year',' Months',' Days','Hours','minute','second']}
                            />
                            <span>
                            <h5  style={{marginTop:'0.4rem'}}>Remaining</h5>
                            <span><h6>Event Will be Held On {item.date}</h6></span>
                            </span>
                            </h4>
                            : <h2 className="text-danger">Event Postponed</h2>}
                            </div>
                            </div>
                            {item.attendance == 1 ? <h6 style={{marginTop: 13}}>{item.attendance} person is going  <BsFillPersonCheckFill style={{marginLeft: 4}}/></h6> :
                            <h6 style={{marginTop: 13}}>{item.attendance} people are going  <BsFillPersonCheckFill style={{marginLeft: 4}}/></h6>}
                            </div>
                            
                    </div>

                    <CModal
                        show={modal}
                        onClose={toggle}
                        centered={true}
                    >
                        <CModalHeader closeButton>This Event is Free Event</CModalHeader>
                        <CModalBody>
                                <p>Mark Your Attendance and join with this event for free!
                                </p>
                        </CModalBody>
                        <CModalFooter>
                        <a 
                            className="btn btn-success"
                            href="/events"
                            onClick={() => updateAttendance(item._id)}
                        >
                            Mark Attendance
                        </a>{' '}
                        <CButton
                            color="secondary"
                            onClick={toggle}
                        >Cancel</CButton>
                        </CModalFooter>
                    </CModal>

                    <CModal
                        show={jmodal}
                        onClose={jtoggle}
                    >
                        <CModalHeader closeButton><h5>New Jobs <BsFillBriefcaseFill /></h5></CModalHeader>
                        <CModalBody>
                            <JobView />
                        </CModalBody>
                    </CModal>

                    </div>
        )
            })}

            <CModal show={formmodal} onClose={toggleForm}>
            <CModalHeader closeButton><h5>Add New Job <BsFillBriefcaseFill/></h5></CModalHeader>
            <CModalBody>
            <form onSubmit={(e) => e.preventDefault && false}>
                <div className="form-group">
                <label for="question">Job Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => {
                    settitle(e.target.value);
                    }}
                />
                </div>
                <div className="form-group">
                <label for="description">Job Description</label>
                <input
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => {
                    setdescription(e.target.value);
                    }}
                />
                </div>
                <div className="form-group">
                <label for="closingDate">Application Closing Date</label>
                <input
                    type="date"
                    className="form-control"
                    id="closingDate"
                    name="closingDate"
                    value={closingDate}
                    onChange={(e) => {
                    setclosingDate(e.target.value);
                    }}
                />
                </div>
                <div className="form-group">
                <label for="requirements">Add Job Requirements</label>
                <input
                    type="requirements"
                    className="form-control"
                    id="requirements"
                    name="requirements"
                    placeholder="Job Requirementss And Press (+)"
                    value={requirement}
                    onChange={(e) => {
                    setrequirement(e.target.value);
                    }}
                />
                <button
                    className="btn btn-outline-success"
                    type="button"
                    style={{ marginTop: 10 }}
                    onClick={() => {
                    setrequirements([...requirements, requirement]);
                    setrequirement("");
                    }}
                >
                    <HiPlus />
                </button>
                <button
                    className="btn btn-outline-danger"
                    type="button"
                    style={{ marginTop: 10, marginLeft: 20 }}
                    onClick={() => {
                    setrequirements([]);
                    }}
                >
                    <AiOutlineClear />
                </button>
                <div className="form-group" style={{ marginTop: 20}}>
                <CListGroup>
                    {requirements.map(item =>{
                        return <CListGroupItem href="#">{item}</CListGroupItem>
                    })}
                </CListGroup>
                </div>
                </div>
                <button
                type="submit"
                className="btn btn-success btn-block"
                onClick={() => {
                    addJob(title,description,closingDate,requirements);
                    toggleForm();
                }}
                >
                Add New Job
                </button>
            </form>
            </CModalBody>
      </CModal>
        </div>
        </div>
    );
}

export default Event_page;

import React, {useState, useEffect} from 'react';
import {RiCalendarEventFill} from 'react-icons/ri'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import {BsCheckAll} from 'react-icons/bs'
import '../../App.css';

import DateCountdown from 'react-date-countdown-timer';
import { CModal, CModalHeader, CModalBody,CModalFooter,CButton } from "@coreui/react";

//Import api calls
import {getEvents, updateAttendance, getThubnails, getThubnailImage} from './Events_api_calls' /* '../../config/api_calls' */

const Event_page = () => {

    const [events, setEvents] = useState([]);
    const [thumbs, setthumbs] = useState([]);
    const [modal, setModal] = useState(false);

    //Fetch event data and thumnails to state
    useEffect(()=>{
        //Event data
        getEvents().then(result =>{
            setEvents(result)
            console.log(result);
        })
        //Thumbnails
        getThubnails().then(result =>{
            setthumbs(result);
            console.log(result);
        })
    }, [])

    const toggle = ()=>{
        setModal(!modal);
    }


    return (
        <div className="container" style={{marginTop: 20}}>
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
                            <div style={{ marginLeft: 30}}>
                            <h4>
                            <DateCountdown 
                            dateTo={item.date} 
                            numberOfFigures={3} 
                            locales ={['year',' Months',' Days','Hours','minute','second']}
                            />
                            </h4>
                            <h5>Remaining</h5>
                            <div><h6>Event Will be Held On {item.date}</h6></div>
                            </div>
                            </div>
                            {item.attendance == 1 ? <h6 style={{marginTop: 13}}>{item.attendance} person is going  <BsFillPersonCheckFill style={{marginLeft: 4}}/></h6> :
                            <h6 style={{marginTop: 13}}>{item.attendance} people are participating  <BsFillPersonCheckFill style={{marginLeft: 4}}/></h6>}
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
                    </div>
        )
            })}
        </div>
    );
}

export default Event_page;

//test commit
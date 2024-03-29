import React, { useState, useEffect } from "react";
import {
  getEvents,
  addEvent,
  deleteEvent,
  updateEvent,
  postponeEvent,
  updateEventState,
  updateEventStateResume,
  sendReminderAlerts
} from "../../config/api_calls";
import {
  CDataTable,
  CButton,
  CCollapse,
  CCardBody,
  CModalBody,
  CModalHeader,
  CModal,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from "@coreui/react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillAlert } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { HiPlus } from "react-icons/hi";
import { AiOutlineClear } from "react-icons/ai";
import { GiPartyFlags } from "react-icons/gi";
import { RiCalendarEventFill } from "react-icons/ri";

import Dropdown from "react-bootstrap/Dropdown";

const AddEvents = (props) => {
  const [events, setevents] = useState([]);
  const [formmodal, setFormmodal] = useState(false);
  const [editformmodal, seteditformmodal] = useState(false);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [date, setdate] = useState([]);
  const [paid, setpaid] = useState(false);
  const [image, setimage] = useState("");
  const [tickets, settickets] = useState([]);
  const [price, setprice] = useState("");

  const [etitle, setetitle] = useState("");
  const [edescription, setedescription] = useState("");
  const [edate, setedate] = useState([]);
  const [epaid, setepaid] = useState(false);

  const [alert, setalert] = useState("");
  const [reasonp, setreasonp] = useState("");
  const [response, setresponse] = useState(false);
  const [postponeformmodal, setpostponeformmodal] = useState(false);
  const [alertformmodal, setalertformmodal] = useState(false);
  

  useState(() => {
    getEvents().then((result) => {
      setevents(result);
    });
  }, []);

  const toggleForm = () => {
    setFormmodal(!formmodal);
  };

  const toggleEditForm = () => {
    seteditformmodal(!editformmodal);
  };

  const togglePostponeForm = () => {
    setpostponeformmodal(!postponeformmodal);
  };

  const toggleAlertForm = () => {
    setalertformmodal(!alertformmodal);
  };

  const onChangeFile = (e) => {
    console.log(e.target.file[0]);
    setimage(e.target.file)
  }

  const getDateDifference = (date) => {
    let date1 = new Date(); 
    let date2 = new Date(date);

    let Difference_In_Time = date2.getTime() - date1.getTime(); 

    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

    if(Difference_In_Days <= 0){
      return true
    }else{
      return false
    }
  }

  const [details, setDetails] = useState([]);

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const fields = [
    { key: "title", _style: { width: "40%" } },
    { key: "description", _style: { width: "40%" } },
    { key: "date", _style: { width: "40%" } },
    { key: "attendance", _style: { width: "20%" } },
    { key: "paid", _style: { width: "20%" } },
    {
      key: "show_details",
      label: "",
      _style: { width: "30%" },
      sorter: false,
      filter: false,
    },
  ];

  return (
    <div style={{ marginTop: 40, marginLeft: 120, marginRight: 120 }}>
      <CModal show={formmodal} onClose={toggleForm}>
        <CModalHeader closeButton><h5>Add New Event <RiCalendarEventFill/></h5></CModalHeader>
        <CModalBody>
          <form onSubmit={(e) => e.preventDefault && false} encType="multipart/form-data" >
            <div className="form-group">
              <label for="question">Title</label>
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
              <label for="description">Event Description</label>
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
              <label for="image">Event Thumbnail</label>
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
              <label for="tickets">Add Ticket Prices</label>
              <input
                type="tickets"
                className="form-control"
                id="tickets"
                name="tickets"
                placeholder="Enter Ticket Pricess And Press (+)"
                value={price}
                onChange={(e) => {
                  setprice(e.target.value);
                }}
              />
              
              <button
                className="btn btn-outline-success"
                type="button"
                style={{ marginTop: 10 }}
                onClick={() => {
                  settickets([...tickets, price]);
                  setprice("");
                }}
              >
                <HiPlus />
              </button>
              <button
                className="btn btn-outline-danger"
                type="button"
                style={{ marginTop: 10, marginLeft: 20 }}
                onClick={() => {
                  settickets([]);
                }}
              >
                <AiOutlineClear />
              </button>
              <div>
                  <CDropdown className="mt-2">
                    <CDropdownToggle caret color="outline-dark">
                      Added Tickets
                    </CDropdownToggle>
                    <CDropdownMenu>
                      {tickets.map(item =>{
                        return <CDropdownItem>{item} LKR</CDropdownItem>
                      })}
                    </CDropdownMenu>
                  </CDropdown>
              </div>
            </div>
            <div class="form-check" style={{marginBottom: 10 }}>
              <input type="checkbox" class="form-check-input" id="paid" name="paid" defaultChecked={paid}
                onClick={(e) => {
                    setpaid(!paid);
                }}/>
              <label for="paid"> Paid Event</label>
            </div>
            <button
              type="submit"
              className="btn btn-success btn-block"
              onClick={() => {
                addEvent(title,description,image,date,paid,tickets);
                toggleForm();
              }}
            >
              Add New Event
            </button>
          </form>
        </CModalBody>
      </CModal>
      <button
        className="btn btn-outline-dark"
        onClick={() => {
          toggleForm();
        }}
        style={{ marginRight: 10 }}
      >
        Add New Event <GiPartyFlags />
      </button>
      <CDataTable
        items={events}
        fields={fields}
        tableFilter
        itemsPerPageSelect
        itemsPerPage={5}
        hover
        sorter
        pagination
        scopedSlots={{
          show_details: (item, index) => {
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  shape="square"
                  size="sm"
                  onClick={() => {
                    toggleDetails(index);
                    setetitle(item.title)
                    setedate(item.date)
                    setedescription(item.description)
                    setepaid(item.paid)
                  }}
                >
                  {details.includes(index) ? "Hide" : "Actions"}
                </CButton>
              </td>
            );
          },
          details: (item, index) => {
            return (
              <div>
              <CCollapse show={details.includes(index)}>
                <CCardBody>
                <button
                    className="btn btn-success"
                    style={{ marginRight: 20 }}
                    onClick={() => {
                     toggleEditForm()
                    }}
                  >
                    Edit Event<AiFillEdit />
                  </button>
                  {item.postpone ? 
                  <a
                    href={`/admin/events`}
                    className="btn btn-warning"
                    style={{ marginRight: 20 }}
                    onClick={() => {
                     updateEventStateResume(item._id)
                    }}
                  >
                    Resume Event<AiFillAlert />
                  </a>
                  :
                  <a
                    className="btn btn-info"
                    style={{ marginRight: 20 }}
                    onClick={() => {
                     togglePostponeForm()
                    }}
                  >
                    Send Alerts<AiFillAlert />
                  </a>
                  }
                  {getDateDifference(item.date) ?  
                  <a
                    href={`/admin/events`}
                    className="btn btn-danger"
                    onClick={() => {
                      deleteEvent(item._id, item.image);
                    }}
                  >
                    Remove Event <AiFillDelete />
                  </a> : <button
                    className="btn btn-primary"
                    style={{ marginRight: 20 }}
                    onClick={() => {
                     toggleAlertForm()
                    }}
                  >
                    Send Reminder<AiFillAlert />
                  </button>}
                  
                </CCardBody>
              </CCollapse>
              <CModal show={editformmodal} onClose={toggleEditForm}>
              <CModalHeader closeButton><h5>Edit Event <AiFillEdit/></h5></CModalHeader>
              <CModalBody>
                <form onSubmit={(e) => e.preventDefault && false}>
                  <div className="form-group">
                    <label for="question">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={etitle}
                      onChange={(e) => {
                        setetitle(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label for="description">Event Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      value={edescription}
                      onChange={(e) => {
                        setedescription(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label for="date">Event Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="date"
                      value={edate}
                      onChange={(e) => {
                        setedate(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-check" style={{marginBottom: 10 }}>
                    {epaid ?
                    <input type="checkbox" class="form-check-input" id="paid" name="paid" value={epaid}
                      onChange={(e) => {
                          setepaid(e.target.value);
                      }} checked />
                      :
                      <input type="checkbox" class="form-check-input" id="paid" name="paid" value={epaid}
                      onChange={(e) => {
                          setepaid(e.target.value);
                      }}/>}
                    <label for="paid"> Paid Event</label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success btn-block"
                    onClick={() => {
                      updateEvent(item._id,etitle,edescription,edate,epaid);
                      toggleForm();
                    }}
                  >
                    Update Event Details
                  </button>
                </form>
              </CModalBody>
            </CModal>
            <CModal show={alertformmodal} onClose={toggleAlertForm}>
              <CModalHeader closeButton><h5>Create Email Body <AiFillAlert/></h5></CModalHeader>
              <CModalBody>
              <form onSubmit={(e) => e.preventDefault && false} encType="multipart/form-data" >
                  <div className="form-group">
                        <label for="body">Email Body </label>
                        <textarea
                          type="text"
                          className="form-control"
                          id="body"
                          name="body"
                          rows={10}
                          value={alert}
                          onChange={(e) => {
                            setalert(e.target.value);
                          }}
                        ></textarea>
                    </div>
                    {response ?
                    <div class="progress" style={{marginTop: "1rem"}}>
                      <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>Sending Alerts</div>
                    </div> :
                    <button
                    type="submit"
                    className="btn btn-success btn-block"
                    onClick={() => {
                      setresponse(true)
                      sendReminderAlerts(item._id,alert).then(res => {
                        if(res){
                          toggleAlertForm()
                        }
                      })
                    }}
                  >
                    Send Alert
                  </button>
                    }
              </form>
              </CModalBody>
            </CModal>
            <CModal show={postponeformmodal} onClose={togglePostponeForm}>
              <CModalHeader closeButton><h5>Create Email Body <AiFillAlert/></h5></CModalHeader>
              <CModalBody>
              <form onSubmit={(e) => e.preventDefault && false} encType="multipart/form-data" >
                  <div className="form-group">
                        <label for="body">Email Body </label>
                        <textarea
                          type="text"
                          className="form-control"
                          id="body"
                          name="body"
                          rows={10}
                          value={reasonp}
                          onChange={(e) => {
                            setreasonp(e.target.value);
                          }}
                        ></textarea>
                    </div>
                    {response ?
                    <div class="progress" style={{marginTop: "1rem"}}>
                      <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}>Sending Alerts</div>
                    </div> :
                    <button
                    type="submit"
                    className="btn btn-success btn-block"
                    onClick={() => {
                      updateEventState(item._id)
                      setresponse(true)
                      postponeEvent(item._id,reasonp).then(res => {
                        if(res){
                          togglePostponeForm()
                          setresponse(false)
                          setreasonp("")
                        }
                      })
                    }}
                  >
                    Update Event Participants
                  </button>
                    }
              </form>
              </CModalBody>
            </CModal>
            
              </div>
            );
          },
        }}
      />
      
    </div>
  );
};

export default AddEvents;
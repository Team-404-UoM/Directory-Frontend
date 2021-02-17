import React, { useState, useEffect } from "react";
import {
  getJobs,
  addJob,
  deleteJob,
  updateJobs
} from "../../config/api_calls";
import {
  CDataTable,
  CButton,
  CCollapse,
  CCardBody,
  CModalBody,
  CModalHeader,
  CModal,
  CListGroup,
  CListGroupItem
} from "@coreui/react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { HiPlus } from "react-icons/hi";
import { AiOutlineClear } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { RiCalendarEventFill } from "react-icons/ri";
import { IoMdCheckmarkCircle } from "react-icons/io";

const AddJob = (props) => {
  const [jobs, setjobs] = useState([]);
  const [formmodal, setFormmodal] = useState(false);
  const [editformmodal, seteditformmodal] = useState(false);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [closingDate, setclosingDate] = useState([]);
  const [requirements, setrequirements] = useState([]);
  const [requirement, setrequirement] = useState("");

  const [etitle, setetitle] = useState("");
  const [edescription, setedescription] = useState("");
  const [eclosingDate, seteclosingDate] = useState([]);

  useState(() => {
    getJobs().then((result) => {
      setjobs(result);
    });
  }, []);

  const toggleForm = () => {
    setFormmodal(!formmodal);
  };

  const toggleEditForm = () => {
    seteditformmodal(!editformmodal);
  };

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
    { key: "closingDate", _style: { width: "40%" } },
    { key: "requirements", _style: { width: "20%" } },
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
        Add New Job <BsFillBriefcaseFill />
      </button>
      <CDataTable
        items={jobs}
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
                    seteclosingDate(item.closingDate)
                    setedescription(item.description)
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
                    className="btn btn-warning"
                    style={{ marginRight: 20 }}
                    onClick={() => {
                     toggleEditForm()
                    }}
                  >
                    Edit Job<AiFillEdit />
                  </button>
                  <a
                    href={`/admin/events`}
                    className="btn btn-danger"
                    onClick={() => {
                      deleteJob(item._id);
                    }}
                  >
                    Remove Job <AiFillDelete />
                  </a>
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
                    <label for="closingDate">Event closingDate</label>
                    <input
                      type="date"
                      className="form-control"
                      id="closingDate"
                      name="closingDate"
                      value={eclosingDate}
                      onChange={(e) => {
                        seteclosingDate(e.target.value);
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success btn-block"
                    onClick={() => {
                      updateJobs(item._id,etitle,edescription,eclosingDate);
                      toggleForm();
                    }}
                  >
                    Update Event Details
                  </button>
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

export default AddJob;
import React, { useState, useEffect } from "react";
import {
  getEventNames,
  getPaymentRecords,
  getEvents
} from "../../config/api_calls";
import {
  CDataTable,
  CButton,
  CCollapse,
  CCardBody,
  CModalBody,
  CModalHeader,
  CModal,
} from "@coreui/react";
import { AiFillEdit } from "react-icons/ai";
import { HiUserRemove } from "react-icons/hi";
import { RiAddLine } from "react-icons/ri";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

const Questions = (props) => {
  const [list, setList] = useState([]);
  const [payments, setpayments] = useState([]);
  const [formmodal, setFormmodal] = useState(false);
  const [selected, setSelected] = useState("");
  const [events, setevents] = useState([]);

  useState(() => {
    getEventNames().then((result) => {
      setpayments(result);
    });
    getEvents().then(result =>{
      setevents(result)
    })
  }, []);

  const handleSelect = (e) => {
    getPaymentRecords(e).then((res) => {
      setList(res);
    });
    setSelected(e);
  };

  const toggleFotm = () => {
    setFormmodal(!formmodal);
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
    { key: "phone", _style: { width: "40%" } },
    { key: "email", _style: { width: "40%" } },
    { key: "nic", _style: { width: "40%" } },
    { key: "price", _style: { width: "30%" } },
    { key: "qty", _style: { width: "20%" } },
    { key: "date", _style: { width: "40%" } },
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
      <DropdownButton
        alignRight
        title="Select Event"
        id="dropdown-menu-align-right"
        variant="outline-dark"
        onSelect={handleSelect}
      >
        {payments.map((item, i) => {
          if(item.paid){
          return (
            <Dropdown.Item eventKey={item._id}>{item.title}</Dropdown.Item>
          );
          }
        })}
      </DropdownButton>
      <CDataTable
        items={list}
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
                  }}
                >
                  {details.includes(index) ? "Hide" : "Actions"}
                </CButton>
              </td>
            );
          },
          details: (item, index) => {
            return (
              <CCollapse show={details.includes(index)}>
                <CCardBody>
                  <a
                    href={`/Questions`}
                    className="btn btn-danger"
                    onClick={() => {
                      {/* deleteQuiz(item._id, selected); */}
                    }}
                  >
                    Delete Record <HiUserRemove />
                  </a>
                </CCardBody>
              </CCollapse>
            );
          },
        }}
      />
    </div>
  );
};

export default Questions;


import React, { useState, useEffect } from "react";
import {
  getAlbums,
  updateApproval,
  deleteAlbum
} from "../../Events/Events_api_calls";
import {
  CDataTable,
  CButton,
  CCollapse,
  CCardBody,
  CBadge,
  CModal, CModalHeader, CModalBody,CModalFooter
} from "@coreui/react";
import { MdAddAPhoto } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import {FaTruckMonster} from 'react-icons/fa';

const AlbumApproval = (props) => {
  const [albums, setalbums] = useState([]);
  const [formmodal, setFormmodal] = useState(false);
  const [editformmodal, seteditformmodal] = useState(false);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [modal, setModal] = useState(false);

  const toggle = ()=>{
    setModal(!modal);
  }

  useState(() => {
    getAlbums().then((result) => {
      setalbums(result);
      console.log(result);
    });
  }, []);

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
    { key: "name", _style: { width: "40%" } },
    { key: "dateOfEvent", _style: { width: "40%" } },
    { key: "privacy", _style: { width: "40%" } },
    { key: "category", _style: { width: "25%" } },
    { key: "approval", _style: { width: "20%" } },
    {
      key: "show_details",
      label: "",
      _style: { width: "30%" },
      sorter: false,
      filter: false,
    },
  ];

  const getBadge = (status)=>{
    switch (status) {
      case true: return 'success'
      case false: return 'danger'
      default: return 'primary'
    }
  }

  return (
    <div style={{ marginTop: 40, marginLeft: 120, marginRight: 120 }}>
      <CDataTable
        items={albums}
        fields={fields}
        tableFilter
        itemsPerPageSelect
        itemsPerPage={5}
        hover
        sorter
        pagination
        scopedSlots={{
          approval:
          (item)=>(
            <td>
              <CBadge color={getBadge(item.approval)}>
                {item.approval ? "Approved" : "Pending"}
              </CBadge>
            </td>
          ),
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
              <div>
              <CCollapse show={details.includes(index)}>
                <CCardBody>
                  {
                  !item.approval ?
                  <div>
                  <button
                    className="btn btn-success"
                    style={{ marginRight: 20 }}
                    onClick={() => {
                     updateApproval(item._id)
                     toggle()
                    }}
                  >
                    Approve Album <MdAddAPhoto />
                  </button>
                  <a
                    href={`/admin/events`}
                    className="btn btn-danger"
                    onClick={() => {
                      deleteAlbum(item._id , item.thumbnail);
                    }}
                  >
                    Remove Album <AiFillDelete />
                  </a>
                  </div>
                  :
                  <div>
                  <a
                    href={`/admin/events`}
                    className="btn btn-danger"
                    onClick={() => {
                      deleteAlbum(item._id, item.thumbnail);
                    }}
                  >
                    Remove Album <AiFillDelete />
                  </a>
                  </div>
                  }
                </CCardBody>
              </CCollapse>
              <CModal
                  show={modal}
                  onClose={toggle}
                  centered={true}
                  fade={FaTruckMonster}
              >
                  <CModalHeader closeButton>Change Done</CModalHeader>
                  <CModalBody>
                          <p>
                            Change that tou done has been completed Successfully!
                          </p>
                  </CModalBody>
                  <CModalFooter>
                  <a className="btn btn-success" href="/admin/events">OK</a>{' '}
                  <CButton
                      color="secondary"
                      onClick={toggle}
                  >Cancel</CButton>
                  </CModalFooter>
              </CModal>
              </div>
            );
          },
        }}
      />
      
    </div>
  );
};

export default AlbumApproval;
import React,{useState} from 'react'
import {
    CButton,
    CModalBody,
    CModalHeader,
    CModal
  } from "@coreui/react";

import JobView from './JobView';

export default function JobModel(props) {

    const [modal, setModal] = useState(false);

    const toggle = ()=>{
        setModal(props.state);
    }

    return (
        <div>
        <CModal
            show={modal}
            onClose={toggle}
        >
            <CModalHeader closeButton>Modal title</CModalHeader>
            <CModalBody>
                <JobView />
            </CModalBody>
        </CModal>
        </div>
    )
}

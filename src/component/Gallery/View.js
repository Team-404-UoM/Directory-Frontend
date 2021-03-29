import React, {useState,useEffect} from 'react'
import {BsCardImage} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'
import {GoEyeClosed} from 'react-icons/go'
import {MdCameraEnhance} from 'react-icons/md'
import { ImCamera } from "react-icons/im";

import {
    CModal,
    CModalHeader,
    CModalBody,
    CModalFooter,
    CButton
} from "@coreui/react";

import {getAlbum, addPhotos, removepic} from '../../config/api_calls'

export default function View(props) {

    const [modal, setModal] = useState(false);
    const [formmodal, setFormmodal] = useState(false);
    const [image, setimage] = useState([]);
    const [images, setimages] = useState([]);
    const [album, setalbum] = useState([]);
    const [selected, setselected] = useState("")

    useEffect(()=>{
        getAlbum(props.match.params.id).then(result =>{
            setalbum(result[0]);
            setimages(result[0].images)
        })
    },[])


    const toggle = ()=>{
        setModal(!modal);
    }

    const toggleForm = () => {
        setFormmodal(!formmodal);
    };

    return (
        <div className="container" style={{marginTop: 20}}>
        <button className="btn btn-outline-dark" onClick={toggleForm}>Add New Photos <ImCamera/></button>
        <hr class="solid"></hr>
        <div className="container">
            <p className="text-center">{album.name}</p>
            <p className="text-center" style={{fontSize: 12, color: 'gray'}}>This event was held at {album.dateOfEvent}</p>
        </div>
        <div class="card-columns" style={{marginTop: 20}}>
            {images.map(item =>{
            return <div>
            <div class="card bg-light backgrounds" style={{background: `url(${item})`,backgroundRepeat: 'no-repeat', backgroundSize: '400px', borderRadius: 15}}>
                <div class="card-body text-center" style={{color: 'black', fontWeight: 'bold',height: 200}}>     
                </div>
                <div className="card-footer"  style={{border: 'none'}}>
                    <div className="d-flex flex-row-reverse" style={{opacity: 0.8, color: 'white'}}>
                        <button className="btn btn-light" style={{marginLeft: 10}} onClick={() => {
                            toggle()
                            setselected(item)
                        }}><BsCardImage/></button>
                        <a href={`/albums/${props.match.params.category}/${props.match.params.id}`} className="btn btn-light" style={{marginLeft: 10}} onClick={() => {
                            removepic(props.match.params.id,item)
                        }}><AiFillDelete/></a>
                    </div>
                </div>
            </div>
            </div>
            })}

            <CModal
                show={modal}
                onClose={toggle}
            >
            <CModalHeader closeButton></CModalHeader>
                <CModalBody>
                    <img 
                    src={selected} 
                    alt="img" 
                    style={{marginLeft: 'auto', width: '100%', marginRight: 'auto', display: 'block', borderRadius: 5}}
                    />
                </CModalBody>
                <CModalFooter>
                <CButton
                    color="secondary"
                    onClick={toggle}
                ><GoEyeClosed/></CButton>
                </CModalFooter>
            </CModal>
           
            <CModal show={formmodal} onClose={toggleForm}>
            <CModalHeader closeButton><h5>Add More Photos <MdCameraEnhance/></h5></CModalHeader>
            <CModalBody>
            <form onSubmit={(e) => e.preventDefault && false} encType="multipart/form-data" >
                <div className="form-group">
                <label for="image">Select Images</label>
                <input
                    type="file"
                    class="form-control-file"
                    id="image"
                    name="image"
                    onChange={(e) => {
                    console.log(e.target.files);
                    setimage(e.target.files)
                    }}
                    multiple
                />
                </div>
                <button
                type="submit"
                className="btn btn-success btn-block"
                onClick={() => {
                    addPhotos(props.match.params.id, image);
                }}
                >
                Add Selected Images
                </button>
            </form>
            </CModalBody>
        </CModal>
         </div>   
        </div>
        )
}

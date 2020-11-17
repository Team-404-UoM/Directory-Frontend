import React, {useState} from 'react'
import {BsCardImage} from 'react-icons/bs'
import {GoDesktopDownload} from 'react-icons/go'
import {GoEyeClosed} from 'react-icons/go'

import {
    CModal,
    CModalHeader,
    CModalBody,
    CModalFooter,
    CButton
} from "@coreui/react";

export default function View(props) {

    const [modal, setModal] = useState(false);

    const toggle = ()=>{
        setModal(!modal);
    }

    return (
        <div className="container" style={{marginTop: 20}}>
        <div class="card-columns">
            <div class="card bg-light backgrounds" style={{background: `url(https://i.ibb.co/N2TGvDf/118224185-126158935858807-8309525304849168953-o.jpg)`,backgroundRepeat: 'no-repeat', backgroundSize: '400px', borderRadius: 15}}>
                <div class="card-body text-center" style={{color: 'black', fontWeight: 'bold',height: 200}}>     
                </div>
                <div className="card-footer"  style={{border: 'none'}}>
                    <div className="d-flex flex-row-reverse" style={{opacity: 0.8, color: 'white'}}>
                        <button className="btn btn-light" style={{marginLeft: 10}} onClick={toggle}><BsCardImage/></button>
                        <button className="btn btn-light"><GoDesktopDownload/></button>
                    </div>
                </div>
            </div>
            <div class="card bg-light backgrounds" style={{background: `url(https://i.ibb.co/8zWkRTD/118081910-126161462525221-2452168982090569945-o.jpg)`,backgroundRepeat: 'no-repeat', backgroundSize: '400px', borderRadius: 15}}>
                <div class="card-body text-center" style={{color: 'black', fontWeight: 'bold',height: 200}}>     
                </div>
                <div className="card-footer"  style={{border: 'none'}}>
                    <div className="d-flex flex-row-reverse" style={{opacity: 0.8, color: 'white'}}>
                        <button className="btn btn-light" style={{marginLeft: 10}}><BsCardImage/></button>
                        <button className="btn btn-light"><GoDesktopDownload/></button>
                    </div>
                </div>
            </div>
            <div class="card bg-light backgrounds" style={{background: `url(https://i.ibb.co/19r9KYL/118130853-3204639322946954-5011689679176782486-o.jpg)`, backgroundSize: '400px', borderRadius: 15}}>
                <div class="card-body text-center" style={{color: 'black', fontWeight: 'bold',height: 200}}>     
                </div>
                <div className="card-footer"  style={{border: 'none'}}>
                    <div className="d-flex flex-row-reverse" style={{opacity: 0.8, color: 'white'}}>
                        <button className="btn btn-light" style={{marginLeft: 10}}><BsCardImage/></button>
                        <button className="btn btn-light"><GoDesktopDownload/></button>
                    </div>
                </div>
            </div>
            <div class="card bg-light backgrounds" style={{background: `url(https://i.ibb.co/djR5jxZ/118267954-632620200721159-1066456682436712728-o.jpg)`, backgroundSize: '400px', borderRadius: 15}}>
                <div class="card-body text-center" style={{color: 'black', fontWeight: 'bold',height: 200}}>     
                </div>
                <div className="card-footer"  style={{border: 'none'}}>
                    <div className="d-flex flex-row-reverse" style={{opacity: 0.8, color: 'white'}}>
                        <button className="btn btn-light" style={{marginLeft: 10}} ><BsCardImage/></button>
                        <button className="btn btn-light"><GoDesktopDownload/></button>
                    </div>
                </div>
            </div>
            <div class="card bg-light backgrounds" style={{background: `url(https://i.ibb.co/nMVjjz9/118291099-1738176392988213-4570096035186527027-o.jpg)`, backgroundSize: '400px', borderRadius: 15}}>
                <div class="card-body text-center" style={{color: 'black', fontWeight: 'bold',height: 200}}>     
                </div>
                <div className="card-footer"  style={{border: 'none'}}>
                    <div className="d-flex flex-row-reverse" style={{opacity: 0.8, color: 'white'}}>
                        <button className="btn btn-light" style={{marginLeft: 10}}><BsCardImage/></button>
                        <button className="btn btn-light"><GoDesktopDownload/></button>
                    </div>
                </div>
            </div>
            <div class="card bg-light backgrounds" style={{background: `url(https://i.ibb.co/r65wQ7m/118470491-1005898146518169-8538595805022180721-o.jpg)`, backgroundSize: '400px', borderRadius: 15}}>
                <div class="card-body text-center" style={{color: 'black', fontWeight: 'bold',height: 200}}>     
                </div>
                <div className="card-footer"  style={{border: 'none'}}>
                    <div className="d-flex flex-row-reverse" style={{opacity: 0.8, color: 'white'}}>
                        <button className="btn btn-light" style={{marginLeft: 10}}><BsCardImage/></button>
                        <button className="btn btn-light"><GoDesktopDownload/></button>
                    </div>
                </div>
            </div>

            <CModal
                show={modal}
                onClose={toggle}
            >
            <CModalHeader closeButton></CModalHeader>
                <CModalBody>
                    <img 
                    src={'https://i.ibb.co/N2TGvDf/118224185-126158935858807-8309525304849168953-o.jpg'} 
                    alt="img" 
                    style={{marginLeft: 'auto', width: '100%', marginRight: 'auto', display: 'block', borderRadius: 5}}
                    />
                </CModalBody>
                <CModalFooter>
                <CButton color="primary"> Download <GoDesktopDownload/></CButton>{' '}
                <CButton
                    color="secondary"
                    onClick={toggle}
                ><GoEyeClosed/></CButton>
                </CModalFooter>
            </CModal>
         </div>   
        </div>
        )
}

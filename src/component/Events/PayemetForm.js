import React, {useState,useEffect} from 'react';

import {FaTicketAlt, FaTruckMonster} from 'react-icons/fa';
import {MdPayment} from 'react-icons/md';

import { addPaymentData, getTickets } from "../../config/api_calls";
import { CModal, CModalHeader, CModalBody,CModalFooter,CButton } from "@coreui/react";
import "./bootstrap.min.css";

const PayemetForm = (props) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [nic, setNic] = useState('');
    const [card, setCard] = useState('');
    const [email, setEmail] = useState('');
    const [cvv, setCvv] = useState('');
    const [expDate, setexpDate] = useState('');
    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(0);
    const [tickets, setTickets] = useState([]);
    const [modal, setModal] = useState(false);

    const [namev, setNamev] = useState(false);
    const [phonev, setPhonev] = useState(false);
    const [nicv, setNicv] = useState(false);
    const [cardv, setCardv] = useState(false);
    const [emailv, setEmailv] = useState(false);
    const [qtyv, setQtyv] = useState(false);
    const [pricev, setPricev] = useState(false);
    const [expdatev, setExpdatev] = useState(false);
    const [cvvv, setCvvv] = useState(false);
    

    useEffect(()=>{
        getTickets(props.match.params.id).then((result) =>{
            setTickets(result[0].tickets);
        });
    },[]);

    const toggle = ()=>{
        setModal(!modal);
    }

    return (
        <div className="container" style={{marginTop: 50}}>
            <div className="card">
                <div className="card-header">
                    <h3>Purchase Tickets <FaTicketAlt /></h3>
                </div>
                <div className="card-body">
                    <form onSubmit={(e) => e.preventDefault && false}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label for="name">Name</label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" required
                                onChange={(e) => setName(e.target.value)}
                            />
                            {namev ? <small className="text-danger">This feild is required</small> : null}
                            </div>
                            <div className="form-group col-md-6">
                            <label for="phone">Phone</label>
                            <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone Number" required
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            {phonev ? <small className="text-danger">This feild is required</small> : null}
                            {phone.length !== 10 && phone !== '' ? <small className="text-danger"> Phone Number Is Not Valid</small>: null}
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailv ? <small className="text-danger">This feild is required</small> : null}
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label for="nic">NIC Number</label>
                            <input type="text" className="form-control" id="nic" name="nic" required
                                onChange={(e) => setNic(e.target.value)}
                            />
                            {nicv ? <small className="text-danger">This feild is required</small> : null}
                            {nic.length !== 10 && nic !== '' ? <small className="text-danger">NIC Number Is Not Valid</small>: null}
                            </div>
                            <div className="form-group col-md-4">
                            <label for="price">Ticket Type</label>
                                <select id="price" name="price" className="form-control" required
                                    onChange={(e) => setPrice(e.target.value)}
                                >
                                    <option defaultValue>Choose...</option>
                                {
                                    tickets.map(item =>{
                                        return(<option value={item}>{item} LKR</option>)
                                    })
                                }
                                </select>  
                                {pricev ? <small className="text-danger">Please select ticket</small> : null}
                            </div>
                            <div className="form-group col-md-2">
                            <label for="qty">Quantity</label>
                            <input type="number" className="form-control" id="qty" name="qty" value={1}  min={1} required
                                onChange={(e) => setQty(e.target.value)}
                            />
                            {qtyv ? <small className="text-danger">This feild is required</small> : null}
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label for="card">Card Number</label>
                            <input type="text" className="form-control" id="card" name="card" required
                                onChange={(e) => setCard(e.target.value)}
                            />
                            {cardv ? <small className="text-danger">This feild is required</small> : null}
                            </div>
                            <div className="form-group col-md-4">
                            <label for="expDate">Expire Date</label>
                            <input className="form-control" type="text" name="expDate" id="expDate"
                                onChange={(e) => setexpDate(e.target.value)}
                             />
                            </div>
                            {expdatev ? <small className="text-danger">This feild is required</small> : null}
                            <div className="form-group col-md-2">
                            <label for="cvv">CVV</label>
                            <input type="number" className="form-control" id="cvv" name="cvv"
                                onChange={(e) => setCvv(e.target.value)}
                            />
                            {cvvv ? <small className="text-danger">This feild is required</small> : null}
                            </div>
                        </div>
                        <a 
                        type="submit" 
                        className="btn btn-success btn-lg btn-block"
                        onClick= {() =>{
                            if(name === ''){
                                setNamev(true);
                            }
                            if(phone === '' || (phone === '' && phone.length === 10)){
                                setPhonev(true);
                            }
                            if(email === ''){
                                setEmailv(true);
                            }
                            if(nic === '' || (nic === '' && nic.length === 10)){
                                setNicv(true);
                            }
                            if(price === ''){
                                setPricev(true);
                            }
                            if(qty === ''){
                                setQtyv(true);
                            }
                            if(card === ''){
                                setCardv(true);
                            }
                            if(cvv === ''){
                                setCvvv(true)
                            }
                            if(expDate === ''){
                                setExpdatev(true)
                            }

                            if(!phonev && !emailv && !cardv){
                                addPaymentData(props.match.params.id ,name, phone, email, nic, price, qty, card).then(res => {
                                toggle()
                            });
                            }
                        }}
                        >
                        Process Payment <MdPayment/>
                        </a>
                    </form>
                </div>
            
        </div>

        <CModal
            show={modal}
            onClose={toggle}
            centered={true}
            fade={FaTruckMonster}
        >
            <CModalHeader closeButton>Payment Successful!</CModalHeader>
            <CModalBody>
                    <p>Your payement is succesfully completed! 
                        Your Ticket information will be send to your email shortly.
                        Enjoy!
                    </p>
            </CModalBody>
            <CModalFooter>
            <a className="btn btn-success" href="/events">OK</a>{' '}
            <CButton
                color="secondary"
                onClick={toggle}
            >Cancel</CButton>
            </CModalFooter>
        </CModal>
    </div>


       
 

       
    );
}

export default PayemetForm;

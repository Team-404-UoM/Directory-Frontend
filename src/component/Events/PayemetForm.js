import React, {useState,useEffect} from 'react';

import {FaTicketAlt, FaTruckMonster} from 'react-icons/fa';
import {MdPayment} from 'react-icons/md';
import PayPal from "./PayPal";

//Import REST functions
import { getTickets } from '../../config/api_calls'

const PayemetForm = (props) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [nic, setNic] = useState('');
    const [email, setEmail] = useState('');
    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(0);
    const [tickets, setTickets] = useState([]);
    const [checkout, setCheckOut] = useState(false);

    const [namev, setNamev] = useState(false);
    const [phonev, setPhonev] = useState(false);
    const [nicv, setNicv] = useState(false);
    const [emailv, setEmailv] = useState(false);
    const [qtyv, setQtyv] = useState(false);
    const [pricev, setPricev] = useState(false);
    

    //Fetch ticket prices for state
    useEffect(()=>{
        getTickets(props.match.params.id).then((result) =>{
            setTickets(result[0].tickets);
        });
    },[]);

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
                                onChange={(e) => setEmail(e.target.value)} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
                            <input type="number" className="form-control" id="qty" name="qty" value={qty} min={1} required
                                onChange={(e) => setQty(e.target.value)}
                            />
                            {qtyv ? <small className="text-danger">This feild is required</small> : null}
                            </div>
                        </div>
                        {checkout ? (
                            <PayPal props={{"amount": price * qty, "tickets": qty, "name": name, "email": email, "phone": phone, "nic":nic, "id": props.match.params.id, "price": price}}/>
                        ) : (
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
                            if(!phonev && !emailv){
                            setCheckOut(true);
                            }
                        }}
                        >
                        Select Payment Method <MdPayment/>
                        </a>
                        )}
                    </form>
                </div>
            
        </div>
    </div>


       
 

       
    );
}

export default PayemetForm;

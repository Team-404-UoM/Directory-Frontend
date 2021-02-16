import React, { useRef, useEffect,useState } from "react";
import { CModal, CModalHeader, CModalBody,CModalFooter,CButton } from "@coreui/react";

import { addPaymentData } from './Events/Events_api_calls'
import {FaTruckMonster} from 'react-icons/fa';

export default function Paypal({props}) {
  const paypal = useRef();

  const [amount, setamount] = useState(props['amount']);
  const [name, setname] = useState(props['name']);
  const [email, setemail] = useState(props['email']);
  const [tickets, settickets] = useState(props['tickets']);
  const [phone, setphone] = useState(props['phone']);
  const [nic, setnic] = useState(props['nic']);
  const [id, setid] = useState(props['id'])
  const [modal, setModal] = useState(false);
  
  const print = () =>{
    console.log('done payment');
  }

  const toggle = ()=>{
    setModal(!modal);
  }

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: props['amount'],
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          print();
          console.log(order);
          addPaymentData(id ,name, phone, email, nic, amount, tickets).then(res => {
            toggle()
          });
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div style={{marginBottom: 20}}>
      <div className="container" ref={paypal} style={{width:800, marginTop: 40}}></div>
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

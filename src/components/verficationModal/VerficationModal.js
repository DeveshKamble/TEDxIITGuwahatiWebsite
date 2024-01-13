import useScript from '../../utilities/Hooks/useScript'
import React, { useEffect, useState, useRef } from 'react';
// import otpGenerator from 'otp-generator'
import styles from './modal.module.css'
import emailjs from '@emailjs/browser';
import { USER_TYPE, EMAIL_REGEX } from './constants'

const STATUS_CODE = {
    SUCCESS: 1,
    ERROR: 2,
    PENDING: 3
}

const EXPIRY_TIME = {
    DELAY: 10 // minutes
}

const VerficationModal = ({ open, onCloseModal, userType, checkoutHandler }) => {
    const [details, setDetails] = useState({ name: '', email: '', otp: '' })
    const otpDetails = useRef()
    const [step, setStep] = useState(1);
    const [status, setStatus] = useState({
        code: STATUS_CODE.SUCCESS, errorMsg: 'Please enter correct otp.'
    })

    function modifyDetails(e) {
        const { value, dataset: { id } } = e.target

        setDetails({ ...details, [id]: value })
    }
    function func(){
        console.log("abc");
    }

    useScript('https://checkout.razorpay.com/v1/checkout.js')
    const BaseURL = process.env.BACKEND_URL

    function checkoutHandler(Name, email, amount){

    }

    return(
        <>
        <div id={styles.TicketModal}>
            <div className={styles.modalHeader}>
                <h1 id='modalTitle'>{userType == USER_TYPE.CIVILIAN ? 'Buy Tickets' : 'Buy Tickets (for IITG Students)'}</h1>
                <button data-close-button onClick={func} className={styles.closeBtn}>
                ×<div className={styles.circle}>×</div>
                </button>
            </div>
            <div className="Note"><p className={`warning`}>Important: 
                <br />
                1. Please Note that the Ticket Design is different for IITG Students, So Please make sure to purchase right ticket.
                <br />
                2. Enter your Email correctly to recieve the Ticket for the Event.
                <br />
                </p></div>
            <div className="modalBody">
                <div className="name-container">
                    {step == 1 && <input placeholder='Name'
                            type="text"
                            data-id="name"
                            value={details.name}
                            onChange={modifyDetails}
                            className="tedx_input"
                        ></input>}
                </div>
                
                <div className="email-container">
                    {userType == USER_TYPE.REGISTERED_STUDENT && step == 1 && <input placeholder='Registered IITG email'
                        type="text"
                        value={details.email}
                        data-id="email"
                        onChange={modifyDetails}
                        className={`tedx_input`}

                    ></input>}
                    {userType == USER_TYPE.REGISTERED_STUDENT && step == 2 &&
                        <input placeholder='OTP'
                            type="text"
                            data-id="otp"
                            value={details.otp}
                            onChange={modifyDetails}
                            className="tedx_input otp_input"

                        ></input>
                    }
                </div>
                <div className="amount-container">

                </div>

                <div className="btn-container">
                    {/* <button className="btn cancel-btn" onClick={onCloseModal}>Cancel</button>
                    {userType == USER_TYPE.REGISTERED_STUDENT && <button disabled={isSubmitDisabled() || status.code == STATUS_CODE.PENDING} onClick={submitHandler} className={`btn submit-btn`}>{status.code == STATUS_CODE.PENDING && <CircleAnimation />}{step == 1 ? 'Send OTP & verify' : 'Proceed to Payment'}</button>}

                    {userType == USER_TYPE.CIVILIAN && <button disabled={isSubmitDisabled() || status.code == STATUS_CODE.PENDING} onClick={() => submitHandler()} className="btn submit-btn">{status.code == STATUS_CODE.PENDING && <CircleAnimation />}Proceed to Payment</button>} */}
                </div>
            </div>
        </div>
        <div id={styles.overlay}></div>
        </>
    )

}

export default VerficationModal;
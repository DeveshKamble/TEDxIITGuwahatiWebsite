import useScript from '../../utilities/Hooks/useScript'
import React, { useEffect, useState, useRef } from 'react';
import styles from './modal.module.css'
import emailjs from '@emailjs/browser';
import { customOtpGen } from 'otp-gen-agent'

const STATUS_CODE = {
    SUCCESS: 1,
    ERROR: 2,
    PENDING: 3
}

const EXPIRY_TIME = {
    DELAY: 10 // minutes
}

const VerficationModal = ({userType, func}) => {
    const [details, setDetails] = useState({ name: '', email: '', otp: '' })
    const otpDetails = useRef()
    const [step, setStep] = useState(1);
    const [status, setStatus] = useState({
        code: STATUS_CODE.SUCCESS, errorMsg: 'Please enter correct otp.'
    })

    const EMAIL_REGEX = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,4})$/;

    const USER_TYPE = {
        CIVILIAN: "Civilian",
        REGISTERED_STUDENT: "Student"
    }

    useEffect(() => {
        otpDetails.current = { otp: null, expiredTime: null }
    }, [])

    function modifyDetails(e) {
        const { value, dataset: { id } } = e.target

        setDetails({ ...details, [id]: value })
    }

    function isFormValid() {
        switch (userType) {
            case USER_TYPE.CIVILIAN: {
                if (details.name !== "" && EMAIL_REGEX.test(details.email)) {
                    return true
                }
                break;
            }
            case USER_TYPE.REGISTERED_STUDENT: {
                const index = details.email.indexOf('@')
                const domain = details.email.slice(index + 1)
                if (details.name !== "" && EMAIL_REGEX.test(details.email) && domain == "iitg.ac.in") {
                    return true
                }
            }
        }
        return false
    }

    function createForm() {
        const my_form = document.createElement('FORM');
        my_form.name = 'myForm';

        const my_tb = document.createElement('INPUT');
        my_tb.type = 'TEXT';
        my_tb.name = 'otp';
        my_tb.value = otpDetails.current.otp;
        my_form.appendChild(my_tb);

        const my_tb2 = document.createElement('INPUT');
        my_tb2.type = 'TEXT';
        my_tb2.name = 'to';
        my_tb2.value = details.email;
        my_form.appendChild(my_tb2);

        const my_tb3 = document.createElement('INPUT');
        my_tb3.type = 'TEXT';
        my_tb3.name = 'user_name';
        my_tb3.value = details.name;
        my_form.appendChild(my_tb3);

        return my_form
    }

    function isSubmitDisabled() {
        if(!isFormValid()){
            console.log("disabled")
        }
        return !isFormValid()
    }

    async function sendOTP() {
        const otp = await customOtpGen({length: 6, chars: 'abc123456789'});
        console.log(otp);
        otpDetails.current = {
            otp,
            expiredTime: Date.now() + 60000 * EXPIRY_TIME.DELAY
        }
        setStatus({
            ...status,
            code: STATUS_CODE.PENDING
        })

        emailjs.sendForm('service_21to2df', 'template_hf503cz', createForm(), '0iJ0axPwmTZaxIH53')
            .then((result) => {
                setStatus({
                    ...status,
                    errorMsg: '',
                    code: STATUS_CODE.SUCCESS
                })
                setStep(2)
            }, (error) => {
                setStatus({
                    ...status,
                    errorMsg: 'Request failed due to server error.',
                    code: STATUS_CODE.ERROR
                })
                console.log(error.text);
            });

    }

    function checkOTPValidity() {
        // TO-DO: Add expiry check for otp
        const now = +new Date()
        const expiryTime = +new Date(otpDetails.current.expiredTime)
        if (details.otp == otpDetails.current.otp && now < expiryTime) return true

        return false
    }


    async function submitHandler() {
        if (step == 1) {
            sendOTP()
        } else {
            const status = checkOTPValidity()
            if (status) {
                setStatus({
                    errorMsg: '',
                    code: STATUS_CODE.SUCCESS
                })
                console.log("emailisValid")
                checkoutHandler(250, details.name, details.email)
            } else {
                setStatus({
                    errorMsg: 'Invalid OTP entered or time has expired.',
                    code: STATUS_CODE.ERROR
                })
            }
        }
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
            <div className={styles.Note}><p className={`warning`}>Important: 
                <br />
                1. Please Note that the Ticket Design is different for IITG Students, So Please make sure to purchase right ticket.
                <br />
                2. Enter your Email correctly to recieve the Ticket for the Event.
                <br />
                </p></div>
            <div className={styles.modalBody}>
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
                    {userType == USER_TYPE.CIVILIAN && step == 1 && <input placeholder='Email'
                        type="text"
                        value={details.email}
                        data-id="email"
                        onChange={modifyDetails}
                        className={`tedx_input`}

                    ></input>}
                    {step == 2 &&
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
                    <h2>Amount: </h2>
                    <h2>{userType == USER_TYPE.CIVILIAN?"Rs. 250":"Rs.200"}</h2>
                </div>

                <div className="btn-container">
                    <button className="btn cancel-btn" onClick={func}>Cancel</button>
                    {<button disabled={status.code == STATUS_CODE.PENDING} onClick={submitHandler} className={`btn submit-btn`}>{status.code == STATUS_CODE.PENDING}{step == 1 ? 'Send OTP & verify' : 'Proceed to Payment'}</button>}

                    {/* {userType == USER_TYPE.CIVILIAN && <button disabled={isSubmitDisabled() || status.code == STATUS_CODE.PENDING} onClick={() => submitHandler()} className="btn submit-btn">{status.code == STATUS_CODE.PENDING && <CircleAnimation />}Proceed to Payment</button>} */}
                </div>
            </div>
        </div>
        
        </>
    )

}

export default VerficationModal;
import React from 'react';
import { useEffect } from 'react';
import emailjs from 'emailjs-com';
import styles from './styles.module.css'
import { useSearchParams, useNavigate } from "react-router-dom"
import CircleAnimation from '../../components/loading/Circle.js';


function PaymentRedirect(props) {
    const seachQuery = useSearchParams()[0]
    const navigate = useNavigate()


    useEffect(() => {
        const referenceNum = seachQuery.get("reference")
        const email = seachQuery.get("email")
        const name = seachQuery.get("name")
        const params = {
            to: email,
            url: `http://localhost:3000/success?reference=${referenceNum}&email=${email}&name=${name}`,
            name,
            reference: referenceNum
        }
        emailjs.send('', '', params, '')
            .then((obj) => {
                navigate(`/success?reference=${referenceNum}&email=${email}&name=${name}`)
            })
            .catch((err) => {
                console.log(err)
            })


    }, [])
    return (
        <div className={styles.container}>
            <h3>Processing Payment...</h3>
            <CircleAnimation />
        </div>
    );
}

export default PaymentRedirect;
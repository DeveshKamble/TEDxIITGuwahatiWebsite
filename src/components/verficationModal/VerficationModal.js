import {useScript} from '../../utilities/Hooks/useScript'

const VerficationModal = () => {

    useScript('https://checkout.razorpay.com/v1/checkout.js')
    const BaseURL = process.env.BACKEND_URL

    function checkoutHandler(Name, email, amount){

    }

    const options = {

    }

    return(
        <></>
    )

}
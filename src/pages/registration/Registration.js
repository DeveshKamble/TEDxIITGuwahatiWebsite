import styles from './registration.module.css'
import NavBar from '../../components/navbar/Navbar'
import Newsletter from '../../components/Newsletter/newsletter'
import Footer from '../../components/footer/Footer'

const Registration = () => {
    
    return(
        <>
        <NavBar/>
        <div className={styles.contentContainer}>
            <div className={styles.upper}>
                <div className={styles.headingContainer}>
                    <p className={styles.overheading}>Secure your seat —</p>
                    <h1 className={styles.heading}>Get Your Passes Today</h1>
                </div>
                <p className={styles.message}>Join us for an electrifying day of thought-provoking
                    talks, inspiring performances, and engaging
                    discussions. Our lineup of esteemed speakers will
                    share their powerful ideas and innovative insights at
                    TEDxGateway 2023. Secure your tickets now and
                    reserve your spot at our upcoming event. With
                    limited seating available, early booking is highly
                    recommended.
                </p>
            </div>
            <div>
            </div>
            <div className={styles.ticketContainer} >
                <div className={styles.ticket}>
                    <div className={styles.passContainer}>
                        <h3 className={styles.passname}>General Pass</h3>
                        <img className={styles.image} loading='lazy' src={'/images/Registration/img1.svg'} style={{right:'0'}} alt="upperImg" />
                    </div>
                    <div className={styles.ticketDetails}>
                        <div className={styles.priceContainer}>
                            <p className={styles.priceHeading}> price</p>
                            <h3 className={styles.priceValue}>₹ 10,000 /-</h3>
                        </div>
                        <div className={styles.details}>
                            <h3 className={styles.detailsHeading}>Exclusive benefits</h3>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>Access to Simulcast Zone</li>
                                <li className={styles.listItem}>Access to all sessions in-person event in Main Hall</li>
                                <li className={styles.listItem}>Reserved Seating with assured seat numbers</li>
                                <li className={styles.listItem}>Early access: get admitted early to the theatre to access the best seats for all sessions</li>
                                <li className={styles.listItem}>Exclusive Access to meet & network with speakers</li>
                                <li className={styles.listItem}>Faster Registration process</li>
                                <li className={styles.listItem}>Networking with other attendees</li>
                                <li className={styles.listItem}>Access to Special Programming and Additional events, spaces and opportunities to meet speakers</li>
                                <li className={styles.listItem}>Quick access to main stage seats from priority gates</li>
                            </ul>
                            <p className={styles.footer}>& more benefits</p>
                        </div>
                        <div className={styles.buttonContainer}><button className={styles.bookButton}>Book Now</button></div>
                        
                    </div>
                    <div className={styles.nudges}>
                        <img className={styles.triangle1} src="/images/Registration/triangle.svg" alt="triangle" />
                        <div className={styles.line}></div>
                        <img className={styles.triangle2} src="/images/Registration/triangle.svg" alt="triangle" />
                    </div>
                    <div className={styles.circleContainer}>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                        <div className={styles.circle}></div>
                    </div>
                    
                </div>
                <div className={styles.ticket}>
                    <div className={styles.passContainer}>
                        <h3 className={styles.passname}>IITG Pass</h3>
                        <img className={styles.image} loading='lazy' src={'/images/Registration/img2.svg'} style={{left:'0'}} alt="upperImg" />
                    </div>
                    <div className={styles.ticketDetails}>
                        <div className={styles.priceContainer}>
                            <p className={styles.priceHeading}> price</p>
                            <h3 className={styles.priceValue}>₹ 500 /-</h3>
                        </div>
                        <div className={styles.line}></div>
                    </div>
                </div>
            </div>
        </div>
        <Newsletter/>
        <Footer/>
        </>
    )
}

export default Registration
import styles from './newsletter.module.css'

const Newsletter = () => {
    return(
        <>
            <div className={styles.container}>
                <img src="Images/Newsletter/newsletter.svg" alt="" className={styles.newimg} />
                <div className={styles.right}>
                    <div className={styles.heading}>Newsletter</div>
                    <div className={styles.subheading}>I received the news from TEDxIITGuwahati</div>
                    <div className={styles.third}>
                        <input type="email" placeholder='Leave us your email' />
                        <button className={styles.btn}>Subscribe me</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsletter
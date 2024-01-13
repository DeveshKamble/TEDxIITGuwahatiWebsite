import styles from './TeamMember.module.css'

const TeamMember = (title, designation, image, handle) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <div className={styles.imgBox} style={{
                position: "relative",
            }}>
                <img src={`/Images/Team/${image}`} alt="Img" onMouseIn={handleMouseEnter} onMouseOut={handleMouseLeave}/>
                {isHovered && <div className={styles.hovereff} style={{
                    position: 'absolute', top: '41.2px', right: '93px', display: 'flex', flexDirection: 'column',
                }}>
                    <SocialIcon url="https://www.linkedin.com" target="_blank" href={handle} />
                </div> }
            </div>
            <div className={styles.imgTitle}>
                <div className={styles.imgTitleName}>{title}</div>
                <div className={styles.imgTitlePost}>{designation}</div>
            </div>
        </>
    )
}

export default TeamMember
import styles from './Experience.module.css';

function Experience({experience}) {
    return (
        <div className = {styles.container}>
            <div className = {styles.leftColumn}>
                <h1 className={styles.company}>{experience.title}</h1>
                <p className={styles.position}>
                    {experience.position}
                </p>
                <div className = {styles.logoDatesContainer}>
                    <img
                        src={experience.imageSource}
                        alt = 'Logo'
                        className = {styles.logo}
                    />
                    <div className={styles.datesContainer}>
                        <p className={styles.date}>{experience.startDate}</p>
                        <p className={styles.hyphen}>-</p>
                        <p className={styles.date}>{experience.endDate}</p>
                    </div>
                </div>
            </div>
            <div className = {styles.rightColumn}>
               {experience.descriptions.map((description => (
                    <p className={styles.description}>
                        • {description}
                    </p>
               )))}
            </div>
            {/* <ContactBar /> */}
        </div>
    )
}

export default Experience;
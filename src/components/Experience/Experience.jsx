import styles from './Experience.module.css';

function Experience({experience}) {
    return (
        <div className = {styles.container}>
            <div className = {styles.header}>
                <img
                        src={experience.imageSource}
                        alt = 'Logo'
                        className = {styles.logo}
                />
                <div className= {styles.headerText}>
                    <h1 className={styles.company}>{experience.title}</h1>
                    <p className={styles.position}>
                        {experience.position}
                    </p>
                </div>
            </div>

            <div className = {styles.datesLocationContainer}>
                <p>{experience.startDate}  -  {experience.endDate}</p>
                <p> {experience.location} </p>
            </div>

            <div className = {styles.description}>
               {experience.descriptions.map((description => (
                    <p>  • {description} </p>
               )))}
            </div>

            {/* <div className = {styles.skillsContainer}>
                <p className={styles.date}> C#/.NET 1</p>
                <p className={styles.date}> SQL</p>
                <p className={styles.date}> TCP/IP</p>
            </div> */}
        </div>
    )
}

export default Experience;
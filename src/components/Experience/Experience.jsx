import styles from './Experience.module.css';

function Experience({ experience }) {
  const {
    imageSource,
    title,
    position,
    startDate,
    endDate,
    location,
    descriptions,
  } = experience;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className = {styles.headerTop}>
            <img src={imageSource} alt="Logo" className={styles.logo} />

            <div className={styles.headerText}>
                <h1 className={styles.company}>{title}</h1>
                <p className={styles.position}>{position}</p>
            </div>
        </div>

        <div className={styles.datesLocationContainer}>
            <p>{startDate} - {endDate}</p>
            <p>{location}</p>
        </div>
      </div>

      <div className={styles.description}>
        {descriptions.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </div>

      {/* <div className={styles.skillsContainer}>
        <p className={styles.date}>C#/.NET 1</p>
        <p className={styles.date}>SQL</p>
        <p className={styles.date}>TCP/IP</p>
      </div> */}
    </div>
  );
}

export default Experience;
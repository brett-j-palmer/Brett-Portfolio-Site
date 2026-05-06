import styles from './Project.module.css';
import githubLogo from "../../assets/svgs/github-logo.svg";

function Project({ project }) {
  const {
    title,
    sourceURL,
    imageSource,
    imageCaption,
    client,
    descriptions,
    skills,
    takeaway,
  } = project;

  return (
    <div className={styles.container}>

      <div className={styles.titlePanel}>
        <h1 className={styles.title}>{title}</h1>
        <a href={sourceURL}>
                <img
                    src = {githubLogo}
                    alt = 'GitHub'
                    className = {styles.icon}
                />
        </a>
        {/* {client && <p className={styles.client}>{client}</p>} */}
      </div>

      <div className={styles.topRow}>

        {/* IMAGE PANEL */}
        <div className={styles.imagePanel}>
          <div className={styles.imageWrapper}>
            <img src={imageSource} alt={title} className={styles.image} />
          </div>
          <div className = {styles.captionRow}>
          <p className={styles.imageCaption}>{imageCaption}</p>
          </div>
        </div>

        {/* CONTENT PANEL */}
        <div className={styles.contentPanel}>

          <div className={styles.descriptionPanel}>
            {descriptions.map((desc, index) => (
              <p key={index} className={styles.description}>
                {desc}
              </p>
            ))}

            <div className={styles.skillsContainer}>
              {/* <p className={styles.skillsLabel}> Skills: </p> */}
              {skills.map((skill, index) => (
                <span key={index} className={styles.skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.takeawayPanel}>
            <p className={styles.takeaway}>{takeaway}</p>
        </div>
    </div>
  );
}

export default Project;
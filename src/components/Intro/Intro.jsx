import styles from './Intro.module.css';

import headShot from "../../assets/images/headshot.png";
import githubLogo from "../../assets/svgs/github-logo.svg";
import linkedinLogo from "../../assets/svgs/linkedin-logo.svg";
import resumeIcon from "../../assets/svgs/resume.svg";

function Intro() {
    return (
        <div className = {styles.container}>
            <div className = {styles.leftColumn}>
                <img
                    src = {headShot}
                    alt = 'Headshot'
                    className = {styles.headshot}
                />
                <div className={styles.iconContainer}>
                    <a href="https://github.com/brett-j-palmer">
                        <img
                            src = {githubLogo}
                            alt = 'GitHub'
                            className = {styles.icon}
                        />
                    </a>
                    <a href ="https://www.linkedin.com/in/brett-j-palmer/">
                        <img
                            src= {linkedinLogo}
                            alt = 'LinkedIn'
                            className = {styles.icon}
                        />
                    </a>
                    <a>
                        <img
                            src= {resumeIcon}
                            alt = 'Resume'
                            className = {styles.icon}
                        />
                    </a>
                </div>
            </div>
            <div className = {styles.rightColumn}>
               <p className = {styles.description}> I am a driven fourth-year Computer Science student with minors in New Media, Game Development, and Mathematics. </p>
               <p className = {styles.description}> I have interned as a software engineer in semiconductor manufacturing, built a mobile conference management application, and conducted research in human-AI interaction.  </p>
               <p className = {styles.description}> I look forward to applying my technical skills, creativity, and collaborative mindset in the software engineering field to positively impact others. </p>
            </div>
        </div>
    )
}

export default Intro;
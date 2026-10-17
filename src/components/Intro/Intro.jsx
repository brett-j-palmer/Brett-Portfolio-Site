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
                    <a  href="https://github.com/brett-j-palmer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src = {githubLogo}
                            alt = 'GitHub'
                            className = {styles.icon}
                        />
                    </a>
                    <a  href ="https://www.linkedin.com/in/brett-j-palmer/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src= {linkedinLogo}
                            alt = 'LinkedIn'
                            className = {styles.icon}
                        />
                    </a>
                    <a  href="https://drive.google.com/file/d/1EnMmoHc8CqCB6-dkjM4PLNZUsEYSFaxj/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src= {resumeIcon}
                            alt = 'Resume'
                            className = {styles.icon}
                        />
                    </a>
                </div>
            </div>
            <div className = {styles.rightColumn}>
               <p className = {styles.description}> I'm a software engineer who loves exploring how people and technology work together. I develop automation systems as Texas Instruments, and produce mobile applications in my free time. </p>
               <p className = {styles.description}> I graduated from the University of Maine in 2026 with a 4.0 in Computer Science. I broadened my skillset with minors in New Media, Game Development, and Mathematics. </p>
               <p className = {styles.description}> I love building user experiences that empower people with creative tools, and providing an online community for them to form connections around what they’ve made. </p>
            </div>
        </div>
    )
}

export default Intro;
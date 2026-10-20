import { useEffect, useRef, useState } from 'react';
import styles from './Project.module.css';
import githubLogo from "../../assets/svgs/github-logo.svg";
import linkedinLogo from "../../assets/svgs/linkedin-logo.svg";
import youtubeLogo from "../../assets/svgs/youtube-logo.svg";

const linkIcons = {
  github: { source: githubLogo, label: 'GitHub' },
  linkedin: { source: linkedinLogo, label: 'LinkedIn' },
  youtube: { source: youtubeLogo, label: 'YouTube' },
};

function Project({ project }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPortraitImage, setIsPortraitImage] = useState(false);
  const {
    title,
    sourceURL,
    linkIcon,
    imageSource,
    imageCaption,
    descriptions,
    skills,
    takeaway,
  } = project;
  const selectedLinkIcon = linkIcons[linkIcon];

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const scrollContainer = card.closest('.scrollContainer');
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, {
      root: scrollContainer,
      threshold: 0,
      rootMargin: '-200px 0px -200px 0px',
    });

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  const projectImage = (
    <img
      src={imageSource}
      alt={title}
      className={
        isVisible
          ? `${styles.image} ${styles.imageVisible}`
          : styles.image
      }
      onLoad={(event) => {
        const { naturalWidth, naturalHeight } = event.currentTarget;
        setIsPortraitImage(naturalHeight > naturalWidth * 1.2);
      }}
    />
  );

  return (
    <div
      ref={cardRef}
      className={styles.container}
    >

      <div className={styles.titlePanel}>
        <h1 className={styles.title}>{title}</h1>
        {sourceURL && selectedLinkIcon && (
          <a
            className={styles.sourceLink}
            href={sourceURL}
            aria-label={`Open ${selectedLinkIcon.label} for ${title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={selectedLinkIcon.source}
              alt=""
              className={styles.icon}
            />
          </a>
        )}
      </div>

      <div className={styles.topRow}>

        {/* IMAGE PANEL */}
        <div className={styles.imagePanel}>
          <div
            className={
              isPortraitImage
                ? `${styles.imageWrapper} ${styles.portraitImageWrapper}`
                : styles.imageWrapper
            }
          >
            {sourceURL && selectedLinkIcon ? (
              <a
                className={styles.imageLink}
                href={sourceURL}
                aria-label={`Open ${selectedLinkIcon.label} for ${title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {projectImage}
              </a>
            ) : (
              projectImage
            )}
          </div>
          {imageCaption && (
            <div className={styles.captionRow}>
              <p className={styles.imageCaption}>{imageCaption}</p>
            </div>
          )}
        </div>

        {/* CONTENT PANEL */}
        <div className={styles.contentPanel}>

          <div className={styles.descriptionPanel}>
            {descriptions.map((desc, index) => (
              <p key={index} className={styles.description}>
                {desc}
              </p>
            ))}

            {skills?.length > 0 && (
              <div className={styles.skillsContainer}>
                {skills.map((skill, index) => (
                  <span key={index} className={styles.skill}>
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {takeaway && (
        <div className={styles.takeawayPanel}>
          <p className={styles.takeaway}>{takeaway}</p>
        </div>
      )}
    </div>
  );
}

export default Project;
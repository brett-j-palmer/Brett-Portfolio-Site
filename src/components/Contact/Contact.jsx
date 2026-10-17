import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.container}>
      <p className={styles.message}>
        Making websites and apps is my passion. I’m open to work in web and mobile development.
      </p>
      <a className={styles.email} href="mailto:brett.palmer.dev@gmail.com">
        brett.palmer.dev@gmail.com
      </a>
    </div>
  );
}

export default Contact;
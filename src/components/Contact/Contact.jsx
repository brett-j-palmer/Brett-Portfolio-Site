import styles from './Contact.module.css';

function Contact() {
  return (
    <div className={styles.container}>

        <div className={styles.hookPanel}>
            <h1 className={styles.hook}>
            Looking to grow your online presence?
            </h1>
            <p className={styles.subhook}>
            I create apps and websites focussed on style, usability, and reliability.
            </p>
        </div>

        <div className={styles.bodyPanel}>
            <p className={styles.body}>
            I build clean, functional applications with an emphasis on user experience and solid engineering.
            My goal is always the same: a product that works well and holds up over time.
            </p>

            <p className={styles.body}>
            This portfolio site was built from scratch to reflect that approach. If you’re working
            on a mobile app, a business site, or something more custom, I’d love to work with you.
            </p>

            <p className={styles.callout}>
            If you like what you see here, imagine what I could build for <em>you</em>.
            </p>
        </div>

        <div className={styles.closingPanel}>
            <p className={styles.closing}>
            Open to freelance work and full-time roles:
            </p>
            <p className={styles.email}>
            <strong>brett.palmer.dev@gmail.com</strong>
            </p>
        </div>

        </div>
  );
}

export default Contact;
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Let&apos;s work together...</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
          <a target="_blank" href="mailto:polibos6366@email.com">
            Email
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedin icon"
          />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jesus-jose-martha-laborin-a3a55015a"
          >
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="github icon" />
          <a target="_blank" href="https://github.com/Jesus6366">
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;

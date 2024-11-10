import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <>
      <div className={styles.squareBox2}>
        <div className={styles.contactHub}>
          <FontAwesomeIcon icon={faGithub} className={styles.boxGithub} />
          <a href="https://github.com/Mees100?tab=repositories" target="_blank">
            My GitHub page
          </a>
        </div>
        <div className={styles.contactLocation}>
          <FontAwesomeIcon
            className={styles.boxLocation}
            icon={faLocationDot}
          />
          <span className={styles.tekstLocation}>
            The Netherlands, Gelderland
          </span>
        </div>
      </div>
      <div className={styles.squareBox1}>
        <iframe
          className={styles.googleform}
          src="https://docs.google.com/forms/d/e/1FAIpQLSflvbbLOf6mQ3x5mZql9X6z8ZTlCMGl3kCtYjUnxBM7MW5cYA/viewform?embedded=true"
          width="640"
          height="892"
        >
          Laden…
        </iframe>
      </div>
    </>
  );
}

export default Contact;

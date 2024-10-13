import React from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className={styles.wrapperBox}>
      <div className={styles.squareBox2}>
        <div className={styles.contactEnvelop}>
          <FontAwesomeIcon className={styles.boxEnvelop} icon={faEnvelope} />
          <span className={styles.tekstEnvelop}>Mees100.dev@gmail.com</span>
        </div>
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
          <span className={styles.tekstLocation}>Nederland, Gelderland</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;

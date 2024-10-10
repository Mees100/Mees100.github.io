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
          <p className={styles.tekstEnvelop}>Mees100.dev@gmail.com</p>
        </div>
        <div className={styles.contactHub}>
          <FontAwesomeIcon icon={faGithub} />
          <a href="https://github.com/Mees100?tab=repositories" target="_blank">
            My GitHub page
          </a>
        </div>
        <div className={styles.contactLocation}>
          <FontAwesomeIcon
            className={styles.boxLocation}
            icon={faLocationDot}
          />
          <p className={styles.tekstLocation}>Nederland, Gelderland</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;

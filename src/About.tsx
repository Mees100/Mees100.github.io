import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.box1}>
        <h4>Mijn Nederlands</h4>
        <tr>
          <th>2021 </th>
          <td>
            <span style={{ color: "#66986A", fontWeight: 400 }}>
              Niveau B2, NT2-II
            </span>
            . Ik ben{" "}
            <span style={{ color: "#66986A", fontWeight: 400 }}>
              {" "}
              voor de Staatsexamens Nederlands als 2e taal - II
            </span>{" "}
            geslaagd
          </td>
        </tr>
        <tr>
          <th>2020</th>
          <td>
            <a
              className={styles.sizeLink}
              href="https://www.ru.nl/radboud-into-languages"
              target="_blank"
            >
              Radboud In'to Languages
            </a>
            <br />
            Dagcursus NT2 voor gevorderen
            <br /> Certificaat - Niveau B2 van de Nederlandse taal
            <br />
            <br />
            Dagcursus NT2 voor halfgevorderen.
            <br /> Certificaat - Niveau B1 van de Nederlandse taal
          </td>
        </tr>
        <tr>
          <th>2019</th>
          <td>
            <span style={{ color: "#66986A", fontWeight: 400 }}>
              {" "}
              Niveau A2
            </span>{" "}
            Ik ben{" "}
            <span style={{ color: "#66986A", fontWeight: 400 }}>
              voor de Inburgeringexamens
            </span>{" "}
            geslaagd. Ik kreeg voor de meeste examens 10
          </td>
        </tr>
        <tr>
          <th>2018</th>
          <td>Zelfstudie</td>
        </tr>
      </section>
      <section className={styles.box2}>
        <h4>Hobbies</h4>
        <p>
          natuur, fietsen, reizen, hiking, bergen, boeken lezen, piano spelen,
          kunst, museums, Nederlandse taal leren
        </p>
      </section>
      <div className={styles.box3}></div>
    </div>
  );
}

export default About;

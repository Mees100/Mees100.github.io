import styles from "./About.module.css";

function About() {
  return (
    <>
      <section className={styles.boxNl}>
        <h4>
          Hi, I'm Alina,{" "}
          <span style={{ fontWeight: 100, fontSize: "20px" }}>
            here you can find some information about me in Dutch
          </span>
        </h4>
        <h5>Mijn Nederlands</h5>
        <table className={styles.dutch}>
          <tbody>
            <tr>
              <td>2021 </td>
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
              <td>2020</td>
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
              <td>2019</td>
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
              <td>2018</td>
              <td>Zelfstudie</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className={styles.boxHobby}>
        <h5>Mijn hobbies</h5>
        <p>
          natuur, fietsen, reizen, hiking, bergen, boeken lezen, piano spelen,
          kunst, museums, Nederlandse taal leren
        </p>
      </section>
      <div className={styles.box3}></div>
    </>
  );
}

export default About;

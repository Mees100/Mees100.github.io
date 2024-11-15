import styles from "./BoxHeader.module.css";

function BoxHeader() {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.headerName}>
          <span style={{ fontSize: 25 }}>Hi, I'm</span> Alina Kooiman
        </h1>
        <h2 className={styles.headerTekst}>
          Front-End Developer
          <span style={{ color: "#66986A" }}> in progress </span>
        </h2>
      </div>
    </>
  );
}

export default BoxHeader;

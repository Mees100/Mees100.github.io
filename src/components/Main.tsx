import styles from "./Main.module.css";
import React from "react";

function Main({ children }: { children: React.ReactNode }) {
  return <main className={styles.main}>{children}</main>;
}

export default Main;

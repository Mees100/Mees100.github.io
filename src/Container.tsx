import styles from "./Container.module.css";
import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}

export default Container;


import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Container from "./Container.tsx";


function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let menuLinksClassName = styles.menuLinks;
  if (isMenuOpen) {
    menuLinksClassName += " " + styles.menuLinksOpen;
  }

  return (
    <>
      <header className={styles.header}>
        <Container>
          <nav>
            <h2 className={styles.navHeader}>Front-End Developer</h2>
            <div
              className={styles.menuIcon}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <div className={styles.menuClose}>X</div>
              ) : (
                <>
                  <div className={styles.menuBar}></div>
                  <div className={styles.menuBar}></div>
                  <div className={styles.menuBar}></div>
                </>
              )}
            </div>
            <div className={menuLinksClassName}>
              <Link
                className={styles.linkStyles}
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                className={styles.linkStyles}
                to="/skills"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                className={styles.linkStyles}
                to="/certificates"
                onClick={() => setIsMenuOpen(false)}
              >
                Certicates
              </Link>              
              <Link
                className={styles.linkStyles}
                to="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                className={styles.linkStyles}
                to="/Contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
}

export default Layout;

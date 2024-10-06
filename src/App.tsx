import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import Container from "./components/Container.tsx";
import RenderSubtitle from "./components/RenderSubtitle.tsx";
import BoxHeader from "./components/BoxHeader.tsx";

function App() {
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
              <a
                className={styles.linkStyles}
                href="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                className={styles.linkStyles}
                href="/skills"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a
                className={styles.linkStyles}
                href="/certificates"
                onClick={() => setIsMenuOpen(false)}
              >
                Certicates
              </a>
              <a
                className={styles.linkStyles}
                href="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                className={styles.linkStyles}
                href="/Contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </nav>
        </Container>
      </header>
      <main>
        <Container>
          <Home />
        </Container>
      </main>
    </>
  );
}

export default App;

function Home() {
  return (
    <>
      <div>
        <BoxHeader />
        <RenderSubtitle />
      </div>
    </>
  );
}

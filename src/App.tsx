import "./App.css";
import styles from "./App.module.css";
import About from "./About.tsx";
import Container from "./components/Container.tsx";
import RenderSubtitle from "./components/RenderSubtitle.tsx";
import BoxHeader from "./components/BoxHeader.tsx";
import Skills from "./Skills.tsx";
import Certificates from "./Certificates.tsx";
import Contact from "./Contact.tsx";
import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
                Certificates
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

              <a
                href="https://github.com/Mees100?tab=repositories"
                target="_blank"
              >
                <FontAwesomeIcon
                  style={{ fontSize: "1.2em" }}
                  className={styles.linkStyles}
                  icon={faGithub}
                />{" "}
              </a>
            </div>
          </nav>
        </Container>
      </header>
      <Container>
        <Main>
          <Outlet />
        </Main>
      </Container>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Certificates" element={<Certificates />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
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

function NoMatch() {
  return <>Niets gevonden</>;
}

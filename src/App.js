import "./App.css";
import styles from "./App.module.css";
import BoxHeader from "./BoxHeader.js";
import Footer from "./Footer.js";
import About from "./About.js";
import Skills from "./Skills.js";
import Contact from "./Contact.js";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import RenderSubtitle from "./text.js";
import Container from "./Container.js";
import React, { useState } from "react";

/// Om het menu te openen moet de variabele isMenuOpen de waarde true krijgen

/// Als ik na een andere pagina ga, moet de variaele isMenuOpen de waarde false krijgen, zodat het menu weer sluit

// Hoe weten we dat de gebruiker naar een andere pagina is gegaan?

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
              <Link className={styles.linkStyles} to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link className={styles.linkStyles} to="/skills"  onClick={() => setIsMenuOpen(false)}>
                Skills
              </Link>
              <Link className={styles.linkStyles} to="/about"  onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link className={styles.linkStyles} to="/Contact"  onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </nav>
        </Container>
      </header>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/about" element={<About />} />
        <Route index element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;

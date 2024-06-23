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
              <Link className={styles.linkStyles} to="/">
                Home
              </Link>
              <Link className={styles.linkStyles} to="/skills">
                Skills
              </Link>
              <Link className={styles.linkStyles} to="/about">
                About
              </Link>
              <Link className={styles.linkStyles} to="/Contact">
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

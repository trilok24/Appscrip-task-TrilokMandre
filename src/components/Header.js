import React, { useState } from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topbar}>Lorem ipsum dolor</div>

      <div className={styles.utilityRow}>
        <span className={styles.engLeft}>ENG</span>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.iconsRight}>
          <span title="Search">🔍</span>
          <span title="Wishlist">🤍</span>
          <span title="Cart">🛒</span>
          <span title="Profile">👤</span>
          <span className={styles.lang}>ENG</span>
        </div>
      </div>

      <nav className={styles.navbar}>
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <div
          className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}
        >
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
        </div>
      </nav>

      <div className={styles.discoverContainer}>
        <h1 className={styles.discoverTitle}>DISCOVER OUR PRODUCTS</h1>
        <p className={styles.discoverText}>
    Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
    scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
        </div>

    </header>
  );
}
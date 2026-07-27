import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.brand}>
        PERIOT <span>/ REWORKED</span>
      </a>

      <nav className={styles.nav}>
        <a href="#work">Work</a>
        <a href="#process">Process</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

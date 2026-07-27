import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.meta}>
        <span>Furniture / Objects / Interiors</span>
        <span>Est. 2026</span>
      </div>

      <div className={styles.statement}>
        <p>Furniture</p>
        <p>found. Rethought.</p>
        <p className={styles.emphasis}>Reworked.</p>
      </div>

      <div className={styles.bottom}>
        <p>
          Old pieces.
          <br />
          New purpose.
        </p>

        <a href="#work">Explore the work ↓</a>
      </div>
    </section>
  );
}

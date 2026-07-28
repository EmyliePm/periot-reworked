import styles from "./FeaturedWork.module.css";

export default function FeaturedWork() {
  return (
    <section className={styles.work} id="work">

      <div className={styles.header}>
        <span>Selected work</span>
        <span>001 / 2026</span>
      </div>

      <div className={styles.title}>
        <span className={styles.number}>01</span>

        <h2>
          The first
          <br />
          <em>rework.</em>
        </h2>
      </div>

      <div className={styles.project}>
        <div className={styles.imagePlaceholder}>
          <span>REWORK 001</span>
        </div>

        <div className={styles.details}>
          <span className={styles.label}>Found</span>

          <p>
            An overlooked piece with more life left in it.
          </p>

          <div className={styles.rule} />

          <span className={styles.label}>Reworked</span>

          <p>
            Reconsidered, restored and given a new direction.
          </p>
        </div>
      </div>

    </section>
  );
}
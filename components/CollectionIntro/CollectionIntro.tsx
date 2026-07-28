import styles from "./CollectionIntro.module.css";

export default function CollectionIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span>04 / The collection</span>
        <span>New work / ongoing</span>
      </div>

      <div className={styles.statement}>
        <h2>
          This is just
          <br />
          the beginning.
        </h2>

        <p>One piece at a time.</p>
      </div>

      <div className={styles.footer}>
        <p>
          Periot Reworked is a growing collection of found furniture,
          reconsidered, restored and transformed as new pieces are discovered.
        </p>

        <p>
          New work will be added as it&apos;s made.
        </p>
      </div>
    </section>
  );
}
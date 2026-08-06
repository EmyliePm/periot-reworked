import styles from "./FeaturedWork.module.css";
import Image from "next/image";

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
        <div className={styles.image}>
          <Image
            src="/images/projects/reworked-001/space_dresser_reworked.png"
            alt="Galaxy themed chest of drawers"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 70vw"
            className={styles.projectImage}
          />
        </div>

        <div className={styles.details}>
          <span className={styles.label}>Found</span>

          <p>An overlooked chest of drawers.</p>

          <div className={styles.rule} />

          <span className={styles.label}>Reworked</span>

          <p>
            Reconsidered, restored and given a new direction. This piece is used
            in a space themed bedroom for a little boy. I hope it brings him
            happy memories.
          </p>
        </div>
      </div>
    </section>
  );
}

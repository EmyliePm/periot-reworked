import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.label}>The idea</div>

      <div className={styles.content}>
        <p className={styles.statement}>
          Good furniture
          <br />
          doesn&apos;t become
          <br />
          <span>worthless.</span>
        </p>

        <div className={styles.copy}>
          <p>
            Periot Reworked takes overlooked, unwanted and tired pieces and
            turns them into something considered, individual and worth keeping.
          </p>

          <p>
            We work with what&apos;s already there — restoring character,
            changing what no longer works, and giving each piece a new
            direction.
          </p>
        </div>
      </div>

      <div className={styles.footer}>
        <span>Rescue</span>
        <span>Restore</span>
        <span>Rethink</span>
      </div>
    </section>
  );
}

import styles from "./Process.module.css";

const steps = [
  {
    number: "01",
    title: "Find.",
    text: "Look beyond the finish and find pieces with something worth saving.",
  },
  {
    number: "02",
    title: "Rethink.",
    text: "Decide what stays, what changes, and what the piece could become.",
  },
  {
    number: "03",
    title: "Rework.",
    text: "Repair, restore and rebuild with a new purpose in mind.",
  },
];

export default function Process() {
  return (
    <section className={styles.process} id="process">
      <div className={styles.header}>
        <span>Our process</span>
        <span>03 / Approach</span>
      </div>

      <div className={styles.intro}>
        <h2>
          Work with what&apos;s
          <br />
          <em>already there.</em>
        </h2>

        <p>
          Every piece starts somewhere different. The process is about
          recognising what&apos;s worth keeping, then changing what isn&apos;t.
        </p>
      </div>

      <div className={styles.steps}>
        {steps.map((step) => (
          <div className={styles.step} key={step.number}>
            <span className={styles.number}>{step.number}</span>

            <h3>{step.title}</h3>

            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
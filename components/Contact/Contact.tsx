import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.header}>
        <span>05 / Commissions</span>
        <span>Periot Reworked</span>
      </div>

      <div className={styles.main}>
      <div className={styles.heading}>
  <h2>
    Got something
    <br />
    <em>worth keeping?</em>
  </h2>

  <p>
  Existing furniture can be restored, reworked or completely reconsidered.
</p>

<div className={styles.notes}>
  <span>Useful to include</span>

  <p>
    A few clear photos, rough dimensions, and anything you already know about
    the piece — age, material, damage or what you&apos;d like to change.
  </p>
  </div>
</div>

        <form
  className={styles.form}
  name="commission"
  method="POST"
  data-netlify="true"
  encType="multipart/form-data"
>
  <input type="hidden" name="form-name" value="commission" />

  <label>
    <span>Name</span>
    <input
      type="text"
      name="name"
      placeholder="Your name"
      required
    />
  </label>

  <label>
    <span>Email</span>
    <input
      type="email"
      name="email"
      placeholder="you@email.com"
      required
    />
  </label>

  <label>
    <span>Tell me about the piece</span>
    <textarea
      name="message"
      rows={5}
      placeholder="What is it, what condition is it in, and what are you hoping to do with it?"
      required
    />
  </label>

  <label>
    <span>Approximate dimensions</span>
    <input
      type="text"
      name="dimensions"
      placeholder="e.g. 120 × 45 × 80 cm"
    />
  </label>

  <label>
    <span>Photos</span>

    <input
      className={styles.fileInput}
      type="file"
      name="photos"
      accept="image/jpeg,image/png,image/webp"
      multiple
    />

    <small className={styles.hint}>
      Add a few photos of the piece if you have them.
    </small>
  </label>

  <button type="submit">
    Start a conversation →
  </button>
</form>
      </div>

      <div className={styles.footer}>
        <span>Furniture / Objects / Interiors</span>
        <span>2026</span>
      </div>
    </section>
  );
}
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I&apos;m Jesus</h1>
        <p className={styles.description}>
          I&apos;m a full-stack developer with 1.5 years of experience using
          React and NodeJS. Reach out if you&apos;d like to learn more!
        </p>
        <a href="mailto:polibos6366@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/me.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;

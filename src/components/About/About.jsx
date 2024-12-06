import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/image.png")}
          alt="me as a cartoon AI generated"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Frontend developer with experience in building responsive and
                user-friendly websites. I enjoy working with React.js to create
                modern and interactive interfaces, and I am always eager to
                learn new tools and techniques to improve my skills.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing RESTful APIs using Node.js and
                Express.js. I&apos;m familiar with handling data using MongoDB
                and MySql.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack developer</h3>
              <p>
                I&apos;m a Full Stack developer certified by Academlo, School of
                Technology and Computer Science. Currently learning more
                tools and technologies like TypeScript and Next.js.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

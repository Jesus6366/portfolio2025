import { useEffect, useRef } from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 830; // Apply only for mobile screens
    if (!isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.active); // Add the active class on entry
            entry.target.classList.remove(styles.inactive); // Remove the inactive class
          } else {
            entry.target.classList.remove(styles.active); // Remove the active class on exit
            entry.target.classList.add(styles.inactive); // Add the inactive class
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          {[
            {
              img: "about/cursorIcon.png",
              title: "Frontend Developer",
              description:
                "Frontend developer with experience in building responsive and user-friendly websites. I enjoy working with React.js to create modern and interactive interfaces, and I am always eager to learn new tools and techniques to improve my skills.",
            },
            {
              img: "about/serverIcon.png",
              title: "Backend Developer",
              description:
                "I have experience developing RESTful APIs using Node.js and Express.js. I'm familiar with handling data using MongoDB and MySQL.",
            },
            {
              img: "about/uiIcon.png",
              title: "Full Stack Developer",
              description:
                "I'm a Full Stack developer certified by Academlo, School of Technology and Computer Science. Currently learning more tools and technologies like TypeScript and Next.js.",
            },
          ].map((item, index) => (
            <li
              key={index}
              className={`${styles.aboutItem}`}
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <img src={getImageUrl(item.img)} alt={`${item.title} icon`} />
              <div className={styles.aboutItemText}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;

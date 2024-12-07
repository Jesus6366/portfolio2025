/* eslint-disable react/prop-types */
import { getImageUrl } from "../../utils";

import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  project: { imageSrc, title, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img src={getImageUrl(imageSrc)} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Live Demo
        </a>
        <a href={source} className={styles.link}>
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

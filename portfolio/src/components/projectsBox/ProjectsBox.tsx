import { projectsModelArray } from "../../model/projectModel";
import TechButton from "../techButton/TechButton";
import TopButtons from "../topButton/TopButtons";
import styles from "./ProjectsBox.module.scss";

const ProjectsBox = () => {
  return (
    <div className={styles.projectsBoxContainer}>
      {projectsModelArray.map((project) => (
        <div key={project.name} className={styles.projectBox}>
          <div className={styles.textColumn}>
            <h1 className={styles.projectName}>{project.name}</h1>
            <div className={styles.techRows}>
              {project.technologies.map((tech) => (
                <TechButton key={tech} tech={tech} />
              ))}
            </div>
            <p>{project.description}</p>
            <TopButtons projects={[project.GitLink, project.DemoLink || ""]} />
          </div>
          <img src={project.photo} alt={project.photo} />
        </div>
      ))}
    </div>
  );
};

export default ProjectsBox;

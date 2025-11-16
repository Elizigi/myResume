import { skillsArray } from "../../model/skillsModel";
import styles from "./SkillsButtons.module.scss";

const SkillsButtons = () => {
  return (
    <div className={styles.skillButtonsContainer}>
      {skillsArray.map((skill) => (
        <button key={skill} className={styles.skillButton}>
          {skill}
        </button>
      ))}
    </div>
  );
};

export default SkillsButtons;

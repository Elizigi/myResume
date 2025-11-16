import CustomButton from "../customButton/CustomButton";
import styles from "./TopButtons.module.scss";

const TopButtons = () => {
  return (
    <div className={styles.topButtonsContainer}>
      <CustomButton written={"Get Contact"} full />
      <CustomButton written={"My Resume"} />
    </div>
  );
};

export default TopButtons;

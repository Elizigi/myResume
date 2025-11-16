import styles from "./SelfImage.module.scss";

const SelfImage = () => {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.circleBackground}>⨀</div>
      <div className={styles.imageBackground}></div>
      <img src="/" alt="" />
    </div>
  );
};

export default SelfImage;

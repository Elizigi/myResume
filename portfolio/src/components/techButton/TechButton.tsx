import type { FC } from "react";
import styles from "./TechButton.module.scss";

interface TechButtonProps {
  tech: string;
}
const TechButton: FC<TechButtonProps> = ({ tech }) => {
  return <button className={styles.techButton}>{tech}</button>;
};

export default TechButton;

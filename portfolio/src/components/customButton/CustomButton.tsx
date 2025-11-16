import type { FC } from "react";
import styles from "./CustomButton.module.scss";

interface CustomButtonProps {
  full?: boolean;
  written: string;
  onClick?: () => void;
}
const CustomButton: FC<CustomButtonProps> = ({
  full = false,
  written,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={full ? styles.customButtonFilled : styles.customButtonEmpty}
    >
      {written}
    </button>
  );
};

export default CustomButton;

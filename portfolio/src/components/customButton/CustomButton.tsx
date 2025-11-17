import type { FC } from "react";
import styles from "./CustomButton.module.scss";

interface CustomButtonProps {
  full?: boolean;
  lineUnder?: boolean;
  written: string;
  onClick?: () => void;
}
const CustomButton: FC<CustomButtonProps> = ({
  full = false,
  lineUnder = false,
  written,
  onClick,
}) => {
  const getStyle = () => {
    if (full) return styles.customButtonFilled;
    if (lineUnder) return styles.customButtonUnder;
    return styles.customButtonEmpty;
  };
  return (
    <button onClick={onClick} className={`${styles.customButton} ${getStyle()}`}>
      {written}
    </button>
  );
};

export default CustomButton;

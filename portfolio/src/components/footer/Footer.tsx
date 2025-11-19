import FooterButtons from "../footerButtons/FooterButtons";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <h1>Eli P. Zigdon</h1>
      <h3>all rights reserved for Eli P. Zigdon</h3>
      <FooterButtons />
    </div>
  );
};

export default Footer;

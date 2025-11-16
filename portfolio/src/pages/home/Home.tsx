import styles from "./Home.module.scss";
import SentenceWriter from "../../components/sentenceWriter/SentenceWriter";
import SelfImage from "../../components/selfImage/SelfImage";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <SentenceWriter />
      <SelfImage />
    </div>
  );
};

export default Home;

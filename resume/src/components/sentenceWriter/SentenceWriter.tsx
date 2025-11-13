import styles from "./SentenceWriter.module.scss";
import SentenceWriterMV from "./SentenceWriterMV";

const SentenceWriter = () => {
  const { typedWord } = SentenceWriterMV();
  return (
    <div className={styles.sentenceContainer}>
      <div className={styles.currentWord}>
        <h2>{typedWord}</h2>
      </div>
      <div className={styles.lShape}>
        <h2>{"l"}</h2>
      </div>
    </div>
  );
};

export default SentenceWriter;

import { sentencesModelArray } from "../../model/sentencesModel";
import styles from "./SentenceWriter.module.scss";
import UseSentenceWriter from "../../hooks/SentenceWriterHook";

const SentenceWriter = () => {
  const { words, isBreathing, selectedSentence } =
    UseSentenceWriter(sentencesModelArray);

  return (
    <div className={styles.sentenceContainer}>
      {sentencesModelArray.map((sentence, index) => (
        <div className={styles.sentence} key={sentence}>
          <div className={styles.currentWord}>
            <h2 className={styles.green}>{words(index, sentence)}</h2>
          </div>
          <div className={`${isBreathing ? styles.breathing : ""}`}>
            <h2 className={styles.lShape}>
              {selectedSentence.current === index ? "|" : ""}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SentenceWriter;

import { useEffect, useRef, useState } from "react";
import { sentencesModelArray } from "../../model/sentencesModel";

const SentenceWriterMV = () => {
  const [typedWord, setTypedWord] = useState("");
  const currentLetterIdx = useRef(0);
  const selectedSentence = useRef(0);
  const timeDelay = useRef(50);
  const timeToRead = 2000; //milliseconds

  const chooseWord = () => {
    selectedSentence.current = Math.floor(Math.random() * 10);
    console.log(selectedSentence.current);
    setTypedWord("");
    setTimeout(() => {
      addLetter();
    }, timeDelay.current);
  };
  useEffect(() => {
    chooseWord();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const addLetter = () => {
    if (
      typedWord.length === sentencesModelArray[selectedSentence.current].length
    ) {
      console.log("condition met first");
      chooseWord();
      return;
    }
    timeDelay.current=Math.floor(Math.random() * 200)
    const sentence = sentencesModelArray[selectedSentence.current];
    console.log(sentence);
    const positionToAdd = currentLetterIdx.current;
    setTypedWord((perv) => perv + sentence[positionToAdd]);
    currentLetterIdx.current++;

    if (sentence.length === currentLetterIdx.current) {
      console.log("condition met second");
      currentLetterIdx.current = 0;

      setTimeout(() => {
        chooseWord();
      }, timeToRead);
      return;
    }
    setTimeout(() => {
      addLetter();
    }, timeDelay.current);
  };

  return { chooseWord, typedWord };
};

export default SentenceWriterMV;

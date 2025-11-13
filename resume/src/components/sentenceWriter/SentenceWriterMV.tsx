import { useEffect, useRef, useState } from "react";
import { sentencesModelArray } from "../../model/sentencesModel";

const SentenceWriterMV = () => {
  const [typedWord, setTypedWord] = useState("");
  const currentLetterIdx = useRef(0);
  const selectedSentence = useRef(0);
  const timeDelay = useRef(50);
  const timeToRead = 2000; //milliseconds
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const chooseWord = () => {
    selectedSentence.current = Math.floor(
      Math.random() * sentencesModelArray.length
    );
    console.log(selectedSentence.current);
    setTypedWord("");
    currentLetterIdx.current = 0;
    intervalRef.current = setInterval(() => {
      addLetter();
    }, timeDelay.current);
  };

  useEffect(() => {
    chooseWord();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addLetter = () => {
    timeDelay.current = Math.floor(Math.random() * 200);
    const sentence = sentencesModelArray[selectedSentence.current];
    console.log(sentence);
    const positionToAdd = currentLetterIdx.current;
    setTypedWord((perv) => perv + sentence[positionToAdd]);
    currentLetterIdx.current++;

    if (sentence.length === currentLetterIdx.current) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
      currentLetterIdx.current = 0;
      setTimeout(() => chooseWord(), timeToRead);
    }
  };

  return { chooseWord, typedWord };
};

export default SentenceWriterMV;

import React, { useEffect, useState } from 'react';
import './style.css';

const Wordbox = ({ word, onFinish, active, onMistake }) => {
  const [lettersLeft, setLettersLeft] = useState(word);
  const [mistake, setMistake] = useState(false);

  const handleKeyUp = (e) => {
    if (e.key === lettersLeft.charAt(0)) {
      if (lettersLeft.length === 1) {
        onFinish();
      } else {
        setLettersLeft(lettersLeft.substring(1));
      }
      setMistake(false);
    } else {
      setMistake(true);
      onMistake();
    }
  };

  console.log('lettersLeft:', lettersLeft);

  useEffect(() => {
    active ? document.addEventListener('keyup', handleKeyUp) : null;
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [lettersLeft, active, onMistake]);

  return (
    <div className={mistake ? 'wordbox wordbox--mistake' : 'wordbox'}>
      {lettersLeft}
    </div>
  );
};

export default Wordbox;

import React, { useEffect, useState } from "react";

import "./App.css";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import Drawing from "./components/Drawing";
import { words } from "./data";

function App() {
  function getWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  const [correctWord, setCorrectWord] = useState(getWord);
  const [guessedWord, setGuessedWord] = useState<string[]>([]);
  const [correctArr, setCorrectArr] = useState<string[]>(correctWord.split(""));

  const [incorrectLetters, setIncorrectLetters] = useState<string[]>([]);

  const isWinner = correctArr.every((letter) => guessedWord.includes(letter));
  const isLoser = incorrectLetters.length > 5;

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (/^[a-z]$/.test(e.key)) {
        if (!guessedWord.includes(e.key)) {
          handleKeyClick(e.key);
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [guessedWord]);

  const handleKeyClick = (key: string): void => {
    if (!guessedWord.includes(key) && !isWinner && !isLoser) {
      setGuessedWord([...guessedWord, key]);

      if (!correctArr.includes(key)) {
        setIncorrectLetters([...incorrectLetters, key]);
      }
    }
  };

  return (
    <div className="app">
      <p>
        {isWinner
          ? "congrats ! you have won the game , Refresh to play again"
          : isLoser
          ? "sorry you have lost , Refresh to play again"
          : "play it"}
      </p>
      <Drawing incorrectLetters={incorrectLetters} />
      <Word
        guessedWord={guessedWord}
        isLoser={isLoser}
        correctWord={correctWord}
      />
      <Keyboard
        handleKeyClick={handleKeyClick}
        guessedWord={guessedWord}
        correctArr={correctArr}
      />
    </div>
  );
}

export default App;

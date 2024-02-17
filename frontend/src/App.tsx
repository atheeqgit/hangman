import React, { useState } from "react";

import "./App.css";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import Drawing from "./components/Drawing";

function App() {
  const [count, setCount] = useState();

  const correctWord = "helloworld";
  const [guessedWord, setGuessedWord] = useState<string[]>([]);

  const [correctArr, setCorrectArr] = useState<string[]>(correctWord.split(""));

  console.log(correctArr);
  const handleKeyClick = (key: string): void => {
    if (!guessedWord?.includes(key)) {
      console.log(guessedWord);
      setGuessedWord([...guessedWord, key]);
    }
  };

  return (
    <div className="app">
      <p>hello</p>
      <Drawing />
      <Word guessedWord={guessedWord} correctWord={correctWord} />
      <Keyboard
        handleKeyClick={handleKeyClick}
        guessedWord={guessedWord}
        correctArr={correctArr}
      />
    </div>
  );
}

export default App;

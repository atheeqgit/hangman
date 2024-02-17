import React, { useState } from "react";
import "./components.scss";

interface props {
  guessedWord: string[];
  correctWord: string;
}

const Word = ({ guessedWord, correctWord }: props) => {
  return (
    <div className="word">
      {correctWord.split("").map((letter) => {
        return (
          <span>
            <span
              className={
                guessedWord.includes(letter) ? "letter" : "letter hidden"
              }
            >
              {guessedWord.includes(letter) ? letter : "0"}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default Word;

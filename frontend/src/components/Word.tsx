import React, { useState } from "react";
import "./components.scss";

interface props {
  guessedWord: string[];
  correctWord: string;
  isLoser: boolean;
}

const Word = ({ guessedWord, correctWord, isLoser }: props) => {
  if (isLoser) {
    console.log("working");
  }
  return (
    <div className="word">
      {correctWord?.split("").map((letter) => {
        return (
          <span>
            <span
              className={
                guessedWord.includes(letter)
                  ? "letter"
                  : isLoser
                  ? "letter revealed"
                  : "letter hidden"
              }
            >
              {guessedWord.includes(letter) ? letter : isLoser ? letter : "0"}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default Word;

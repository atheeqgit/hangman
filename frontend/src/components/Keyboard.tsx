import React from "react";
import "./components.scss";

interface prop {
  handleKeyClick: (key: string) => any;
  correctArr: string[];
  guessedWord: string[];
}

const Keyboard = ({ handleKeyClick, correctArr, guessedWord }: prop) => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div className="keyboard">
      {alphabet.map((letter: string) => {
        return (
          <button
            onClick={() => {
              if (!guessedWord?.includes(letter)) {
                handleKeyClick(letter);
              }
            }}
            className={guessedWord?.includes(letter) ? "disabled" : ""}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;

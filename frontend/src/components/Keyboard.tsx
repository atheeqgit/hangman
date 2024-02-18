import React from "react";
import "./components.scss";

interface prop {
  handleKeyClick: (key: string) => any;
  correctArr: string[];
  guessedWord: string[];
}

const Keyboard = ({ handleKeyClick, correctArr, guessedWord }: prop) => {
  const qwerty = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];

  return (
    <div className="keyboard">
      {qwerty.map((letter: string) => {
        return (
          <button
            onClick={() => {
              if (!guessedWord?.includes(letter)) {
                handleKeyClick(letter);
              }
            }}
            className={`${guessedWord?.includes(letter) ? "disabled" : ""} ${
              guessedWord?.includes(letter) && correctArr.includes(letter)
                ? "correct"
                : ""
            }`}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;

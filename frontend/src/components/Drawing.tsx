import React from "react";
import "./components.scss";

interface props {
  incorrectLetters: string[];
}

const HEAD = <div className="head" />;
const BODY = <div className="body" />;
const RIGHTHAND = <div className="right-hand" />;
const LEFTHAND = <div className="left-hand" />;
const RIGHTLEG = <div className="right-leg" />;
const LEFTLEG = <div className="left-leg" />;

const Drawing = ({ incorrectLetters }: props) => {
  const arr = [HEAD, BODY, RIGHTHAND, LEFTHAND, RIGHTLEG, LEFTLEG];
  return (
    <div className="drawing">
      <>{arr.slice(0, incorrectLetters.length)}</>
      <div className="little-downpole"></div>
      <div className="top-pole"></div>
      <div className="pole"></div>
      <div className="base"></div>
    </div>
  );
};

export default Drawing;

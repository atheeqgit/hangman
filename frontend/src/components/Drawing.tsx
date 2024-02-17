import React from "react";
import "./components.scss";

const Drawing = () => {
  return (
    <div className="drawing">
      <>
        <div className="left-leg"></div>
        <div className="right-leg"></div>
        <div className="left-hand"></div>
        <div className="right-hand"></div>
        <div className="body"></div>
        <div className="head"></div>
      </>
      <div className="little-downpole"></div>
      <div className="top-pole"></div>
      <div className="pole"></div>
      <div className="base"></div>
    </div>
  );
};

export default Drawing;

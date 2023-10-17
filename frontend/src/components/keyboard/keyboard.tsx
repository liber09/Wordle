import React from "react";

const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L",];
const row3 = ["\u21B5", "Z", "X", "C", "V", "B", "N", "M", "DEL"];

export function clickKeyBoard(event: { target: { innerText: any } }) {
  const keys = [...row1, ...row2, ...row3];
  const clickedKey = event.target.innerText;

  if (clickedKey === "ENTER") {
    return;
  }
  if (clickedKey === "DELETE") {
    return;
  }
  //condition to not be able to click beetween keys
  if (keys.includes(clickedKey)) {
    console.log(clickedKey);
  }
}

export function Keyboard() {
    return (
      <div className="keyboardContainer">
        <div className="keyRow">
          {row1.map((keyLetter, index) => {
            return (
              <div className="keyContainer" key={index}>
                <button className="key">{keyLetter}</button>
              </div>
            );
          })}
        </div>
        <div className="keyRow">
          {row2.map((keyLetter, index) => {
            return (
              <div className="keyContainer" key={index}>
                <button className="key">{keyLetter}</button>
              </div>
            );
          })}
        </div>
        <div className="keyRow">
          {row3.map((keyLetter, index) => {
            return (
              <div className="keyContainer" key={index}>
                <button className="key">{keyLetter}</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
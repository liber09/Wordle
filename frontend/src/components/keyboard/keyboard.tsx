import React from "react";

const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L",];
const row3 = ["\u21B5", "Z", "X", "C", "V", "B", "N", "M", "DEL"];

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
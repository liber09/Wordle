import React, { useState, useEffect, Fragment } from "react";
import "./app.scss";
//import { setupBoard } from "./functions/setupBoard";
//import { boardStart } from "./functions/boardStart.ts";
//import { checkGuess } from "./functions/checkGuess.ts";
//import CompletedResult from "./component/CompletedResult.tsx";
//import FailedResult from "./component/FailedResult.tsx";
//import Modal from "./component/Modal.tsx";
import GameDifficulty from "./components/gameDifficulty/gameDifficulty";
import getRandomWord from "./functions/getRandomWord";
import Clock from "./components/clock/clock";
import {Keyboard} from "./components/keyboard/keyboard";
import GameRow from "./components/gameRow/gameRow";
import { setupBoard } from "./functions/setupBoard";
import Navbar from "./components/navbar/navbar";

export default function App() {
 //   console.log("Test")
    
  /* const [numberGuess, setNumberGuess] = useState(1);
  const [randomWord, setRandomWord] = useState("");
  const [uniqueLetters, setUniqueLetters] = useState(true);
  const [time, setTime] = useState("00:00:00");
  const [letterGuess, setLetterGuess] = useState("");
  const [letterGuess2, setLetterGuess2] = useState("");
  const [letterGuess3, setLetterGuess3] = useState("");
  const [letterGuess4, setLetterGuess4] = useState("");
  const [letterGuess5, setLetterGuess5] = useState("");
  const [letterGuess6, setLetterGuess6] = useState("");
  const [modal, setModal] = useState(true);
  const [gameInPlay, setGameInPlay] = useState(true);

  let row = 0;
  const boardLength = boardStart(selectLength); */
  //const boardSize = setupBoard(selectLength);
  const [selectLength, setSelectLength] = useState(5);
  const [allowDuplicateLetters, setAllowDuplicateLetters] = useState(false);
  const [gameWord, setGameWord] = useState("");
  const [time, setTime] = useState("00:00:00");
  const [letterGuess, setLetterGuess] = useState("");

  const gameRow = setupBoard(selectLength);

  async function getWord() {
    setGameWord(await getRandomWord());
  }
  useEffect(() => {

    getWord();
  }, [selectLength, allowDuplicateLetters]);

  return (
    <div>
      <Navbar></Navbar>
      <h1>WORDLE - THE GAME</h1>
      <div className = "gameContainer">
      <p className = "gameWord">{gameWord}</p>
      <div className = "clock">
        <Clock setTime={setTime} firstWord={letterGuess} />
      </div>
      <div className="centerBoard">
        <GameRow isCorrect={false} exists={true} letterArray={gameRow}></GameRow>
      </div>
      <div className="centerKeyboard">
        <Keyboard></Keyboard>
      </div>
    </div>
    </div>
    
    
  );

}


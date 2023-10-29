import React, {useState} from "react";
import Tile from "../tile/tile";

interface Props {
    correctWord: string;
    isCorrect: boolean;
    exists: boolean;
    letterArray: string[];
    rowIndex: number;
    setLetterArray: (letters: string[]) => void;
}

const [input, setInput] = React.useState("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    
    //https://stackoverflow.com/questions/66663831/key-press-event-in-react-with-typescript
    //https://www.w3schools.com/jsref/event_key_key.asp
}

export default function GameRow({isCorrect, exists, letterArray, rowIndex}: Props){

    return(
        <div className="gameRowContainer">
            <p className="try">{rowIndex}</p>
            {letterArray.map(tile => (
            <Tile isCorrect={isCorrect} isMisplaced={exists} 
            key={rowIndex}></Tile>))}
        </div>

    )
}
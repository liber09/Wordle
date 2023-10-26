import React, {useState} from "react";
import Tile from "../tile/tile";

interface Props {
    isCorrect: boolean;
    exists: boolean;
    letterArray: string[];
    rowIndex: number;
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
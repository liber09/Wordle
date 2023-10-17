import React, {useState} from "react";
import Tile from "../tile/tile";

interface Props {
    isCorrect: boolean;
    exists: boolean;
    letterArray: string[];
}


export default function GameRow({isCorrect, exists, letterArray}: Props){

    return(
        <div className = "gameRowContainer">
            {letterArray.map(tile => (
            <Tile isCorrect={isCorrect} isMisplaced={exists} 
            key={"1"}></Tile>))}
        </div>

    )
}
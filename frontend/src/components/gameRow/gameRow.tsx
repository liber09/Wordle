import React from "react";
import Tile from "../tile/tile";

interface Props {
    isCorrect: boolean;
    exists: boolean;
  }

export default function GameRow({isCorrect, exists}: Props){
    return(
        <div className = "gameRowContainer">
            <Tile isCorrect={false} exists={false}></Tile>
            <Tile isCorrect={false} exists={false}></Tile>
            <Tile isCorrect={false} exists={true}></Tile>            
            <Tile isCorrect={false} exists={true}></Tile>
            <Tile isCorrect={true} exists={true}></Tile>
        </div>

    )
}
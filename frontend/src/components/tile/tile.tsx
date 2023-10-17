import React from "react";
interface props{
    isCorrect: boolean;
    isMisplaced: boolean;

}
export default function Tile({isCorrect, isMisplaced}: props){

    let classNames;
    if (isCorrect){
        classNames = "correct";
    }
    if (isCorrect === false && isMisplaced){
        classNames = "misplaced"
    }
    
    return(
        <div className = {`incorrect ${classNames}` }>
            
        </div>
    );
}
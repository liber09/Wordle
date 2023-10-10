import React from "react";
interface props{
    isCorrect: boolean;
    exists: boolean;

}
export default function Tile({isCorrect, exists}: props){

    let classNames;
    if (isCorrect){
        classNames = "correct";
    }
    if (isCorrect === false && exists){
        classNames = "wrongPlace"
    }
    
    return(
        <div className = {`tileContainer ${classNames}` }>
            
        </div>
    );
}
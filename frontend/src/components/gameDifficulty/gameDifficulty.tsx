import React, { ChangeEvent } from "react";

interface Props {
  selectLength: number;
  setSelectLength: (value: number) => void;
}

export default function gameDifficulty({ selectLength, setSelectLength }: Props) {
  function newSelectValue(event:any) {
    if(event != null && event.target != null){
      setSelectLength(event.target.value);
    }
  }

  return (
    <div className="difficultyContainer">
      <h4 className="text-xl">Number of letters?</h4>
      <select className="select" value={selectLength} onChange={newSelectValue}>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  );
}

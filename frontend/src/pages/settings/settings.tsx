import '../../app.scss'
import React from "react"
import GameDifficulty from "../../components/gameDifficulty/gameDifficulty"
import Navbar from "../../components/navbar/navbar";

interface Props {
    selectLength: number;
    setSelectLength: (value: number) => void;
  }

export default function settings() {
    return(
        <div>
            <Navbar></Navbar>
            <section className="settingsContainer">
            <div className="wordLengthSetting">
                <h2>Settings</h2>
            </div>
        </section>
        </div>
        
    )
}


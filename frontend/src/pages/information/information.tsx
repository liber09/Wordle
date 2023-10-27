import '../../app.scss'
import React from "react"
import Navbar from "../../components/navbar/navbar"
export default function Information() {
    return(
        <div>
            <Navbar></Navbar>
            <section className="settingsContainer">
            <h2>Information</h2>
            <p className="gameInstructions">The game selects a random word and your job is to figure out the word.
                You type a word and then the game shows which letters are correct <span className="greenText">(green)</span>, 
                correct but in wrong place <span className="yellowText">(yellow)</span> and not in the word at all <span className="grayText">(red)</span>.
                You got five tries and remember it is on time and the timer starts as soon as you have entered the first word and stops when correct word
                is submitted or if all five guesses are wrong.
            </p>
            <p className="gameInstructions">In settings you can choose wordlength from five to seven letters and you can
                also choose if you accept words where the same letter can appear more than one time or not.
            </p>
            </section>
        </div>
    )
}
import '../../app.scss'
import React from "react"
import Navbar from "../../components/navbar/navbar"
export default function HighScore() {
    return(
        <section className="settingsContainer">
            <Navbar></Navbar>
            <h2>HighScore</h2>
        </section>
    )
}
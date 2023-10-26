import '../../app.scss'
import React from "react"
import Navbar from "../../components/navbar/navbar"
export default function Information() {
    return(
        <div>
            <Navbar></Navbar>
            <section className="settingsContainer">
            <h2>Information</h2>
            </section>
        </div>
    )
}
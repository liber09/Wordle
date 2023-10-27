import '../../app.scss'
import React, {useContext} from "react"
import Navbar from "../../components/navbar/navbar";
import { AppContext } from "../../components/appContext/appContext";


export default function Settings() {
    
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


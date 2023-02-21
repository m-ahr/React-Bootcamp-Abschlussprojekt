import React from "react";
import { Link } from 'react-router-dom';

function Contact(){
    return(
        <div>
            <h2>Projekt wurde von Max Ahrend entworfen</h2>
            <p>Zu finden bei Linkedin, XING und Github</p>

            <div>
                <p>Verwendete API: <a href="https://www.openbrewerydb.org/documentation" target="_blank">OpenBreweryDB</a></p>
            </div>
            <hr/>
            <Link to="/dashboard">Home</Link> ||
            <Link to="/data">Daten</Link> ||
            <Link to="/contact">Kontakt</Link>

        </div>
    )
}

export default Contact;
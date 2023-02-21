import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Dashboard() {
  // Konstanten mit useState festlegen
  const [errorAlert, setErrorAlert] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Info zu den einzelnen Users
  const users = [
    {
      username: "benutzer1",
      password: "benutzer1"
    },
    {
      username: "benutzer2",
      password: "benutzer2"
    },
    {
      username: "benutzer3",
      password: "benutzer3"
    }
  ];
// Fehlermeldungen
  const errors = {
    uname: "Falscher Username",
    pw: "Falsches Passwort"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var { uname, pw } = document.forms[0];

    // User Login Info
    const userData = users.find((user) => user.username === uname.value);

    // User Infos vergleichen
    if (userData) {
      if (userData.password !== pw.value) {
        // .. wenn das Passwort falsch ist
         setErrorAlert(alert('Falsches Passwort!'));   //{ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // ..wenn der Username nicht gefunden wurde
      setErrorAlert(alert('Falscher Username!')) //{ name: "uname", message: errors.uname });
    }
  };

  // JSX-Code fuer Fehlermeldung
  const renderErrorMessage = (name) =>
    name === errorAlert.name && (
      <div className="error">{errorAlert}</div>
    );

  // Das Loginformular
  const renderForm = (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username </label>
          <input type="text" name="uname" required/>
          {renderErrorMessage("uname")}
        </div>
        <div>
          <label>Passwort </label>
          <input type="password" name="pw" required/>
          {renderErrorMessage("pw")}
        </div>
        <div>
          <input type="submit"/>
        </div>
      </form>
    </section>
  );

  return (
    <div className="Dashboard">
        <h1>Open Brewery DB - Dashboard</h1>
            <p>Herzliche Willkomen bei meinem Projekt</p>
            <div>
                <div>Logge dich hier ein</div>
                {isSubmitted ? <div> <p>Erfolgreich eingeloggt!</p><hr/>
            <Link to="/dashboard">Home</Link> || 
            <Link to="/data">Daten</Link> || 
            <Link to="/contact">Kontakt</Link> </div> : renderForm}
            </div>
    </div>
  );
}

export default Dashboard;

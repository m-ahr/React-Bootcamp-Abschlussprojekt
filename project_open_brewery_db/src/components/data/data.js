import React, {useState} from "react";
import { Link } from 'react-router-dom';
import Raiting from "../raiting/rating";
import './data.css';

function Data() {
  // Konstanten festlegen
  const [city, setCity] = useState("");
  const [results, setResults] = useState([""]);
  const [filter, setFilter] = useState("");

  //Breweries in dem einzelnen Ort anzeigen lassen
  const getCity = async(e) => {
    e.preventDefault();
    if(city) {
      if(filter) {
        console.log(filter);
      }
      const res = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`);
      const container = await res.json();
      setResults( container );
    }
  }

  function getType(){
    if(filter) setFilter(`${filter}`);
    else {
      console.log('nein');
    }
  }

  return (
    <div className="Data">
      <div className='Search'>
        <h2>Brauerei suchen</h2>
        <form onSubmit={getCity}>
          <label>Ort</label>
          <input value={city} onChange={(e) => setCity(e.target.value)}></input>
          <div>
            <select>
              <option value="contract">contract</option>
              <option value="brewpub">brewpub</option>
              <option value="planning">planning</option>
              <option value="large">large</option>
              <option value="proprietor">proprietor</option>
            
             <option value="micro" onChange={()=>getType('micro')}>micro</option> 

            </select>
          </div>
          <div>
            {filter}
          <button type='submit'>Suchen</button>
          </div>
        </form>        
      </div>
      {results && (
        <div>
          <p>{
            results.map((result,key) => (
              <li key={key}>{result.name}</li>
            ))
            }</p>
        </div>
        )}    
        <div>
          <Raiting></Raiting>
        </div>
        <hr/>
            <Link to="/dashboard">Home</Link> ||
            <Link to="/data">Daten</Link> ||
            <Link to="/contact">Kontakt</Link>
    </div>
  );
}

export default Data;

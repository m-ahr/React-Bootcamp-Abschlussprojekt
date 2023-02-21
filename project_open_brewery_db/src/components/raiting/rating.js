import React, {useState} from "react";
import {FaStar} from 'react-icons/fa';

function Raiting() {
  // festgelegte Konstanten
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)
  // Wert von Handleclicker wird an useState uebergeben
  const handleClick = value => {
    setCurrentValue(value)
  }
  // newHovervalue als Parameter an setHoverValue
  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };
  // handleMouseLeave ist undefined damit die Sterne wieder grau werden
  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
  // stars muss 2 Parameter haben
  // onClick onMouseOver und onMouseLeave greifen auf die obigen Funktionen zu
  return (
    <div>
      <div style={styles.container}>
        <h2> Bitte bewerten Sie uns </h2>
        <div style={styles.stars}>
          {stars.map((_, i) => {
            return (
              <FaStar
                key={i}
                size={25}
                onClick={() => handleClick(i + 1)}
                onMouseOver={() => handleMouseOver(i + 1)}
                onMouseLeave={handleMouseLeave}
                color={(hoverValue || currentValue) > i ? colors.orange : colors.grey}
                style={{ marginRight: 10, cursor: "pointer"
                }}
              />
            )
          })}
        </div>
        <form>
        <textarea placeholder="Hinterlasse und einen Kommentar!" style={styles.textarea} minLength="150"/>
        <button type="Submit" value="Submit" id="button" style={styles.button}> Submit </button>
        </form>
      </div>
    </div>
  );
};

// CSS-Teil in Konstanten festgelegt
const colors = { 
  orange: "#FFBA5A", 
  grey: "#a9a9a9"
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 15,
    padding: 20,
    margin: "30px 0",
    minHeight: 100,
    width: 400
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 15,
    width: 100,
    padding: 10,
    margin: "0 0 20px 0",
    display: 'flex',
    justifyContent: 'center',
    marginLeft: "180px"
  }
};

export default Raiting;
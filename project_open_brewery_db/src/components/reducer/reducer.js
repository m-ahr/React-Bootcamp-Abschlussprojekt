import React from "react";

function Reducer(state, action) {
    switch (action.type) {
        case "LOGIN":
          console.log('Eingeloggt');
          console.log(state);
          return { ...state, loggedIn: true }
      
        case "LOGOUT":
          console.log('Ausgeloggt');
            return { ...state, loggedIn: false }
            
        default:
          return state
      }
    };

    export default Reducer;
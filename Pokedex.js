import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex(props) {
  const winMessage = props.isWinner ? <p className="Pokedex-winner">THIS IS THE WINNER, CHICKEN DINNER!</p> : null;

  return (
    <div className="Pokedex">
      <h2 className="Pokedex-title">Pokedex</h2>
      <div className="Pokedex-cards">
        {props.pokemon.map(p => (
          <Pokecard
            key={p.id} 
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
      <h4> exp: {props.exp}</h4>
      {winMessage}
    </div>
  );
}

export default Pokedex;

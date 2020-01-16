import React from "react";


export const PokemonCard = ({ pokemon }) => {
    const { id, name, type, base } = pokemon;
    return (
      <div>
        <img alt = "Bulbasaur" src={process.env.PUBLIC_URL + "pokemonImage/1.png"}/>
        <div>{name.english}</div>
        {Object.values(type).map(seperateType =>{
           return <p className = "type">{seperateType}</p>
        })}
        {Object.entries(base).map(seperateBase =>{
           return <p className = "base">{seperateBase[0]+": "+seperateBase[1]}</p>
        })}
      </div>
    );
  }

import React from "react";
import { PokemonType } from "./PokemonType"
import { Link } from 'react-router-dom'

export const PokemonCard = ({ pokemon }) => {
  const { id, name, type, base } = pokemon;
  return (

    <div className="pokemon-card">
      <Link to={`/${id}`} className="pokemonCardLink" >
        <img className="pokemon-card__image" alt="Bulbasaur" src={process.env.PUBLIC_URL + `pokemonImage/${id}.png`} />
        <div className="pokemon-name">{name.english}</div>
        <div clasName="pokemon-type-container">
          {Object.values(type).map(seperateType => {
            return <PokemonType type={seperateType} />
          })}
        </div>
        {Object.entries(base).map(seperateBase => {
          return <p className="base">{seperateBase[0] + ": " + seperateBase[1]}</p>
        })}
      </Link>
    </div >

  );
}
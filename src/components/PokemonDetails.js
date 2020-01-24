import React from "react";
import PokemonData from '../pokemon/pokemon'
import PokemonObj from '../pokemon/pokemondetails'

const PokemonDetails = (props) => {
    const uniqueId = props.match.params.id
    const pokemonName = PokemonData[uniqueId - 1].name.english
    const pokemonMoves = Object.values(PokemonObj)[uniqueId - 1].moves.join(",")
    return <div>
        <img className="pokemon-card__image" alt="Not Loaded" src={process.env.PUBLIC_URL + `pokemonImage/${uniqueId}.png`} />
        <div>
            Name: {pokemonName} <br />
            Moves: {pokemonMoves}
        </div>
    </div>
}

export default PokemonDetails
import React from "react";
import PokemonData from '../pokemon/pokemon'
import PokemonObj from '../pokemon/pokemondetails'

const PokemonDetails = (props) => {
    const uniqueId = props.match.params.id
    const pokemonName = PokemonData[uniqueId - 1].name.english
    return <div>
        <img className="pokemon-card__image" alt="Not Loaded" src={process.env.PUBLIC_URL + `pokemonImage/${uniqueId}.png`} />
        <div>
            Name: {pokemonName}

        </div>
    </div>
}

export default PokemonDetails
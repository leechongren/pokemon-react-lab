import React from 'react'
import pokemonData from "../pokemon/pokemon"
import { PokemonCard } from "./pokemoncard"

class PokemonGallery extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inputVal: "",
        }

    }

    handleChange = event => {
        this.setState({
            inputVal: event.target.value
        })
    }

    filterPokemon = pokemonArr => {
        return pokemonArr.filter(pokemon => {
            return pokemon.name.english.toLowerCase().includes(this.state.inputVal.toLowerCase())
        })
    }

    render() {
        return <div>
            <input type="text" value={this.state.inputVal} onChange={this.handleChange} />
            <div className="pokemon-gallery">
                {this.filterPokemon(pokemonData).map(p => {
                    return <PokemonCard pokemon={p} />
                })}
            </div>
        </div>
    }
}

export default PokemonGallery
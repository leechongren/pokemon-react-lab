import React from 'react'
import axios from 'axios'
import { PokemonCard } from "./pokemoncard"
import ReactLoader from "./Loader";

class PokemonGallery extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inputVal: "",
            pokemonData: [],
            errorMessage: "",
            isLoading: false,
        }

    }

    componentDidMount() {
        this.setState({
            isLoading: true,
        });

        axios("https://us-central1-pokedex-23fb6.cloudfunctions.net/app/pokemonData").then(result => {
            this.setState({
                pokemonData: result.data,
                isLoading: false
            })
        }).catch(error => {
            console.error(error);
            this.setState({
                errorMessage: "Please Try Again",
                isLoading: false
            })

        })
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
            {!!this.state.isLoading && <ReactLoader />}
            <div>
                Search:
            <input type="text" value={this.state.inputVal} onChange={this.handleChange} />
                <div className="pokemon-gallery">
                    {!!this.state.errorMessage && <div>{this.state.errorMessage} </div>}
                    {this.filterPokemon(this.state.pokemonData).map(p => {
                        return <PokemonCard pokemon={p} />
                    })}
                </div>
            </div>
        </div>
    }
}

export default PokemonGallery
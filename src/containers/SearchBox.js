import React from 'react';
import PokemonData from '../pokemon/pokemon'
import {PokemonCard} from "../components/pokemoncard"  

class SearchBox extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value: "",
        }
    }


    handleChange = event=>
    this.setState({
        value: event.target.value,
        
    })

    render(){
        return <div>
            <input type = "text" value = {this.state.value} onChange={this.handleChange}/>
            <div className = "pokemon-gallery">{PokemonData.filter(pokemon=>{
                return pokemon.name.english.toLowerCase().includes(this.state.value.toLowerCase())
            }).map(p=>{
                return <PokemonCard pokemon = {p} />
            })}
            </div>
        </div>
    }
}

export default SearchBox

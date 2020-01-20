import React from "react";
import "./PokemonType.css"

const getTypeClassName = (type) =>{
    switch(type.toLowerCase()){
        case "fire" :
            return "fire"
        case "water" :
            return "water"
        case "grass" :
            return "grass"
        case "bug" :
            return "bug"
        case "poison" :
            return "poison"
        case "ground" :
            return "ground"
        case "electric" :
            return "electric"
        case "fairy" :
            return "fairy"
        default :
            return "default"
    }
}


export const PokemonType = ({type}) =>{
    return <span className={`pokemon-type ${getTypeClassName(type)}`}>{type}</span>
}
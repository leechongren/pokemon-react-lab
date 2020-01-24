import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return <header>
        <div>Pokemon!</div>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/gallery'>Gallery</NavLink>
    </header>
}

export default Header
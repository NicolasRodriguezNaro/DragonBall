import React from 'react'
import './NavBar.css'

import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav id='nav'>
        <ul>
            <Link to={"/"} style={{ textDecoration: 'none' }}>Inicio</Link>
            <Link to={"/filter/Male"} style={{ textDecoration: 'none' }}>Masculino</Link>
            <Link to={"/filter/Female"} style={{ textDecoration: 'none' }}>Femenino</Link>
            <Link to={"/about"} style={{ textDecoration: 'none' }}>Acerca de</Link>
        </ul>
    </nav>
  )
}

export default NavBar
import React from 'react'
import './NavBar.css'

import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav id='nav'>
        <ul>
            <Link class ="navBar" to={"/"} style={{ textDecoration: 'none' }}>Inicio</Link>
            <Link class ="navBar" to={"/filter/Male"} style={{ textDecoration: 'none' }}>Masculino</Link>
            <Link class ="navBar" to={"/filter/Female"} style={{ textDecoration: 'none' }}>Femenino</Link>
            <Link class ="navBar" to={"/about"} style={{ textDecoration: 'none' }}>Acerca de</Link>
        </ul>
    </nav>
  )
}

export default NavBar
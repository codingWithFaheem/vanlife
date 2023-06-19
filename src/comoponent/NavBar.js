import React from 'react'
import {Link , NavLink } from 'react-router-dom'

export const NavBar = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}
  return (
    <header>
    <Link className="site-logo" to="/"
    >#VanLife</Link>
    <nav>
        
        <NavLink 
            to="/about"
            style={({isActive}) => isActive ? activeStyles : null}
        >
            About
        </NavLink>
        <NavLink 
            to="/vans"
            style={({isActive}) => isActive ? activeStyles : null}
        >
            Vans
        </NavLink>
        <NavLink 
            to="/host"
            end
            style={({isActive}) => isActive ? activeStyles : null}
        >
            Host
        </NavLink>
    </nav>
</header>

  )
}

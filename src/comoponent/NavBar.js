import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <header>
    <Link className="site-logo" to="/">#VanLife</Link>
    <nav>
      <Link to="/about">About</Link>
      <Link to="/van">Vans</Link>

    </nav>
  </header>

  )
}

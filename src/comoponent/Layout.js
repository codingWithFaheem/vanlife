import React from 'react'
import { NavBar } from './NavBar'
import { Outlet } from 'react-router-dom'
import { About } from '../pages'

export const Layout = () => {
  return (
    <div>
          <NavBar />
          <Outlet />
          
    </div>
  )
}

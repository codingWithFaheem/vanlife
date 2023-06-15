import React from 'react'
import { NavBar } from './NavBar'
import { Outlet } from 'react-router-dom'
import { About } from '../pages'
import { Footer } from './Footer'

export const Layout = () => {
  return (
    <div className='site-wrapper'>
          <NavBar />
          <Outlet />
          <Footer />
          
    </div>
  )
}

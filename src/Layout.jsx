import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from "./components/NavBar.jsx"
import Footer from './components/Footer'

function Layout() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
      
    </>
  )
}

export default Layout


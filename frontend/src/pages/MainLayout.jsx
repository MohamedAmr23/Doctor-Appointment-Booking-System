import React from 'react'
import Home from './Home.jsx'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default MainLayout
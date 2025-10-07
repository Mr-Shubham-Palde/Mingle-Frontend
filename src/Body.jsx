import React from 'react'
import NavBar from './navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Body = () => {
  return (
    <div><NavBar/>
    <Outlet/>
    {/* //any childern body can route over here */}
    <Footer />
    </div>
  )
}

export default Body
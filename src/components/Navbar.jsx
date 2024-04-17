import React from 'react'
import Flag from '../image.png'
import './NavBar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <img src= {Flag} alt="flag img" />
    </div>
  )
}

export default Navbar
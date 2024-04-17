import React from 'react'
import Flag from '/image.png'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <img className='nav-flag' src= {Flag} alt="flag img" />
    </div>
  )
}

export default Navbar
import React from 'react'
import Person from '/person.jpg'
import './Card.css'
import list from './List'

const Card = ({name}) => {
  return (
    <div className='card'>
      <img className='card-img' src={Person} alt="person img" />
      <div className='card-name'>{name}</div>
    </div>
    
  )
}

export default Card
import React from 'react'
import PropTypes from 'prop-types'
import "./styles/drinkCard.css";


const DrinkCard = props => {
  return (
    <div className='drink-container'>
      <p className='drink-card-name'>{props.name}</p>
      <img className='drink-image' src={props.image}/>
      
    </div>
  )
}

export default DrinkCard
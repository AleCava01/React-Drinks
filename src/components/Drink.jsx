import React from 'react'
import PropTypes from 'prop-types'
import Ingredients from "./Ingredients"
import "./styles/drink.css"

const Drink = props => {
  return (
      <div className='outer'>
        <div className='container clearfix'>
            <div className="title">
                <h2 className='drink-name neonText'>{props.name}</h2>
            </div> 
            <div className='drink-card'>
                <div className="image-container foo">
                    <img className='image' src={props.image}/>
                    <div className=""></div>
                </div>
                <div className="info clearfix">
                    <Ingredients className="ingredients-card" ingredients={props.ingredients} measures={props.measures}></Ingredients>
                    
                    <div className="instructions">
                        <h3 className='info__title'>Instructions</h3>
                        <div className="instructions__text">
                            <p>{props.instructions}</p>
                        </div>
                        
                    </div>
                    <div className="glass">
                        <h3 className='info__title'>Glass</h3>
                        <div className="glass__text">
                            <p>{props.strGlass}</p>
                        </div>               
                    </div>
                </div>
            </div>
        </div>
      </div>
    
  )
}

Drink.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    ingredients: PropTypes.array
}

export default Drink
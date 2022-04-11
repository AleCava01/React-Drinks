import React from 'react'
import "./styles/drink.css"


const Ingredients = props => {
    var rows = [];
    for (var i = 0; i < props.ingredients.length; i++) {
        
        rows.push(<p>{props.ingredients[i]} - {props.measures[i]}</p>);
    }
    return(
        <div className='ingredients'>
            <h3 className='info__title'>Ingredients</h3>
            <div className="ingredients__list">
                <p className='info-box'>{rows}</p>
            </div>
            
        </div>
        
    ) ;

}

export default Ingredients
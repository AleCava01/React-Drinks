import React from 'react'
import "./styles/navbar.css"
import {Link} from "react-router-dom"
import $ from 'jquery';
import { wait } from '@testing-library/user-event/dist/utils';
const Navbar = () => {
  return (
    <>
    
    <div className='navbar'>
      
      <div className="nav__menu clearfix">
        
        <h3 className='nav__logo'>REACT-COCKTAILS</h3>
        <li className="nav__mobile">
          <span className='nav__mobile__span'></span>
          <span className='nav__mobile__span'></span>
          <span className='nav__mobile__span'></span>
        </li>

          <Link to="/search-by-name" style={{ textDecoration: 'none' }}>
            <li className='nav__link '>Search by name</li>
          </Link>
          <Link to="/search-by-ingredients" style={{ textDecoration: 'none' }}>
            <li className='nav__link'>Search by ingredients</li>
          </Link>
          <Link to="/random-cocktail" style={{ textDecoration: 'none' }}>
            <li className='nav__link'>Random cocktail</li>
          </Link>

        
        
      </div>

    </div>
    <div className="nav__mobile__fix"></div>
    </>
    
    
  )
}

$(function($){
  $(document).ready(function(){
      $(".nav__mobile").click(function(e){
          $(".nav__link").toggleClass('show-link');
          $(".navbar").toggleClass('opacity')
          e.preventDefault();
      });
      


  })
});

export default Navbar
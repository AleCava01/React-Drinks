import React from 'react'
import Navbar from './components/Navbar'
import SearchByName from './components/SearchByName'
import SearchByIngredients from './components/SearchByIngredients'
import RandomCocktail from './components/RandomCocktail'

import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

const App = () => {
  return (    
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/search-by-name" element={<SearchByName/>}/>
        <Route path="/search-by-ingredients" element={<SearchByIngredients/>}/>
        <Route path="/random-cocktail" element={<RandomCocktail/>}/>
      </Routes>
      
    </Router>
    
    
  )
}

export default App
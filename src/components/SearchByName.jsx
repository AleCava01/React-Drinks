import React, { useState, useEffect } from 'react';
import Drink from "./Drink"



const SearchByName = () => {
  const [item, setItem] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [search, setSearch] = useState("");

  async function fetchItems(search)  {
    try{
      const data = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+search);
      let res = await data.json()

      setItem(res["drinks"][0])
      
      let ingredients=[];
      for(let i=1; i<16;i++){
        if(res["drinks"][0]["strIngredient"+i.toString()] !== null){
          ingredients.push(res["drinks"][0]["strIngredient"+i.toString()]);
        }
      }
      setIngredients(ingredients);
      console.log(res["drinks"][0]);
    }
    catch(error){
    }
  }
  function handleChange(e) {
    setSearch(e.target.value);
  };
  async function handleClick() {
    console.log(search);
    await fetchItems(search);
    setSearch("");
};
  return (
    <>
    <br></br>
    <input type="text" value={search} onChange={handleChange} placeholder="Search"/>
    <button onClick={handleClick}>Search</button>
    <Drink name={item.strDrink} image={item.strDrinkThumb} ingredients={ingredients}></Drink>
    </>
    
  )
}

export default SearchByName
import React, { useState, useEffect } from 'react';
import DrinkCard from './DrinkCard';
import "./styles/searchByName.css";



const SearchByName = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  async function fetchItems(search)  {
    try{
      const data = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+search);
      let res = await data.json()

      setItems(res["drinks"])
      
      console.log(res["drinks"]);
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
    <div className="container clearfix">
      {items.map((item) => (
        <div className="grid-box">
        <DrinkCard name={item.strDrink} image={item.strDrinkThumb}></DrinkCard>
        </div>
      ))}
      
    </div>
    </>
    
  )
}

export default SearchByName
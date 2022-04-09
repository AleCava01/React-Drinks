import React, {useState, useEffect} from 'react'
import Drink from "./Drink"
import "./styles/randomcocktail.css"

const RandomCocktail = () => {


  const [item, setItem] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  async function fetchItems()  {
    try{
      const data = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
      let res = await data.json()
      await sleep(500);

      setItem(res["drinks"][0])
      
      let ingredients=[];
      let measures=[];
      for(let i=1; i<16;i++){
        let ingredient=res["drinks"][0]["strIngredient"+i.toString()];
        if(ingredient !== null && ingredient!= ''){
          ingredients.push(res["drinks"][0]["strIngredient"+i.toString()]);
          measures.push(res["drinks"][0]["strMeasure"+i.toString()])
        }
      }
      setIngredients(ingredients);
      setMeasures(measures);
      console.log(res["drinks"][0]);
    }
    catch(error){
    }
  }

  useEffect(()=>{
    fetchItems();
  },[]);

  return (
    <>

    <br></br>
    <Drink name={item.strDrink} image={item.strDrinkThumb} strAlcoholic={item.strAlcoholic} ingredients={ingredients} measures={measures} instructions={item.strInstructions} strGlass={item.strGlass}></Drink>
    </>
    
  )
}

export default RandomCocktail
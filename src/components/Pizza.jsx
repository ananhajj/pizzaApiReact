import { useEffect } from "react";
import { useState } from "react";
import '../App.css'

export default function Pizaa(){
   const [pizza,setPizza]=useState([]);
       async function getPizza(){
        const response=await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
        const data = await response.json();
        const recipes=data.recipes;
     setPizza(recipes);
       
        }
 useEffect(()=>{
    getPizza()
 },[])
    return(
 
         <>
    <section className="pizza container-fluid">  
<div className="row row-cols-1 row-cols-md-3 g-4">
  {
    pizza.map(pizza=>
         <div className="col">
    <div className="card h-100">
      <img src={pizza.image_url} className="card-img-top pizzaImg " alt="..." />
      <div className="card-body">
        <h5 className="card-title">{pizza.title}</h5>
        <p className="card-text">{pizza.publisher}</p>
      </div>
    </div>
  </div>
    )
  }
</div>
</section>

         
         
         </>
    )
    
}
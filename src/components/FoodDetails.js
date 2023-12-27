import './CSS/foodDetails.css'
import { useEffect, useState } from "react"
export default function FoodDetails({foodId}){
    const URL=`https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY="f695942eb0114b4383a1e04c62dd4ab3"
    const [food,setFood]=useState({})
    const [isLoad,setLoad]=useState(true);
    useEffect(()=>{
        async function fetchDetail(){
            const res=await fetch(`${URL}?apiKey=${API_KEY}`)
            const data=await res.json();
            setFood(data);
            setLoad(false);
    }
    fetchDetail()
    },[foodId])
    return(<div>
        <div className="card">
            <h1 className='name'>{food.title}</h1>
            <img className="foodimg" src={food.image} alt=""/>
        
        <div className='info'>
        <strong>Time to Serve:{food.readyInMinutes} Minutes</strong>
        <strong>{!food.vegetarian?"Non-Vegetarian":"Vegetarian"}</strong>
        <strong>Price:Rs {food.pricePerServing}</strong>
        </div>
        <div>
            <h2>Ingredients</h2>
            <ol>
            {isLoad?(<p>Loading</p>): (food.extendedIngredients.map((item)=>{
                return <li>{item.name}-{item.amount}{item.unit}</li> }))
            }
            </ol>
        </div>
            <h2>Instructions</h2>
        <div className='steps'>
            <ol>
            {isLoad?(<p>Loading</p>): (food.analyzedInstructions[0].steps.map((step)=>{
                return <li>{step.step}</li> }))
            }
            </ol>
        </div>
        </div>
    </div>)
}

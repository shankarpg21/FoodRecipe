import './CSS/search.css'
import { useEffect, useState } from "react"
const URL="https://api.spoonacular.com/recipes/complexSearch"
const API_KEY="f695942eb0114b4383a1e04c62dd4ab3"

export default function Search({foodData,setFoodData}){
    const [query,setQuery]=useState("pizza")
    useEffect(()=>{
        async function fetchFood(){
            const res= await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data=await res.json();
            setFoodData(data.results);
        }
        fetchFood()
    },[query])
    return(<div className='search' >
        <input className='input' placeholder='Search food' value={query} type='text' onChange={(e)=>setQuery(e.target.value)}/>
    </div>)
}
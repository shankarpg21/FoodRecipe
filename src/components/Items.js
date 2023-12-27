import './CSS/item.css'

export default function Items({food,setfoodId}){
    return(<div className='item'>
        <h1 className='title'>{food.title}</h1>
        <img className='img' src={food.image}/>
        <p>
        <button className='btn' onClick={()=>setfoodId(food.id)}>View Recipe</button>
            </p>
    </div>)
}
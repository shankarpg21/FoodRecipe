import Items from "./Items"
export default function Food({foodData,setfoodId}){
    return(<div className="food">
        {foodData.map((food)=>{
            return <Items key={food.id} food={food} setfoodId={setfoodId}/>
        })}
    </div>)
}
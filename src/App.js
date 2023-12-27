import { useState } from "react";
import Search from "./components/Search";
import Food from "./components/Food";
import './App.css'
import Nav from "./components/Nav";
import Container from "./components/Container";
import Innercontainer from "./components/Innercontainer";
import FoodDetails from "./components/FoodDetails";


function App() {
  const [foodData,setFoodData]=useState([])
  const [foodId,setfoodId]=useState("656329")
  return (
    <div className="App">
    <Nav/>
    <Search foodData={foodData} setFoodData={setFoodData}/>
    <Container>
      <Innercontainer>
     <Food foodData={foodData} setfoodId={setfoodId}/>
      </Innercontainer>
      <Innercontainer>
        <FoodDetails foodId={foodId}/>
      </Innercontainer>
    </Container>
    </div>
  );
}

export default App;

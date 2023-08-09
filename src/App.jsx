import StartGame from "./Components/StartGame"
import '../src/App.css'
import { useState } from "react"
import GameStarted from "./Components/GameStarted";
const App = () => {
  const[gameStarted,setGameStarted]=useState(false);

  const toggleNextPage = ()=>{
    setGameStarted((prev)=>!prev);
  }
  return (
    <div>
      {
        gameStarted ? <GameStarted/> : <StartGame toggle = {toggleNextPage}/> 
      }
      
    </div>
  )
}

export default App
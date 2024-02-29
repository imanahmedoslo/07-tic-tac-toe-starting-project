import Player from "./Components/Player"
import GameBoard from "./Components/GameBoard"
import { useState } from "react"
function App() {
  const[activePlayer,setActivePlayer]=useState("X");
  const Onselect=()=>{
    setActivePlayer((curPlayer)=>curPlayer==="X"?"O":"X")
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player1" symbol={"X"}/>
          <Player name="Player2" symbol={"O"}/>
        </ol>
       <GameBoard Onselect={Onselect} player={activePlayer}/>
         </div>
         LOG
    </main>
    
  )
}

export default App

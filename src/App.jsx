import Player from "./Components/Player"
import GameBoard from "./Components/GameBoard"
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import { useState } from "react"
import GameOver from "./Components/GameOver";

const PLAYERS={X:"Player1",O:"Player2"} 

const INITIAL_GAME_BOARD= [
  [null,null,null],
  [null,null,null],
  [null,null,null],
]
function getCurrentPlayer(gameTurns){
  let currentPlayer="X"
  if( gameTurns.length>0&&gameTurns[0].player==="X"){
    currentPlayer="O"
  }
  return currentPlayer;
}
function deriveWinner(gameBoard, players){
  let winner;
  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol=gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol=gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol=gameBoard[combination[2].row][combination[2].column]
    if(firstSquareSymbol&&firstSquareSymbol===secondSquareSymbol&&firstSquareSymbol===thirdSquareSymbol){
      winner=players[firstSquareSymbol];
    }
  } 
  console.log(players["O"]+winner)
  return winner;
}
function deriveGameBoard(gameTurns){
  let gameBoard=[...INITIAL_GAME_BOARD.map(array=>[...array])];
  for(const turn of gameTurns){
      const{square,player}=turn;
      const {row,col}=square;
      gameBoard[row][col]=player;
  }
  return gameBoard;
}

function App() {
  const [gameTurns,setGameTurns]=useState([])
  const[players,setPlayers]=useState(PLAYERS)

  let currentPlayer=getCurrentPlayer(gameTurns);
 
 let gameBoard=deriveGameBoard(gameTurns);
 const winner= deriveWinner(gameBoard,players);
  const hasDraw= gameTurns.length===9&&!winner;
  //const[activePlayer,setActivePlayer]=useState("X");
  const OnselectSquare=(rowIndex,colIndex)=>{
    setGameTurns((prevTurns)=>{
      let currentPlayer=getCurrentPlayer(prevTurns);
      const updatedTurns=[
        {square:{row:rowIndex, col:colIndex},player:currentPlayer},
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
 
  const handleRestart=()=>{
    setGameTurns([]);
  }
  const handlePlayerNameChange=(symbol,newName)=>{
    setPlayers(prevPlayers=>{
      return{
        ...prevPlayers,
        [symbol]:newName
      }
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player handleEditing={handlePlayerNameChange} currentPlayer={currentPlayer} name={PLAYERS.X} symbol={"X"}/>
          <Player handleEditing={handlePlayerNameChange} currentPlayer={currentPlayer} name={PLAYERS.Y} symbol={"O"}/>
        </ol>
        {(winner||hasDraw)&& <GameOver onRestart={handleRestart} winner={winner}/>}
       <GameBoard OnselectSquare={OnselectSquare} player={currentPlayer} board={gameBoard}/>
         </div>
         <Log turns={gameTurns}/>
    </main>
    
  )
}

export default App

import { useState } from "react"

const initialGameBoard= [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]
export default function GameBoard({Onselect, player}){
    const[gameboard, setGameboard]=useState(initialGameBoard)
   const handleClick=(rowIndex,squareIndex)=>{
    Onselect();
    setGameboard((initialGameBoard)=>{
        var updatedBoard= initialGameBoard.map((row)=>[...row])
        updatedBoard[rowIndex][squareIndex]= player
        return updatedBoard

    })
    
   }
    return(<ol id="game-board">
        {gameboard .map((row,rowIndex)=><li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, squareIndex)=><li key={squareIndex}><button value={playerSymbol} onClick={()=>handleClick(rowIndex,squareIndex)}>{playerSymbol}</button></li>)}
            </ol>
        </li>)}

    </ol>)
}
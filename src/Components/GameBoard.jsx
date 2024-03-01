import { useState } from "react"


export default function GameBoard({OnselectSquare, board}){
    return(<ol id="game-board">
        {board .map((row,rowIndex)=><li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex)=><li key={colIndex}><button value={playerSymbol} onClick={()=>OnselectSquare(rowIndex,colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button></li>)}
            </ol>
        </li>)}

    </ol>)
}
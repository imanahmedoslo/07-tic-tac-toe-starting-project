import { useState } from "react"

export default function Player({name="",symbol, currentPlayer, handleEditing}){
    const[isEditing,setIsEditing]=useState(false);
    const[newName,setName]=useState(name);
    const isActive= currentPlayer===symbol;
    const handleClick=()=>{
        setIsEditing((isEditing)=>!isEditing)
        handleEditing(symbol, newName)
    }
    return( <li className={isActive ? 'active': ''}>
        <span className="player">
        {isEditing?<input type="text" required value={newName} onChange={event=>setName(event.target.value)}/>:<span className="player-name">{newName}</span>}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{isEditing?"Save":"Edit"}</button>
      </li>)
}
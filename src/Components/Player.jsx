import { useState } from "react"

export default function Player({name="",symbol}){
    const[isEditing,setIsEditing]=useState(false);
    const[newname,setName]=useState(name);
    const handleClick=()=>{
        setIsEditing((isEditing)=>!isEditing)
    }
    return( <li>
        <span className="player">
        {isEditing?<input type="text" required value={newname} onChange={event=>setName(event.target.value)}/>:<span className="player-name">{newname}</span>}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{isEditing?"Save":"Edit"}</button>
      </li>)
}

import React from "react";
import '../App.css';

const PlayerInfo = ({playerData}) => {
    return (
        <div className="playerName font-link montCap" 
        style={{
            // fontFamily:"Montserrat",
            fontSize:"40px",
            textAlign:"center"
        }}>
            {playerData.name}
        </div>
    )
}

export default PlayerInfo
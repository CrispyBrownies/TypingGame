
import React from "react";
// import './assets/css/fonts.css';

const PlayerInfo = ({playerData}) => {
    return (
        <div className="playerName font-link" 
        style={{
            // fontFamily:"Montserrat",
            fontSize:"40px"
        }}>
            {playerData.name}
        </div>
    )
}

export default PlayerInfo
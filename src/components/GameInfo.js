import React, { useState } from "react";

const GameInfo = ({gameData}) => {

    // const [timer, setTimer] = useState(0);

    return (
        <div className="gameInfo"
        style={{
            fontFamily: "Montserrat",
            fontSize: "75px",
            fontWeight: "bold",
            textAlign:"center"
        }}>
            {gameData.timer}
        </div>
    )
}

export default GameInfo
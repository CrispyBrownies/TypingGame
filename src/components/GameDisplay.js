
import React from "react";
import PlayerInfo from "./PlayerInfo";
import GameInfo from "./GameInfo";
import Chatbox from "./Chatbox";
import GameRender from "./GameRender";
import HealthBar from "./HealthBar";

const GameDisplay = ({playerData, gameData, wordLists}) => {
    return (
        <div className="gameDisplay" 
        style={{
            border:"1px solid black",
            borderRadius:"5px"
        }}>
            <PlayerInfo playerData={playerData}/>
            <HealthBar playerData={playerData}/>
            <GameInfo gameData={gameData}/>
            <GameRender wordList={wordLists}/>
            <Chatbox/>
        </div>
    )
}

export default GameDisplay
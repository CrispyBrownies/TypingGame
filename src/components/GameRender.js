
import { BorderTop } from "@mui/icons-material";
import React from "react";
import wordRender from "./WordEngine";

const GameRender = ({wordLists}) => {
    return (
        <div className="gameRender"
            style={{width:"40vw", 
            height:"70vh", 
            backgroundColor: 'powderblue',
            minWidth:"700px",
            maxWidth:"1000px",
            margin:"0px",
            borderRadius:"5px",
            }}>
            {wordRender(wordLists.active)}
        </div>
    )
}

export default GameRender
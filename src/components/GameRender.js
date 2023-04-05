
import { BorderTop } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import WordRender from "./WordEngine"

//placeholder code until we figure out backend
const testWords = [{ name: "example",
        posX: 0,
        posY: 0,
        speed: .1,
        lifespan: 5
    }]

const GameRender = () => {

    let randX = Math.floor(Math.random() * 90)

    const [activeWords, setActiveWords] = useState([{ name: "example",
    posX: 0,
    posY: 0,
    speed: .1,
    lifespan: 5
}])

    const [incomingWords, setIncomingWords] = useState([{ name: "incoming",
    posX: randX,
    posY: 0,
    speed: .1,
    lifespan: 5
}])

    //useState for sent words

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
            <WordRender activeWords={activeWords} setActiveWords={setActiveWords} incomingWords={incomingWords} setIncomingWords={setIncomingWords}/>
        </div>
    )
}

export default GameRender
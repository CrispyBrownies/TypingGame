
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

    const [activeWords, setActiveWords] = useState([{ name: "example",
    posX: 0,
    posY: 0,
    speed: .1,
    lifespan: 5
}])
    //useState for incoming words
    //useState for sent words

    // setActiveWords(testWords)
    // console.log(activeWords)
    // useEffect(() =>{
    //     advanceWords
    // },[activeWords])

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
            <WordRender activeWords={activeWords} setActiveWords={setActiveWords}/>
        </div>
    )
}

export default GameRender
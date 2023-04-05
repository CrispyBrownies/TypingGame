
import '../App.css';
import React, { useEffect } from 'react';

function Word({word}) {
  let posX = word.posX;
  let posY = word.posY;
  // console.log(posY)

  return <div className="word montCap"
      style={{
        top:`${posY}%`,
        left:`${posX}%`,
        position:"absolute",
        fontWeight:"bold",
        fontSize:"30px",
        display:"inline-block",
        textAlign:"left"
      }}>
      {word.name}
      </div>
}

function advanceWords(activeWords, setActiveWords) {

  let activeCopy = [...activeWords]
  let randX = Math.floor(Math.random() * 90)

  for (let i=0; i<activeCopy.length; i++) {
    // console.log(activeCopy)
    activeCopy[i].posY += activeCopy[i].speed * 1;
    if (activeCopy[i].posY > 100) {
      activeCopy[i].posY = 0
      activeCopy[i].posX = randX
    }
  }
  setActiveWords(activeCopy)
}

const WordRender = ({activeWords, setActiveWords, incomingWords, setIncomingWords}) => {

  const words = activeWords?.map((item) =>
    <Word key={item.name} word={item}/>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      advanceWords(activeWords, setActiveWords)
      activateWords(activeWords, setActiveWords, incomingWords, setIncomingWords)
    }, 1000/30)
    return () => clearInterval(interval)
  },[])

    return (
      <div className="wordRain"
      style={{
        width:"100%",
        height:"100%",
        position:"relative"
      }}>
        {words}
      </div>
    )
}

function activateWords(activeWords, setActiveWords, incomingWords, setIncomingWords) {
  let newActive = [...activeWords, ...incomingWords]
  setActiveWords(newActive)
  setIncomingWords([])
}

export default WordRender
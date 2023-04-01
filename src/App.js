import GameDisplay from './components/GameDisplay';
import './App.css';
import { useEffect, useState } from 'react';
import { advanceWords } from './components/WordEngine';

const gameData = {
  gameState: "onGoing",
  timer: 120,
  framerate: 30,
};

const wordLists = {
  active: [{ name: "example",
      posX: 0,
      posY: 0,
      speed: .1,
      lifespan: 5
  }
],
  queue: {
    coming: {
      lifespan:10
    }
  }
}

function App() {

  const [playerData, setPlayerData] = useState({
    name: "Bobby Brown",
    maxHealth: 10,
    health: 10,
  })

  const [wordLists, setWordLists] = useState({
    active: [{ name: "example",
        posX: 0,
        posY: 0,
        speed: .1,
        lifespan: 5
    }
  ],
    sent: [{
      coming: {
        lifespan:10
      }
    }
  ],
    incoming: [{
      incoming: {
        lifespan:10
      }
    }]
  })
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log("ping");
  //     advanceWords(wordLists, setWordLists);
  //   }, 1000/gameData.framerate)
  //   return () => clearInterval(interval)
  // })
  // console.log(wordLists)

  return (
    <div className="App"
    style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      top:"2vh",
      position:"relative"
    }}>
      <GameDisplay playerData={playerData} gameData={gameData} wordLists={wordLists} setWordLists={setWordLists}/>
    </div>
  );
}

export default App;

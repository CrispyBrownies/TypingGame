import GameDisplay from './components/GameDisplay';
import './App.css';
import { useEffect, useState } from 'react';

// This is coming from serverside, dont need to set anything
const gameData = {
  gameState: "onGoing",
  timer: 120,
  framerate: 30,
};

const wordLists = {
  active: [{ name: "example",
      posX: 50,
      posY: 50,
      speed: 1,
      lifespan: 5
  },
  { name: "bob",
  posX: 0,
  posY: 0,
  speed: 1,
  lifespan: 5
}],
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

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("ping")
    }, 1000/gameData.framerate)
    return () => clearInterval(interval)
  })

  return (
    <div className="App"
    style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      top:"2vh",
      position:"relative"
    }}>
      <GameDisplay playerData={playerData} gameData={gameData} wordLists={wordLists}/>
    </div>
  );
}

export default App;

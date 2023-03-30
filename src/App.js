import GameDisplay from './components/GameDisplay';
import './App.css';
import { useEffect, useState } from 'react';
import wordRender from './components/WordEngine';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

// This is coming from serverside, dont need to set anything
const gameData = {
  gameState: "onGoing",
  timer: 120,
  framerate: 30,
};

const wordLists = {
  active: [{ name: "example",
      positionX: 50,
      positionY: 50,
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
      wordRender(root, wordLists.active);
      console.log("ping")
    }, 1000/gameData.framerate)
    return () => clearInterval(interval)
  })

  return (
    <div className="App"
    style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}>
      <GameDisplay playerData={playerData} gameData={gameData} wordList={wordLists}/>
    </div>
  );
}

export default App;

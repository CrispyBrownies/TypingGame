import GameDisplay from './components/GameDisplay';
import './App.css';
import { useEffect, useState } from 'react';
import { advanceWords } from './components/WordEngine';

const gameData = {
  gameState: "onGoing",
  timer: 120,
  framerate: 30,
};

function App() {

  const [playerData, setPlayerData] = useState({
    name: "Bobby Brown",
    maxHealth: 10,
    health: 10,
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
      <GameDisplay playerData={playerData} gameData={gameData}/>
    </div>
  );
}

export default App;

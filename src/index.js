import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// This is coming from serverside, dont need to set anything
// const gameData = {
//   gameState: "onGoing",
//   timer: 120,
//   framerate: 30,
// };

// const wordLists = {
//   active: [{ name: "example",
//       posX: 0,
//       posY: 0,
//       speed: .1,
//       lifespan: 5
//   }
// ],
//   queue: {
//     coming: {
//       lifespan:10
//     }
//   }
// }
//=====================================================================

// setInterval(()=>{
//   root.render(
//     <App gameData={gameData} wordLists={wordLists}/>
//     // <React.StrictMode>
//     //   <App gameData={gameData} wordLists={wordLists}/>
//     // </React.StrictMode>
//   );
// },1000/30)

root.render(
  <App/>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

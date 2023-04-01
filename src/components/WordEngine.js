
import '../App.css';

function Word({word}) {
  let posX = word.posX;
  let posY = word.posY;
  let speed = word.speed;
  console.log(posY)

  return <div className="word montCap"
      style={{
        top:`${posY}%`,
        left:`${posX}px`,
        position:"absolute",
        fontWeight:"bold",
        fontSize:"30px",
        display:"inline-block",
        textAlign:"left"
      }}>
      {word.name}
      </div>
}

export function wordRender(activeWords) {
  const words = activeWords?.map((item) =>
    <Word key={item.name} word={item}/>
  );
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

function activateWord(wordLists) {
  //somethin here
}

// export function updateWords(wordLists) {
//   return (
//     wordRender()
//   )
// }

export function advanceWords(wordLists, setWordLists) {
  let activeWords = [...wordLists.active];
  for (let i=0; i<activeWords.length; i++) {
    activeWords[i].posY += activeWords[i].speed * 1;
    if (activeWords[i].posY > 100) {
      activeWords[i].posY = 0
    }
  }
  setWordLists({
    ...wordLists,
    active: activeWords,
  })
}
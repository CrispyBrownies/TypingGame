
function Word({name, posX, posY}) {
  return <div className="word" 
      style={{
        fontFamily:"montserrat",
        width:"100px",
        height:"20px",
        top:`${posY}px`,
        left:`${posX}px`,
        position:"relative",
        textTransform:"uppercase",
        fontWeight:"bold",
        fontSize:"30px"
      }}>
      {name}
      </div>
}

function wordRender(activeWords) {
  const words = activeWords?.map((item) =>
    <Word key={item.name} name={item.name} posX={item.posX} posY={item.posY}/>
  );
    return (
      <div className="wordRain">
        {words}
      </div>
    )
}

function activateWord(wordLists) {
  //somethin here
}

export default wordRender
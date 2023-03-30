
function wordRender(root, activeWords) {
    for (let i = 0; i < activeWords.length; i++) {
        let posX = activeWords[i].positionX;
        let posY = activeWords[i].positionY;
        let word = (
          <div className='word'
            style={{
              position:"absolute",
              top:{posY},
              left:{posX},
              width:"100px",
              height:"100px",
              backgroundColor:"red"
            }}>
            {activeWords[i].name}
          </div>
        )
        root.render(word)
      }
}

function activateWord(wordLists) {
  //somethin here
}

export default wordRender
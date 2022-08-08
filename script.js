createGrid(900, "grid_30x30");

const squares = document.querySelectorAll(".sqr")


  var toggle = false;


    squares.forEach((square)=>{
      square.addEventListener("mouseover", (e)=>{
       if(toggle) {
        e.target.style.background = "black"
       }
      })
    }, false);
  
    function toggleEvent(){
      toggle = !toggle;
    }
  
  function activeateFillSqr(){
    squares.forEach((square)=>{
      square.addEventListener("click", toggleEvent);
    });
  }

  activeateFillSqr()




 function createGrid (gridSquares, gridSize) {
  const container = document.querySelector(".grid_container")

  for(let i = 0; i < gridSquares; i++){
      const div = document.createElement("div");
      div.classList.add(gridSize);
      div.classList.add("sqr");
      container.appendChild(div);
  }   
}
createGrid(900, "grid_30x30");

const squares = document.querySelectorAll(".sqr")
activeateFillSqr()



  function fillSqr(){
    squares.forEach((square)=>{
      square.addEventListener("mouseover", (e)=>{
        e.target.classList.toggle("grid_colorFill")
      })
    });
  }
  
  function activeateFillSqr(){
    squares.forEach((square)=>{
      square.addEventListener("click", fillSqr);
    });
  }





















 function createGrid (gridSquares, gridSize) {
  const container = document.querySelector(".grid_container")

  for(let i = 0; i < gridSquares; i++){
      const div = document.createElement("div");
      div.classList.add(gridSize);
      div.classList.add("sqr");
      container.appendChild(div);
  }   
}
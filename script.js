
/*--------------------------------------------------------------
-------------------create grid layout---------------------------
----------------------------------------------------------------*/
createGrid(2304, "grid_64x64");

function createGrid (gridSquares, gridSize) {

const container = document.querySelector(".grid_container")
  
for(let i = 0; i < gridSquares; i++){
  const div = document.createElement("div");
  div.classList.add(gridSize);
  div.classList.add("sqr");
  container.appendChild(div);
  }   
}


/*--------------------------------------------------------------
-------------------Filling squares with color----------------
----------------------------------------------------------------*/
const squares = document.querySelectorAll(".sqr")
let toggle = false;

activateFillSquare()

// CallBack function for toggling fillSquare on and off
// Toggle is declared false in above Variable, with the toggleEvent function it turns to True  with the help of(!).
// And back to false if pressed again, activating and de activating the fillSquare function
function toggleEvent(){
  toggle = !toggle;
};
  
// on click toggles fillSquare function
function activateFillSquare(){
  squares.forEach((square)=>{
    square.addEventListener("click", ()=>{
      toggleEvent();
      fillSquare("black");
      fillOnClick()
    });
  });
};

// fill square on mouseover if toggle is true
function fillSquare(color){
  squares.forEach((square)=>{
    square.addEventListener("mouseover", (e)=>{
      if(toggle == true) {
        e.target.style.background = `${color}`
      };
    });
  });
};

// fill square on click
function fillOnClick(){
  squares.forEach((square)=>{
    square.addEventListener("click", (e)=>{
      e.target.classList.add("grid_colorFill")
    })
  })
}






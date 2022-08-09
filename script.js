createGrid(4096, "grid_64x64");


//Creates the gridlayout
function createGrid (gridSquares, gridSize) {

const container = document.querySelector(".grid_container")
  
for(let i = 0; i < gridSquares; i++){
  const div = document.createElement("div");
  div.classList.add(gridSize);
  div.classList.add("sqr");
  container.appendChild(div);
  }   
}


//Filling the squares with color

const squares = document.querySelectorAll(".sqr")
let toggle = false;

 
  
    
function toggleEvent(){
  toggle = !toggle;
  };
  
function fillOnClick(){
  squares.forEach((square)=>{
    square.addEventListener("click", (e)=>{
      e.target.style.background = "black";
    })
  })
}

function fillSquare(color){
  squares.forEach((square)=>{
    square.addEventListener("mouseover", (e)=>{
      if(toggle == true) {
        e.target.style.background = color;
      };
    });
  });
};
  
  
function activeateFillSqr(){
  squares.forEach((square)=>{
    square.addEventListener("click", ()=>{
      toggleEvent();
      fillSquare("black");
      fillOnClick()
    });
  });
};

activeateFillSqr()


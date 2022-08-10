
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
const colors = document.querySelectorAll(".color_picker");

let toggle = false;


resetBtn()
activateFillSquare()
onclick()


// CallBack function for toggling fillSquare on and off
// Toggle is declared false in above Variable, with the toggleEvent function it turns to True  with the help of(!).
// And back to false if pressed again, activating and de activating the fillSquare function
function toggleEvent(){
  toggle = !toggle;
};
  
// on click toggles fillSquare function

function onclick (){
  colors.forEach((color)=>{
    color.addEventListener("click", (e)=>{
        e.target.classList.toggle("active")

    });
  });
}

function activateFillSquare(){
  let col = "";
   colors.forEach((color)=>{
    color.addEventListener("click", (e)=>{
      col = color.getAttribute("style")
      console.log(col)
    });
  });
  
  squares.forEach((square)=>{
    square.addEventListener("click", ()=>{
      toggleEvent();
      fillSquare(col);
    });
  });
};

// fill square on mouseover if toggle is true
function fillSquare(color){
  squares.forEach((square)=>{
    square.addEventListener("mouseover", (e)=>{
      if(toggle == true) {
        e.target.style.cssText = `${color}`
      };
    });
  });
};

//Eraser
function eraser(color){
  squares.forEach((square)=>{
    square.addEventListener("click", (e)=>{
      e.target.style.background = "white"
    })
  })
}





/*--------------------------------------------------------------
-------------------Reset Button----------------
----------------------------------------------------------------*/

function resetBtn(){
  const resetBtn = document.querySelector(".reset_btn");
  resetBtn.addEventListener("click", ()=>{
    squares.forEach((square)=>{
      square.removeAttribute("style")
    })
  });
};




/*--------------------------------------------------------------
-------------------color picker palette----------------
----------------------------------------------------------------*/






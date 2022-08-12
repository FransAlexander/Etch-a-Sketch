
/*---------------------------------------------------------------
-----------------------FUNCTION-CALLS----------------------------
-----------------------------&-----------------------------------
-------------------------VARIABLES-------------------------------
-----------------------------------------------------------------*/
createGrid(1024, "grid_32x32");

const squares = document.querySelectorAll(".sqr")
const colors = document.querySelectorAll(".color_picker");
let toggle = false;

resetBtn()
activateFillSquare()
colorPickEffect()



/*---------------------------------------------------------------
------------------------GRID-CREATION----------------------------
----------------------------------------------------------------*/

//Creates Grid layout with help of params

function createGrid (gridSquares, gridSize) {
  const container = document.querySelector(".grid_container")
  
  for(let i = 0; i < gridSquares; i++){
    const div = document.createElement("div");
    div.classList.add(gridSize);
    div.classList.add("sqr");
    container.appendChild(div);
    }   
}

/*---------------------------------------------------------------
----------------------------COLOR--------------------------------
----------------------------------------------------------------*/

//CallBack function for toggling fillSquare()
//Toggle is declared false in above variable. 
//The toggleEvent() function turns "toggle variable" boolean value to opposite with (!)
//with each click, toggling it from True to False

function toggleEvent(){
  toggle = !toggle;
};

//Gets color, toggles fillSquare() and adds selected color to fillSquare()

function activateFillSquare(){
  let col = "";
   colors.forEach((color)=>{
    color.addEventListener("click", (e)=>{
      col = color.getAttribute("style")
    });
  });
  squares.forEach((square)=>{
    square.addEventListener("click", ()=>{
      toggleEvent();
      fillSquare(col);
    });
  });
};

//Fill squares with color on mouseover if toggle is true

function fillSquare(color){
  squares.forEach((square)=>{
    square.addEventListener("mouseover", (e)=>{
      if(toggle == true) {
        e.target.style.cssText = `${color}`
      };
    });
  });
};

//Highligths selected color and unselects previous selected color

function colorPickEffect (){
  colors.forEach((color)=>{
    color.addEventListener("click", (e)=>{
        colors.forEach((color)=>{
              color.classList.remove("active")
              e.target.classList.add("active")
        });
    });
  });
}


/*--------------------------------------------------------------
---------------------------RESET-BUTTON-------------------------
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







/*---------------------------------------------------------------
-----------------------FUNCTION-CALLS----------------------------
-----------------------------&-----------------------------------
-------------------------VARIABLES-------------------------------
-----------------------------------------------------------------*/

createGrid(1024, "grid_32x32");

const squares = document.querySelectorAll(".sqr")
const colors = document.querySelectorAll(".color_picker");
const random = document.querySelector(".random_color")

let toggle = false;
let toggleRandom = false; 
let randomColor = `${getRandomColor()}`

resetBtn()
colorPickEffect()
toggleRandomEvent()
activateFillSquare()

console.log(randomColor)



/*-------------------------------------------------------------
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
----------------------------COLOR-PICK--------------------------------
----------------------------------------------------------------*/

//CallBack function for toggling fillSquare()
//Toggle is declared false in above variable. 
//The toggleEvent() function turns "toggle variable" boolean value to opposite with (!)
//with each click, toggling it from True to False and Vice Versa

function toggleEvent(){
  toggle = !toggle;
};



//Gets color, toggles fillSquare() and adds selected color to fillSquare() / fillSquareClick()


function activateFillSquare(){
  
  let col = ""
  colors.forEach((color)=>{
    color.addEventListener("click", ()=>{
      col = color.getAttribute("style")
      fillSquareClick(col)
    });
  });
  squares.forEach((square)=>{
    square.addEventListener("click", ()=>{
      toggleEvent();
      fillSquare(col);
      console.log(toggle)
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

function fillSquareClick(color){
  squares.forEach((square)=>{
    square.addEventListener("click", (e)=>{
        e.target.style.cssText = `${color}`
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
              random.classList.remove("random_color_effect")
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
-------------------RANDOM-COLOR-PICKER--------------------------
----------------------------------------------------------------*/



function getRandomColor(){
  
  var letters = '0123456789ABCDEF';
  var color = 'background-color: #';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color
}

function toggleRandomColor (){
  toggleRandom = !toggleRandom
}

//Get getRandomColor(), run it each rtime mouse touches new square
function fillSquareRandom(){
  squares.forEach((square)=>{
    square.addEventListener("mouseover", (e)=>{
      if(toggleRandom == true) { 
        e.target.style.cssText = getRandomColor()
      };
    });
  });
};


function randomColorActivate(){
  squares.forEach((square)=>{
    square.addEventListener("click", ()=>{
      toggleRandomColor();
      fillSquareRandom();
      console.log(toggleRandom)
    });
  });
};


// Calls Random color function and also makes toggle = false, Else if toggle = true it will color over squares with white
function toggleRandomEvent(){
  random.addEventListener("click", ()=>{
    toggle = false
    colorPickEffectRemove ()
    randomColorActivate()
    console.log(toggleRandom)
       });
}



function colorPickEffectRemove (){
        colors.forEach((color)=>{
              color.classList.remove("active")
        });
        random.classList.add("random_color_effect")
    }
 
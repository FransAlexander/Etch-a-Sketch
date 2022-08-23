

/*-------------------------------------------------------------
------------------------GRID-CREATION----------------------------
----------------------------------------------------------------*/
function createGrid (gridSquares, gridSize) {
  const container = document.querySelector(".grid_container")
  
  for(let i = 0; i < gridSquares; i++){
    const div = document.createElement("div");
    div.classList.add(gridSize);
    div.classList.add("sqr");
    container.appendChild(div);
    }   
}

createGrid(1024, "grid_32x32");

/*----------------------------------------------------------
----------------FUNCTION-CALLS-&-VARIABLES------------------
------------------------------------------------------------*/
const squares = document.querySelectorAll(".sqr")
const colors = document.querySelectorAll(".color_picker");
const random = document.querySelector(".random_color")

let toggleColorPick = false;
let toggleRandom = false;
let colorPick = "";

//------EVENTLISTENER FUNCTIONS----
let colorActivate = function(){
  toggleColorRandom();
  fillSquareRandom();
  fillSquareClickRandom()
}
//----------------------------------

//------FUNCTIONS CALLS----
resetBtn()
colorPickHighlightEffect()
toggleEventRandom()
activateFillSquare()
//--------------------------------



/*|||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||COLOR PICKER|||||||||||||||||||||
|||||||||||||||||||||||||||||||||||||||||||||||||||||||*/


//---------------------TOGGLES--------------------
//colorPicker
function toggleColorPicker(){
  toggleColorPick = !toggleColorPick;
}
//Random Color
function toggleColorRandom(){
  toggleRandom = !toggleRandom
}
//-----------------------------------------------


//--------------COLOR PALETTE FUNCTIONS-----------
function activateFillSquare(){
  colors.forEach((color)=>{
    color.addEventListener("click", ()=>{
      colorPick = color.getAttribute("style")
      fillSquareClick(colorPick)
      removeEventRandom()
    });
  }); 
  squares.forEach((square)=>{
    square.addEventListener("click", ()=>{
      toggleColorPicker();
      fillSquare(colorPick);
    });
  });
}
    function fillSquare(color){
      squares.forEach((square)=>{
        square.addEventListener("mouseover", (e)=>{
          if(toggleColorPick == true) { 
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

//---------CLICK EFFECT FOR COLOR PALETTE-------
function colorPickHighlightEffect (){
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
//-----------------------------------------------


/*|||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||RANDOM COLOR PICKER||||||||||||||||||
|||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

//-----------------------REMOVERS------------------------
function removeEventRandom(){
  squares.forEach((square)=>{
    square.removeEventListener("click", colorActivate)
  });
}
function colorPickEffectRemove (){
  colors.forEach((color)=>{
        color.classList.remove("active")
  });
  random.classList.add("random_color_effect")
}
//-------------------------------------------------------


//---------------RANDOM COLOR GENERATOR------------------
function getColorRandom(){
  var letters = '0123456789ABCDEF';
  var color = 'background-color: #';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color
}
//---------------------------------------------------------


//-----------------RANDOM COLOR BUTTON---------------------
function toggleEventRandom(){
  random.addEventListener("click", ()=>{
      colorPickEffectRemove()
      colorActivateRandom()
  })
}
    function colorActivateRandom(){
      squares.forEach((square)=>{
        square.addEventListener("click", colorActivate)
      });
    }
        function fillSquareRandom(){
          squares.forEach((square)=>{
            square.addEventListener("mouseover", (e)=>{
              if(toggleRandom == true) { 
                e.target.style.cssText = getColorRandom()
              };
            });
          });
        };
            function fillSquareClickRandom(){
              squares.forEach((square)=>{
                square.addEventListener("click", (e)=>{
                  if(toggleRandom == true) { 
                    e.target.style.cssText = getColorRandom()
                  };
                });
              });
            };
//---------------------------------------------------------


/*|||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||RESET BUTTON|||||||||||||||||||||
|||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

function resetBtn(){
  const resetBtn = document.querySelector(".reset_btn");
  resetBtn.addEventListener("click", ()=>{
    squares.forEach((square)=>{
      square.removeAttribute("style")
    })
  });
};

/*|||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||WATER COLOR|||||||||||||||||||
|||||||||||||||||||||||||||||||||||||||||||||||||||||||*/



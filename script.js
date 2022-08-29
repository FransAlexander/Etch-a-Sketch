

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
const waterColor = document.querySelector(".water_color");
let toggleColorPick = false;
let toggleRandom = false;
let toggleWater = false;
let colorPick = "";


//------FUNCTIONS CALLS----
resetBtn()
colorPickHighlightEffect()
toggleEventRandom()
activateFillSquare()
waterColorBtn()
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
//Water Color
function toggleWaterColor(){
  toggleWater = !toggleWater
}
//-----------------------------------------------

//--------------COLOR PALETTE FUNCTIONS-----------
function activateFillSquare(){
  colors.forEach((color)=>{
    color.addEventListener("click", ()=>{
      colorPick = color.getAttribute("style")
      removeEventRandom()
      removeColorActivate()
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




/*|||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||RANDOM COLOR PICKER||||||||||||||||||
|||||||||||||||||||||||||||||||||||||||||||||||||||||||*/

//-----------------------REMOVERS AND ClICK EFFECTS------------------------
function colorPickHighlightEffect(){
  colors.forEach((color)=>{
    color.addEventListener("click", (e)=>{
        colors.forEach((color)=>{
              color.classList.remove("active")
              e.target.classList.add("active")
              random.classList.remove("random_color_active")
              waterColor.classList.remove("water_color_active")
        });
    });
  });
}

function removeEventRandom(){
  squares.forEach((square)=>{
    square.removeEventListener("click", colorActivate)
  });
}

function removeColorActivate(){
  squares.forEach((square)=>{
    square.removeEventListener("click", waterColorActive)
  });
}

function colorPickEffectRemove (){
  colors.forEach((color)=>{
        color.classList.remove("active")
  });
  waterColor.classList.remove("water_color_active")
  random.classList.add("random_color_active")
}
function colorPickEffectRemoveWC (){
  colors.forEach((color)=>{
        color.classList.remove("active")
  });
  random.classList.remove("random_color_active")
  waterColor.classList.add("water_color_active")
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
    function colorActivate(){
      toggleColorRandom();
      fillSquareRandom();
      fillSquareClickRandom()
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



//----------BUTTON TO ENABLE WATERCOLOR EFFECT ON CLICK----//
function waterColorBtn(){
  waterColor.addEventListener("click", ()=>{
    removeEventRandom()
    colorPickEffectRemoveWC ()
    waterColorEnable()
  })
}
    function waterColorEnable(){
      squares.forEach((square)=>{
        square.addEventListener("click", waterColorActive)
      });
     
    }

    //--------GENERATES THE WATER COLOR EFFECT----//
        function waterColorActive(){
          toggleWaterColor()
          var waterColorIncriment = 0;
            squares.forEach((square)=>{
              square.addEventListener("mouseover",(e)=>{
                if(toggleWater == true && waterColorIncriment < 9){
                  waterColorIncriment++
                  e.target.style.cssText = `background-color: rgba(0, 0, 0, 0.${waterColorIncriment}00)`
                  }else if(toggleWater == true && waterColorIncriment == 9){
                    e.target.style.cssText = `background-color: rgba(0, 0, 0, 0.${waterColorIncriment}00)`
                  }
                })
              })
            }
        



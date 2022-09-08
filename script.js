


/*-------------------------------------------------------------
------------------------GRID-CREATION----------------------------
----------------------------------------------------------------*/

function createGrid (gridSquares, gridSize) {
  const container = document.querySelector(".grid_container")

  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
  
  for(let i = 0; i < gridSquares; i++){
    const div = document.createElement("div");
    div.classList.add(gridSize);
    div.classList.add("sqr");
    container.appendChild(div);
    }   
    activateFillSquare()
    fillSquare(color)
    fillSquareClick(color)
    
}

const px10 = document.querySelector(".square_10x10")
const px16 = document.querySelector(".square_16x16")
const px32 = document.querySelector(".square_32x32")
const px48 = document.querySelector(".square_48x48")
pxActive10()
pxActive16()
pxActive32()
pxActive48()




// ADD propmt to choose Px Size
function pxActive10(){
  px10.addEventListener("click", ()=>{
    px16.classList.remove("stylePxSqr")
    px32.classList.remove("stylePxSqr")
    px48.classList.remove("stylePxSqr")
    px10.classList.add("stylePxSqr")
  })
}
function pxActive16(){
  px16.addEventListener("click", ()=>{
    px10.classList.remove("stylePxSqr")
    px32.classList.remove("stylePxSqr")
    px48.classList.remove("stylePxSqr")
    px16.classList.add("stylePxSqr")
  })
}

function pxActive32(){
  px32.addEventListener("click", ()=>{

    px16.classList.remove("stylePxSqr")
    px10.classList.remove("stylePxSqr")
    px48.classList.remove("stylePxSqr")
    px32.classList.add("stylePxSqr")
  })
}
function pxActive48(){
  px48.addEventListener("click", ()=>{
    px10.classList.remove("stylePxSqr")
    px32.classList.remove("stylePxSqr")
    px16.classList.remove("stylePxSqr")
    px48.classList.add("stylePxSqr")
})
}

const random = document.querySelector(".random_color")
const waterColor = document.querySelector(".water_color");
const colors = document.querySelectorAll(".color_picker");
const squares = document.querySelectorAll(".sqr")

/*----------------------------------------------------------
----------------FUNCTION-CALLS-&-VARIABLES------------------
------------------------------------------------------------*/



let toggleColorPick = false;
let toggleRandom = false;
let toggleWater = false;
let colorPick = "";



//------FUNCTIONS CALLS----

colorPickHighlightEffect()
toggleEventRandom()
waterColorBtn()
resetBtn()
    
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
  const squares = document.querySelectorAll(".sqr")
  const colors = document.querySelectorAll(".color_picker");
  colors.forEach((color)=>{
    color.addEventListener("click", ()=>{
      colorPick = color.getAttribute("style")
      removeEventRandom()
      removeColorActivate()
      console.log(toggleColorPick)
      
    });
  }); 
  squares.forEach((square)=>{
    square.addEventListener("click", ()=>{
      toggleColorPicker();
      fillSquare(colorPick);
      
      console.log(toggleColorPick)
    });
  });
}

    function fillSquare(color){
      const squares = document.querySelectorAll(".sqr")
      squares.forEach((square)=>{
        square.addEventListener("mouseover", (e)=>{
          if(toggleColorPick == true) { 
            e.target.style.cssText = `${color}`
            console.log(e.target.style.cssText)
          };
        });
      });
    };
        function fillSquareClick(color){
          const squares = document.querySelectorAll(".sqr")
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
  const colors = document.querySelectorAll(".color_picker");
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
  const squares = document.querySelectorAll(".sqr")
  squares.forEach((square)=>{
    square.removeEventListener("click", colorActivate)
  });
}


function removeColorActivate(){
  const squares = document.querySelectorAll(".sqr")
  squares.forEach((square)=>{
    square.removeEventListener("click", waterColorActive)
  });
}

function colorPickEffectRemove (){
  const colors = document.querySelectorAll(".color_picker");
  colors.forEach((color)=>{
        color.classList.remove("active")
  });
  waterColor.classList.remove("water_color_active")
  random.classList.add("random_color_active")
}
function colorPickEffectRemoveWC (){
  const colors = document.querySelectorAll(".color_picker");
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
      const squares = document.querySelectorAll(".sqr")
      squares.forEach((square)=>{
        square.addEventListener("click", colorActivate)
      });
    }
        function fillSquareRandom(){
          const squares = document.querySelectorAll(".sqr")
          squares.forEach((square)=>{
            square.addEventListener("mouseover", (e)=>{
              if(toggleRandom == true) { 
                e.target.style.cssText = getColorRandom()
              };
            });
          });
        };
            function fillSquareClickRandom(){
              const squares = document.querySelectorAll(".sqr")
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
  const squares = document.querySelectorAll(".sqr")
  resetBtn.addEventListener("click", ()=>{
    squares.forEach((square)=>{
      square.removeAttribute("style")
  });
})
}
/*|||||||||||||||||||||||||||||||||||||||||||||||||||||
||||||||||||||||||||||WATER COLOR|||||||||||||||||||
|||||||||||||||||||||||||||||||||||||||||||||||||||||||*/



//----------BUTTON TO ENABLE WATERCOLOR EFFECT ON CLICK----//
function waterColorBtn(){
  const waterColor = document.querySelector(".water_color");
  waterColor.addEventListener("click", ()=>{
    removeEventRandom()
    colorPickEffectRemoveWC ()
    waterColorEnable()
  })
}
    function waterColorEnable(){
      const squares = document.querySelectorAll(".sqr")
      squares.forEach((square)=>{
        square.addEventListener("click", waterColorActive)
      });
     
    }

    //--------GENERATES THE WATER COLOR EFFECT----//
        function waterColorActive(){
          const squares = document.querySelectorAll(".sqr")
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
        



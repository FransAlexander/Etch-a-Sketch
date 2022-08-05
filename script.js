createGrid(900, "grid_30x30");

// Adds an eventListener to each square, making it so each square gets filled when moused over
const sqr = document.querySelectorAll(".sqr");

sqr.forEach( (square) => {

    square.addEventListener("mousedown", (e) => {
        e.target.style.background = "black";
    });

});
 // how do i make it so the event starts onces clicked then goes over 


function createGrid (gridSquares, gridSize) {
    const container = document.querySelector(".grid_container")
 
    for(let i = 0; i < gridSquares; i++){
        const div = document.createElement("div");
        div.classList.add(gridSize);
        div.classList.add("sqr");
        container.appendChild(div);
    }

    
}



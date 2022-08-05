
// toggle class hover to fill sqrs


function createGrid (gridSquares, gridSize) {
    const container = document.querySelector(".grid_container")
 
    for(let i = 0; i < gridSquares; i++){
        const div = document.createElement("div");
        div.classList.add(gridSize)
        container.appendChild(div);
    }

}

createGrid(900, "grid_30x30");
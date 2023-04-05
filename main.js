// nested for loops to generate divs to insert into the wrapper

function generateGrid() { 
    gridWrapper.style.gridTemplateColumns = `repeat(${gridSize},1fr)`
    for (let i = 0; i < gridSize ** 2; i++) { 
        let paintSquare = document.createElement("div");
        paintSquare.classList.add("paintSquare");
        gridWrapper.append(paintSquare);
    }
        
}

function paint() {
    if (mouseDown === true) this.classList.add("painted");
}

function promptGridSize() { 
    do {
        gridSize = prompt("How many squares per row? (Max 64): ", gridSize);
        if (gridSize > 64 || gridSize < 0) alert("Please enter a valid grid size!");
    } while (gridSize > 64 || gridSize < 0);
}

function changeGridSize() { 
    removeGridSquares()
    promptGridSize()
    generateGrid()
    addEventListeners()
}

function removeGridSquares() { 
    squares.forEach(square => square.remove());
}

function addEventListeners(){ 
    squares = document.querySelectorAll(".paintSquare");
    console.log(squares);
    squares.forEach(square => square.addEventListener("mousemove", paint));
}

function clearCanvas() { 
    squares.forEach(square => square.classList.remove("painted"));
} 

let gridSize = 16;
let mouseDown = false;
const gridWrapper = document.querySelector(".grid-wrapper");
const gridSizeButton = document.querySelector(".grid-size-button")
const clearCanvasButton = document.querySelector(".clear-canvas-button");
gridSizeButton.addEventListener("click", changeGridSize);
clearCanvasButton.addEventListener("click", clearCanvas);
document.addEventListener("mousedown", function () { mouseDown = true });
document.addEventListener("mouseup", function () { mouseDown = false });
generateGrid();
addEventListeners();
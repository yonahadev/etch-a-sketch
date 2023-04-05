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
}

function addEventListeners(){ 
    squares = document.querySelectorAll(".paintSquare")
    squares.forEach(square => square.addEventListener("hover",paint))
}

let gridSize = 16;
const gridWrapper = document.querySelector(".grid-wrapper");
generateGrid()
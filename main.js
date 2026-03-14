const container = document.querySelector(".grid");

container.addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("square")) {
    event.target.style.backgroundColor = generateRandomColor();
  }
});

const clearGrid = document.querySelector(".clear-grid");

clearGrid.addEventListener("click", function () {
  const squares = document.querySelectorAll(".square");
  for (let square of squares) {
    square.style.backgroundColor = "white";
  }
});

function generateRandomColor() {
  const symbols = "0123456789ABCDEF";
  let color = "#";

  for (let j = 0; j < 6; j++) {
    color += symbols[Math.floor(Math.random() * 16)];
  }
  return color;
}

function blackColor() {
  return "#262626";
}

function createGrid(size) {
  container.innerHTML = ""; // Clear Previous Grid

  const squareSize = 600 / size;

  for (let i = 0; i < size * size; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("square");

    gridSquare.style.width = `${squareSize}px`;
    gridSquare.style.height = `${squareSize}px`;

    container.appendChild(gridSquare);
  }
}

function createNewGrid() {
  let btn = document.querySelector(".grid-size-picker");
  btn.addEventListener("click", function () {
    let userInput = Number(prompt("Insert a grid size between 2-100"));
    while (userInput > 100 || userInput < 2 || isNaN(userInput)) {
      userInput = Number(prompt("Grid size must be a value between 2 and 100"));
    }
    createGrid(userInput);
  });
}

createGrid(16);
createNewGrid();

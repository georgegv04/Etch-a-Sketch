const container = document.querySelector(".grid");

container.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("square")) {
    if (currentMode === "rainbow") {
      event.target.style.backgroundColor = generateRandomColor();
    } else if (currentMode === "black") {
      event.target.style.backgroundColor = "#262626";
    }
  }
});

const clearGrid = document.querySelector(".clear-grid");

clearGrid.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  for (let square of squares) {
    square.style.backgroundColor = "";
  }
});

let currentMode = "rainbow";

const rainbowBtn = document.querySelector(".rainbow-btn");
rainbowBtn.addEventListener("click", () => {
  currentMode = "rainbow";
});

const blackBtn = document.querySelector(".black-btn");
blackBtn.addEventListener("click", () => {
  currentMode = "black";
});

function generateRandomColor() {
  const symbols = "0123456789ABCDEF";
  let color = "#";

  for (let j = 0; j < 6; j++) {
    color += symbols[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createGrid(size) {
  container.innerHTML = ""; // Clear Previous Grid

  const squareSize = container.clientWidth / size;

  for (let i = 0; i < size * size; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("square");

    gridSquare.style.width = `${squareSize}px`;
    gridSquare.style.height = `${squareSize}px`;

    container.appendChild(gridSquare);
  }
}

const gridBtn = document.querySelector(".grid-size-picker");
gridBtn.addEventListener("click", () => {
  let userInput = Number(prompt("Insert a grid size between 2 and 100"));
  while (userInput > 100 || userInput < 2 || isNaN(userInput)) {
    userInput = Number(prompt("Please enter a number between 2 and 100"));
  }
  createGrid(userInput);
});

createGrid(16);

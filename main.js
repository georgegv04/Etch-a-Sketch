// Select the grid container
const container = document.querySelector(".grid");

// Change square color when hovering
container.addEventListener("mouseover", (event) => {
  if (event.target.classList.contains("square")) {
    if (currentMode === "rainbow") {
      event.target.style.backgroundColor = generateRandomColor();
    } else if (currentMode === "black") {
      event.target.style.backgroundColor = "#262626";
    }
  }
});

// Clear all colored squares
const clearGrid = document.querySelector(".clear-grid");

clearGrid.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  for (let square of squares) {
    square.style.backgroundColor = "";
  }
});

// Current drawing mode
let currentMode = "rainbow";

// Switch to rainbow mode
const rainbowBtn = document.querySelector(".rainbow-btn");
rainbowBtn.addEventListener("click", () => {
  currentMode = "rainbow";
});

// Switch to black mode
const blackBtn = document.querySelector(".black-btn");
blackBtn.addEventListener("click", () => {
  currentMode = "black";
});

// Generate a random hex color
function generateRandomColor() {
  const symbols = "0123456789ABCDEF";
  let color = "#";

  for (let j = 0; j < 6; j++) {
    color += symbols[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Create a grid with size × size squares
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

// Button for selecting grid size
const gridBtn = document.querySelector(".grid-size-picker");
gridBtn.addEventListener("click", () => {
  let userInput = Number(prompt("Insert a grid size between 2 and 100"));

  // Validate user input
  while (userInput > 100 || userInput < 2 || isNaN(userInput)) {
    userInput = Number(prompt("Please enter a number between 2 and 100"));
  }

  createGrid(userInput);
});

// Create default 16x16 grid on page load
createGrid(16);

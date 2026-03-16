// Select the grid container
const container = document.querySelector(".grid");

// Select the buttons section
const buttonsSection = document.querySelector(".btn-section");

// Current drawing mode
let currentMode = "rainbow";

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

// Single listener for all buttons (event delegation)
buttonsSection.addEventListener("click", (e) => {
  // The element that was clicked
  const target = e.target;

  // Decide which button was clicked
  switch (target.className) {
    case "grid-size-picker":
      // Handle grid size selection
      let userInput = Number(prompt("Insert a grid size between 2 and 100"));

      while (userInput > 100 || userInput < 2 || isNaN(userInput)) {
        userInput = Number(prompt("Please enter a number between 2 and 100"));
      }

      createGrid(userInput);
      break;

    case "black-btn":
      // Activate black drawing mode
      currentMode = "black";
      break;

    case "rainbow-btn":
      // Activate rainbow drawing mode
      currentMode = "rainbow";
      break;

    case "clear-grid":
      // Clear the grid
      const squares = document.querySelectorAll(".square");
      for (let square of squares) {
        square.style.backgroundColor = "";
      }
      break;
  }
});

// Create default 16x16 grid on page load
createGrid(16);

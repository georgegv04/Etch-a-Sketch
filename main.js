const container = document.querySelector(".grid");

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

    gridSquare.addEventListener("mouseover", function () {
      gridSquare.style.backgroundColor = generateRandomColor();
    });
    container.appendChild(gridSquare);
  }
}
createGrid(16);
createNewGrid();

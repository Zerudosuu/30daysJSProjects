const gridContainer = document.querySelector(".grid");

// Create 9 squares and add them to the grid
for (let i = 0; i < 9; i++) {
  const grid = document.createElement("div");
  grid.className = "square";
  grid.id = i;
  gridContainer.appendChild(grid);
}

const gridElements = document.querySelectorAll(".square");

function randomMole() {
  // Remove the 'mole' class from all squares (if present)
  gridElements.forEach((grid) => {
    grid.classList.remove("mole");
  });

  const randomIndex = Math.floor(Math.random() * gridElements.length);
  gridElements[randomIndex].classList.add("mole");
}

// Set up the interval to show the mole
let resultMole = setInterval(randomMole, 1000);

// Add a click event listener to the grid elements
gridElements.forEach((grid) => {
  grid.addEventListener("click", (e) => {
    if (e.target.classList.contains("mole")) {
      console.log("Mole clicked");
      // Remove the 'mole' class when clicked
      e.target.classList.remove("mole");
    }
  });
});

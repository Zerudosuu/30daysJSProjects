const gridContainer = document.querySelector(".gridcontainer");

for (var i = 1; i <= 9; i++) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  grid.id = i;
  gridContainer.appendChild(grid);
}

const gridElements = document.querySelectorAll(".grid");

gridElements.forEach((grid) =>
  grid.addEventListener("click", (e) => {
    console.log(e.target.id);
  })
);

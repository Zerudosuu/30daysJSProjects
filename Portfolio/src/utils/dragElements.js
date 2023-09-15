const dragElement = () => {
  const blob = document.querySelector(".hero__blob");
  let isDragging = false;
  let positionX, positionY;

  // Function to start dragging
  blob.dragElement.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - dragElement.getBoundingClientRect().left;
    offsetY = e.clientY - dragElement.getBoundingClientRect().top;
  });

  // Function to handle dragging
  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      dragElement.style.left = x + "px";
      dragElement.style.top = y + "px";
    }
  });

  // Function to stop dragging
  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
};

export default dragElement;

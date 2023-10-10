const AOS = () => {
  const headNav = document.querySelector(".head");
  let carticon = document.querySelector(".cartIcon");
  let itemContainer = document.querySelector(".itemContainer");
  let isCartOpen = false;

  console.log(carticon);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll("section");
  hiddenElements.forEach((el) => observer.observe(el));

  window.onscroll = () => {
    if (window.scrollY > 100) {
      headNav.classList.add("nav-active");
    } else {
      headNav.classList.remove("nav-active");
    }
  };

  carticon.addEventListener("click", () => {
    console.log("clicked");
    if (isCartOpen) {
      itemContainer.style.display = "none";
      isCartOpen = false;
    } else {
      itemContainer.style.display = "flex";
      isCartOpen = true;
    }
  });
};

export default AOS;

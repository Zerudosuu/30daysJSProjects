const mobilenav = () => {
  const mobile_nav = document.querySelector(".mobile-nav");
  const headermenubtn = document.querySelector(".header__menu");
  const closemenu = document.querySelector(".mobile-nav__closebtn");
  const blob = document.querySelector(".hero__blob1");

  headermenubtn.addEventListener("click", () => {
    mobile_nav.style.display = "flex";
    console.log("headermenubtn clicked");
  });

  closemenu.addEventListener("click", () => {
    mobile_nav.style.display = "none";
    console.log("closed button was clicked");
  });

  var rotation = 0;
  function rotationAnimation() {
    rotation += 0.5;

    blob.style.transform = "rotate(" + rotation + "deg)";
    requestAnimationFrame(rotationAnimation);
  }

  // rotationAnimation();
};

export default mobilenav;

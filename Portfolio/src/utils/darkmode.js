const DarkMode = () => {
  let isDarkmode = false;
  document.addEventListener("DOMContentLoaded", () => {
    const lightBtn = document.querySelector(".header__sun");

    lightBtn.addEventListener("click", () => {
      document.body.classList.toggle("lightmode");
    });
  });
};

export default DarkMode;

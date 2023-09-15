const DarkMode = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const lightBtn = document.querySelector(".header__sun");

    lightBtn.addEventListener("click", () => {
      document.body.classList.add("lightmode");
    });
  });
};

export default DarkMode;

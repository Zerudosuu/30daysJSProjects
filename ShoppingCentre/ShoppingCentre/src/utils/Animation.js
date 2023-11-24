const ToIntroductionBtn = document.querySelector(".arrowDown");
const HeroSection = document.querySelector(".hero");
const womenList = document.querySelector(".WomanContainer");
const womanSection = document.querySelector(".WomanSection");
const headlist = document.querySelectorAll(".head__list");
const giftSection = document.querySelector(".giftSection");
let isWomanSectionOpen = true;

const AnimationMnager = () => {
  const introductionSection = document.querySelector(".introduction");

  ToIntroductionBtn.addEventListener("click", () => {
    introductionSection.scrollIntoView({ behavior: "smooth" });
    ToIntroductionBtn.style.display = "none";
  });

  window.onscroll = function () {
    let HeroSectionRect = HeroSection.getBoundingClientRect();
    let giftSectionRect = giftSection.getBoundingClientRect();

    // Check if the top of the HeroSection is within the viewport
    if (
      HeroSectionRect.top >= 0 &&
      HeroSectionRect.bottom <= window.innerHeight
    ) {
      ToIntroductionBtn.style.display = "block";
    } else {
      ToIntroductionBtn.style.display = "none";
    }

    headlist.forEach((item) => {
      if (
        giftSectionRect.top >= 0 &&
        giftSectionRect.bottom <= window.innerHeight
      ) {
        item.style.color = "var(--clr-light)";
      } else {
        item.style.color = "var(--clr-dark)";
      }
    });
  };

  womenList.addEventListener("click", function () {
    if (isWomanSectionOpen) {
      womanSection.style.display = "flex";
      isWomanSectionOpen = false;
    } else {
      womanSection.style.display = "none";
      isWomanSectionOpen = true;
    }
  });
};

export default AnimationMnager;

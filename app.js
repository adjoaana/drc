const body = document.querySelector(".body");
const header = document.querySelector(".header");
const headerToggle = document.querySelector(".header__toggle");
const headerLogoImage = document.querySelector(".hli");
const headerMenu = document.querySelector(".header__menu");

headerToggle.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    header.classList.remove("overlay");
    body.classList.remove("overlay");
    headerMenu.classList.add("hide-for-mobile");
    headerLogoImage.classList.remove("hide-for-mobile");
  } else {
    header.classList.add("open");
    header.classList.add("overlay");
    body.classList.add("overlay");
    headerMenu.classList.remove("hide-for-mobile");
    headerLogoImage.classList.add("hide-for-mobile");
  }
});

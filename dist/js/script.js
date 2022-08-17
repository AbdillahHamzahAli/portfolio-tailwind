// navbar fixed

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

//humburger
const humburger = document.querySelector("#humburger");
const navMenu = document.querySelector("#nav-menu");
humburger.addEventListener("click", function () {
  humburger.classList.toggle("humburger-active");
  navMenu.classList.toggle("hidden");
});

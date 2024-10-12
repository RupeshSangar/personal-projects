const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".header_navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

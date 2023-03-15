const burger = document.querySelector(".burgermenu");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelector(".nav-link");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navLink.classList.toggle("active");
});
document.querySelectorAll(".nav-child").forEach((n) =>
  n.addEventListener("click", () => {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
    navLink.classList.remove("active");
  })
);

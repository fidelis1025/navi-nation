const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const ul = document.querySelector("#wrapper");

function toggleClass() {
  nav1.classList.toggle("slide-out-1");
  nav2.classList.toggle("slide-out-2");
  nav3.classList.toggle("slide-out-3");
  nav4.classList.toggle("slide-out-4");
  nav5.classList.toggle("slide-out-5");
}

function toggleNav() {
  menuBars.classList.toggle("change");
  overlay.classList.toggle("overlay-active");

  if (overlay.classList.contains("overlay-active")) {
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    return toggleClass();
  }

  overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
  toggleClass();
}

menuBars.addEventListener("click", toggleNav);

ul.addEventListener("click", toggleNav);

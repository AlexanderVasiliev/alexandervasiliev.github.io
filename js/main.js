var menuBtn = document.querySelector(".main-header__nav-btn");
var menu = document.querySelector(".main-header__nav");

menuBtn.addEventListener("click", function() {
  menu.classList.toggle("main-header__nav--open");
})

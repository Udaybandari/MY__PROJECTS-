let menuBtn = document.getElementById("menuBtn");
let navLinks = document.querySelector(".navbar ul");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});
let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});
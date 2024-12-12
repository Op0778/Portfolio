document.getElementById("show").addEventListener("click", function () {
  var content = document.getElementById("content");
  content.classList.toggle("hidden");
});

document.getElementById("show2").addEventListener("click", function () {
  var content = document.getElementById("content2");
  content.classList.toggle("hidden");
});

document.getElementById("show3").addEventListener("click", function () {
  var content = document.getElementById("content3");
  content.classList.toggle("hidden");
});

function toggleMenu() {
  let navbar = document.getElementById("myNavbar");
  navbar.className =
    navbar.className === "navbar" ? "navbar responsive" : "navbar";
}

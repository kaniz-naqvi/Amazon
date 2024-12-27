var searchBar = document.querySelector(".searchBar");
var submit = document.querySelector(".submit");
var searchInput = searchBar.querySelector("input");

// Add event listener to the searchBar for click
searchBar.addEventListener("click", () => {
  searchBar.style.border = "2px solid #f7b335";
  document.querySelector("main").style.opacity = "0.5";
});
let menuBar = document.querySelectorAll(".menuBar");
let overlay = document.querySelector(".overlay");
let body = document.querySelector("body");
let menuSlide = document.querySelector(".side-menu");
menuBar.forEach((menuBar) => {
  menuBar.addEventListener("click", () => {
    overlay.style.display = "block";
    body.classList.add("no-scroll");
    menuSlide.style.margin = "0px";
  });
});
let cross = document.querySelector(".cross");
cross.addEventListener("click", () => {
  overlay.style.display = "none";
  body.classList.remove("no-scroll");
  menuSlide.style.margin = "25%";
});
// Function to remove the search bar styling
function removeStyle() {
  searchBar.style.border = "none";
  document.querySelector("main").style.opacity = "1";
}

// Event listener for submit button click
submit.addEventListener("click", (event) => {
  removeStyle();
  event.stopPropagation();
});

// Remove style when clicking outside the search bar
document.addEventListener("click", (event) => {
  if (!searchBar.contains(event.target)) {
    removeStyle();
  }
});

// Event listener for Enter key press
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    removeStyle();
  }
});

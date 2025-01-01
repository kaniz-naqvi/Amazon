// Select necessary DOM elements
const searchBar = document.querySelector(".searchBar");
const submit = document.querySelector(".submit");
const searchInput = searchBar.querySelector("input");
const menuBars = document.querySelectorAll(".menuBar");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const menuSlide = document.querySelector(".side-menu");
const cross = document.querySelector(".cross");

// Function to add search bar styling and block scroll
function addSearchBarStyle() {
  searchBar.style.border = "2px solid #f7b335";
  document.querySelector("main").style.opacity = "0.5";
  body.classList.add("no-scroll");
}

// Function to remove search bar styling and unblock scroll
function removeStyle() {
  searchBar.style.border = "none";
  document.querySelector("main").style.opacity = "1";
  body.classList.remove("no-scroll");
}

// Function to show the side menu and overlay
function showMenu() {
  overlay.style.display = "block";
  body.classList.add("no-scroll");
  menuSlide.style.margin = "0px";
}

// Function to hide the side menu and overlay
function hideMenu() {
  overlay.style.display = "none";
  body.classList.remove("no-scroll");
  menuSlide.style.margin = "25%";
}

// Event listener to add style when search bar is clicked
searchBar.addEventListener("click", () => {
  addSearchBarStyle();
});

// Event listener for menu bars to show side menu
menuBars.forEach((menuBar) => {
  menuBar.addEventListener("click", () => {
    showMenu();
  });
});

// Event listener for cross button to hide side menu
cross.addEventListener("click", () => {
  hideMenu();
});

// Event listener for submit button to remove search bar style
submit.addEventListener("click", (event) => {
  removeStyle();
  event.stopPropagation();
});

// Event listener for clicks outside the search bar to remove its style
document.addEventListener("click", (event) => {
  if (!searchBar.contains(event.target)) {
    removeStyle();
  }
});

// Event listener for the Enter key to remove search bar style
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    removeStyle();
  }
});

var searchBar = document.querySelector(".searchBar");
var submit = document.querySelector(".submit");
var searchInput = searchBar.querySelector("input"); // Get the input element

// Add event listener to the searchBar for click
searchBar.addEventListener("click", () => {
  searchBar.style.border = "2px solid #f7b335";
  document.querySelector("main").style.opacity = "0.5";
});

// Function to remove the search bar styling
function removeStyle() {
  searchBar.style.border = "none";
  document.querySelector("main").style.opacity = "1";
}

// Event listener for submit button click
submit.addEventListener("click", (event) => {
  removeStyle(); // Remove the style when submit is clicked
  event.stopPropagation(); // Prevent bubbling to the search bar click event
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

// When Language gets changed, Country Flag also gets changed
const languageSelector = document.getElementById("Language");
languageSelector.addEventListener("change", changeFlag);

function changeFlag() {
  const selectedLanguage = languageSelector.value;
  const flagDiv = document.querySelector(".flag");

  switch (selectedLanguage) {
    case "Eng":
      flagDiv.style.backgroundImage = "url('../Flags//American-Flag.webp')";
      break;
    case "Korean":
      flagDiv.style.backgroundImage = "url('../Flags/Korea.png')";
      break;
    case "Hindi":
      flagDiv.style.backgroundImage = "url('../Flags/India.png')";
      break;
    case "Urdu":
      flagDiv.style.backgroundImage = "url('../Flags/Pakistan.png')";
      break;
    default:
      flagDiv.style.backgroundImage = "url('../Flags/American-Flag.webp')";
      break;
  }
}
// Function to get the product name from URL
function getProductNameFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("name");
}
// Function to update the title dynamically
function updateTitle(productName) {
  const product = products.find((p) => p.name === productName);
  if (product) {
    document.title = `Amazon.com: ${product.name}`;
  }
}

// Run on page load
window.onload = function () {
  const productName = getProductNameFromURL();
  if (productName) {
    updateTitle(productName);
  }
};
// 1. Get the product name from the URL
const productName = getProductNameFromURL();

// 2. Find the product in the products array
const product = products.find((p) => p.name === productName);
let primaryProduct = document.getElementById("prime-product");
let others = document.querySelector(".others");
function updatePrimeProduct() {
  primaryProduct.innerHTML = "";
  let productsInnerHTML = "";
  productsInnerHTML = ` <div class="discrption">
          <div class="img">
            <img src="images/${product.name}.jpg" alt="" />
          </div>
          <div class="details">
            <p>
             <b>${product.name}</b>${product.details}
            </p>
            <div class="sale">${product.sales}</div>
            <hr />
            <br />
            <div class="prize"><strong>Prize</strong> ${product.price}$</div>
          </div>
        </div>`;
  primaryProduct.innerHTML = productsInnerHTML;
  others.innerHTML = ``;
  otherHTML = "";
}
updatePrimeProduct();

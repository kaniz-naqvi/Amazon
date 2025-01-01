const searchBox = document.getElementById("search-input");
let mainProducts = document.querySelector("main");
let dropdown = document.getElementById("searchDropDownBox");
let username = document.querySelectorAll(".username");
let isSignIn = false;
function getCategoryFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("category");
}

function getSearchValueFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("search");
}

// Set the search box value on page load and filter products if necessary
window.onload = () => {
  // Handle search functionality and product display
  const searchValue = getSearchValueFromURL();
  if (searchValue) {
    searchBox.value = searchValue;
    searchProductsByName(searchValue.toLowerCase());
    searchBox.focus();
  }
  initProductDisplay();

  // Retrieve username, email, and password from localStorage
  let storedUsername = localStorage.getItem("username");
  let storedEmail = localStorage.getItem("email");

  // Check if the values exist in localStorage
  if (storedUsername && storedEmail) {
    isSignIn = true;
  }

  // Add username to the home screen if signed in
  if (isSignIn) {
    username.forEach((name) => {
      name.innerHTML = storedUsername;
    });
  }
};

// Update product display on search input
searchBox.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  searchProductsByName(query);
});

function searchProductsByName(query) {
  let productHTML = "";

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  if (filteredProducts.length > 0) {
    filteredProducts.forEach((product) => {
      productHTML += `
        <div class="products ${product.styleClass}" data-name="${product.name}">
          <div class="productImg">
              <img src="images/${product.name}.jpg" alt="${product.name}">
          </div>
          <div class="details">
          <p>
              <div class="productDetails"><b>${product.name}</b>${product.details}</div>
              <div class="pastSales"><b>${product.sales} bought</b> in the past month</div>
              <div class="price">$ <b>${product.price}</b></div>
          </p>
          <button>Add to cart</button>
          </div>
        </div>`;
    });
  } else {
    productHTML = `<p>No products found matching your search!</p>`;
  }

  mainProducts.innerHTML = productHTML;
  attachProductClickListeners();
}

function attachProductClickListeners() {
  let productElements = document.querySelectorAll(".products");
  productElements.forEach((pro) => {
    pro.addEventListener("click", () => {
      const productName = pro.dataset.name;
      // Redirect to the product-details page with the product name
      window.location.href = `product-details.html?name=${encodeURIComponent(
        productName
      )}`;
    });
  });
}

function displayProduct(categories = []) {
  let productHTML = "";

  const filteredProducts = categories.length
    ? products.filter((product) =>
        categories.includes(product.category.toLowerCase())
      )
    : products;

  filteredProducts.forEach((product) => {
    productHTML += `
    <div class="products ${product.styleClass}" data-name="${product.name}">
      <div class="productImg">
          <img src="images/${product.name}.jpg" alt="${product.name}">
      </div>
      <div class="details">
      <p>
          <div class="productDetails"><b>${product.name}</b>${product.details}</div>
          <div class="pastSales"><b>${product.sales} bought</b> in the past month</div>
          <div class="price">$ <b>${product.price}</b></div>
      </p>
      <button>Add to cart</button>
      </div>
    </div>`;
  });

  mainProducts.innerHTML = productHTML;
  attachProductClickListeners();
}

function initProductDisplay() {
  const category = getCategoryFromURL();
  const passedCategories = category
    ? category.split(" ").map((cat) => cat.trim().toLowerCase())
    : [];

  displayProduct(passedCategories);
}

dropdown.addEventListener("change", () => {
  let selectedValue = dropdown.value.toLowerCase();
  displayProduct([selectedValue]);
});

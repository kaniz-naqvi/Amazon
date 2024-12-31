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
let username = document.querySelectorAll(".username");
let isSignIn = false;

// Run on page load
window.onload = function () {
  const productName = getProductNameFromURL();
  if (productName) {
    updateTitle(productName);
  }

  let storedUsername = localStorage.getItem("username");
  let storedEmail = localStorage.getItem("email");

  // Check if the values exist in localStorage
  if (storedUsername && storedEmail) {
    isSignIn = true;
  }
  if (isSignIn) {
    username.forEach((name) => {
      name.innerHTML = storedUsername;
    });
  }
};

// 1. Get the product name from the URL
const productName = getProductNameFromURL();

// 2. Find the product in the products array
let product = products.find((p) => p.name === productName);
const productCategories = products.filter(
  (p) => p.category === product.category
);
let primaryProduct = document.getElementById("prime-product");
let others = document.querySelector(".others");

function updatePrimeProduct() {
  primaryProduct.innerHTML = "";
  let productsInnerHTML = `
    <div class="discrption" data-product-name="${product.name}">
      <div class="img">
        <img src="images/${product.name}.jpg"  />
      </div>
      <div class="details">
        <p>
          <b>${product.name}</b>${product.details}
        </p>
        <div class="sale">${product.sales}</div>
        <hr />
        <br />
        <div class="price"><strong>Price</strong> $ <b>${product.price}</b></div>
      </div>
      <div class="cart-btn">
        <div class="date">Delivery <b>Tuesday, November 5</b></div>
        <div class="loc">
          <i class="ri-map-pin-line"></i> Deliver to Pakistan
        </div>
        <div class="stock">In Stock</div>
        <div class="quantity">
          <select name="quantity">
            <option value="" disabled selected>Quantity:1</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div class="btn">
          <button>Add to Cart</button>
          <button>Buy now</button>
        </div>
      </div>
    </div>
  `;
  primaryProduct.innerHTML = productsInnerHTML;

  let otherHTML = "";

  const otherProducts = productCategories.filter(
    (pro) => pro.name !== product.name
  );

  otherProducts.forEach((pro) => {
    otherHTML += `
      <div class="other-cate" data-product-name="${pro.name}">
        <div class="pro-name">
          <strong>${pro.name}</strong>
        </div>
        <div class="other-img">
          <img src="images/${pro.name}.jpg" alt="" />
        </div>
        <p class="price">Price: $ <b>${pro.price}</b></p>
      </div>
    `;
  });

  others.innerHTML = otherHTML;

  const otherProductElements = document.querySelectorAll(".other-cate");

  otherProductElements.forEach((item) => {
    item.addEventListener("click", () => {
      const productName = item.getAttribute("data-product-name");
      const clickedProduct = productCategories.find(
        (pro) => pro.name === productName
      );
      if (clickedProduct) {
        product = clickedProduct; // Update the product

        setTimeout(() => {
          updatePrimeProduct();
          updateTitle(productName);
        }, 1000); // 500ms delay
      }
    });
  });
}

updatePrimeProduct();
let dropdown = document.getElementById("searchDropDownBox");

dropdown.addEventListener("change", () => {
  let selectedValue = dropdown.value; // Get the selected value
  window.location.href = `product.html?category=${selectedValue}`; // Navigate to the new URL
});
let sideMenuOptions = document.querySelectorAll(".menu-content p");
sideMenuOptions.forEach((element) => {
  element.addEventListener("click", () => {
    let selectedValue = element.textContent.toLowerCase(); // or you could use data attributes to control values
    window.location.href = `./product.html?category=${selectedValue}`;
  });
});
const searchBox = document.getElementById("search-input");
searchBox.addEventListener("input", (e) => {
  updateSearchValue(e.target.value);
});
function updateSearchValue(query) {
  searchBox.value = query;

  // Redirect with query in URL
  window.location.href = `./product.html?search=${encodeURIComponent(query)}`;
}

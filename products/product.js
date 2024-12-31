function getCategoryFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("category");
}

let searchValue = document.getElementById("search-input");
let mainProducts = document.querySelector("main");

// Update product display on search input
searchValue.addEventListener("input", (e) => {
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
            <div class="produtDetails"><b>${product.name}</b>${product.details}</div>
            <div class="pastSales"><b>${product.sales} bought</b> in past month</div>
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
          <div class="produtDetails"><b>${product.name}</b>${product.details}</div>
          <div class="pastSales"><b>${product.sales} bought</b> in past month</div>
          <div class="price">$ <b>${product.price}</b></div>
      </p>
      <button>Add to cart</button>
      </div>
    </div>`;
  });

  mainProducts.innerHTML = productHTML;

  attachProductClickListeners();
}

function attachProductClickListeners() {
  let productElements = document.querySelectorAll(".products");

  productElements.forEach((pro) => {
    pro.addEventListener("click", () => {
      const productName = pro.dataset.name;
      const category = getCategoryFromURL();

      // Redirect to the product-details page with product name and category
      window.location.href = `product-details.html?name=${encodeURIComponent(
        productName
      )}`;
    });
  });
}

function initProductDisplay() {
  const category = getCategoryFromURL();
  const passedCategories = category
    ? category.split(" ").map((cat) => cat.trim().toLowerCase())
    : [];

  displayProduct(passedCategories);
}

window.onload = initProductDisplay;

let dropdown = document.getElementById("searchDropDownBox");

dropdown.addEventListener("change", () => {
  let selectedValue = dropdown.value.toLowerCase();
  displayProduct([selectedValue]);
});

function getCategoryFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("category");
}

let mainProducts = document.querySelector("main");

function displayProduct(categories = []) {
  let productHTML = ``;

  if (categories.length > 0) {
    const filteredProducts = products.filter((product) =>
      categories.includes(product.category.toLowerCase())
    );

    filteredProducts.forEach((product) => {
      productHTML += `<div class="products ${product.styleClass}" data-name="${product.name}">
        <div class="productImg">
            <img src="images/${product.name}.jpg" alt="${product.name}">
        </div>
        <div class="details">
        <p>
            <div class="produtDetails"><b>${product.name}</b>${product.details}</div>
            <div class="pastSales"><b>${product.sales} bought</b> in past month</div>
            <div class="price"><b>${product.price}</b></div>
        </p>
        <button>Add to cart</button>
        </div>
    </div>`;
    });
  } else {
    products.forEach((product) => {
      productHTML += `<div class="products ${product.styleClass}" data-name="${product.name}">
        <div class="productImg">
            <img src="images/${product.name}.jpg" alt="${product.name}">
        </div>
        <div class="details">
        <p>
            <div class="produtDetails"><b>${product.name}</b>${product.details}</div>
            <div class="pastSales"><b>${product.sales} bought</b> in past month</div>
            <div class="price"><b>${product.price}</b></div>
        </p>
        <button>Add to cart</button>
        </div>
    </div>`;
    });
  }

  mainProducts.innerHTML = productHTML;

  let productElements = document.querySelectorAll(".products");

  productElements.forEach((pro) => {
    pro.addEventListener("click", () => {
      const productName = pro.dataset.name;
      const category = getCategoryFromURL(); // Get the current category from the URL

      // Redirect to the product-details page with the product name and category
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
  let selectedValue = dropdown.value;
  displayProduct([selectedValue]);
});

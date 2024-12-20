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
submit.addEventListener('click', (event) => {
    removeStyle(); // Remove the style when submit is clicked
    event.stopPropagation(); // Prevent bubbling to the search bar click event
});

// Remove style when clicking outside the search bar
document.addEventListener('click', (event) => {
    if (!searchBar.contains(event.target)) {
        removeStyle();
    }
});

// Event listener for Enter key press
searchInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        removeStyle();
    }
});


function getCategoryFromURL() {
    const urlParams = new URLSearchParams(window.location.search); // Parse URL parameters
    return urlParams.get('category'); // Return the value of 'category' parameter if it exists
}
// Function to display products based on the selected category
products.forEach(element => {
    console.log(element.category)
});

let mainProducts = document.querySelector("main");

// Function to display products, filtered by category
function displayProduct(categories = []) {
    let productHTML = ``;

    // Check if categories is not empty
    if (categories.length > 0) {
        // Filter products based on the categories provided
        const filteredProducts = products.filter(product => 
            categories.includes(product.category.toLowerCase()) // Check if the product category matches any of the passed categories
        );

        // Generate HTML for each filtered product
        filteredProducts.forEach(product => {
            productHTML += `<div class="products ${product.styleClass}">
                <div class="productImg">
                    <img src="images/${product.name}.jpg" alt="${product.name}">
                </div>
                <div class="details">
                <p>
                    <div class="produtDetails"><b>${product.name}</b>${product.details}</div>
                    <div class="pastSales"><b>${product.sales} bought</b> in past month</div>
                    <div class="price"><sup>$</sup><b>${product.price}</b></div>
                </p>
                <button>Add to cart</button>
                </div>
            </div>`;
        });
    } else {
        // If no categories are provided, show all products
        products.forEach(product => {
            productHTML += `<div class="products ${product.styleClass}">
                <div class="productImg">
                    <img src="images/${product.name}.jpg" alt="${product.name}">
                </div>
                <div class="details">
                <p>
                    <div class="produtDetails"><b>${product.name}</b>${product.details}</div>
                    <div class="pastSales"><b>${product.sales} bought</b> in past month</div>
                    <div class="price"><sup>$</sup><b>${product.price}</b></div>
                </p>
                <button>Add to cart</button>
                </div>
            </div>`;
        });
    }

    // Update the main container with the filtered products
    mainProducts.innerHTML = productHTML;
}

// Function to initialize product display
function initProductDisplay() {
    const category = getCategoryFromURL(); // Using the previously defined getCategoryFromURL function
    
    // Convert the category string to an array
    const passedCategories = category.split(" ").map(cat => cat.trim().toLowerCase()); // Handle multiple categories

    displayProduct(passedCategories); // Display products based on categories
}

// Run the display function on page load
window.onload = initProductDisplay;

let dropdown = document.getElementById("searchDropDownBox");

dropdown.addEventListener("change", () => {
    let selectedValue = dropdown.value; // Get the selected value
    displayProduct(selectedValue) // Navigate to the new URL
});


let product=document.querySelectorAll(".products");
product.forEach(pro=>{
    pro.addEventListener("click",()=>{
    const productName = product.name; 
            window.location.href = `product-details.html?name=${encodeURIComponent(productName)}`;
})
});


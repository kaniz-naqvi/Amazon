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

// When Language gets changed, Country Flag also gets changed
const languageSelector = document.getElementById('Language');
languageSelector.addEventListener('change', changeFlag); 

function changeFlag() {
    const selectedLanguage = languageSelector.value;
    const flagDiv = document.querySelector(".flag");

    switch (selectedLanguage) {
        case 'Eng':
            flagDiv.style.backgroundImage = "url('../Flags/American-Flag.webp')"; 
            break;
        case 'Korean':
            flagDiv.style.backgroundImage = "url('../Flags/Korea.png')";
            break;
        case 'Hindi':
            flagDiv.style.backgroundImage = "url('../Flags/India.png')";
            break;
        case 'Urdu':
            flagDiv.style.backgroundImage = "url('../Flags/Pakistan.png')";
            break;
        default:
            flagDiv.style.backgroundImage = "url('../Flags/American-Flag.webp')"; 
            break;
    }
}
/*function getCategoryFromURL() {
    const urlParams = new URLSearchParams(window.location.search); // Read URL parameters
    return urlParams.get('category'); // Get the category value from the URL
}

const selectedCategory = getCategoryFromURL();
console.log(`Selected category: ${selectedCategory}`); // Log the selected category for debugging

// Function to display products based on the selected category
function displayProducts(category) {
    const products = {
        tech: ['Smartphone', 'Headphones', 'Smartwatch'],
        beauty: ['Makeup', 'Skincare', 'Fragrance'],
        // Add more products for each category
    };

    const productList = products[category] || []; // Get the product list for the selected category
    const productContainer = document.querySelector('.product-container'); // Ensure this exists in product.html

    productContainer.innerHTML = productList.map(product => `<div>${product}</div>`).join(''); // Display products
}

// Call the function to display products based on the selected category
if (selectedCategory) {
    displayProducts(selectedCategory);
}
*/
let products=[
    {
        name:"Pond's", sales:"100+", prize:"7", category:"beauty, health, self care, Pond's face wash",
        details:"Pure Detox Facial Foam Facial Wash, 1.7 Oz (Pack of 6) | Activated Charcoal | Deep Cleansing", 
    },
    {
        name:"L'Oreal Paris", sales:"10K+", prize:"13", category:"beauty, health, self care, L'Oreal Paris Makeup Match",
        details:"Makeup True Match Lumi Glotion, Natural Glow Enhancer, Illuminator Highlighter, Bronzing Drops For a Sun-Kissed Glow, 902 Light", 
    },
    {
        name:"e.l.f. Monochromatic Multi Stick", sales:"20k+", prize:"5", category:"beauty, health, self care, e.l.f. Monochromatic Multi Stick",
        details:", Luxuriously Creamy & Blendable Color, For Eyes, Lips & Cheeks, Dazzling Peony, 0.155 Oz (4.4g)", 
    },
    {
        name:"Tree Hut", sales:"10k+ bought", prize:"8", category:"beauty, health, self care, Tree Hut, Shea Sugar Scrub",
        details:"Shea Sugar Scrub Coco Colada, 18 oz, Ultra Hydrating and Exfoliating Scrub for Nourishing Essential Body Care", 
    },
    {
        name:"St.Tropez", sales:"10k+", prize:"46", category:"beauty, health, self care,St.Tropez, Self Tan Express Mousse",
        details:"Self Tan Express Mousse, Fast Acting Fake Tan, Develops in 1-3 Hours, Streak-Free Finish, Vegan, Natural & Cruelty Free, 6.7 Fl Oz", 
    },
    {
        name:"LANEIGE", sales:"5k+", prize:"25", category:"beauty, health, self care, LANEIGE, Bouncy and Firm Sleeping Mask",
        details:"Bouncy and Firm Sleeping Mask: Revitalize, Smooth, Peony & Collagen Complex, Barrier-Boosting Hydration", 
    },
    {
        name:"BAIMEI", sales:"5+", prize:"12", category:"beauty, health, self care, Jade Roller & Gua Sha, BAIMEI",
        details:"IcyMe Jade Roller & Gua Sha, Face Roller Redness Reducing Skin Care Tools, Self Care Pink Gift for Men Women, Massager for Face, Eyes, Neck, Relieve Fine Lines and Wrinkles - Rose Quartz", 
    },
];

let mainProducts=document.querySelector("main");
let productHTML=``;
products.forEach(product=>{
    productHTML+=`<div class="products">
            <div class="productImg">
                <img src="images/${product.name}.jpg" alt="${product.name}">
            </div>
            <div class="details">
                <div class="produtDetails"><b>${product.name}</b> ${product.details}</div>
                <div class="pastSales"><b>${product.sales} bought</b> in past month</div>
                <div class="prize"><sup>$</sup><b>${product.prize}</b></div>
                <button>Add to cart</button>
            </div>
        </div>`
});
mainProducts.innerHTML = productHTML;
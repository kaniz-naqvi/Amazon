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
        name:"Pond's", sales:"100+", prize:7, category:"beauty, health, self care, Pond's face wash",
        details:" Pure Detox Facial Foam Facial Wash, 1.7 Oz (Pack of 6) | Activated Charcoal | Deep Cleansing", 
    },
    {
        name:"L'Oreal Paris", sales:"10K+", prize:13, category:"beauty, health, self care, L'Oreal Paris Makeup Match",
        details:" Makeup True Match Lumi Glotion, Natural Glow Enhancer, Illuminator Highlighter, Bronzing Drops For a Sun-Kissed Glow, 902 Light", 
    },
    {
        name:"e.l.f. Monochromatic Multi Stick", sales:"20k+", prize:5, category:"beauty, health, self care, e.l.f. Monochromatic Multi Stick",
        details:", Luxuriously Creamy & Blendable Color, For Eyes, Lips & Cheeks, Dazzling Peony, 0.155 Oz (4.4g)", 
    },
    {
        name:"Tree Hut", sales:"10k+ bought", prize:8, category:"beauty, health, self care, Tree Hut, Shea Sugar Scrub",
        details:" Shea Sugar Scrub Coco Colada, 18 oz, Ultra Hydrating and Exfoliating Scrub for Nourishing Essential Body Care", 
    },
    {
        name:"St.Tropez", sales:"10k+", prize:46, category:"beauty, health, self care,St.Tropez, Self Tan Express Mousse",
        details:" Self Tan Express Mousse, Fast Acting Fake Tan, Develops in 1-3 Hours, Streak-Free Finish, Vegan, Natural & Cruelty Free, 6.7 Fl Oz", 
    },
    {
        name:"LANEIGE", sales:"5k+", prize:25, category:"beauty, health, self care, LANEIGE, Bouncy and Firm Sleeping Mask",
        details:" Bouncy and Firm Sleeping Mask: Revitalize, Smooth, Peony & Collagen Complex, Barrier-Boosting Hydration", 
    },
    {
        name:"BAIMEI", sales:"5k+", prize:12, category:"beauty, self care, Jade Roller & Gua Sha, BAIMEI",
        details:" IcyMe Jade Roller & Gua Sha, Face Roller Redness Reducing Skin Care Tools, Self Care Pink Gift for Men Women, Massager for Face, Eyes, Neck, Relieve Fine Lines and Wrinkles - Rose Quartz", 
    },
    {
        name:"FHI Heat UNbrush Detangling Brush", sales:"2k+", prize:18, category:"beauty, self care, FHI Heat UNbrush Detangling Brush",
        details:" for Pain-Free Brushing on All Wet or Dry Hair Types — Durable DuoFlex Anti-Static Bristles, Lightweight Handle, Vented Hair Brush", 
    },
    {
        name:"Fisher-Price Baby", sales:"4k+", prize:10, category:"toys, toy, Babies, kids",
        details:" Learning Toy Link Squad Jam & Count Panda with Music & Lights for Ages 9+ Months, Compatible Only with Link Squad Items", 
    },
    {
        name:"Barbie Dream Closet Playset", sales:"1k+", prize:29, category:"toys, toy, Babies, kids",
        details:" with 35+ Doll Clothes & Accessories, Includes 5 Complete Looks, Pop-Up Second Level, Mirror & Laundry Chute", 
    },
    {
        name:"Baby Einstein", sales:"10k+", prize:33, category:"toys, toy, Babies, kids",
        details:" Sea Dreams Soother Musical Crib Toy and Sound Machine, Newborn and up", 
    },
    {
        name:"Hasbro Gaming", sales:"9k+", prize:16, category:"toys, toy, Babies, kids",
        details:" Jenga Wooden Blocks Stacking Tumbling Tower, Kids Game Ages 6 and Up (Amazon Exclusive)", 
    },
    {
        name:"Kids Toys", sales:"20k+", prize:19, category:"toys, toy, Babies, kids",
        details:" 253 PCS Construction Race Tracks Toy for 3 4 5 6 7 8 Year Old Boys Girls, 5 PCS Construction Truck Car and Flexible Track Play Set Create A Engineering Road Games Toddler Toys Birthday Gifts", 
    },
    {
        name:"Talking Flash Cards", sales:"8k+", prize:8, category:"toys, toy, Babies, kids",
        details:" for Toddler 1 2 3 4 Year Olds, Language Learning Toys, Pocket Speech Therapy Toys, Autism Toys,  Children's Sensory Learning Educational Toys", 
    },
    {
        name:"Sophie la girafe", sales:"6k+", prize:25, category:"toys, toy, Babies, kids",
        details:" | Handcrafted for 60 Years in France | Natural Rubber | Designed for Teething Babies | Awaken All 5 Senses | Easy to Clean | Pack of 1", 
    },
    {
        name:"Disney Store Official", sales:"6k+", prize:32, category:"toys, toy, Babies, kids",
        details:" Sheriff Woody Talking Action Figure from Toy Story, Features Sounds and Phrases from The Movies, Interacts with Other Figures and Toys", 
    },


    {
        name:"Apple Watch Series 9", sales:"7k+", prize:100, category:"tech, wacthes, wireless tech",
        details:" [GPS 45mm] Smartwatch with Starlight Aluminum Case with Starlight Sport Band M/L. Fitness Tracker, ECG Apps, Always-On Retina Display, Water Resistant", 
    },
    {
        name:"SOAR NCAA Airpods", sales:"8k+", prize:9, category:"tech, wacthes, wireless tech",
        details:" – Wireless Bluetooth Earbuds with Team Logo, Premium Sound, Long Battery Life, and Touch Controls – Perfect for Sports Fans and Music Lovers", 
    },
    {
        name:"J-Tech Digital", sales:"1k+", prize:25, category:"tech, wacthes, wireless tech",
        details:" V638R Ergonomic Wired Mouse, 4 DPI Settings, RGB LED Variations, Magnetic Removable Palm Rest, 6 Button Functions, 1 Year Manufacturer Replacement Warranty", 
    },
    {
        name:"SAMSUNG Galaxy S24 Ultra", sales:"500+", prize:29, category:"tech, wacthes, wireless tech",
        details:" Cell Phone, 256GB AI Smartphone, Unlocked Android, 200MP, 100x Zoom Cameras, Long Battery Life, S Pen, US Version, 2024, Titanium Blackw/Built-in Microphone, 30H of Playback Time", 
    },
    {
        name:"Wyze Cam OG", sales:"10k+", prize:19, category:"tech, wacthes, wireless tech",
        details:" Indoor/Outdoor 1080p Wi-Fi Smart Home Security Camera with Color Night Vision, Built-in Spotlight, Motion Detection, 2-Way Audio, Compatible with Alexa & Google Assistant, White", 
    },
    {
        name:"SAMSUNG Galaxy SmartTag2,", sales:"6k+", prize:32, category:"tech, wacthes, wireless tech",
        details:" Sheriff Woody Talking Action Figure from Toy Story, Features Sounds and Phrases from The Movies, Interacts with Other Figures and Toys", 
    },
    {
        name:"Snap Circuits", sales:"1k+", prize:22, category:"tech, wacthes, wireless tech",
        details:" Teach Tech Mech 5, Mechanical Coding Robot", 
    },
    {
        name:"STREBITO Electronics Precision", sales:"4k+", prize:28, category:"tech, wacthes, wireless tech",
        details:" Screwdriver Sets 142-Piece with 120 Bits Magnetic Repair Tool Kit for iPhone, MacBook, Computer, Laptop, PC, Tablet", 
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
            <p>
                <div class="produtDetails"><b>${product.name}</b>${product.details}</div>
                <div class="pastSales"><b>${product.sales} bought</b> in past month</div>
                <div class="prize"><sup>$</sup><b>${product.prize}</b></div>
            </p>
            <button>Add to cart</button>
            </div>
        </div>`
});
mainProducts.innerHTML = productHTML;
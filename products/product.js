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
        name:"Pond's", sales:"100+", price:7, category:"beauty", styleClass:"verticalDiv",
        details:" Pure Detox Facial Foam Facial Wash, 1.7 Oz (Pack of 6) | Activated Charcoal | Deep Cleansing", 
    },
    {
        name:"L'Oreal Paris", sales:"10K+", price:13, category:"beauty", styleClass:"verticalDiv",
        details:" Makeup True Match Lumi Glotion, Natural Glow Enhancer, Illuminator Highlighter, Bronzing Drops For a Sun-Kissed Glow, 902 Light", 
    },
    {
        name:"e.l.f. Monochromatic Multi Stick", sales:"20k+", price:5, category:"beauty", styleClass:"verticalDiv",
        details:", Luxuriously Creamy & Blendable Color, For Eyes, Lips & Cheeks, Dazzling Peony, 0.155 Oz (4.4g)", 
    },
    {
        name:"Tree Hut", sales:"10k+ bought", price:8, category:"beauty", styleClass:"verticalDiv",
        details:" Shea Sugar Scrub Coco Colada, 18 oz, Ultra Hydrating and Exfoliating Scrub for Nourishing Essential Body Care", 
    },
    {
        name:"St.Tropez", sales:"10k+", price:46, category:"beauty", styleClass:"verticalDiv",
        details:" Self Tan Express Mousse, Fast Acting Fake Tan, Develops in 1-3 Hours, Streak-Free Finish, Vegan, Natural & Cruelty Free, 6.7 Fl Oz", 
    },
    {
        name:"LANEIGE", sales:"5k+", price:25, category:"beauty", styleClass:"verticalDiv",
        details:" Bouncy and Firm Sleeping Mask: Revitalize, Smooth, Peony & Collagen Complex, Barrier-Boosting Hydration", 
    },
    {
        name:"BAIMEI", sales:"5k+", price:12, category:"beauty", styleClass:"verticalDiv",
        details:" IcyMe Jade Roller & Gua Sha, Face Roller Redness Reducing Skin Care Tools, Self Care Pink Gift for Men Women, Massager for Face, Eyes, Neck, Rose Quartz", 
    },
    {
        name:"FHI Heat UNbrush Detangling Brush", sales:"2k+", price:18, category:"beauty", styleClass:"verticalDiv", 
        details:" for Pain-Free Brushing on All Wet or Dry Hair Types — Durable DuoFlex Anti-Static Bristles, Lightweight Handle, Vented Hair Brush", 
    },
    {
        name:"Fisher-Price Baby", sales:"4k+", price:10, category:"toys", styleClass:"verticalDiv",
        details:" Learning Toy Link Squad Jam & Count Panda with Music & Lights for Ages 9+ Months, Compatible Only with Link Squad Items", 
    },
    {
        name:"Barbie Dream Closet Playset", sales:"1k+", price:29, category:"toys", styleClass:"verticalDiv",
        details:" with 35+ Doll Clothes & Accessories, Includes 5 Complete Looks, Pop-Up Second Level, Mirror & Laundry Chute", 
    },
    {
        name:"Baby Einstein", sales:"10k+", price:33, category:"toys", styleClass:"verticalDiv",
        details:" Sea Dreams Soother Musical Crib Toy and Sound Machine, Newborn and up", 
    },
    {
        name:"Hasbro Gaming", sales:"9k+", price:16, category:"toys", styleClass:"verticalDiv",
        details:" Jenga Wooden Blocks Stacking Tumbling Tower, Kids Game Ages 6 and Up (Amazon Exclusive)", 
    },
    {
        name:"Kids Toys", sales:"20k+", price:19, category:"toys", styleClass:"verticalDiv",
        details:" 253 PCS Construction Race Tracks Toy for Boys Girls, Flexible Track Play Set Create A Engineering Road Games Toddler Toys Birthday Gifts", 
    },
    {
        name:"Talking Flash Cards", sales:"8k+", price:8, category:"toys", styleClass:"verticalDiv",
        details:" for Toddler 1 2 3 4 Year Olds, Language Learning Toys, Pocket Speech Therapy Toys, Children's Sensory Learning Educational Toys", 
    },
    {
        name:"Sophie la girafe", sales:"6k+", price:25, category:"toys", styleClass:"verticalDiv",
        details:" | Handcrafted for 60 Years in France | Natural Rubber | Designed for Teething Babies | Awaken All 5 Senses | Easy to Clean | Pack of 1", 
    },
    {
        name:"Disney Store Official", sales:"6k+", price:32, category:"toys", styleClass:"verticalDiv",
        details:" Sheriff Woody Talking Action Figure from Toy Story, Features Sounds and Phrases from The Movies, Interacts with Other Figures and Toys", 
    },


    {
        name:"Apple Watch Series 9", sales:"7k+", price:100, category:"tech", styleClass:"verticalDiv",
        details:" [GPS 45mm] Smartwatch with Starlight Aluminum Case with Starlight Sport Band M/L. Always-On Retina Display, Water Resistant", 
    },
    {
        name:"SOAR NCAA Airpods", sales:"8k+", price:9, category:"tech", styleClass:"verticalDiv",
        details:" – Wireless Bluetooth Earbuds with Team Logo, Premium Sound, Long Battery Life, and Touch Controls – Perfect for Sports Fans and Music Lovers", 
    },
    {
        name:"J-Tech Digital", sales:"1k+", price:25, category:"tech", styleClass:"verticalDiv",
        details:" V638R Ergonomic Wired Mouse, 4 DPI Settings, 6 Button Functions, 1 Year Manufacturer Replacement Warranty", 
    },
    {
        name:"SAMSUNG Galaxy S24 Ultra", sales:"500+", price:29, category:"tech", styleClass:"verticalDiv",
        details:" Cell Phone, 256GB AI Smartphone, 100x Zoom Cameras, Long Battery Life, S Pen, US Version, 2024, Titanium Blackw/Built-in Microphone", 
    },
    {
        name:"Wyze Cam OG", sales:"10k+", price:19, category:"tech", styleClass:"verticalDiv",
        details:" Indoor/Outdoor 1080p Wi-Fi Smart Home Security Camera with Color Night Vision, Compatible with Alexa & Google Assistant, White", 
    },
    {
        name:"SAMSUNG Galaxy SmartTag2,", sales:"6k+", price:32, category:"tech", styleClass:"verticalDiv",
        details:" Sheriff Woody Talking Action Figure from Toy Story, Features Sounds and Phrases from The Movies, Interacts with Other Figures and Toys", 
    },
    {
        name:"Snap Circuits", sales:"1k+", price:22, category:"tech", styleClass:"verticalDiv",
        details:" Teach Tech Mech 5, Mechanical Coding Robot", 
    },
    {
        name:"STREBITO Electronics Precision", sales:"4k+", price:28, category:"tech", styleClass:"verticalDiv",
        details:" Screwdriver Sets 142-Piece with 120 Bits Magnetic Repair Tool Kit for iPhone, MacBook, Computer, Laptop, PC, Tablet", 
    },
    {
        name:"JoyJolt JoyFul", sales:"10k+", price:42, category:"kitchen", styleClass:"horizontalDiv",
        details:" Food Storage Containers and 12 Lids), Pantry Kitchen Storage Containers, Glass Meal Prep Container for Lunch, Glass Storage Containers with Lids", 
    },
    {
        name:"Table Kitchen Essentials", sales:"300+", price:40, category:"kitchen", styleClass:"horizontalDiv",
        details:" Nonstick Interior Forged Aluminum Cookware Pots and Pans Set - Linen White - Induction Compatible", 
    },
    {
        name:"Electric Sandwich Maker", sales:"7k+", price:13, category:"kitchen", styleClass:"horizontalDiv",
        details:" with Non-Stick Plates, Indicator Lights, Cool Touch Handle, Easy to Clean and Store, Perfect for Cooking Breakfast, Grilled Cheese", 
    },
    {
        name:"Electric Salt and Pepper Grinder", sales:"50+", price:29, category:"kitchen", styleClass:"horizontalDiv",
        details:" Set USB Rechargeable with LED Light and Base, Stainless Steel Automatic Salt Pepper Mill Grinder, One Handed Operation, Kitchen", 
    },
    {
        name:"Piece Bedding Collection", sales:"500+", price:26, category:"bedding", styleClass:"horizontalDiv",
        details:" 1 Comforter, 1 Fitted Sheet, 1 Flat, 4 Pillowcases - Deep Pocket - Soft & Breathable Premium Quality - Ideal for All Seasons, Gray", 
    },
    {
        name:"White Comforter", sales:"1k+", price:19, category:"bedding", styleClass:"horizontalDiv",
        details:", Boho Tufted Shabby Chic Bedding Comforter Set, 3 Pieces Vintage Farmhouse Bed Set for All Seasons, Fluffy Soft Bedding Set with 2 Pillow Shams", 
    },
    {
        name:"Queen Blanket", sales:"500+", price:50, category:"bedding", styleClass:"horizontalDiv",
        details:" , Super Soft Plush Bedding, Luxury Bed Blanket (Core Plush Aluminum Grey, Queen)", 
    },
    {
        name:"Comfort Spaces", sales:"5k+", price:39, category:"bedding", styleClass:"horizontalDiv",
        details:" Vixie Reversible Comforter Set -All Season Down Alternative Cozy Bedding, Matching Sham, Aqua/Gray, Twin/Twin XL 2 piece", 
    },
    {
        name:"T-Shirt", sales:"3k+", price:9, category:"apparels", styleClass:"horizontalDiv",
        details:"  Hanes mens Ultimate Crewneck", 
    },
    {
        name:"Hoodie for Men and Women", sales:"1k+", price:7, category:"apparels", styleClass:"horizontalDiv",
        details:"  - Officially Licensed NFL Apparel| Team Helmet", 
    },
    {
        name:"Sweatshirt", sales:"500+", price:11, category:"apparels", styleClass:"horizontalDiv",
        details:" , Fleece Pullover Sweatshirt For Women | Hanes Womens Ecosmart V-Notch Crewneck", 
    },
    {
        name:"Long Sleeve", sales:"1k+", price:30, category:"apparels", styleClass:"horizontalDiv",
        details:" Columbia Women's Bahama", 
    },
    {
        name:"Men's Cotton Linen", sales:"4k+", price:23, category:"fashion", styleClass:"horizontalDiv",
        details:" Henley Shirt Long Sleeve Hippie Casual Beach T Shirts", 
    },
    {
        name:"Womens Ultra Lux Comfort", sales:"2k+", price:28, category:"fashion", styleClass:"horizontalDiv",
        details:" with Flex Motion Trouser Pant", 
    },
    {
        name:"Chain Bracelet", sales:"500+", price:65, category:"fashion", styleClass:"horizontalDiv",
        details:" for Apple Watch, Secure, Adjustable, Apple Watch Replacement Band, Fits Most Wrists", 
    },
    {
        name:"Legendary Whitetails Womens", sales:"200+", price:29, category:"fashion", styleClass:"horizontalDiv",
        details:" Cottage Escape Flannel Long Sleeve Plaid and Solid Color Clothes, Fitted Button Down", 
    },
    {
        name:"Apple Watch Series 9", sales:"300+", price:30, category:"watches", styleClass:"horizontalDiv",
        details:" Smartwatch with Starlight Aluminum Case with Starlight Sport Band S/M. Fitness & Sleep Tracker, Heart Rate Monitor", 
    },
    {
        name:"Boy watch", sales:"700+", price:29, category:"watches", styleClass:"horizontalDiv",
        details:" | Timex Unisex Weekender 38mm Watch", 
    },
    {
        name:"Smart Watch", sales:"500+", price:28, category:"watches", styleClass:"horizontalDiv",
        details:" for Men Women - 1.85''HD Screen with Make and Answer Calls, with AI Voice Assistant, SpO2/Heart Rate/Sleep Monitor, Smartwatch for Android & IOS", 
    },
    {
        name:"Men's Forester Sport Watch", sales:"200+", price:20, category:"watches", styleClass:"horizontalDiv",
        details:" with Nylon Band | Casio FT500WC-5BVCF", 
    },        
    {
        name:"Half Gallon Water Bottle", sales:"2k+", price:25, category:"sports", styleClass:"horizontalDiv",
        details:" Insulated, 64oz Insulated Water Bottle with Handle, Sports Water Jug, Fence Hook, Leak Resistant, for Baseball, Football & More", 
    },
    {
        name:"Bicycle Saddle Bag", sales:"1k+", price:22, category:"sports", styleClass:"horizontalDiv",
        details:" Under Seat 3D Shell Cycling Seat Pack for Mountain Road Bikes Black", 
    },
    {
        name:"Taylormade", sales:"2k+", price:34, category:"sports", styleClass:"horizontalDiv",
        details:" Tour Response Golf Balls", 
    },
    {
        name:"Supportive Running Shoe", sales:"200+", price:29, category:"sports", styleClass:"horizontalDiv",
        details:" | Brooks Men’s Adrenaline GTS 23", 
    }, 
    {
        name:"8 Set Packing Cubes Luggage", sales:"10k+", price:28, category:"travel", styleClass:"horizontalDiv",
        details:" Packing Organizers for Travel Accessories-Cream", 
    },
    {
        name:"Bag Backpack", sales:"500+", price:40, category:"travel", styleClass:"horizontalDiv",
        details:" | HOTBEST Diaper Bag Backpack, Pink, Large", 
    },
    {
        name:"Carry On Luggage", sales:"700+", price:29, category:"travel", styleClass:"horizontalDiv",
        details:" 22 Inch, 22x14x9 Airline Approved, Carry On Suitcase with Wheels, Hard-shell Carry-on Luggage, Pink Small Suitcase, Hardside Luggage Carry On with Cosmetic Carry On Bag", 
    },
    {
        name:"Lightweight Softside Suitcase", sales:"500+", price:39, category:"travel", styleClass:"horizontalDiv",
        details:", Rolling 20 Carry On Luggage, Purple, Single", 
    },
    {
        name:"Greenco Corner Shelf", sales:"1k+", price:24, category:"decore", styleClass:"horizontalDiv",
        details:", Easy-to-Assemble Floating Wall Mount Shelves for Offices, Bedrooms, Bathrooms, Kitchens, Living Rooms and Dorm Rooms", 
    },
    {
        name:"White Ceramic Vase", sales:"4k+", price:20, category:"decore", styleClass:"horizontalDiv",
        details:",  Hollow Round Matte Pampas Flower Vases for Boho Home Wedding Party Room Dinner Table Shelf Decor (2pcs)", 
    },
    {
        name:"Kate Aspen White Vintage", sales:"2k+", price:12, category:"decore", styleClass:"horizontalDiv",
        details:", Easy-to-Assemble Floating Wall Mount Shelves for Offices, Bedrooms, Bathrooms, Kitchens, Living Rooms and Dorm Rooms", 
    },
    {
        name:"Faux Flower Swag", sales:"500+", price:17, category:"decore", styleClass:"horizontalDiv",
        details:" Set of 2 for Wedding Welcome Signs Floral Swag Wedding Reception Ceremony Signs Decor (White)", 
    },
    {
        name:"The 48 Laws of Power", sales:"500+", price:14, category:"books", styleClass:"horizontalDiv",
        details:` <br/>
        "Never take your position for granted and never let any favors you receive go to your head."<b> (Highlighted by 29,023 Kindle readers)</b> `, 
    },
    {
        name:"Atomic Habits", sales:"1k+", price:13, category:"books", styleClass:"horizontalDiv",
        details:": An Easy & Proven Way to Build Good Habits & Break Bad Ones", 
    },
    {
        name:"Mindset", sales:"2k+", price:18, category:"books", styleClass:"horizontalDiv",
        details:" Updated Edition: Changing The Way You think To Fulfil Your Potential", 
    },
    {
        name:"7 hobbit of highly effective people", sales:"5k", price:11, category:"books", styleClass:"horizontalDiv",
        details:" -Habit Tracker: (Life goals, Daily habits journal, Goal setting) ", 
    },
    {
        name:"The Power of Discipline", sales:"1k+", price:17, category:"books", styleClass:"horizontalDiv",
        details:" : How to Use Self Control and Mental Toughness to Achieve Your Goals", 
    },
    {
        name:"The Psychology of Money", sales:"3k+", price:10, category:"books", styleClass:"horizontalDiv",
        details:`: "There is no reason to risk what you have and need for what you don't have and don't need."<b>(Highlighted by 35,838 Kindle readers)</b>`, 
    },
    {
        name:"Stop Bad Overthinking", sales:"500+", price:16, category:"books", styleClass:"horizontalDiv",
        details:" Learn the Secrets to Small Talk, Business, Management, Sales & Social Conversations & How to Make Real Friends (Communication Skills)", 
    },
    {
        name:"The Mountain Is You", sales:"700+", price:17, category:"books", styleClass:"horizontalDiv",
        details:": Transforming Self-Sabotage into Self-Mastery", 
    },

];

let mainProducts=document.querySelector("main");
let productsCategories="";
function displayProduct(){
let productHTML=``;
products.forEach(product=>{
    productHTML+=`<div class="products ${product.styleClass}">
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
mainProducts.innerHTML = productHTML;
}
displayProduct();
let product=document.querySelectorAll(".products");
product.forEach(pro=>{
    pro.addEventListener("click",()=>{
    const productName = product.name; 
            window.location.href = `product-details.html?name=${encodeURIComponent(productName)}`;
})
});


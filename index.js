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
            flagDiv.style.backgroundImage = "url('Flags/American-Flag.webp')"; 
            break;
        case 'Korean':
            flagDiv.style.backgroundImage = "url('Flags/Korea.png')";
            break;
        case 'Hindi':
            flagDiv.style.backgroundImage = "url('Flags/India.png')";
            break;
        case 'Urdu':
            flagDiv.style.backgroundImage = "url('Flags/Pakistan.png')";
            break;
        default:
            flagDiv.style.backgroundImage = "url('Flags/American-Flag.webp')"; 
            break;
    }
}

// Infinite loop of main background images
const desktopImages = [
    'url(images/Beauty.jpg)',
    'url(images/Books.jpg)',
    'url(images/game.jpg)',
    'url(images/Kitchen.jpg)',
    'url(images/Toys.jpg)'
];
const mobileImages = [
    'url(images/mobile-beauty.jpg)',
    'url(images/mobile-game.jpg)',
    'url(images/mobile-home.jpg)',
    'url(images/mobile-toys.jpg)',
    'url(images/mobile-kitchen.jpg)'
];

let index = 0;
let mainImg = document.querySelector("#main");

// Function to change the background based on device type
function changeBackground() {
    // Check if the device is mobile
    const isMobile = window.matchMedia("(max-width: 800px)").matches; // Adjust the width as per your needs
    const images = isMobile ? mobileImages : desktopImages; // Choose images based on device type
    mainImg.style.backgroundImage = images[index];
    index = (index + 1) % images.length;
}

// Set interval to change background
setInterval(changeBackground, 4000);
//adding event listener on arrows
const rightArrow=document.querySelector(".rightArrow");
const leftArrow=document.querySelector(".leftArrow");

rightArrow.addEventListener("click", () => {
    index = (index + 1) % desktopImages.length; 
    mainImg.style.backgroundImage = desktopImages[index];
    console.log(index);
});

leftArrow.addEventListener("click", () => {
    index = (index - 1 + desktopImages.length) % desktopImages.length; 
    mainImg.style.backgroundImage = desktopImages[index];
    console.log(index);
});

let categories= [
    {
        name:"kitchen, coffe, kattle", value:"Kitchen & Home",
        mainImg:"kitchen-main.jpg", mainImgName:"Cooker", mainHeading:"Top categories in Kitchen appliances",
        otherImg1:"Coffee.jpg", otherImg2:"Kattle.jpg", otherImg1Name:"Coffee", otherImg2Name:"Kattles" 
    },
    {
        name:"bedding, home storage, home decor", value:"Home & Bedding",
        mainImg:"home-main.jpg", mainImgName:"Bedding", mainHeading:"Shop for your home essentials",
        otherImg1:"home-storage.jpg", otherImg2:"home-decor.jpg", otherImg1Name:"Home Storage", otherImg2Name:"Home Decor"  
    },
    {
        name:"men's vest jacket, sock, under Armour socks", value:"Fashoin & clothing",
        mainImg:"Under Armour Socks.jpg", mainImgName:"Under Armour Socks", mainHeading:"Products in Apparel internationally",
        otherImg1:"Cotton Blend Sock.jpg", otherImg2:"Men's Vest Jacket.jpg", otherImg1Name:"Sock 3 Pack", otherImg2Name:"Men's Vest Jacket"  
    },
    {
        name:"gaming pcs, xbox consoles, Gaming headsets", value:"tech & gamming",
        mainImg:"main-game.jpg", mainImgName:"Gaming PCs", mainHeading:"Get your game on",
        otherImg1:"Xbox Consoles.jpg", otherImg2:"Gaming Headsets.jpg", otherImg1Name:"Xbox Consoles", otherImg2Name:"GamingHeadsets"  
    },
    {
        name:"mini puff, beauty steals, lip sleeping mask, tinted lip Oil", value:"Makeup & beauty",
        mainImg:"Lip Sleeping Mask.jpg", mainImgName:"Lip Sleeping Mask", mainHeading:"Beauty steals",
        otherImg1:"Tinted Lip Oil.jpg", otherImg2:"Mini Puff.jpg", otherImg1Name:"Tinted Lip Oil", otherImg2Name:"Mini Puff"  
    },
    {
        name:"health and beauty, dining, refresh your space, home ", value:"Home & Decor",
        mainImg:"Home.jpg", mainImgName:"Home", mainHeading:"Refresh your space",
        otherImg1:"Health and Beauty.jpg", otherImg2:"Dining.jpg", otherImg1Name:"Health & Beauty", otherImg2Name:"Dining"  
    },
    {
        name:"men's sneaker, pantes, ladies shoes", value:"Fashion & Shoes",
        mainImg:"fashion-main.jpg", mainImgName:"Men's Sneaker", mainHeading:"Shop deals in Fashion ",
        otherImg1:"shoes.jpg", otherImg2:"pantes.jpg", otherImg1Name:"Ladies shoes", otherImg2Name:"Pantes"  
    },
    {
        name:"Fisher-Price Toddler Toy, Pantes, Ladies shoes", value:"Toys",
        mainImg:"Fisher-Price Toddler Toy.jpg", mainImgName:"Fisher-Price Toddler Toy ", mainHeading:"Toys",
        otherImg1:"toys.jpg", otherImg2:"LeapTop Touch.jpg", otherImg1Name:"Toys", otherImg2Name:"LeapTop Touch"  
    },
];
function displayImagesOf1stCategory(categories){
    let categoriesDiv1 = document.querySelector(".cet1");
    let categoryHTML = '';
    categories.forEach(category => {
        categoryHTML += `<div class="categories" data-value="${category.value}">
            <div class="h2">
                <h2>${category.mainHeading}</h2>
            </div>
            <div class="main-img">
                <img src="categories/${category.mainImg}" alt="${category.mainImgName}">
                <span>${category.mainImgName}</span>
            </div>
            <div class="other-imgs">
                <div class="img1">
                    <img src="categories/${category.otherImg1}" alt="${category.otherImg1Name}">
                    <span>${category.otherImg1Name}</span>
                </div>
                <div class="img2">
                    <img src="categories/${category.otherImg2}" alt="${category.otherImg2Name}">
                    <span>${category.otherImg2Name}</span>
                </div>
            </div>
            <div class="see-more">
                <a href="#">See more</a>
            </div>
        </div>`;
    });
    categoriesDiv1.innerHTML = categoryHTML;
}

// calling the function of display images
displayImagesOf1stCategory(categories);

//categories3 divs
let categories3=[
    {
        mainHeading:"Wireless Tech", name:"Smartphones,Wireless Tech,Watches, Tablets, Headphones", value:"tech",
        div1stImg1:"Smartphones", div1stImg2:"Watches",
        div2ndImg1:"Headphones", div2ndImg2:"Tablets", 
    },
    {
        mainHeading:"Level up your beauty routine", name:"beauty routine, Level up, Mirrors, Brushes", value:"Beauty & Makeup",
        div1stImg1:"MakeUp", div1stImg2:"Sponges",
        div2ndImg1:"Mirrors", div2ndImg2:"Brushes", 
    },
    {
        mainHeading:"Fantastic Finds for Home",name:"Fantastic Finds for Home, Kitchen, Plates, Smart Home", value:"Home & Kitchen",
        div1stImg1:"Kitchen", div1stImg2:"Home Decor",
        div2ndImg1:"Plates", div2ndImg2:"Smart Home", 
    },
    {
        mainHeading:"Most-loved travel essentials", name:"Most-loved travel essentials, Backpacks, Suitcases, Accessories, Handbags", value:"Bags",
        div1stImg1:"Backpacks", div1stImg2:"Suitcases",
        div2ndImg1:"Accessories", div2ndImg2:"Handbags", 
    },
    {
        mainHeading:"Score the top PCs & Accessories", name:"Score the top PCs & Accessories, Desktops, Laptops, Hard Drives", value:"tech",
        div1stImg1:"Desktops", div1stImg2:"Laptops",
        div2ndImg1:"Hard Drives", div2ndImg2:"PC Accessories", 
    },
    {
        mainHeading:"Most-loved watches",name:"Most-loved watches, Men, Boys, Girls, Women, Ladies", value:"Fashion",
        div1stImg1:"Women Watches", div1stImg2:"Men Watches",
        div2ndImg1:"Boy Watches", div2ndImg2:"Girls Watches", 
    },
    {
        mainHeading:"Explore more in Sports",name:"Sports, Cycling, Exercise & Fitness, Golf", value:"sports",
        div1stImg1:"Cycling", div1stImg2:"Running",
        div2ndImg1:"Exercise & Fitness", div2ndImg2:"Golf", 
    },
    {
        mainHeading:"New home arrivals",name:"New home arrivals, Kitchen & Dining, Improvement, Decor, Bedding & Bath", value:"Home ",
        div1stImg1:"Kitchen & Dining", div1stImg2:"Bedding & Bath",
        div2ndImg1:"Home Improvement", div2ndImg2:"Decor", 
    },
];

let categoriesDiv2=document.querySelector(".cet3");
function displayImagesOf2ndtCategory(categories3){
    let categoriesDiv2 = document.querySelector(".cet3");
    let categoryHTML = '';
    categories3.forEach(category => {
        categoryHTML += `<div class="categories3" data-value="${category.value}">
            <div class="h2">
                <h2>${category.mainHeading}</h2>
            </div>
            <div class="img-div">
                <div class="img">
                    <img src="categories/${category.div1stImg1}.jpg" alt="${category.div1stImg1}">
                    <span>${category.div1stImg1}</span>
                </div>
                <div class="img">
                    <img src="categories/${category.div1stImg2}.jpg" alt="${category.div1stImg2}">
                    <span>${category.div1stImg2}</span>
                </div>
            </div>
            <div class="img-div">
                <div class="img">
                    <img src="categories/${category.div2ndImg1}.jpg" alt="${category.div2ndImg1}">
                    <span>${category.div2ndImg1}</span>
                </div>
                <div class="img">
                    <img src="categories/${category.div2ndImg2}.jpg" alt="${category.div2ndImg2}">
                    <span>${category.div2ndImg2}</span>
                </div>
            </div>
            <div class="see-more">
                <a href="#">See more</a>
            </div>
        </div>`;
    });
    categoriesDiv2.innerHTML = categoryHTML;
}

displayImagesOf2ndtCategory(categories3);

let productsCategories = document.querySelectorAll(".categories, .categories3");

// Add click event listener to .categories elements
productsCategories.forEach((product) => {
    product.addEventListener("click", () => {
        let value = product.getAttribute("data-value");
        window.location.href = `products/product.html?category=${value}`;
    });
});



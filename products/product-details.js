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
            flagDiv.style.backgroundImage = "url('../Flags//American-Flag.webp')"; 
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
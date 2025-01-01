// Array of countries with relevant information such as name, shortName, currency symbol, and currency name
const countries = [
  { name: "US", shortName: "US", currencySymbol: "$", currencyName: "USD" },
  { name: "한국", shortName: "KR", currencySymbol: "₩", currencyName: "KRW" },
  { name: "भारत", shortName: "IN", currencySymbol: "₹", currencyName: "INR" },
  {
    name: "پاکستان",
    shortName: "PK",
    currencySymbol: "₨",
    currencyName: "PKR",
  },
  { name: "中国", shortName: "CN", currencySymbol: "¥", currencyName: "CNY" },
  { name: "Россия", shortName: "RU", currencySymbol: "₽", currencyName: "RUB" },
  { name: "日本", shortName: "JP", currencySymbol: "¥", currencyName: "JPY" },
  { name: "UK", shortName: "GB", currencySymbol: "£", currencyName: "GBP" },
  { name: "España", shortName: "ES", currencySymbol: "€", currencyName: "EUR" },
  { name: "Italia", shortName: "IT", currencySymbol: "€", currencyName: "EUR" },
  { name: "México", shortName: "MX", currencySymbol: "$", currencyName: "MXN" },
  {
    name: "Brasil",
    shortName: "BR",
    currencySymbol: "R$",
    currencyName: "BRL",
  },
  { name: "Canada", shortName: "CA", currencySymbol: "$", currencyName: "CAD" },
  { name: "مصر", shortName: "EG", currencySymbol: "ج.م", currencyName: "EGP" },
  {
    name: "ประเทศไทย",
    shortName: "TH",
    currencySymbol: "฿",
    currencyName: "THB",
  },
  { name: "سعودية", shortName: "SA", currencySymbol: "﷼", currencyName: "SAR" },
];

// Select the language dropdown and elements for displaying country locations
const selectElement = document.getElementById("Language");
const locationElements = document.querySelectorAll(".location-country");

// Function to populate the language selector dropdown
function populateLanguageSelector() {
  // Load previously selected country data from localStorage or use default values
  const savedCountryData = JSON.parse(
    localStorage.getItem("selectedCountryData")
  ) || {
    currencyName: "USD",
    flagUrl: "https://flagsapi.com/US/flat/64.png",
    name: "US",
  };

  // Add all countries as options in the dropdown
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.currencyName; // Set the value to currency name
    option.textContent = country.name; // Display country name
    selectElement.appendChild(option);
  });

  // Set the default or previously saved country in the dropdown
  const defaultCountry = countries.find(
    (country) => country.currencyName === savedCountryData.currencyName
  );
  if (defaultCountry) {
    selectElement.value = defaultCountry.currencyName; // Set selected value
    changingFlags(savedCountryData.flagUrl); // Update the flag display
    updateLocations(savedCountryData.name); // Update location display
  }
}

// Function to update the flag based on the selected country
let flag = document.querySelector(".flag img");
function changingFlags(flagUrl) {
  flag.setAttribute("src", flagUrl); // Set the image source to the provided URL
}

// Function to update displayed location elements with the selected country name
function updateLocations(countryName) {
  locationElements.forEach((element) => {
    element.textContent = countryName; // Update text content of each element
  });
}

// Event listener for dropdown change to update flag and locations
selectElement.addEventListener("change", (event) => {
  const selectedCountry = event.target.value; // Get selected currency name
  const country = countries.find(
    (country) => country.currencyName === selectedCountry
  );

  if (country) {
    const flagUrl = `https://flagsapi.com/${country.shortName}/flat/64.png`; // Construct flag URL
    const selectedCountryData = {
      currencyName: selectedCountry,
      flagUrl: flagUrl,
      name: country.name,
    };

    // Save selected country data to localStorage
    localStorage.setItem(
      "selectedCountryData",
      JSON.stringify(selectedCountryData)
    );
    changingFlags(flagUrl); // Update the flag display
    updateLocations(country.name); // Update location display
  }
});

// Call the function to populate the selector when the page loads
populateLanguageSelector();

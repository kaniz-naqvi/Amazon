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

const selectElement = document.getElementById("Language");
const locationElements = document.querySelectorAll(".location-country");

// Populate the language selector
function populateLanguageSelector() {
  const savedCountryData = JSON.parse(
    localStorage.getItem("selectedCountryData")
  ) || {
    currencyName: "USD",
    flagUrl: "https://flagsapi.com/US/flat/64.png",
    name: "US",
  };

  // Add country options to the dropdown
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.currencyName;
    option.textContent = country.name;
    selectElement.appendChild(option);
  });

  // Set the selected country in the dropdown based on saved value
  const defaultCountry = countries.find(
    (country) => country.currencyName === savedCountryData.currencyName
  );
  if (defaultCountry) {
    selectElement.value = defaultCountry.currencyName; // Set the saved country in the dropdown
    changingFlags(savedCountryData.flagUrl); // Update the flag using saved URL
    updateLocations(savedCountryData.name); // Update locations
  }
}

// Update the flag based on the flag URL
let flag = document.querySelector(".flag img");

function changingFlags(flagUrl) {
  flag.setAttribute("src", flagUrl);
}

// Update location elements with the country name
function updateLocations(countryName) {
  locationElements.forEach((element) => {
    element.textContent = countryName;
  });
}

// Save selected country and flag URL to localStorage
selectElement.addEventListener("change", (event) => {
  const selectedCountry = event.target.value;
  const country = countries.find(
    (country) => country.currencyName === selectedCountry
  );

  if (country) {
    const flagUrl = `https://flagsapi.com/${country.shortName}/flat/64.png`;
    const selectedCountryData = {
      currencyName: selectedCountry,
      flagUrl: flagUrl,
      name: country.name,
    };

    // Save country and flag to localStorage
    localStorage.setItem(
      "selectedCountryData",
      JSON.stringify(selectedCountryData)
    );
    changingFlags(flagUrl); // Change flag based on selected country
    updateLocations(country.name); // Update location names
  }
});

// Populate the selector on page load
populateLanguageSelector();

const countries = [
  { name: "US", shortName: "US", currencySymbol: "$", currencyName: "USD" }, // United States
  { name: "한국", shortName: "KR", currencySymbol: "₩", currencyName: "KRW" }, // South Korea
  { name: "भारत", shortName: "IN", currencySymbol: "₹", currencyName: "INR" }, // India
  {
    name: "پاکستان",
    shortName: "PK",
    currencySymbol: "₨",
    currencyName: "PKR",
  }, // Pakistan
  { name: "中国", shortName: "CN", currencySymbol: "¥", currencyName: "CNY" }, // China
  { name: "Россия", shortName: "RU", currencySymbol: "₽", currencyName: "RUB" }, // Russia
  { name: "日本", shortName: "JP", currencySymbol: "¥", currencyName: "JPY" }, // Japan
  { name: "UK", shortName: "GB", currencySymbol: "£", currencyName: "GBP" }, // United Kingdom
  { name: "España", shortName: "ES", currencySymbol: "€", currencyName: "EUR" }, // Spain
  { name: "Italia", shortName: "IT", currencySymbol: "€", currencyName: "EUR" }, // Italy
  { name: "México", shortName: "MX", currencySymbol: "$", currencyName: "MXN" }, // Mexico
  {
    name: "Brasil",
    shortName: "BR",
    currencySymbol: "R$",
    currencyName: "BRL",
  }, // Brazil
  { name: "Canada", shortName: "CA", currencySymbol: "$", currencyName: "CAD" }, // Canada
  { name: "مصر", shortName: "EG", currencySymbol: "ج.م", currencyName: "EGP" }, // Egypt
  {
    name: "ประเทศ",
    shortName: "TH",
    currencySymbol: "฿",
    currencyName: "THB",
  }, // Thailand
  {
    name: "سعودية",
    shortName: "SA",
    currencySymbol: "﷼",
    currencyName: "SAR",
  }, // Saudi Arabia
];

// Fetch Exchange Rates
fetch("https://api.exchangerate-api.com/v4/latest/USD")
  .then((response) => response.json())
  .then((exchangeRates) => {
    populateLanguageSelector(exchangeRates); // Pass exchange rates to the function
    setupCurrencyChange(exchangeRates); // Setup change listener
  });

const selectElement = document.getElementById("Language");

// Populate the language selector
function populateLanguageSelector(exchangeRates) {
  countries.forEach((country) => {
    const option = document.createElement("option");
    option.value = country.currencyName; // Use currency name as value
    option.textContent = country.name;

    // Set default selection for USD
    if (country.currencyName === "USD") {
      option.selected = true; // Set USD as default selected
    }

    selectElement.appendChild(option);
  });

  // Set default to USD and update the flag and prices
  const defaultCountry = countries.find(
    (country) => country.currencyName === "USD"
  );
  if (defaultCountry) {
    changingFlags(defaultCountry.shortName); // Display US flag
    changeCurrency(defaultCountry, exchangeRates); // Set default prices to USD
  }
}

// Change currency and update prices
function setupCurrencyChange(exchangeRates) {
  selectElement.addEventListener("change", (e) => {
    const selectedCurrency = e.target.value;
    const countryDetails = countries.find(
      (country) => country.currencyName === selectedCurrency
    );

    if (countryDetails) {
      changingFlags(countryDetails.shortName); // Update flag
      changeCurrency(countryDetails, exchangeRates); // Update product prices
    }
  });
}

// Update the flag
let flag = document.querySelector(".flag img");
function changingFlags(countryCode) {
  flag.setAttribute("src", `https://flagsapi.com/${countryCode}/flat/64.png`);
}

// Update prices and currency symbol
function changeCurrency(countryDetails, exchangeRates) {
  const conversionRate = exchangeRates.rates[countryDetails.currencyName];
  if (!conversionRate) {
    console.error(
      `Conversion rate for ${countryDetails.currencyName} not found`
    );
    return;
  }

  // Directly update the currency symbol and product prices
  countries.forEach((country) => {
    if (country.currencyName === countryDetails.currencyName) {
      // Directly modify the object properties
      country.currencySymbol = countryDetails.currencySymbol;
    }
  });

  // Update product prices
  products.forEach((product) => {
    const productElement = document.querySelector(
      `.products[data-name="${product.name}"] .price b`
    );
    if (productElement) {
      const convertedPrice = (product.price * conversionRate).toFixed(2);
      productElement.textContent = `${countryDetails.currencySymbol}${convertedPrice}`;
    }
  });
}

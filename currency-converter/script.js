function currencyConverter() {
  const amountInput = document.getElementById("amount");
  const amount = parseFloat(amountInput.value);
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;

  // Exchange rates relative to USD
  const exchangeRates = {
    "USD": 1,
    "EUR": 0.92,
    "INR": 83.1,
    "GBP": 0.78,
    "JPY": 147.56
  };

  // Currency symbols
  const currencySymbols = {
    "USD": "$",
    "EUR": "€",
    "INR": "₹",
    "GBP": "£",
    "JPY": "¥"
  };

  // Validate input
  if (isNaN(amount) || amount <= 0) {
    document.getElementById("resultValue").textContent = "Enter valid amount!";
    return;
  }

  // Convert to USD
  const baseAmount = amount / exchangeRates[fromCurrency];

  // Convert USD → Target currency
  const convertedAmount = baseAmount * exchangeRates[toCurrency];

  // Show result with symbol
  document.getElementById("resultValue").textContent =
    `${currencySymbols[toCurrency]} ${convertedAmount.toFixed(2)}`;

  // ✅ Clear input field after conversion
  amountInput.value = "";
}

document.getElementById("convertBtn").addEventListener("click", currencyConverter);

// Store exchange rates manually (base currency: USD)
const exchangeRates = {
    USD: { INR: 87.0, EUR: 0.92, GBP: 0.78, JPY: 150.3 },
    INR: { USD: 0.012, EUR: 0.011, GBP: 0.0094, JPY: 1.81 },
    EUR: { USD: 1.09, INR: 90.0, GBP: 0.85, JPY: 162.8 },
    GBP: { USD: 1.28, INR: 106.0, EUR: 1.17, JPY: 190.5 },
    JPY: { USD: 0.0067, INR: 0.55, EUR: 0.0061, GBP: 0.0052 },
};

// Select Elements
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
const btn = document.querySelector("form button");

// Update Exchange Rate
const updateExchangeRate = () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value || 1;
    amount.value = amtVal;

    let fromCurrency = fromCurr.value;
    let toCurrency = toCurr.value;

    console.log("From:", fromCurrency, "To:", toCurrency); // Debugging
    if (fromCurrency === toCurrency) {
        msg.innerText = `${amtVal} ${fromCurrency} = ${amtVal} ${toCurrency}`;
        return;
    }

    let rate = exchangeRates[fromCurrency]?.[toCurrency];
    console.log("Exchange Rate Found:", rate); // Debugging

    if (!rate) {
        msg.innerText = "Exchange rate not available.";
        return;
    }

    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurrency} = ${finalAmount.toFixed(2)} ${toCurrency}`;
};

// Event Listener
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});

// Initial Calculation on Load
window.addEventListener("load", () => {
    updateExchangeRate();
});

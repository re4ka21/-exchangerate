import React, { useState, useEffect } from "react";
import { API_URL } from "./config";
export default function Feed() {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState(0);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setRates(data.rates))
      .catch((error) => console.error("Error fetching the rates:", error));
  }, []);

  const handleConvert = () => {
    if (rates[fromCurrency] && rates[toCurrency]) {
      const conversionRate = rates[toCurrency] / rates[fromCurrency];
      setResult(amount * conversionRate);
    }
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;

    if (value.length <= 14) {
      setAmount(value);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Currency Converter</h2>
      <div>
        <input type="number" value={amount} onChange={handleAmountChange} />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span> to </span>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <button onClick={handleConvert}>Convert</button>
      </div>
      <h3>
        {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
      </h3>
    </div>
  );
}

import React from "react";

export default function Tab1({ exchangeRates }) {
  return (
    <div>
      <h3>Курси валют (Вкладка 1):</h3>
      {exchangeRates ? (
        <ul>
          {Object.entries(exchangeRates).map(([currency, rate]) => (
            <li key={currency}>
              1 {currency} = {rate.toFixed(2)} UAH
            </li>
          ))}
        </ul>
      ) : (
        <p>Завантаження...</p>
      )}
    </div>
  );
}

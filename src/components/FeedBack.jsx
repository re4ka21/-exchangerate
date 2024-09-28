import React, { useEffect, useState } from "react";
import { API_URL } from "./config";
import { ERROR_MESSAGE } from "./qwer";

export default function FeedBack() {
  const [exchangeRates, setExchangeRates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setExchangeRates(data.rates);
      } catch (error) {
        setError(ERROR_MESSAGE);
        console.error("Помилка:", error);
      }
    };

    fetchExchangeRates();
  }, []);

  return (
    <section>
      <h2 className="name">Курси валют:</h2>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
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
        </>
      )}
    </section>
  );
}

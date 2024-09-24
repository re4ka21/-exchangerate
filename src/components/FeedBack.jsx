import React, { useEffect, useState } from "react";

const apiUrl = `https://api.exchangerate-api.com/v4/latest/USD`;
export default function FeedBack() {
  const [exchangeRateUSD, setExchangeRateUSD] = useState(null);
  const [exchangeRateEUR, setExchangeRateEUR] = useState(null);
  const [exchangeRateAED, setExchangeRateAED] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setExchangeRateUSD(data.rates.UAH);

        const euroToUAH = (data.rates.UAH / data.rates.EUR).toFixed(2);
        setExchangeRateEUR(euroToUAH);

        const aedToUAH = (data.rates.UAH / data.rates.AED).toFixed(2);
        setExchangeRateAED(aedToUAH);
      } catch (error) {
        setError("Помилка при завантаженні даних");
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
          <p className="valut">
            1 USD ={" "}
            {exchangeRateUSD ? `${exchangeRateUSD} UAH` : "Завантаження..."}
          </p>
          <p className="valut">
            1 EUR ={" "}
            {exchangeRateEUR ? `${exchangeRateEUR} UAH` : "Завантаження..."}
          </p>
          <p className="valut">
            1 AED ={" "}
            {exchangeRateAED ? `${exchangeRateAED} UAH` : "Завантаження..."}
          </p>
        </>
      )}
    </section>
  );
}

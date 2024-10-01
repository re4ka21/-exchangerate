import React, { useEffect, useState } from "react";
import { API_URL } from "./config";
import { ERROR_MESSAGE } from "./qwer";
import Tab1 from "./tabs/Tab1";
import Tab2 from "./tabs/Tab2";
import Tab3 from "./tabs/Tab3";

export default function FeedBack() {
  const [exchangeRates, setExchangeRates] = useState(null);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("tab1");

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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section>
      <h2 className="name">Курси валют:</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button onClick={() => handleTabClick("tab1")} className="buttonfirst">
          курси валют
        </button>
        <button onClick={() => handleTabClick("tab2")} className="buttonfirst">
          додаткова інформація
        </button>
        <button onClick={() => handleTabClick("tab3")} className="buttonfirst">
          error
        </button>
      </div>

      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <>
          {activeTab === "tab1" && <Tab1 exchangeRates={exchangeRates} />}
          {activeTab === "tab2" && <Tab2 />}
          {activeTab === "tab3" && <Tab3 />}
        </>
      )}
    </section>
  );
}

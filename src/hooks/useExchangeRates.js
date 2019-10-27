import React, { useState, useEffect } from "react";

export default function useExchangeRates() {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    const fetchRates = async () => {
      const res = await fetch(
        "https://api.exchangeratesapi.io/latest?base=USD&symbols=CAD,GBP,EUR,USD,INR"
      );
      if (res.ok) {
        const json = await res.json();
        setRates(json.rates);
      }
    };
    fetchRates();
  }, []);

  return rates;
}

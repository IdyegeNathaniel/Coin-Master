import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../Context/CoinContext";
import CoinChart from "./CoinChart";

const Coin = () => {
  // REUSABLE STYLING
  const ulStyling = "flex justify-between border-b border-gray-600 py-3 mb-3";
  const liStyling = "font-light";

  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [coinsChart, setCoinsChart] = useState();
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "	CG-58SPmh2WrZGG5Qxra1foS6wg",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((res) => setCoinData(res))
      .catch((err) => console.error(err));
  };

  const fetchCoinChart = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "	CG-58SPmh2WrZGG5Qxra1foS6wg",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`,
      options
    )
      .then((res) => res.json())
      .then((res) => setCoinsChart(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchCoinChart();
  }, [currency]);

  if (coinData && coinsChart) {
    return (
      <section className="bg-gradient-to-t from-slate-800 via-slate-700 to-slate-500 min-h-screen py-10 px-5">
        <div className="flex flex-col gap-5 justify-center items-center my-[20px] mx-auto">
          <img
            src={coinData.image.large}
            alt="coin-image"
            className="h-20 max-w-[100px] mb-3 rounded-full"
          />
          <p className="text-gray-300 font-semibold mb-4 md:text-4xl">
            {coinData.name} ({coinData.symbol.toUpperCase()})
          </p>
        </div>
        <div className="max-w-[600px] h-[250px] m-auto mb-5">
          <CoinChart coinsChart={coinsChart} />
        </div>

        {/* COIN DETAILS */}
        <div className="bg-slate-950 px-2 py-4 rounded-md shadow-lg flex flex-col mx-auto mt-20 max-w-[600px] text-gray-300 text-base">
          <ul className={ulStyling}>
            <li>Coin Market Rank</li>
            <li className={liStyling}>{coinData.market_cap_rank}</li>
          </ul>

          <ul className={ulStyling}>
            <li>Current Price</li>
            <li className={liStyling}>
              {currency.symbol}
              {coinData.market_data.current_price[
                currency.name
              ].toLocaleString()}
            </li>
          </ul>

          <ul className={ulStyling}>
            <li>Coin Market Cap</li>
            <li className={liStyling}>
              {currency.symbol}
              {coinData.market_data.market_cap[currency.name].toLocaleString()}
            </li>
          </ul>

          <ul className={ulStyling}>
            <li>24H High</li>
            <li className={liStyling}>
              {currency.symbol}
              {coinData.market_data.high_24h[currency.name].toLocaleString()}
            </li>
          </ul>

          <ul className={ulStyling}>
            <li>24H Low</li>
            <li className={liStyling}>
              {currency.symbol}
              {coinData.market_data.low_24h[currency.name].toLocaleString()}
            </li>
          </ul>
        </div>
      </section>
    );
  } else {
    return (
      <section className="bg-gradient-to-t from-slate-800 via0-slate-700 to-slate-500 min-h-screen">
        <div className="spinner">
          <div className="spin"></div>
        </div>
      </section>
    );
  }
};

export default Coin;

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CoinContext } from "../Context/CoinContext";
import CoinChart from "./CoinChart";

const Coin = () => {
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
      <section className="bg-gradient-to-t from-slate-800 via-slate-700 to-slate-500 min-h-screen pt-10 px-5">
        <div className="flex flex-col gap-5 justify-center items-center my-[20px] mx-auto mb-5">
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
        <div className=" flex flex-col max-w-[600px] text-gray-300 text-2xl">
          <ul className="flex justify-between border-b-gray-200 pt-3">
            <li>Coin Market Rank: </li>
            <li>{coinData.market_cap_rank}</li>
          </ul>

          <ul className="flex">
            <li>Current Price: </li>
            <li>
              {currency.symbol}
              {coinData.market_data.current_price[
                currency.name
              ].toLocaleString()}
            </li>
          </ul>

          <ul className="flex">
            <li>Coin Market Cap: </li>
            <li>
              {currency.symbol}
              {coinData.market_data.market_cap[currency.name].toLocaleString()}
            </li>
          </ul>

          <ul className="flex">
            <li>ATH: </li>
            <li>
              {currency.symbol}
              {coinData.market_data.market_cap[currency.name].toLocaleString()}
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

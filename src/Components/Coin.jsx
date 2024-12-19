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
      <section className="bg-gradient-to-t from-slate-800 via-slate-700 to-slate-500 min-h-screen pt-10">
        <div className=" flex flex-col justify-center items-center mx-auto">
          <div className="flex flex-col justify-center items-center">
            <img
              src={coinData.image.large}
              alt="coin-image"
              className="h-20 w-full mb-3"
            />
            <p className="text-gray-300 font-bold mb-4">
              {coinData.name} ({coinData.symbol})
            </p>
          </div>
          <div>
            <CoinChart coinsChart={coinsChart} />
          </div>
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

import React, { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CoinContext } from "../Context/CoinContext";

const Hero = ({
  text = "Best Crypto Monitor",
  subtext = "Track your favourite cryptocurrencies and get the latest news and happenings. sign up to enjoy more features ",
}) => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <section className="bg-gradient-to-t from-slate-800 via-slate-700 to-slate-500 min-h-screen">
      <div className="container flex flex-col  mx-auto px-4 pt-10 sm:px-6 lg:px-8 justify-center items-center">
        <div className=" max-w-screen-sm text-center text-white mt-20 mb-5 ">
          <h1 className="text-3xl md:text-5xl mb-4 font-extrabold ">{text}</h1>
          <p className="text-[12px] md:text-[15px] mb-5 text-gray-400">
            {subtext}
          </p>
          <form>
            <div className="bg-white py-2 px-4 flex items-center justify-center">
              <FaSearch className="text-black flex" />
              <input
                type="text"
                name="text"
                placeholder="Search Crypto Name/Keyword"
                className="w-full py-2 px-3 text-black text-[12px] md:text-lg font-bold outline-none"
              />
              <button
                type="submit"
                className="bg-slate-950 text-white py-2 px-4 h-full"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="bg-slate-950 rounded-md text-gray-300 max-w-[800px] mx-auto my-20">
          <div className="grid grid-cols-[0.5fr_3fr_1.5fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] py-4 px-5 items-center gap-4 border-b border-b-gray-400 font-semibold text-[12px] md:text-xl">
            {["#", "Coin", "Price", "24H Change", "Market Cap"].map(
              (item, index) => (
                <p
                  key={index}
                  className={
                    index === 3
                      ? "text-center"
                      : index === 4
                      ? "text-right hidden md:grid"
                      : "text-left"
                  }
                >
                  {item}
                </p>
              )
            )}
          </div>
          {displayCoin.slice(0, 10).map((item, index) => (
            <div className="grid grid-cols-[0.5fr_3fr_1.5fr_1fr] md:grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] py-4 px-5 items-center font-medium gap-4 border-b border-b-gray-400 last:border-none text-[12px] md:text-xl">
              <p key={index}>{item.market_cap_rank}</p>
              <div className="flex items-center gap-2">
                <img src={item.image} alt="coin_image" className="w-5" />
                <p key={index}>{item.name + " - " + item.symbol}</p>
              </div>
              <p key={index}>
                {currency.symbol} {item.current_price.toLocaleString()}
              </p>
              <p
                key={index}
                className={
                  item.price_change_percentage_24h > 0
                    ? "text-green-700 text-center"
                    : "text-red-700 text-center"
                }
              >
                {Math.floor(item.price_change_percentage_24h * 100) / 100}
              </p>
              <p key={index} className="text-right hidden md:grid">
                {currency.symbol} {item.market_cap.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

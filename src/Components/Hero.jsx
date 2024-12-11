import React from "react";
import { FaSearch } from "react-icons/fa";

const Hero = ({
  text = "Best Crypto Monitor",
  subtext = "Track your favourite cryptocurrencies and get the latest news and happenings. sign up to enjoy more features ",
}) => {
  return (
    <section className="bg-gradient-to-t from-slate-800 via-slate-700 to-slate-500">
      <div className="container h-screen flex flex-col  mx-auto px-4 pt-10 sm:px-6 lg:px-8 justify-center items-center">
        <div className=" max-w-screen-sm text-center text-white mt-20 mb-5 ">
          <h1 className="text-3xl md:text-5xl mb-4 font-extrabold ">{text}</h1>
          <p className="text-[12px] md:text-[15px] mb-5 text-gray-400">
            {subtext}
          </p>
          <form className="bg-white py-2 px-4 flex items-center justify-center rounded-full">
            <FaSearch className="text-black flex" />
            <input
              type="text"
              name="text"
              placeholder="Search Crypto Name/Keyword"
              className="w-full py-2 px-3 text-black text-[12px] md:text-xl font-bold outline-none"
            />
            <button
              type="submit"
              className="bg-slate-950 text-white py-2 px-4 rounded-r-full h-full"
            >
              Search
            </button>
          </form>
        </div>
        <div className="m-auto bg-slate-950 rounded-md text-gray-300 w-[800px] ">
          <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] py-4 px-5 items-center font-medium gap-4 border-b border-b-gray-400">
            {["#", "Coins", "Price", "24H Change", "Market Cap"].map(
              (item, index) => (
                <p key={index}>{item}</p>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

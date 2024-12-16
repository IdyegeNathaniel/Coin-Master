import { Link, NavLink } from "react-router-dom";
import Logo from "/assets/Logo.png";
import Icon from "/assets/Icon.png";
import { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CoinContext } from "../Context/CoinContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { setCurrency } = useContext(CoinContext);

  const handleClick = () => setNav((prev) => !prev);

  const handleCurrency = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      case "ngn": {
        setCurrency({ name: "ngn", symbol: "₦" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  // STYLING
  const linkClass = "px-2 py-2 font-semibold";
  const mobileMenuClass = nav
    ? "flex flex-col absolute  top-0 right-0 w-[300px] h-screen bg-slate-800 items-center justify-center"
    : "hidden";
  const mobileLinkClass = "mb-2 text-xl";
  const selectClass = "bg-slate-800 z-100";

  return (
    <nav className="bg-slate-500 border-b border-slate-300 text-white w-full h-20 mx-auto flex items-center justify-between px-[10%]">
      <NavLink to="/">
        <picture>
          {/* Show small logo on smaller screens */}
          <source media="(max-width: 768px)" srcSet={Icon} />
          {/* Default to larger logo */}
          <img src={Logo} alt="nav_logo" className="w-16 md:w-40 z-10" />
        </picture>
      </NavLink>
      <div className="">
        <ul className="hidden md:flex ">
          {["Home", "Features", "Pricing", "Blogs"].map((item, index) => (
            <li key={index}>
              <Link to={index === 0 ? "/" : `/${item}`} className={linkClass}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <select
          onChange={handleCurrency}
          className="bg-transparent outline-none border rounded-md px-1 py-1 md:text-l text-sm md:px-2 md:py-2 cursor-pointer font-semibold"
        >
          <option className={selectClass} value="usd">
            USD
          </option>
          <option className={selectClass} value="inr">
            INR
          </option>
          <option className={selectClass} value="eur">
            EUR
          </option>
          <option className={selectClass} value="ngn">
            NGN
          </option>
        </select>
        <button className="flex outline-none border border-white px-2 py-1 md:text-l text-sm md:px-4 md:py-1 rounded-md cursor-pointer font-semibold">
          Sign up
        </button>
      </div>

      {/* MOBILE DISPLAY */}

      <div
        className="md:hidden z-10 cursor-pointer transition-transform duration-500"
        onClick={handleClick}
      >
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={mobileMenuClass}>
        {["Home", "Features", "Pricing", "Blogs"].map((item, index) => (
          <li key={index} className={mobileLinkClass}>
            <Link to={index === 0 ? "/" : `/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import { NavLink } from "react-router-dom";
import Logo from "/assets/Logo.png";
import Icon from "/assets/Icon.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav((prev) => !prev);
  const linkClass = "px-2 py-2 ";
  const mobileMenuClass = nav
    ? "flex flex-col absolute  top-0 right-0 w-[300px] h-screen bg-slate-800 items-center justify-center"
    : "hidden";
  const mobileLinkClass = "mb-2 text-xl";
  const selectClass = "bg-slate-800 z-100";
  return (
    <nav className="bg-slate-500 border-b border-slate-300 text-white w-full h-20 mx-auto flex items-center justify-between px-[10%]">
      <a href="/">
        <img
          src={Logo}
          // src={nav ? { Icon } : { Logo }}
          alt="nav_logo"
          className="w-auto h-40 z-10"
        />
      </a>
      <div className="">
        <ul className="hidden md:flex ">
          {["Home", "Features", "Pricing", "Blogs"].map((item, index) => (
            <li key={index}>
              <a href="/" className={linkClass}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <select
          name=""
          id=""
          className="bg-transparent outline-none border rounded-md px-1 py-1 mr-2"
        >
          <option className={selectClass} value="USD">
            USD
          </option>
          <option className={selectClass} value="INR">
            INR
          </option>
          <option className={selectClass} value="EUR">
            USD
          </option>
          <option className={selectClass} value="NGN">
            NGN
          </option>
        </select>
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
            <a href="/">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

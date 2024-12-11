import { Link, NavLink } from "react-router-dom";
import Logo from "/assets/Logo.png";
import Icon from "/assets/Icon.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav((prev) => !prev);

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
        <img
          src={Logo}
          //src={nav ? Icon : Logo}
          alt="nav_logo"
          className="w-auto h-32 z-10"
        />
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
          name=""
          id=""
          className="bg-transparent outline-none border rounded-md px-2 py-2 cursor-pointer font-semibold"
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
        <button className="flex outline-none border border-white py-1 px-4 rounded-md cursor-pointer font-semibold">
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
            <a href="/">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useEffect,useState } from "react";
import { MagnifyingGlassIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/outline';
import { useDispatch, useSelector } from 'react-redux';
// import { selectTotalQTY, setOpenCart } from '../app/CartSlice.js';


function Navbar() {
  const [navState, setNavState] = useState(false);

  const toggleNav = () => {
    if (window.scroll > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    //useEffect hook
    window.addEventListener("scroll", toggleNav); //scroll event listener

    return () => {
      //cleanup function
      window.removeEventListener("scroll", toggleNav); //remove event listener
    };
  }, []); //empty array means it will run only once

  return (
    <header
      className={`${
        navState
          ? "fixed top-0 left-0 right-0 h-16 bg-white shadow-md z-50 transition-all duration-300"
          : "absolute top-7 left-0 right-0 bg-transparent z-50"
      }`}
    >
      <nav className="flex items-center justify-between px-4 md:px-10">
        <div className="flex items-center">
          <img
            src="/path-to-your-logo.png"
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>
        <ul className="flex items-center space-x-4">
          <li className="grid items-center">
            <MagnifyingGlassIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
          </li>
          <li className="grid items-center">
            <HeartIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
          </li>
          <li className="grid items-center">
            <ShoppingBagIcon className={`icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />

          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

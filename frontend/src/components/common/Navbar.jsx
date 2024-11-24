import React from 'react';
import { FaHeart, FaShoppingCart, FaHotjar } from 'react-icons/fa';
import logo from '../../assets/Drip kicks logo.png';

function Navbar() {
  return (
    <div className="flex bg-transparent rounded-xl shadow-md w-auto h-16 m-5 mx-24">
      <div className='flex-1 m-auto px-3'>
        <h1 className='text-xl font-mono font-bold'>
          <img src={logo} alt="Logo" className="h-16 inline-block" />
        </h1>
      </div>
      <div className='flex space-x-4 m-auto px-7'>
        <a href="/hot" className="text-xl text-slate-100"><FaHotjar /></a>
        <a href="/like" className="text-xl text-slate-100"><FaHeart /></a>
        <a href="/cart" className="text-slate-100 text-xl"><FaShoppingCart /></a>
      </div>
    </div>
  );
}

export default Navbar;

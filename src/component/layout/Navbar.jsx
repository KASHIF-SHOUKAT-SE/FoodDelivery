import React from 'react'
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import star from "../../assets/Icons/Topnav/🌟.png";
import location from "../../assets/Icons/Topnav/Location.svg"
import shoppingbasket from "../../assets/Icons/Topnav/Full Shopping Basket.svg"
import forward from "../../assets/Icons/Topnav/Forward Button.svg"
import logo from "../../assets/Icons/mainnav/LOGO 1.svg"
import malelogo from "../../assets/Icons/mainnav/Male User.svg"
import Female from '../../assets/Images/Herosection/Female.svg'

 

const Navbar = () => {
      const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div className="hidden lg:block w-full bg-white border border-gray-200 rounded-b-2xl">
  <div className="max-w-[1528px] h-[70px] mx-auto flex items-center justify-between">

    {/* Left Side */}
    <div className="flex items-center gap-2 text-sm 
ml-10">
        <img
          src={star}
          alt="Location"
          className="w-4 h-4"
        />
       {/* <span></span> */}

      <p className="text-[#03081F]">
        Get 5% Off your first order,
        <a
          href="#"
          className="ml-1 font-semibold text-[#FC8A06] underline hover:text-orange-600"
        >
          Promo: ORDER5
        </a>
      </p>
    </div>

    {/* Right Side */}
    <div className="flex items-center  gap-6">

      {/* Location */}
      <div className="flex items-center gap-2">
        <img
          src={location}
          alt="Location"
          className="w-4 h-4"
        />

        <span className="text-sm text-[#03081F]">
          Regent Street, A4, A4201, London
        </span>
      </div>

      {/* Change Location */}
      <a
        href="#"
        className="text-sm font-medium text-[#FC8A06] underline"
      >
        Change Location
      </a>

      {/* Cart */}
      <div className="flex items-center max-w-[370px] h-[70px]  bg-[#028643] m-0 text-white rounded-b-lg overflow-hidden">

        <div className="px-5 py-5 border-r border-green-500">
          <img
            src={shoppingbasket}
            alt="Cart"
            className="w-5 h-5"
          />
        </div>

        <div className="px-5 border-r  border-green-500">
          23 Items
        </div>

        <div className="px-5">
          GBP 79.89
        </div>
         <div className="px-5 py-5  border-green-500">
          <img
            src={forward}
            alt="Cart"
            className="w-5 h-5"
          />
        </div> 

      </div>

    </div>

  </div>
</div>


 <nav className="w-full bg-white pt-[12px]">
      <div className="max-w-[1528px] h-[61px] mx-auto flex items-center justify-between  px-4">

        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Logo"
            className="h-12"
          />
        </div>


        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-16 text-[15px] font-medium">

  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive
        ? "bg-orange-500 text-white px-5 py-2 rounded-full"
        : "hover:text-orange-500"
    }
  >
    Home
  </NavLink>

  <li className="cursor-pointer hover:text-orange-500">
    Browse Menu
  </li>

  <li className="cursor-pointer hover:text-orange-500">
    Special Offers
  </li>

  <NavLink
    to="/restaurent"
    className={({ isActive }) =>
      isActive
        ? "bg-orange-500 text-white px-5 py-2 rounded-full"
        : "hover:text-orange-500"
    }
  >
    Restaurants
  </NavLink>

  <li className="cursor-pointer hover:text-orange-500">
    Track Order
  </li>

</ul>



        {/* Desktop Login */}
        <button className="hidden lg:flex items-center gap-2 bg-[#0A1633] text-white px-6 py-3 rounded-full">
  <img
    src={malelogo}
    alt="User"
    className="w-5 h-5"
  />

  Login / Signup
</button>


        {/* Mobile Burger Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#0A1633]"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>


      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white px-6 pb-5 space-y-4 text-[15px] font-medium">

          <li className="bg-orange-500 text-white px-5 py-2 rounded-full ">
            Home
          </li>

          <li className='ml-5'>Browse Menu</li>

          <li className='ml-5'>Special Offers</li>

          <li className='ml-5'>Restaurants</li>

          <li className='ml-5'>Track Order</li>

          <li>
            <button className="bg-[#0A1633] text-white px-6 py-3 rounded-full w-full">
              Login / Signup
            </button>
          </li>

        </ul>
      )}

    </nav>
    {/* Mobile User + Cart */}
<div className="lg:hidden flex w-full h-[70px] mt-3">

  {/* User Section */}
  <div className="w-1/2 bg-[#FC8A06] flex items-center gap-3 px-4">
    <img
      src={Female}
      alt="User"
      className="w-12 h-12 rounded-full bg-white p-1"
    />

    <h3 className="text-black font-semibold text-lg">
      Aycan
    </h3>
  </div>

  {/* Cart Section */}
  <div className="w-1/2 bg-[#028643] flex items-center justify-center gap-3 text-white">

    <img
      src={shoppingbasket}
      alt="Cart"
      className="w-8 h-8"
    />

    <span className="font-semibold text-xl">
      GBP 79.89
    </span>

  </div>

</div>
      
     
    </>
  );
};

export default Navbar;
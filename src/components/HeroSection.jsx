import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = ({ myData }) => {
  return (
    <>
      <div className="Hero-wrapper w-full bg-slate-100">
        <div className="w-full max-w-[1300px] m-auto md:flex md:justify-between pt-8 bg-white shadow-lg px-4">
          <div className="hero-text md:w-2/4 md:flex md:flex-col">
            <p className="text-gray-500 font-semibold text-xl">Welcome to</p>
            <h1 className="text-6xl text-teal-600 font-bold ">{myData.name}</h1>
            <p className="text-gray-900 font-medium text-justify mt-2 opacity-50 font-poppins text-sm pr-10">
              Welcome to our eCommerce landing page for electronics accessories!
              Discover a wide range of high-quality and affordable accessories
              for your gadgets, including phone cases, chargers, cables, and
              more. Our collection features top-rated brands and products that
              are designed to enhance your digital experience
            </p>
            <NavLink to="/products" className="mt-6">
              <button className="bg-slate-800 rounded px-5 py-2 font-semibold text-white">
                Shop Now
              </button>
            </NavLink>
          </div>
          <div className="Hero-img md:w-[40%]">
            <img
              src="./images/Ecommerce-checkout.svg"
              alt="Hero Image"
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

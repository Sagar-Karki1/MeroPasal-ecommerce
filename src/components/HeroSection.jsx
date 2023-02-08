import React from "react";
import { NavLink } from "react-router-dom";

const HeroSection = ({ myData }) => {
  return (
    <>
      <div className="Hero-wrapper w-full h-[60vh] md:flex md:justify-evenly px-2 py-2">
        <div className="hero-text md:w-2/4 md:flex md:flex-col">
          <p className="text-gray-500 font-semibold text-xl">Welcome to</p>
          <h1 className="text-6xl text-teal-600 font-bold ">{myData.name}</h1>
          <p className="text-gray-900 font-medium text-justify mt-2 opacity-50 font-poppins text-sm pr-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            maiores, repellat molestiae quas corrupti explicabo minima deserunt
            possimus commodi, ipsam sit reiciendis ea architecto doloribus
            consequuntur optio nesciunt saepe dignissimos. Illo velit
            consequuntur reprehenderit in cum nulla reiciendis rerum modi
            laboriosam quas? Eaque, delectus placeat! Deleniti, illum fuga ex a
            veniam ducimus cum, laudantium blanditiis at nostrum aspernatur
            possimus earum?
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
            className="w-[90%]"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;

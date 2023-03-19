import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import Stars from "./Stars";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useCartContext } from "../context/CartContext";

const Product = (products) => {
  const { addToCart } = useCartContext();
  const [toggleHeart, setToggleHeart] = useState(false);
  const { id, name, image, colors, price, stars, category } = products;
  return (
    <>
      <div className="card rounded-md shadow-lg bg-white h-[15rem] md:h-[20rem] relative">
        <NavLink to={`/singleproduct/${id}`}>
          <figure>
            <img
              src={image}
              alt={name}
              className="rounded-tl-md rounded-tr-md"
            />
          </figure>
          <div className="details flex justify-between items-center px-1 py-2">
            <h3 className="capitalize md:font-semibold text-[16px] font-bold md:text-xl text-indigo-600">
              {name}
            </h3>
            <Stars stars={stars} />
          </div>
          <div className="colors flex items-center">
            <p className="font-semibold text-gray-600">
              Colors:
              {colors.map((curColor, index) => {
                return (
                  <button
                    className="w-[1rem] h-[1rem] rounded-sm mx-1"
                    key={index}
                    style={{ backgroundColor: curColor }}
                  ></button>
                );
              })}
            </p>
          </div>
          <div>
            <p>{<FormatPrice price={price} />}</p>
          </div>
          c
        </NavLink>
        <button
          className="bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 rounded-md text-white"
          onClick={() => addToCart(id)}
        >
          Add to cart
        </button>
        <button
          className="w-10 h-10 absolute top-2 right-3 px-2 py-1 rounded-full bg-slate-100 flex items-center justify-center shadow-lg z-50"
          onClick={() => setToggleHeart(!toggleHeart)}
        >
          {toggleHeart ? (
            <AiFillHeart className="text-4xl text-red-500" />
          ) : (
            <AiOutlineHeart className="text-4xl text-red-500" />
          )}
        </button>
      </div>
    </>
  );
};

export default Product;

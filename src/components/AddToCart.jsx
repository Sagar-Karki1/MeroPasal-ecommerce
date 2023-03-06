import React, { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  return (
    <>
      <div className="">
        <p className="text-md font-medium text-gray-500">
          Colors:
          {colors.map((curColor, index) => {
            return (
              <button
                className="w-[1.5rem] h-[1.5rem] rounded-sm mx-1"
                key={index}
                style={{ backgroundColor: curColor }}
              >
                {colors === curColor ? (
                  <FaCheck className="text-white text-xl" />
                ) : null}
              </button>
            );
          })}
        </p>
      </div>
      {/* Addt to cart */}
      <CartAmountToggle
        amount={amount}
        setIncrease={setIncrease}
        setDecrease={setDecrease}
      />
      <NavLink
        to="/cart"
        className="bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2 rounded-md text-white"
        onClick={() => addToCart(id, color, amount, product)}
      >
        Add to cart
      </NavLink>
    </>
  );
};

export default AddToCart;

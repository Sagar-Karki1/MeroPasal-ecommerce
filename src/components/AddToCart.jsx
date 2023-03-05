import React, { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { FaCheck } from "react-icons/fa";

const AddToCart = ({ product }) => {
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
    </>
  );
};

export default AddToCart;

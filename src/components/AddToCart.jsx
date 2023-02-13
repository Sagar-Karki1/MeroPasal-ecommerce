import React, { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";

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
                className="w-[1rem] h-[1rem] rounded-sm mx-1"
                key={index}
                style={{ backgroundColor: curColor }}
              ></button>
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

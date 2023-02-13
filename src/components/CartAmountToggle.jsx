import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
  return (
    <div className="py-2 flex gap-10 items-center h-[4rem]">
      <button className="text-gray-500" onClick={() => setDecrease()}>
        <FaMinus />
      </button>
      <p className=" text-md text-gray-500 font-semibold">{amount}</p>
      <button className="text-gray-500" onClick={() => setIncrease()}>
        <FaPlus />
      </button>
    </div>
  );
};

export default CartAmountToggle;

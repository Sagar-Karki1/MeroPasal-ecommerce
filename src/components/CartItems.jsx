import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import { MdDelete } from "react-icons/md";

const CartItems = ({ id, name, image, color, price, amount }) => {
  return (
    <div className="container max-w-[1200px] w-full">
      <div className="cart-items grid grid-cols-5 py-3">
        <div className="item-data flex gap-2">
          <figure>
            <img src={image} alt={name} className="w-[7rem] " />
          </figure>
          <div className="product-name">
            <h3 className="text-lg text-gray-600 font-semibold capitalize">
              {name}
            </h3>
            <div className="flex gap-2">
              <p className="text-gray-500 font-semibold text-md">Color:</p>
              <div
                style={{ backgroundColor: color }}
                className="w-[1.5rem] h-[1.5rem] rounded-sm"
              ></div>
            </div>
          </div>
        </div>
        <div className="price-data ">
          <p className="text-center text-gray-500 font-semibold text-md">
            <FormatPrice price={price} />
          </p>
        </div>
        <div className="quantity-data">
          <p className="text-center text-gray-500 font-semibold text-md">
            {amount}
          </p>
        </div>
        <div className="subtotal-data">
          <p className="text-center text-gray-500 font-semibold text-md">
            <FormatPrice price={price * amount} />
          </p>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-gray-500 font-semibold text-4xl hover:text-red-600 cursor-pointer">
            <MdDelete />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

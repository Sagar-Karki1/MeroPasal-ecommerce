import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import { MdDelete } from "react-icons/md";
import CartAmountToggle from "./CartAmountToggle";
import { useCartContext } from "../context/CartContext";

const CartItems = ({ id, name, image, color, price, amount }) => {
  const { removeProduct, setIncrement, setDecrement } = useCartContext();
  // const setIncrease = () => {
  //   amount < stock ? setAmount(amount + 1) : setAmount(stock);
  // };
  // const setDecrease = () => {
  //   amount > 1 ? setAmount(amount - 1) : setAmount(1);
  // };
  return (
    <div className="container max-w-[1200px] w-full">
      <div className="cart-items grid grid-cols-5 py-3 items-center">
        <div className="item-data flex gap-2">
          <figure>
            <img src={image} alt={name} className="w-[6.5rem] " />
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
        <div className="quantity-data flex justify-center">
          <CartAmountToggle
            amount={amount}
            setIncrease={() => setIncrement(id)}
            setDecrease={() => setDecrement(id)}
          />
        </div>
        <div className="subtotal-data">
          <p className="text-center text-gray-500 font-semibold text-md">
            <FormatPrice price={price * amount} />
          </p>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-gray-500 font-semibold text-4xl hover:text-red-600 cursor-pointer">
            <MdDelete onClick={() => removeProduct(id)} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

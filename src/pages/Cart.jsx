import React from "react";
import { useCartContext } from "../context/CartContext";
import CartItems from "../components/CartItems";

const Cart = () => {
  const { cart } = useCartContext();
  console.log(cart);
  return (
    <div>
      <div className="container w-full max-w-[1200px] m-auto">
        <h1 className="text-3xl text-blue-900 font-bold py-4 ">
          Cart Products
        </h1>
        <div className="cart-heading grid grid-cols-5 text-2xl font-semibold text-gray-600 text-center">
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />
        <div className="cart">
          {cart.map((curElem) => {
            return <CartItems key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;

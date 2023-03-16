import React from "react";
import { useCartContext } from "../context/CartContext";
import CartItems from "../components/CartItems";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import Checkout from "./Checkout";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  if (cart.length === 0) {
    return (
      <div className="w-full max-w-[1200px] m-auto">
        <h1 className="text-3xl text-gray-700 font-semibold py-4">
          No Items in Cart
        </h1>
      </div>
    );
  }
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
        <hr />
        <div className="cart-buttons flex justify-between mt-4">
          <NavLink
            to="/products"
            className="bg-blue-900 px-5 py-2 text-white font-medium "
          >
            <button>Continue Shopping</button>
          </NavLink>
          <button
            className="bg-red-500 px-5 py-2 text-white font-medium"
            onClick={clearCart}
          >
            Clear cart
          </button>
        </div>
        <div className="w-[20rem] float-right text-blue-900 font-semibold text-md py-4 bg-gray-100 rounded-md mt-4 px-4">
          <div className="flex justify-between">
            <p>Subtotal: </p>
            <p>
              <FormatPrice price={total_price} />
            </p>
          </div>
          <div className="flex justify-between">
            <p>Shipping fee: </p>
            <p>
              <FormatPrice price={shipping_fee} />
            </p>
          </div>
          <hr />
          <div className="flex justify-between">
            <p>Order Total: </p>
            <p>
              <FormatPrice price={total_price + shipping_fee} />
            </p>
          </div>
        </div>
        <div>
          <NavLink to="/checkout">Checkout</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Cart;

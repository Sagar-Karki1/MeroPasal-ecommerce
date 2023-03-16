import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("meroPasalCart");
  // if (localCartData == []) {
  //   return [];
  // } else {
  //   return JSON.parse(localCartData); // JSON.parse converts string data to array
  // }
  const parsedData = JSON.parse(localCartData);
  if (!Array.isArray(parsedData)) return [];

  return parsedData;
};

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (id, color, amount, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, color, amount, product },
    });
  };

  // increment and decrement cart product
  const setDecrement = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  const removeProduct = (id) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: id });
  };

  //to clear cart items
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // add the product in local storage
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_VALUE" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    // dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    localStorage.setItem("meroPasalCart", JSON.stringify(state.cart)); // JSON.stringify converts array data to string.
  }, [state.cart]);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeProduct,
        clearCart,
        setIncrement,
        setDecrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };

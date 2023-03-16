import React from "react";

const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;

    // checking the existing product
    let existingProduct = state.cart.find(
      (curItem) => curItem.id === id + color
    );
    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === id + color) {
          let newAmount = curElem.amount + amount;
          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct;
      cartProduct = {
        id: id + color,
        name: product.name,
        color,
        price: product.price,
        amount,
        image: product.image[0].url,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  if (action.type === "REMOVE_PRODUCT") {
    let updatedCart = state.cart.filter(
      (curProduct) => curProduct.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }
  //Reducer function to clear cart items
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "CART_TOTAL_VALUE") {
    let updatedItemValue = state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;
      initialVal = initialVal + amount;
      return initialVal;
    }, 0);
    return { ...state, total_item: updatedItemValue };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialVal, curElem) => {
      let { price, amount } = curElem;
      initialVal = initialVal + price * amount;
      return initialVal;
    }, 0);
    return {
      ...state,
      total_price,
    };
  }

  // if (action.type === "CART_ITEM_PRICE_TOTAL") {
  //   let { total_item, total_price } = state.cart.reduce(
  //     (accum, curElem) => {
  //       let { price, amount } = curElem;
  //       accum.total_item = accum + amount;
  //       accum.total_price = accum + price * amount;
  //       return accum;
  //     },
  //     {
  //       total_item: 0,
  //       total_price: 0,
  //     }
  //   );
  //   return {
  //     ...state,
  //     total_item,
  //     total_price,
  //   };
  // }

  //to set increment and decrement
  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;
        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;
        if (incAmount >= curElem.max) {
          incAmount = curElem.max;
        }
        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  return state;
};

export default CartReducer;

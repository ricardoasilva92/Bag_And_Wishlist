import React, { useState, createContext } from "react";

export const BasketContext = createContext();

export const BasketProvider = props => {
  const [basket, setBasket] = useState({
    Bag: {
      product1: {
        img: "awdawdwdaw",
        brand: "Gucci",
        name: "black sweater",
        quantity: "1",
        price: "123"
      },
      product2: {
        img: "awdawdwdaw",
        brand: "Gucci",
        name: "black sweater",
        quantity: "1",
        price: "123"
      }
    },
    Wishlist: {
      product2: {
        img: "awdawdwdaw",
        brand: "Gucci",
        name: "black sweater",
        quantity: "1",
        price: "123"
      },
      product3: {
        img: "awdawdwdaw",
        brand: "Gucci",
        name: "black sweater",
        quantity: "1",
        price: "123"
      }
    }
  });
  return (
    <BasketContext.Provider value={123}>
      {props.children}
    </BasketContext.Provider>
  );
};

import React, { useState, createContext } from "react";

export const BasketContext = createContext();

export const BasketProvider = props => {
  const [basket, setBasket] = useState({
    Bag: {
      product1: {
        image: "https://cdn-images.farfetch-contents.com/13/57/52/72/13575272_18720052_1000.jpg",
        brand: "Gucci",
        name: "black sweater",
        quantity: "1",
        price: "123"
      },
      product2: {
        image: "awdawdwdaw",
        brand: "Gucci",
        name: "black sweater",
        quantity: "1",
        price: "123"
      }
    },
    Wishlist: {
      product2: {
        image: "awdawdwdaw",
        brand: "Gucci",
        name: "black sweater",
        quantity: "1",
        price: "123"
      },
      product3: {
        image: "awdawdwdaw",
        brand: "Gucci",
        name: "black sweater",
        quantity: "1",
        price: "123"
      }
    }
  });
  return (
    <BasketContext.Provider value={basket}>
      {props.children}
    </BasketContext.Provider>
  );
};

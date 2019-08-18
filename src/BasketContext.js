import React, { useState, createContext } from "react";

export const BasketContext = createContext();

export const BasketProvider = props => {
  const [basket, setBasket] = useState({
    Bag: {
      id: "12345678",
      products: [ 
        {
          image: "https://cdn-images.farfetch-contents.com/13/57/52/72/13575272_18720052_1000.jpg",
          brand: "Gucci",
          name: "X Mickey Mouse tote bag",
          quantity: "1",
          price: "6,850 €",
        },
        {
          image: "https://cdn-images.farfetch-contents.com/14/23/58/16/14235816_20144834_1000.jpg",
          brand: "PRADA",
          name: "neoprene sneakers",
          quantity: "1",
          price: "620 €",
        },
        {
          image: "https://cdn-images.farfetch-contents.com/13/49/50/19/13495019_15791174_1000.jpg",
          brand: "GUCCI",
          name: "\"Maison De L'Amour\" print metal folding table",
          quantity: "1",
          price: "2,980 €",
        }
      ]
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

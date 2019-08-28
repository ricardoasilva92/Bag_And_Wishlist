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
      products: [
        {
          image: "https://cdn-images.farfetch-contents.com/13/50/98/15/13509815_17567343_1000.jpg",
          brand: "Gucci",
          name: "Monaco two-piece suit",
          price: "1,920 €"
        },
        {
          image: "https://cdn-images.farfetch-contents.com/12/81/13/29/12811329_13699362_600.jpg",
          brand: "Tag Heuer",
          name: "Formula 1 41mm",
          price: "850 €"
        },
        {
          image: "https://cdn-images.farfetch-contents.com/13/55/69/05/13556905_16151033_600.jpg",
          brand: "Moscot",
          name: "Lemtosh round sunglasses",
          price: "359 €"
        },
        {
          image: "https://cdn-images.farfetch-contents.com/14/45/03/27/14450327_21194615_600.jpg",
          brand: "Burberry",
          name: "Union Jack and Logo Print Oversized Puffer Cape",
          price: "1,590 €"
        },
        {
          image: "https://cdn-images.farfetch-contents.com/14/03/74/10/14037410_20548546_600.jpg",
          brand: "Gucci",
          name: "logo tote bag",
          price: "1,155 €"
        }
      ]
    }
  });
  return (
    <BasketContext.Provider value={[basket,setBasket]}>
      {props.children}
    </BasketContext.Provider>
  );
};

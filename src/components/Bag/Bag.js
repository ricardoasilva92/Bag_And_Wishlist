import React, { Component, useContext } from "react";
import { BasketContext } from "../../BasketContext";
import Styles from "./Bag.module.css";
import BagProductCard from "./BagProductCard/BagProductCard";

const Bag = () => {
    const [basket, setBasket] = useContext(BasketContext);
    console.log(basket);
    return (
        <div className={Styles.bag}>
            <h1>Bag</h1>
            {basket.Bag.products.map((prod,index) => (
                <BagProductCard product={prod} index={index} />
            ))}
        </div>
    );
};

export default Bag;

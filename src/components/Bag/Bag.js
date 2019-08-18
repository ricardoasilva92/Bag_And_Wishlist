import React, { Component, useContext } from "react";
import { BasketContext } from "../../BasketContext";
import Styles from "./Bag.module.css";
import BagProductCard from "./BagProductCard/BagProductCard";

const Bag = () => {
    const context = useContext(BasketContext);
    console.log(context);
    return (
        <div className={Styles.bag}>
            <h1>Bag</h1>
            {context.Bag.products.map(prod => (
                <BagProductCard product={prod} />
            ))}
        </div>
    );
};

export default Bag;

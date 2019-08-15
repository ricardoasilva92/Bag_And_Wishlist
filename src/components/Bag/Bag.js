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
            <BagProductCard
                product={context.Bag[Object.keys(context.Bag)[0]]}
            />
        </div>
    );
};

export default Bag;

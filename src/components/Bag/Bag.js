import React, { useContext } from "react";
import { BasketContext } from "../../BasketContext";
import Styles from "./Bag.module.css";
import BagProductCard from "./BagProductCard/BagProductCard";

const Bag = () => {
    const [basket, ] = useContext(BasketContext);
    return (
        <div className={Styles.bag}>
            <h1>Bag</h1>
            {basket.Bag.products.map((prod,index) => (
                <BagProductCard product={prod} index={index} key={index}/>
            ))}
        </div>
    );
};

export default Bag;

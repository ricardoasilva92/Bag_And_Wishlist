import React from "react";
import Styles from "./BagProductCard.module.css";

const BagProductCard = props => (
    <div className={Styles.container}>
        <div className={Styles.imageContainer}>
            <img
                className={Styles.image}
                src={props.product.image}
                alt="Gucci X Mickey Mouse tote bag"
            />
        </div>
        <div className={Styles.productInformation}>
            <ul>
                <li>Brand: {props.product.brand}</li>
                <li>Name: {props.product.name}</li>
                <li>Price: {props.product.price}</li>
                <li>Quantity: {props.product.quantity}</li>
            </ul>
        </div>
        <div className={Styles.addToWishlist}>
            <button type="button">Add to Wishlist!</button>
        </div>
    </div>
);

export default BagProductCard;

import React from "react";
import Styles from "./WishlistProductCard.module.css";

const WishlistProductCard = (props) => (
    <div className={Styles.wishlistProductCard}>
        <div className={Styles.productImageContainer}>
            <img className={Styles.productImage}
                src={props.productInfo.image}
                alt="whatever"></img>
        </div>
        <div className={Styles.productInformation}>
            <p>{props.productInfo.brand}</p>
            <p>{props.productInfo.name}</p>
            <p>{props.productInfo.price}</p>
        </div>
        <button>Add to Bag</button>
    </div>
);

export default WishlistProductCard;

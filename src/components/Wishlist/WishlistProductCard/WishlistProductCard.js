import React from "react";
import Styles from "./WishlistProductCard.module.css";

const WishlistProductCard = () => (
    <div className={Styles.wishlistProductCard}>
        <div className={Styles.productImage}>Image</div>
        <div className={Styles.productInformation}>
            <p>Name</p>
            <p>Price</p>
        </div>
        <button>Add to Bag</button>
    </div>
);

export default WishlistProductCard;

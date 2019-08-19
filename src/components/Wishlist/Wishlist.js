import React from "react";
import Styles from "./Wishlist.module.css";
import WishlistProductCard from './WishlistProductCard/WishlistProductCard'

const Wishlist = () => (
    <section className={Styles.wishlist}>
        <h1>Wishlist</h1>
        <div className={Styles.wishlistSlider}>
            <WishlistProductCard />
            <WishlistProductCard />
            <WishlistProductCard />
            <WishlistProductCard />
            <WishlistProductCard />
            <WishlistProductCard />
            <WishlistProductCard />
            <WishlistProductCard />
        </div>
    </section>
);

export default Wishlist;

import React, { useContext } from "react";
import Styles from "./Wishlist.module.css";
import WishlistProductCard from "./WishlistProductCard/WishlistProductCard";
import { BasketContext } from "../../BasketContext";

const Wishlist = () => {
    const [basket, setBasket] = useContext(BasketContext);

    return (
        <section className={Styles.wishlist}>
            <h1 className={Styles.wishlistTitle}>Wishlist</h1>
            <div className={Styles.wishlistSliderContainer}>
                <div className={Styles.wishlistSlider}>
                    {basket.Wishlist.products.map(prod => (
                        <WishlistProductCard productInfo={prod} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Wishlist;

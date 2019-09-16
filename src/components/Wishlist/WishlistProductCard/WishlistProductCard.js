import React, { useContext } from "react";
import Styles from "./WishlistProductCard.module.css";
import { BasketContext } from "./../../../BasketContext";

const WishlistProductCard = props => {
    const [, setBasket] = useContext(BasketContext);

    const handleClick = () => {
        setBasket(prevBasket => {
            let wishlistProds = prevBasket.Wishlist.products;
            let productToMove = wishlistProds.splice(props.index, 1)[0];
            productToMove.quantity = 1;
            prevBasket.Bag.products.push(productToMove);
            prevBasket.Wishlist.products = wishlistProds;
            return { ...prevBasket };
        });
    };

    return (
        <div className={Styles.wishlistProductCard}>
            <div className={Styles.productImageContainer}>
                <img
                    className={Styles.productImage}
                    src={props.productInfo.image}
                    alt="whatever"
                ></img>
            </div>
            <div className={Styles.productInformation}>
                <p>{props.productInfo.brand}</p>
                <p>{props.productInfo.name}</p>
                <p>{props.productInfo.price}</p>
            </div>
            <button className={Styles.addToBagButton} onClick={handleClick}>Add to Bag</button>
        </div>
    );
};

export default WishlistProductCard;

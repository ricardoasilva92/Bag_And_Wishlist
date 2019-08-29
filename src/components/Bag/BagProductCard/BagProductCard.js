import React, { useContext } from "react";
import Styles from "./BagProductCard.module.css";
import { BasketContext } from "../../../BasketContext";

const BagProductCard = props => {
    const [, setBasket] = useContext(BasketContext);

    const handleClick = () => {
        setBasket(prevBasket => {
            const bagProducts = prevBasket.Bag.products;
            let productToMove = bagProducts.splice(props.index, 1)[0];
            prevBasket.Wishlist.products.push(productToMove);
            prevBasket.Bag.products = bagProducts;

            return { ...prevBasket };
        });
    };

    return (
        <div className={Styles.container}>
            <div className={Styles.imageContainer}>
                <img
                    className={Styles.image}
                    src={props.product.image}
                    alt="Gucci X Mickey Mouse tote bag"
                />
            </div>
            <div className={Styles.productInfo}>
                <ul>
                    <li>Brand: {props.product.brand}</li>
                    <li>Name: {props.product.name}</li>
                    <li>Price: {props.product.price}</li>
                    <li>Quantity: {props.product.quantity}</li>
                </ul>
            </div>
            <div className={Styles.addToWishlist}>
                <button type="button" onClick={handleClick}>
                    Add to Wishlist!
                </button>
            </div>
        </div>
    );
};

export default BagProductCard;

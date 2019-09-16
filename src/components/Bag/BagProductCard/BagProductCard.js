import React, { useContext } from "react";
import Styles from "./BagProductCard.module.css";
import { BasketContext } from "../../../BasketContext";

const BagProductCard = props => {
    const [, setBasket] = useContext(BasketContext);

    const handleClick = () => {
        setBasket(prevBasket => {
            let productToMove = prevBasket.Bag.products.splice(
                props.index,
                1
            )[0];
            prevBasket.Wishlist.products.push(productToMove);

            return { ...prevBasket };
        });
    };

    const handleIncreaseQtt = () => {
        setBasket(prevBasket => {
            prevBasket.Bag.products[props.index].quantity += 1;
            return { ...prevBasket };
        });
    };

    const handleDecreaseQtt = () => {
        props.product.quantity === 1
            ? alert("quantitu can't be 0")
            : setBasket(prevBasket => {
                  prevBasket.Bag.products[props.index].quantity -= 1;
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
                    <li className={Styles.quantity}>
                        <span>Quantity: </span>
                        <div >
                            <button className={Styles.quantityButton} onClick={handleIncreaseQtt}>+</button>
                            {props.product.quantity}
                            <button className={Styles.quantityButton} onClick={handleDecreaseQtt}>-</button>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={Styles.addToWishlist}>
                <button type="button" className={Styles.addToWishlistbutton} onClick={handleClick}>
                    Add to Wishlist!
                </button>
            </div>
        </div>
    );
};

export default BagProductCard;

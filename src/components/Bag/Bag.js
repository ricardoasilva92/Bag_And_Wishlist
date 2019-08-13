import React, { Component, useContext } from 'react';
import { BasketContext } from '../../BasketContext';
import Styles from './Bag.module.css'

const Bag = () => {
    const context = useContext(BasketContext);
    console.log(context);
    return (
        <div className={Styles.bag}>
            <ul>
                <li>
                    {context.Bag.product1.name}
                </li>
            </ul>
        </div>
    )
}

export default Bag;
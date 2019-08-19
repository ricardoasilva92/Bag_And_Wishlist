import React, { useState, useContext } from "react";
import { BasketContext } from "../../BasketContext";
import Styles from "./Layout.module.css";
import Bag from "../Bag/Bag";
import Wishlist from "../Wishlist/Wishlist"

const Layout = () => {
  
  return (
    <div className={Styles.layout}>
      <Bag />
      <Wishlist />
    </div>
  );
};

export default Layout;

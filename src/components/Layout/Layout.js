import React, { useState, useContext } from "react";
import { BasketContext } from "../../BasketContext";
import Styles from "./Layout.module.css";
import Bag from "../Bag/Bag";

const Layout = () => {
  
  return (
    <div className={Styles.layout}>
      <Bag />
    </div>
  );
};

export default Layout;

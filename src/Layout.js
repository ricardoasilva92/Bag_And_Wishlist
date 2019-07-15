import React, { useState, useContext } from "react";
import { BasketContext } from "./BasketContext";

const Layout = props => {
  const context = useContext(BasketContext);
  return <div>{context}</div>;
};
export default Layout;

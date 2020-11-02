import React from "react";

import "./cart-dropdown.styles.scss";
import CustomButton from "../customButton/CustomButton.component";

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropDown;

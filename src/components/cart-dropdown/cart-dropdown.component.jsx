import { useContext } from "react";

import "./cart-dropdown.styles.scss";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
      </div>
      <Button>GOT TO CHECKOUT</Button>
    </div>
  );
}
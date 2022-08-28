import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";
import { CartItem } from "../cart-item/cart-item.component";

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} product={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GOT TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
}

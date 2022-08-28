import { useContext } from "react";
import {
  CartIconContainer,
  ItemsCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";

import { CartContext } from "../../contexts/cart.context";

export default function CartIcon() {
  const { setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    setIsCartOpen((prev) => !prev);
  };
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemsCount>{cartCount}</ItemsCount>
    </CartIconContainer>
  );
}

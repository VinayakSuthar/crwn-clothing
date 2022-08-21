import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

export default function CartIcon() {
  const { setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    setIsCartOpen((prev) => !prev);
  };
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={toggleIsCartOpen} />
      <span className="item-count">0</span>
    </div>
  );
}

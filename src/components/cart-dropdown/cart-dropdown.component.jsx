import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";

export default function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-item" />
      <Button>GOT TO CHECKOUT</Button>
    </div>
  );
}

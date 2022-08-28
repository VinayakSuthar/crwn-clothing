import { CartItemContainer, ItemDetails } from "./cart-item.styles";

export const CartItem = ({ product }) => {
  const { name, quantity, price, imageUrl } = product;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ₹{price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

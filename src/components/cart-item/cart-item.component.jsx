import "./cart-item.styles.scss";

export const CartItem = ({ product }) => {
  const { name, quantity, price, imageUrl } = product;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ₹{price}
        </span>
      </div>
    </div>
  );
};

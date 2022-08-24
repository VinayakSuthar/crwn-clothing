import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((item) => {
      return item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  }
  return cartItems.map((item) => {
    return item.id === productToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item;
  });
};

const clearCartItem = (cartItems, cartItemToClear) => {
  const updatedCart = cartItems.filter((item) => {
    return item.id !== cartItemToClear.id;
  });
  return updatedCart;
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
  setCartTotal: () => {},
  cartCount: 0,
});

export default function CartProvider({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  useEffect(() => {
    const totalCartPrice = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * cartItem.price;
    }, 0);
    setCartTotal(totalCartPrice);
  }, [cartItems]);
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, current) => total + current.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// My solution
// const addCartItem = (cartItems, productToAdd) => {
//   for (let item of cartItems) {
//     if (item.id === productToAdd.id) {
//       item.quantity++;
//       return [...cartItems];
//     }
//   }
//   cartItems.push({ ...productToAdd, quantity: 1 });
//   return [...cartItems];
// };
// const quantityDecrement = (product) => {
//   if (product.quantity === 1) {
//     setCartItems(removeItemFromCart(cartItems, product));
//   } else {
//     const updatedCart = cartItems.map((item) => {
//       if (item.id === product.id) {
//         return { ...item, quantity: product.quantity - 1 };
//       }
//       return item;
//     });
//     setCartItems(updatedCart);
//   }
// };

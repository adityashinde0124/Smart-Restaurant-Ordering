import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i._id === item._id);
      if (existing) {
        return prev.map((i) =>
          i._id === item._id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i._id !== id));
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((i) =>
        i._id === id ? { ...i, qty: i.qty + 1 } : i
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i._id === id ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

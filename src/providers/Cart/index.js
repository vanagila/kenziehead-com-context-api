import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addProduct = (product) => {
    const prod = cart.find((item) => item.id === product.id);
    if (prod !== undefined) {
      return;
    }
    setCart([...cart, product]);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeProduct = (product) => {
    const newCart = cart.filter((item) => item !== product);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeAll = () => {
    setCart([]);
    localStorage.clear();
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addProduct, removeProduct, removeAll }}
    >
      {children}
    </CartContext.Provider>
  );
};

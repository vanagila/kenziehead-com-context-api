import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [totalCart, setTotalCart] = useState(0);
  const [cartQty, setCartQty] = useState(0);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addProduct = (product) => {
    const exist = cart.find((prod) => prod.id === product.id);
    if (exist) {
      setCart(
        cart.map((prod) =>
          prod.id === product.id ? { ...exist, qty: exist.qty + 1 } : prod
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeProductByOne = (product) => {
    const exist = cart.find((prod) => prod.id === product.id);
    if (exist.qty === 1) {
      setCart(cart.filter((prod) => prod.id !== product.id));
    } else {
      setCart(
        cart.map((prod) =>
          prod.id === product.id ? { ...exist, qty: exist.qty - 1 } : prod
        )
      );
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeProductCard = (product) => {
    const newCart = cart.filter((prod) => prod !== product);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const removeAll = () => {
    setCart([]);
    localStorage.clear();
  };

  const someProducts = () => {
    const totalPrice = cart.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.qty,
      0
    );
    setTotalCart(totalPrice);
  };

  const someQty = () => {
    const totalQty = cart.reduce(
      (previousValue, currentValue) => previousValue + currentValue.qty,
      0
    );
    setCartQty(totalQty);
  };

  useEffect(() => {
    someProducts();
    someQty();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalCart,
        cartQty,
        setCart,
        addProduct,
        removeProductByOne,
        removeAll,
        removeProductCard,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

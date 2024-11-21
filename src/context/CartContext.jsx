import React, { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save favorites to local storage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Save cart to local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToFavorites = (id) => {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((itemId) => itemId !== id)); // Remove item from favorites
  };

  const addToCart = (id) => {
    if (!cart.includes(id)) {
      setCart([...cart, id]);
    }
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((itemId) => itemId !== id));
  };

  return (
    <CartContext.Provider
      value={{
        favorites,
        cart,
        addToFavorites,
        removeFromFavorites, // Provide removeFromFavorites function
        addToCart,
        removeFromCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

import React, { useState } from "react";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import galleryData from "../assets/galleryData";
import { useCart } from "../context/CartContext.jsx";

const Gallery = () => {
  const { addToFavorites, addToCart } = useCart();
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleFavoriteClick = (id, event) => {
    event.stopPropagation(); // Prevent the click from bubbling up to the Link
    addToFavorites(id);
    setFavorites((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const handleCartClick = (id, event) => {
    event.stopPropagation(); // Prevent the click from bubbling up to the Link
    addToCart(id);
    setCartItems((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const filteredData = galleryData.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="mt-4 text-4xl font-bold mb-3 text-rose-500">Gallery</h1>
      <p className="mb-8 text-lg italic text-gray-700">
        Browse our collection of stunning Victorian paintings and accessories
      </p>
      <div className="mb-6 text-center">
        <label
          htmlFor="category"
          className="mr-2 font-bold text-indigo-950 text-lg">
          Choose a category:
        </label>
        <select
          id="category"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 p-2 rounded bg-gray-100 italic">
          <option value="all">All</option>
          <option value="painting">Paintings</option>
          <option value="teacup">Teacups</option>
          <option value="hat">Hats</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 flex flex-col items-center transition-transform transform shadow-2xl hover:scale-105 bg-gray-50">
            <Link
              to={`/product/${item.id}`}
              className="flex flex-col items-center">
              <img
                src={item.image}
                alt={`Victorian-paint-${item.id}`}
                className="w-full h-80 object-cover rounded"
              />
              <p className="mt-2 font-bold text-emerald-700">{item.price}</p>
            </Link>
            <div className="flex justify-between w-full mt-2">
              <HeartIcon
                className={`h-6 w-6 cursor-pointer transition duration-200 ${
                  favorites.includes(item.id) ? "text-red-700" : "text-gray-600"
                }`}
                onClick={(event) => handleFavoriteClick(item.id, event)} // Pass event
              />
              <ShoppingCartIcon
                className={`h-6 w-6 cursor-pointer transition duration-200 ${
                  cartItems.includes(item.id)
                    ? "text-green-600"
                    : "text-gray-600"
                }`}
                onClick={(event) => handleCartClick(item.id, event)} // Pass event
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

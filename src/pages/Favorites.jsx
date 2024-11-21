import React from "react";
import { useCart } from "../context/CartContext.jsx";
import galleryData from "../assets/galleryData.js";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useCart(); // Get favorites and removal function from context

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-rose-500">Your Favorites</h1>
      {favorites.length === 0 ? (
        <p className="italic text-gray-700">You have no favorite items yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.map((id) => {
            const item = galleryData.find((img) => img.id === id); // Find the item in galleryData
            return item ? ( // Check if the item exists
              <div
                key={item.id}
                className="border rounded-lg p-4 flex flex-col items-center relative bg-gray-100">
                {/* Remove Button (X) */}
                <button
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                  onClick={() => removeFromFavorites(item.id)} // Call function to remove from favorites
                >
                  x
                </button>
                <img
                  src={item.image}
                  alt={`Favorite-paint-${item.id}`}
                  className="w-full h-48 object-cover rounded"
                />
                <p className="mt-2 font-semibold">{item.price}</p>
              </div>
            ) : null;
          })}
        </div>
      )}
    </div>
  );
};

export default Favorites;

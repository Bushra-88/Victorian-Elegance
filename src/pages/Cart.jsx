import React, { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import galleryData from "../assets/galleryData"; // Import to access image details

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Get cart items and remove function from context
  const [quantities, setQuantities] = useState({}); // State to manage item quantities

  const handleIncrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => {
      const newQuantities = { ...prev };
      if (newQuantities[id] > 1) {
        newQuantities[id] -= 1; // Decrease quantity only if more than 1
      }
      return newQuantities;
    });
  };

  const handleDelete = (id) => {
    console.log(`Deleting item with ID: ${id}`);
    removeFromCart(id); // Call the context function to remove the item
    setQuantities((prev) => {
      const newQuantities = { ...prev };
      delete newQuantities[id]; // Remove item from quantities
      return newQuantities; // Return updated quantities
    });
  };

  const handleOrderNow = () => {
    alert("Order completed successfully!");
  };

  const totalPrice = cart.reduce((total, id) => {
    const item = galleryData.find((img) => img.id === id);
    return item
      ? total + parseFloat(item.price.replace("€ ", "")) * (quantities[id] || 1)
      : total;
  }, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-rose-500">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="italic text-gray-700">Your cart is currently empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {cart.map((id) => {
            const item = galleryData.find((img) => img.id === id);
            return item ? (
              <div
                key={item.id}
                className="border rounded-lg p-4 flex flex-col items-center relative bg-gray-100">
                <img
                  src={item.image}
                  alt={`Cart-item-${item.id}`}
                  className="w-full h-48 object-cover rounded "
                />
                {/* Delete button positioned at the top right */}
                <button
                  className="absolute top-2 right-2 bg-red-800 text-white rounded-full w-8 h-8 flex items-center justify-center"
                  onClick={() => handleDelete(item.id)}>
                  x
                </button>

                <p className="mt-2 font-semibold">{item.price}</p>
                <div className="flex justify-between items-center w-full mt-2">
                  <button
                    className="bg-red-700 text-white p-1 rounded w-8"
                    onClick={() => handleDecrement(item.id)}>
                    -
                  </button>
                  <span className="mx-2">{quantities[item.id] || 1}</span>
                  <button
                    className="bg-green-700 text-white p-1 rounded w-8"
                    onClick={() => handleIncrement(item.id)}>
                    +
                  </button>
                </div>
              </div>
            ) : null;
          })}
        </div>
      )}
      <div className="mt-4 text-xl font-bold">
        Total Price: € {totalPrice.toFixed(2)}
      </div>
      <button
        onClick={handleOrderNow}
        className="mt-4 bg-rose-800
        hover:bg-rose-400 text-white px-4 py-2 rounded">
        Order Now
      </button>
    </div>
  );
};

export default Cart;

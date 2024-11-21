import React from "react";
import { useParams } from "react-router-dom";
import galleryData from "../assets/galleryData";
import { useCart } from "../context/CartContext";

const Product = () => {
  const { id } = useParams(); // get the product ID from the URL parameters
  const item = galleryData.find((img) => img.id === parseInt(id)); // find the item in galleryData
  const { addToCart } = useCart();

  if (!item) {
    return <p> Product not found</p>;
  }

  const handleOrderNow = () => {
    addToCart(item.id);
    alert("Order completed successfully!");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
      <img
        src={item.image}
        alt={`product-${item - id}`}
        className="w-full h-100 object-cover rounded"
      />
      <p className="mt-4  text-emerald-700 text-xl font-semibold">
        {item.price}
      </p>
      <button
        onClick={handleOrderNow}
        className="mt-4 bg-rose-800  hover:bg-rose-400 text-white font-md px-4 py-2 rounded">
        Order Now
      </button>
    </div>
  );
};

export default Product;

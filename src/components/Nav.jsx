import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline"; // Importing the ShoppingCartIcon

const Nav = () => {
  return (
    <nav className="bg-gray-700 text-white mb-4">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl text-rose-400 hover:text-pastelGreen">
          Victorian Elegance
        </h1>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className="hover:text-pastelYellow transition text-pastelPink font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="hover:text-pastelYellow transition text-pastelPink font-bold">
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-pastelYellow transition text-pastelPink font-bold">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-pastelYellow transition text-pastelPink font-bold">
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className="hover:text-pastelYellow transition text-pastelPink font-bold">
              Favorites
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-pastelYellow transition text-pastelPink   flex items-center">
              <ShoppingCartIcon className="h-6 w-6 mr-1" />{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

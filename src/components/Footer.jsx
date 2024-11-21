import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importing from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="mb-2">
          © 2024 Victorian Elegance. Created by{" "}
          <span className="text-rose-400 font-bold">Bushra Alhusaini.</span>
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/bushra-alhusaini-4a965228b/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-rose-400 transition">
            <FaLinkedin className="h-6 w-6 mr-1" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Bushra-88/Victorian-Elegance"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-rose-400 transition">
            <FaGithub className="h-6 w-6 mr-1" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

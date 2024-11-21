import React from "react";
import homeImage from "../assets/images/home-image-1.jpg";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      {" "}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full">
        <img
          src={homeImage}
          alt="Victorian Elegance"
          className="w-full mb-4 md:mb-0 md:w-1/2 h-auto object-cover rounded"
        />
        <div className="md:w-1/2 mt-4  ml-10 md:mt-0 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4 text-rose-500">
            Welcome to Victorian Elegance
          </h1>
          <p className="text-lg italic text-gray-700 ">
            Step into a world of timeless beauty, where exquisite Victorian art,
            delicate tea sets, and elegant accessories await you. Discover the
            charm and sophistication that every lady deserves, immersing
            yourself in a unique shopping experience that captures the essence
            of the Victorian era.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

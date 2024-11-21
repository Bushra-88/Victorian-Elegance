import React from "react";
import aboutImage from "../assets/images/about-image.jpg";

const About = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-4">
        <img
          src={aboutImage}
          alt="Victorian Ladies"
          className="w-full md:w-1/2 h-auto object-cover rounded-lg"
        />
        <div className="md:w-1/2 md:ml-8 mt-4 md:mt-0 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4 text-rose-500">About Us</h1>
          <p className="text-lg italic text-gray-700">
            At Victorian Elegance, we celebrate the artistry and sophistication
            of the Victorian era. Our collection includes exquisite paintings,
            delicate tea sets, and elegant accessories, all designed to bring a
            touch of historic charm to your life. We strive to provide our
            customers with high-quality products that reflect the beauty and
            craftsmanship of a bygone era. Whether you are a lover of art or
            just looking for the perfect gift, Victorian Elegance offers a
            diverse range of products that cater to all tastes and preferences.
            Join us on this enchanting journey as we bring the splendor of the
            Victorian era into modern living spaces. We welcome you to explore
            our collection and find the perfect piece that resonates with you,
            adding a touch of elegance and sophistication to your home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

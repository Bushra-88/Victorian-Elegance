import React from "react";

const Contact = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage: "url('/src/assets/images/contact-image.jpg')",
      }}>
      <div className="relative container mx-auto p-4 flex items-center justify-center h-full">
        <form className="bg-white bg-opacity-50 rounded-lg p-8 shadow-lg max-w-xl w-full">
          {" "}
          {/* Making the form wider */}
          <h2 className="text-2xl font-bold mb-4 text-rose-500">Contact Us</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 p-2 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 font-bold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 p-2 rounded mt-1"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 p-2 rounded mt-1"
              required></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-rose-800 text-white font-bold p-2 rounded hover:bg-rose-400
            ">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

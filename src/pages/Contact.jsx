import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="bg-[#E97451] relative">
      {/* First Section */}
      <div className="absolute top-0 left-0 h-screen">
        <img
          src="/illustrations/borderTopLeft.svg"
          alt="Left Illustration"
          className="h-full"
        />
      </div>

      <div className="absolute top-0 right-0 h-screen">
        <img
          src="/illustrations/borderTopRight.svg"
          alt="Right Illustration"
          className="h-full"
        />
      </div>

      <div
        id="about"
        className="min-h-screen flex flex-col items-center px-2 md:px-8 lg:px-16 overflow-hidden relative "
      >
        <Navbar />
        <h1 className="text-white text-4xl font-bold mt-8">About Us</h1>
        <p className="text-white text-center mt-4">
          This is the first section of the page.
        </p>
      </div>
    </div>
  );
};

export default Contact;

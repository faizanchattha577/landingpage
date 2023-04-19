import React from "react";

const Hero = () => {
  return (
    <div Name='Home' className="text-white bg-black">
      <div className="max-w-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          Pakistan's premier digital healthcare
        </p>
        <h1 className="md:text-7xl text-white sm:text-6xl text-4xl font-bold md:py-6 ">
          Local Healthcare market
        </h1>
        <div className="flex justify-center item-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 ">
            Fast , Flexible , Easy to pay
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 p-3">
          At your Quick service Always 24/7 . Trust Us We are here to help you.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";

const Hero = () => {
  return (
   <div className="hidden lg:flex flex-col p-2 m-2 mt-4 bg-[#e0d9cf] rounded-md shadow-lg">
  <div className="w-full">
    <div className="p-2 flex justify-center overflow-hidden">
      <img
        src="\download.jpg"
        className="w-full h-[400px] object-cover object-top rounded-md shadow-lg"
        alt="hero-image"
      />
    </div>
  </div>
  <div className="flex flex-col gap-2 ml-4 pb-2">
    <h2 className="text-xl font-normal">Discover Your Inner Peace</h2>
    <p>
      Join us for a series of wellness retreats designed to help you
      find tranquility and rejuvenation.
    </p>
  </div>
</div>

  );
};

export default Hero;

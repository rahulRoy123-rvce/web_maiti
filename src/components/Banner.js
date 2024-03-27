import React from 'react';
import img from '../assets/climate.jpg'

const Banner = () => {
  return (
    <section
      className="bg-cover bg-center py-8 italic font-palatino mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:h-screen lg:items-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center text-white">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold">
            Climate Tech <br className="lg:hidden" />
            <span className="block lg:inline text-[#133009]">
              Maiti Labs <br className="hidden lg:inline" />
               
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;

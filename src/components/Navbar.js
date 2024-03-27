import React, { useState } from 'react';
// import ss1 from '../images/ss1.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#133009] sticky top-0 z-50">
      <header className="text-white body-font">
        <div className="container mx-auto flex p-5 items-center justify-between">
          <a className="flex title-font font-medium items-center text-white">
            <span className="text-xl">DeCarbonn</span>
          </a>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <nav className={`md:flex md:items-center md:justify-center ${isOpen ? 'block' : 'hidden'}`}>
            <a className="block mr-5 hover:text-white">Home</a>
            <a className="block mr-5 hover:text-white">Project</a>
            <a className="block mr-5 hover:text-white">About</a>
            <button className="bg-white mr-5 text-black p-4 rounded-lg">Connect</button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

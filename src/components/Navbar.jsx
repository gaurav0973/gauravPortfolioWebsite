import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full h-20 bg-[#233554] flex items-center justify-between px-10 md:px-20 z-50">

      {/* Left Logo */}
      <div className="flex items-center">
        <a href="" className="flex items-center text-[#FF6B6B] font-bold text-2xl">
          <div className="border border-[#FF6B6B] text-[#FF6B6B] px-5 py-2 rounded-md text-sm hover:bg-[#FF6B6B] hover:text-white transition">
            Gaurav Maurya
          </div>
        </a>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center space-x-10 rounded-2xl">

        <a href="#about" className="flex items-center gap-1 text-sm text-white hover:text-[#FF6B6B] transition">
          <span className="text-[#FF6B6B] text-xs">01.</span>
          About
        </a>

        <a href="#experience" className="flex items-center gap-1 text-sm text-white hover:text-[#FF6B6B] transition">
          <span className="text-[#FF6B6B] text-xs">02.</span> 
          Experience
        </a>

        <a href="#work" className="flex items-center gap-1 text-sm text-white hover:text-[#FF6B6B] transition">
          <span className="text-[#FF6B6B] text-xs">03.</span> 
          Work
        </a>

        <a href="#contact" className="flex items-center gap-1 text-sm text-white hover:text-[#FF6B6B] transition">
          <span className="text-[#FF6B6B] text-xs">04.</span> 
          Contact
        </a>


        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
          className="border border-[#FF6B6B] text-[#FF6B6B] px-5 py-2 rounded-md text-sm hover:bg-[#FF6B6B] hover:text-white transition"
        >
          Resume
        </a>

      </nav>

    </header>
  );
};

export default Navbar;

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';
import { FaXTwitter } from "react-icons/fa6";

const SocialSidebar = () => {
  return (
    <div className="hidden lg:flex flex-col items-center fixed left-0 top-0 h-screen w-16 bg-[#EAE1DC] justify-center space-y-6 z-40">
      
      {/* Vertical Line */}
      <div className="w-[1px] h-32 bg-gray-500"></div>

      {/* Github */}
      <a href="https://github.com/gaurav0973" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#FF6B6B] transition">
        <FaGithub size={24} />
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/gaurav-maurya0973/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#FF6B6B] transition">
        <FaLinkedin size={24} />
      </a>

      {/* Twitter */}
      <a href="https://www.linkedin.com/in/gaurav-maurya0973/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#FF6B6B] transition">
        <FaXTwitter size={24} />
      </a>

      {/* HashNode */}
      <a href="https://hashnode.com/@gaurav009" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#FF6B6B] transition">
        <SiHashnode size={24} />
      </a>

      {/* Vertical Line */}
      <div className="w-[1px] h-32 bg-gray-500"></div>

    </div>
  );
};

export default SocialSidebar;

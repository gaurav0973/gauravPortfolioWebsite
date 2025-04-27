import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiHashnode } from 'react-icons/si'
import { FaXTwitter } from "react-icons/fa6"
import { SiLeetcode } from "react-icons/si"
import { SiGeeksforgeeks } from "react-icons/si"

const SocialSidebar = () => {
  return (
    <div className="hidden lg:flex flex-col items-center fixed left-0 top-0 h-screen w-16 bg-[#EAE1DC] justify-center space-y-6 z-40">

      {/* Github */}
      <a href="https://github.com/gaurav0973" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#010409] transition">
        <FaGithub size={24} />
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/gaurav-maurya0973/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#0B66BE] transition">
        <FaLinkedin size={24} />
      </a>

      {/* Twitter */}
      <a href="https://x.com/gauravkmaurya09" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#01A3F2] transition">
        <FaXTwitter size={24} />
      </a>

      {/* HashNode */}
      <a href="https://hashnode.com/@gaurav009" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#2962FF] transition">
        <SiHashnode size={24} />
      </a>

      {/* Leetcode */}
      <a href="https://leetcode.com/u/gaurav972003/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#FFA116] transition">
        <SiLeetcode  size={24} />
      </a>

      {/* GeekForGeeks */}
      <a href="https://www.geeksforgeeks.org/user/gaurav009/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#2F8D46] transition">
        <SiGeeksforgeeks   size={24} />
      </a>

      {/* Vertical Line */}
      <div className="w-[1px] h-32 bg-gray-500"></div>

    </div>
  );
};

export default SocialSidebar;

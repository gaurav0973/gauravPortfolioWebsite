import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-start h-screen p-8 bg-[#EAE1DC]">

      <h1 className="text-[#E85A4F] font-mono text-lg mb-4">
        Hi, my name is
      </h1>

      <h2 className="text-6xl font-bold text-gray-800 mb-4">
        Gaurav Kumar Maurya
      </h2>

      <h3 className="text-4xl font-bold text-gray-700 mb-6">
        I am a Full Stack Developer
      </h3>

      <p className="text-gray-600 max-w-xl mb-8">
        I'm a Computer Science undergraduate and an enthusiastic developer who loves building modern web applications, SaaS platforms, and exploring creative tech solutions. Currently, I'm seeking exciting opportunities to collaborate and innovate in the world of technology.
      </p>

      <a
        href="mailto:gauravkMaurya09@gmail.com"
        className="text-[#E85A4F] border border-[#E85A4F] font-mono py-3 px-8 rounded-md hover:bg-[#F9C8C1] transition-colors duration-300"
      >
        Get In Touch
      </a>

    </section>
  );
};

export default Hero;

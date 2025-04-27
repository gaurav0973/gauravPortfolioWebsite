import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-start h-screen p-8 bg-[#EAE1DC]">
      
      <h1 className="text-green-500 font-mono text-sm mb-4">
        Hi, my name is
      </h1>

      <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
        Gaurav Kumar Maurya.
      </h2>

      <h3 className="text-3xl sm:text-5xl font-bold text-gray-700 mb-6">
        I craft digital solutions with code.
      </h3>

      <p className="text-gray-600 max-w-xl mb-8">
        I'm a passionate developer specializing in building modern web applications and SAAS solutions. Currently exploring new opportunities and exciting tech projects.
      </p>

      <a
        href="mailto:your-email@example.com"
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition"
      >
        Get In Touch
      </a>
      
    </section>
  );
};

export default Hero;

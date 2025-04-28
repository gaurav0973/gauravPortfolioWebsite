import React, { useEffect, useRef } from "react";

const Contact = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    // Simple fade-in animation on component mount
    const element = revealContainer.current;
    if (element) {
      element.classList.add("animate-fadeIn"); // You can add a custom class or use Tailwind's built-in animations
    }
  }, []);

  return (
    <section
      id="contact"
      className="max-w-2xl mx-auto py-16 text-center"
      ref={revealContainer}
    >
      {/* Overline Text */}
      <span className="block text-[#FF6B6B] text-lg font-mono mb-5">
        What’s Next?
      </span>

      {/* Title */}
      <h2 className="text-4xl sm:text-5xl font-bold mb-6">Get In Touch</h2>

      {/* Description */}
      <p className="text-lg text-gray-700 mb-6">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>

      {/* Email Link */}
      <a
        href="mailto:gauravkMaurya09@gmail.com"
        className="text-[#E85A4F] border border-[#E85A4F] font-mono py-3 px-8 rounded-md hover:bg-[#F9C8C1] transition-colors duration-300"
      >
        Say Hello 👋🏾
      </a>
    </section>
  );
};

export default Contact;

import React from 'react';

const About = () => {
  
  const skills = [
    'JavaScript (ES6+)', 
    'React', 
    'Node.js',
    'PostgresSQL(Prisma ORM)',
    'Express.js',
    'MongoDB(Mongoose ORM)',
    'Docker',
    'Python',
    'SQL',
    'Git & GitHub',
    'Tailwind CSS'
  ];

  return (
    <section id="about" className="bg-[#EAE1DC] py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 inline-block text-gray-800">
          <span className="text-[#FF6B6B] text-3xl">01. </span>
          About Me
        </h2>

        <div className="grid md:grid-cols-5 gap-8">
          
          {/* Text Section */}
          <div className="md:col-span-3">
            <p className="mb-4 text-gray-700">
              Hello! I'm Gaurav, a passionate software developer with a keen interest in building
              innovative solutions. My journey in programming began during my college years,
              and I've been hooked ever since.
            </p>

            <p className="mb-4 text-gray-700">
              Currently, I'm focused on developing full-stack applications and exploring
              new technologies. I love working with modern web technologies and creating
              seamless user experiences.
            </p>

            <p className="mb-6 text-gray-700">Here are the technologies I work with:</p>

            <ul className="grid grid-cols-2 gap-2 list-none">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center text-gray-700 mb-2">
                  <span className="text-[#2962FF] mr-2">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="md:col-span-2 flex justify-center items-start">
            <div className="relative group w-60">
              <img 
                src="https://github.com/gaurav0973.png"
                alt="Profile" 
                className="rounded-lg transition duration-300 hover:transform hover:scale-105" 
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;

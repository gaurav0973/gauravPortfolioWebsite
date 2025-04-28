import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    githubLink: "https://github.com",
    liveLink: "https://yourportfolio.com",
    image: "https://github.com/gaurav0973.png",
  },
  {
    title: "Weather App",
    description: "A simple app that shows weather data based on your location.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    githubLink: "https://github.com/yourname/weather-app",
    liveLink: "https://weatherapp.com",
    image: "https://github.com/gaurav0973.png",
  },
];

const FeaturedProjects = () => {
  return (
    <section id="work" className="bg-[#EAE1DC] py-20 px-6">
      <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 inline-block text-gray-800">
          <span className="text-[#FF6B6B] text-3xl">03. </span>
          Featured Projects
        </h2>

        <div className="flex flex-col space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center md:space-x-10"
            >
              {/* Project Image */}
              <div className="md:w-1/2">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 w-min"
                  />
                </a>
              </div>

              {/* Project Info */}
              <div className="md:w-1/2 mt-6 md:mt-0">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Tech used */}
                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((techItem, idx) => (
                    <li
                      key={idx}
                      className="text-sm bg-gray-200 rounded px-3 py-1"
                    >
                      {techItem}
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
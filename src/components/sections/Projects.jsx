// Projects.jsx
import React, { useState } from "react";
import { FaFolder, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    title: "Project One",
    description: "This is a description for project one.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/",
    external: "https://example.com/",
  },
  {
    title: "Project Two",
    description: "This is a description for project two.",
    tech: ["HTML", "CSS", "JS"],
    github: "https://github.com/",
    external: "https://example.com/",
  },
  {
    title: "Project Three",
    description: "This is a description for project three.",
    tech: ["Node", "Express", "MongoDB"],
    github: "https://github.com/",
    external: "https://example.com/",
  },
  {
    title: "Project Four",
    description: "This is a description for project four.",
    tech: ["Python", "Flask"],
    github: "https://github.com/",
    external: "https://example.com/",
  },
  {
    title: "Project Five",
    description: "This is a description for project five.",
    tech: ["Next.js", "Tailwind"],
    github: "https://github.com/",
    external: "https://example.com/",
  },
  {
    title: "Project Six",
    description: "This is a description for project six.",
    tech: ["TypeScript", "React"],
    github: "https://github.com/",
    external: "https://example.com/",
  },
  {
    title: "Project Seven",
    description: "This is a description for project seven.",
    tech: ["Django", "PostgreSQL"],
    github: "https://github.com/",
    external: "https://example.com/",
  },
];

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const GRID_LIMIT = 6;
  const projectsToShow = showMore ? projectsData : projectsData.slice(0, GRID_LIMIT);

  return (
    <section className="flex flex-col items-center px-6 py-12">
      <h2 className="text-3xl md:text-4xl text-lightest-slate font-bold mb-4">
        Other Noteworthy Projects
      </h2>

      <a href="/archive" className="text-green-400 text-sm font-mono underline mb-10">
        View the archive
      </a>

      <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {projectsToShow.map((project, index) => (
          <li
            key={index}
            className="bg-light-navy rounded-lg p-6 flex flex-col hover:-translate-y-2 transition-all duration-300 shadow-md"
          >
            <header className="flex items-center justify-between mb-6">
              <FaFolder className="text-green-400 text-3xl" />
              <div className="flex space-x-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-green-400">
                    <FaGithub size={20} />
                  </a>
                )}
                {project.external && (
                  <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-light-slate hover:text-green-400">
                    <FaExternalLinkAlt size={20} />
                  </a>
                )}
              </div>
            </header>

            <h3 className="text-lightest-slate text-xl mb-3 font-semibold">
              <a href={project.external} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3>

            <p className="text-light-slate text-base mb-5">{project.description}</p>

            <footer className="mt-auto">
              <ul className="flex flex-wrap text-xs font-mono text-light-slate space-x-3">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </footer>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-12 px-6 py-3 bg-light-navy border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-dark-navy transition-all duration-300 font-mono text-sm"
      >
        Show {showMore ? "Less" : "More"}
      </button>
    </section>
  );
};

export default Projects;

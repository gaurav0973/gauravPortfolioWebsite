import React, { useState } from "react";

const jobsData = [
  {
    title: "Software Developer Trainee",
    company: "Astrea Solution",
    location: "Remote",
    range: "May 2024 - June 2024",
    url: "https://google.com",
    description: [
      "Helps to maintain the lms that is being used in here",
      "Collaborated with cross-functional teams.",
      "Worked closely with designers and PMs.",
    ],
  },
  {
    title: "Active Member",
    company: "Rotract Club",
    location: "JUIT Waknagaht, Himachal Pradesh",
    range: "Aug 2023 – Present",
    url: "https://google.com",
    description: [
      "Organised events and workshops.",
      "Collaborated with cross-functional teams.",
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="bg-[#EAE1DC] py-20 px-6">
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 inline-block text-gray-800">
        <span className="text-[#FF6B6B] text-3xl">02.</span> My
          Professional Experiences
        </h2>

        <div className="flex flex-col md:flex-row">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:w-1/4 space-y-2">
            {jobsData.map((job, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left px-4 py-2 font-mono text-sm rounded-md ${
                  activeTab === index
                    ? "bg-white text-red-500 font-bold shadow-md"
                    : "text-gray-500 hover:text-red-500"
                }`}
              >
                {job.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="md:w-3/4 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {jobsData[activeTab].title}{" "}
              <span className="text-red-500">@</span>{" "}
              <a
                href={jobsData[activeTab].url}
                className="text-red-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {jobsData[activeTab].company}
              </a>
            </h3>
            <p className="text-sm font-mono text-gray-500 mb-6">
              {jobsData[activeTab].range}
            </p>
            <ul className="list-none space-y-4">
              {jobsData[activeTab].description.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-gray-600 text-[15px]"
                >
                  <span className="text-red-400 mr-3 mt-1">🔴</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

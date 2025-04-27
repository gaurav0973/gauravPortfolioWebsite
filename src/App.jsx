import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import SocialSidebar from './components/SocialSideBar.jsx'
import Experience from './components/sections/Experience.jsx'
import Projects from './components/sections/Projects.jsx'
import FeaturedProjects from './components/sections/FeaturedProject.jsx'
import Contact from './components/sections/ContactUs.jsx'

function App() {
  return (
    <div className="bg-[#EAE1DC]">
      <div className="relative">
        <Navbar />
        <SocialSidebar />
        <main className="ml-16 space-y-24">
          <Hero />
          <About />
          <Experience />
          <section className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">
              <span className="text-[#FF6B6B] text-3xl">03. </span>
              Featured Projects
            </h2>
            <FeaturedProjects />
          </section>
          <section className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">
              <span className="text-[#FF6B6B] text-3xl">04. </span>
              Other Projects
            </h2>
            <Projects />
          </section>
          <section className="max-w-4xl mx-auto px-6 pb-20">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">
              <span className="text-[#FF6B6B] text-3xl">05. </span>
              Get In Touch
            </h2>
            <Contact />
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
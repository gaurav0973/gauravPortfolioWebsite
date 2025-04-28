import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import SocialSidebar from './components/SocialSideBar'
import Experience from './components/sections/Experience'
import FeaturedProjects from './components/sections/FeaturedProject'
import Projects from './components/sections/Projects'
import Contact from './components/sections/ContactUs'

function App() {
  return (
    <div className="bg-[#EAE1DC]">
      <Navbar />
      <SocialSidebar />
      <main className="ml-16 space-y-24 py-12 ">
        <Hero />
        <About />
        <Experience />
        <FeaturedProjects />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
import React from 'react'
import Navbar from './components/Navbar'
import SocialSidebar from './components/SocialSideBar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'

function App() {
  return (
    <div>
      <div className="relative">
        <Navbar />
        <SocialSidebar />
        <main className="ml-16">
          <Hero />
        </main>
      </div>
      <About />
    </div>
  )
}

export default App
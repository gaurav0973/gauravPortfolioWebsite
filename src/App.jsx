import React from 'react'
import Navbar from './components/Navbar,jsx'

import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import SocialSidebar from '../components/SocialSidebar.jsx'

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
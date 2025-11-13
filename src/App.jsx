import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-6 py-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}
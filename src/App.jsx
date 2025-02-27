import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Pricing from './sections/Pricing'
import Testimonials from './sections/Testomonials'
import Download from './sections/Download'
import Questions from './sections/Questions'


const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Questions />
      <Testimonials />
      <Download />
    </main>
  )
}

export default App
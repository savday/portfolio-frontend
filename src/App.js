import React from 'react'
import { About, Footer, Hero, Experience, Work } from './container'
import { Navbar } from './components'
import "./App.scss"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Experience/>
      <Footer />
    </div>
  )
}

export default App;
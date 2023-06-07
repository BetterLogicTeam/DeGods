import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Token_info from './Components/Token_info/Token_info'
import Roadmap from './Components/Roadmap/Roadmap'
import Footer from './Components/Footer/Footer'
import Faq from './Components/Faq/Faq'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Token_info />
      <Roadmap />
      <Faq />
      <Footer />
    </>
  )
}

export default App

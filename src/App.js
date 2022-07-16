import React from 'react'
import BackToTop from './components/BackToTop'
import Contact from './components/contact/Contact'
import Footer from './components/Footer'
import Intro from './components/intro/Intro'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Work from './components/Work'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Intro/>
    <Services/>
    <Work/>
    <Contact/>
    <Footer/>
    <BackToTop/>
    </div>
  )
}

export default App
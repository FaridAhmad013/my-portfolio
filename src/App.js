import React from 'react'
import BackToTop from './components/BackToTop'
import Contact from './pages/contact/Index'
import Footer from './layouts/Footer'
import Intro from './pages/intro/Index'
import Navbar from './layouts/Navbar'
import Services from './pages/services/Index'
import Work from './pages/work/Index'

const App = () => {
  return (
    <div className='selection:bg-indigo-300'>
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
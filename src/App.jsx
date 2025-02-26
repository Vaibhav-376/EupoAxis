import { useState } from 'react'
import Navbar from './components/Navbar'

import HeroSectionNew from './components/HeroSectionNew'
import Strip from './components/Strip'
import WhyWeBest from './components/WhyWeBest'
import AboutUs from './components/AboutCompany'
import OurPrograms from './components/OurPrograms'
import Footer from './components/Layouts/Footer'


function App() {

  return (
    <div className='bg-gradient-to-r from-blue-600 to-purple-700'>
      <Navbar />
      <HeroSectionNew />
      <Strip />
      <WhyWeBest/>
      <AboutUs/>
      <OurPrograms/>
      <Footer/>
    </div>
  )
}

export default App

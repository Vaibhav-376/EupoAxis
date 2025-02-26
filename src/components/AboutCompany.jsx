import React from 'react'
import aboutCompany from "../assets/aboutCompany.png"

const AboutUs = () => {
  return (
    <section className='py-5'>
      <div className='container mx-auto text-center text-white px-4'>
        <h2 className='text-white font-bold text-6xl leading-tight'>About <span className='text-[#FFDD57]'> Company</span></h2>
        <p className='mt-5 text-lg md:text-2xl font-semibold text-white'>The Indira Gandhi Computer Saksharta Mission (IGCSM), founded in 2008, aims to Educate, Enable, and Empower. Operating across 21 states, IGCSM has impacted more than 3 Lakh lives by focusing on educating children, enhancing youth skills, and empowering girls and young women. Individual and governmental efforts are crucial in bridging this gap for India's successful transformation.</p>
      </div>
      <div>
        <img src={aboutCompany} alt="About Company Image" className='mx-auto  w-auto h-auto mt-5 rounded-3xl p-4' />
      </div>
    </section>
  )
}

export default AboutUs
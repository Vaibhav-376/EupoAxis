import React from 'react'
import Navbar from '../Navbar'

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className='flex bg-gradient-to-r from-blue-500 to-purple-600 text-white py-30 '>
                <div className='mx-auto text-center'>
                    <h2 className='font-bold  text-5xl text-[#FFDD57] leading-tight'>About Us</h2>
                    <p className='mx-10 md:mx-20 mt-5 text-2xl'>"Skill is the unified force of experience, intellect and passion in their operation.” John Ruskin.</p>
                </div>
            </div>
            <div className='history'>
                <h2>EuroAxis History</h2>
            </div>

        </>
    )
}

export default AboutUs
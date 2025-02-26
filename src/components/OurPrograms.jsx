import React from 'react'
import fashionDesigning from "../assets/fashionDesign.jpg"
import SamplingTailor from "../assets/tailoring-sampling.jpg"
import PlasticProcessing from "../assets/plasticProcessing.jpg"

const OurPrograms = () => {

    const ourPrograms = [
        { id: "1", programImage:  fashionDesigning , programName: "Fashion Designing", programDescription: "Fashion designing is the art of creating clothing and accessories that blend creativity, style, and functionality. Designers use color, fabric, and construction techniques to craft garments that reflect trends and personal expression. The field constantly evolves, driven by culture and innovation." },
        { id: "2", programImage:  SamplingTailor , programName: "Sampling Tailor", programDescription: "A sampling tailor creates prototype garments based on designers' sketches, focusing on fit, fabric, and construction. They play a key role in ensuring the design meets quality standards before mass production." },
        { id: "3", programImage:  PlasticProcessing , programName: "Plastic Processing", programDescription: "Plastic processing involves shaping plastic materials into products through techniques like injection molding, extrusion, and thermoforming. It enables the mass production of durable and versatile items used in various industries." }
    ]

    return (
        <section className='py-4'>
            <div className='container mx-auto text-center px-4'>
                <h2 className='text-5xl md:text-6xl font-bold text-white'>Our <span className='text-[#FFDD57]'>Expertise</span></h2>
            </div>
            <div className='flex flex-wrap gap-10 mt-10 justify-center '>
                {ourPrograms.map((programs) => (
                    <div key={programs.id} className='bg-white p-4 rounded-lg shadow-lg max-w-xs w-full text-center'>
                        <img src={programs.programImage} alt="" className='w-96 h-56 rounded-2xl mb-2' />
                        <h1 className='text-2xl font-bold text-blue-700 mb-2'>{programs.programName}</h1>
                        <p className='text-gray-700'>{programs.programDescription}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurPrograms
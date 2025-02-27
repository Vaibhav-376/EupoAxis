import React from 'react';
// import starImage from "../assets/starImage.png";
import star from "../assets/starImage.png"


const HeroSectionNew = () => {
    return (
        <div className="flex min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 -mt-24">
            <div className="flex flex-col justify-center md:mt-20 ml-3 md:ml-32 md:mr-20 space-y-6">
                <h1 className="font-bold md:text-6xl lg:text-7xl text-3xl leading-tight">
                    Online <span className="text-[#FFDD57] font-extrabold">Learning</span> you can access <br /> anywhere easily!
                </h1>
                <p className="text-lg md:text-xl text-white/80">Join millions of learners and take your skills to the next level. Start today!</p>
                <a href={'/'}><button className="bg-[#525FE1] text-white px-8 py-3 rounded-lg text-xl font-semibold transition-all hover:bg-[#3c48b0] hover:scale-105">
                    Get Started
                </button></a>
            </div>

            <div className="md:mr-20 lg:mr-20 ml-4 md:mt-28 mr-4 flex justify-center items-center">
                <img
                    src={star}
                    alt="Educational Image"
                    className="w-full md:w-3/4 lg:w-2/3 h-auto transform transition-all duration-700 ease-in-out animate-pulse hover:animate-bounce"
                />
            </div>
        </div>
    );
}

export default HeroSectionNew;

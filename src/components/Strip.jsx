import React from 'react';

const Strip = () => {
    return (
        <div className='w-full h-auto bg-gradient-to-r from-red-800 to-red-600 text-white font-bold md:text-3xl xs:text-2xl md:flex md:space-x-20 md:justify-center md:items-center xs:flex-col space-y-6 py-8'>

            <div className='flex flex-col items-center text-center '>
                <h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#FFDD57]'>
                    150+
                </h1>
                <p className='text-xl md:text-2xl font-semibold'>
                    Courses
                </p>
            </div>


            <div className='flex flex-col items-center text-center'>
                <h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#FFDD57]'>
                    250
                </h1>
                <p className='text-xl md:text-2xl font-semibold'>
                    Instructors
                </p>
            </div>
            <div className='flex flex-col items-center text-center'>
                <h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#FFDD57]'>
                    35+
                </h1>
                <p className='text-xl md:text-2xl font-semibold'>
                Students
                </p>
            </div>

            {/* <div className='flex flex-col items-center text-center'>
                <h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#FFDD57]'>
                    35K+
                </h1>
                <p className='text-xl md:text-2xl font-semibold'>
                    Students
                </p>
            </div> */}
        </div>
    );
}

export default Strip;

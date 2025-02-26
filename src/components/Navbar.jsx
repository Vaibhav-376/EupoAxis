import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="p-4 sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center">

                <div className="text-white flex text-4xl font-extrabold">
                    Eupra<span className='text-[#FFDD57]'>Axis</span>
                </div>


                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-white focus:outline-none"
                >
                    <svg
                        className="w-8 h-8 transition-all duration-300 transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>

                {/* Desktop Menu */}
                <div
                    className={`lg:flex space-x-10 ${isMenuOpen ? 'flex flex-col items-center space-y-6 mt-4' : 'hidden'} lg:block transition-all duration-300 ease-in-out`}>
                    <Link
                        to={'#'}
                        className="text-white font-bold text-lg hover:text-[#525FE1] transition-all duration-300"
                    >
                        Home
                    </Link>
                    <Link
                        to={'#'}
                        className="text-white font-bold text-lg hover:text-[#525FE1] transition-all duration-300"
                    >
                        About Us
                    </Link>
                    <Link
                        to={'#'}
                        className="text-white font-bold text-lg hover:text-[#525FE1] transition-all duration-300"
                    >
                        Our Strength
                    </Link>
                    <Link
                        to={'#'}
                        className="text-white font-bold text-lg hover:text-[#525FE1] transition-all duration-300"
                    >
                        Our Services
                    </Link>
                    <Link
                        to={'#'}
                        className="text-white font-bold text-lg hover:text-[#525FE1] transition-all duration-300"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

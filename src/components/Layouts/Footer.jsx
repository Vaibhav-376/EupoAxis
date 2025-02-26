import React from 'react';

const Footer = () => {
  return (
    <section className="py-12 text-white bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between items-center">

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="font-bold text-[#FFDD57] text-4xl mb-4">EuroAxis</h2>
            <p className="text-sm leading-relaxed mr-10">
            Our educational website stands out by offering a personalized learning experience that adapts to each student's unique needs, ensuring maximum engagement and progress. 
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0 ">
            <h3 className="font-semibold text-lg text-[#FFDD57] mb-3">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-sm hover:text-[#FFDD57]">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-[#FFDD57]">Services</a></li>
              <li><a href="#" className="text-sm hover:text-[#FFDD57]">Contact</a></li>
              <li><a href="#" className="text-sm hover:text-[#FFDD57]">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 ">
            <h3 className="font-semibold text-lg text-[#FFDD57] mb-3">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-xl hover:text-[#FFDD57]"><i className="fab fa-facebook">Facebook</i></a>
              <a href="#" className="text-xl hover:text-[#FFDD57]"><i className="fab fa-twitter">X</i></a>
              <a href="#" className="text-xl hover:text-[#FFDD57]"><i className="fab fa-instagram">Instagram</i></a>
              <a href="#" className="text-xl hover:text-[#FFDD57]"><i className="fab fa-linkedin">Linkedin</i></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} SIAC. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

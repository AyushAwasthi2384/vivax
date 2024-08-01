import React from 'react';
import './marquee.css'
import { PiStarFourFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="bg-yellow-500 text-black text-center py-2 overflow-hidden" style={{ boxShadow: '0px 140px 1000px yellow' }}>
        <div className="flex animate-marquee whitespace-nowrap">
          <span className="text-6xl mr-8">REDIFINE THE IMPOSSIBLE</span>
          <span className="text-4xl mr-8 my-auto text-white"><PiStarFourFill /></span>
          <span className="text-6xl mr-8">REDIFINE THE IMPOSSIBLE</span>
          <span className="text-4xl mr-8 my-auto text-white"><PiStarFourFill /></span>
          <span className="text-6xl mr-8">REDIFINE THE IMPOSSIBLE</span>
          <span className="text-4xl mr-8 my-auto text-white"><PiStarFourFill /></span>
          <span className="text-6xl mr-8">REDIFINE THE IMPOSSIBLE</span>
          <span className="text-4xl mr-8 my-auto text-white"><PiStarFourFill /></span>
          <span className="text-6xl mr-8">REDIFINE THE IMPOSSIBLE</span>
        </div>
      </div>
      <div className=' text-center m-0'>
        <h1 className='md:text-[20rem] md:text-[h-10rem] text-[5rem]' style={{ fontFamily: 'Monument Extended' }}>VIVAX</h1>
      </div>
      <div className="container mx-auto px-[2rem] text-[1.2rem] flex flex-col md:flex-row justify-between items-center mt-2">
        <div className="flex flex-col md:flex-row md:space-x-4 text-center md:text-left">
          <a href="https://www.linkedin.com" className="hover:text-yellow-500">LinkedIn</a>
          <a href="https://www.instagram.com" className="hover:text-yellow-500">Instagram</a>
          {/* <a href="https://www.twitter.com" className="hover:text-yellow-500">Twitter</a> */}
        </div>

        <div className="flex flex-col md:space-y-2 text-center md:text-right mt-4 md:mt-0">
          {/* <a href="/terms" className="hover:text-yellow-500">Terms & Conditions</a>
          <a href="/privacy" className="hover:text-yellow-500">Privacy Policy</a>
          <a href="/cookies" className="hover:text-yellow-500">Cookies Policy</a> */}
          &copy; 2024 Vivax. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

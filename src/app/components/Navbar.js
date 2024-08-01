"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '@/Assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-white p-[2rem] py-[1rem] flex m-1 items-center justify-between">
      <div className="flex items-center">
        <Image className='h-8 w-8 rounded-full mr-2' src={logo} alt="vivax logo" width={40} height={40} placeholder='blur'/>
        <span className="text-xl font-bold" style={{ fontFamily: 'Monument Extended', letterSpacing: '3px' }}>VIVAX</span>
      </div>
      <div className="hidden md:flex space-x-8">
        <a href="#about" className="hover:text-yellow-500">About Us</a>
        <a href="#projects" className="hover:text-yellow-500">Projects</a>
        <a href="#services" className="hover:text-yellow-500">Services</a>
        <a href="#contact" className="text-yellow-500">Lets Talk</a>
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full  text-white flex flex-col items-center space-y-4 p-4">
          <a href="#about" className="hover:text-yellow-500">About Us</a>
          <a href="#projects" className="hover:text-yellow-500">Projects</a>
          <a href="#services" className="hover:text-yellow-500">Services</a>
          <a href="#contact" className="text-yellow-500">Lets Talk</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

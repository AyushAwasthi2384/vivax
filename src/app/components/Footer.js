import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="bg-yellow-500 flex text-black justify-evenly py-2">
      <div> <span className='text-6xl'> DARE TO CHANGE</span></div>
      <div> <span className='text-6xl'> DARE TO CHANGE</span></div>

      </div>
      <div className=' text-center m-0'>
        <h1 className='md:text-[20rem] md:text-[h-10rem] text-[5rem] '>VIVAX</h1>
      </div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center mt-2">
        <div className="flex flex-col md:flex-row md:space-x-4 text-center md:text-left">
          <a href="https://www.linkedin.com" className="hover:text-yellow-500">LinkedIn</a>
          <a href="httpsx`://www.instagram.com" className="hover:text-yellow-500">Instagram</a>
          <a href="https://www.twitter.com" className="hover:text-yellow-500">Twitter</a>
        </div>
      
        <div className="flex flex-col md:space-y-2 text-center md:text-right mt-4 md:mt-0">
          <a href="/terms" className="hover:text-yellow-500">Terms & Conditions</a>
          <a href="/privacy" className="hover:text-yellow-500">Privacy Policy</a>
          <a href="/cookies" className="hover:text-yellow-500">Cookies Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
